import { ref, defineComponent } from 'vue'
import debounce from 'lodash.debounce'

interface DevToArticle {
  title: string
  url: string
  created_at: string
  description: string
}

export const ArticleSearch = defineComponent({
  props: {
    username: String
  },
  setup() {
    const query = ref('')
    const articles = ref<DevToArticle[]>([])
    const fetchArticles = debounce(async (tag: string) => {
      const resp = await fetch(`https://dev.to/api/articles?tag=${tag}`)
      const data = await resp.json()

      articles.value = data
    }, 350)

    function onSubmit(evt: SubmitEvent) {
      evt.preventDefault()
    }
    function onInput(evt: Event) {
      const target = evt.target as HTMLInputElement

      fetchArticles(target.value)
    }

    return {
      query,
      articles,
      onSubmit,
      onInput
    }
  }
})
