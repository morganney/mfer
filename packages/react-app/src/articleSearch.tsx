import { useCallback, useState, useMemo } from 'react'
import debounce from 'lodash.debounce'

import type { FC, ChangeEvent } from 'react'

interface ArticleSearchProps {
  username: string
}
interface DevToArticle {
  title: string
  url: string
  created_at: string
  description: string
}

const ArticleSearch: FC<ArticleSearchProps> = ({ username }) => {
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState<DevToArticle[]>([])
  const fetchArticles = useMemo(() => {
    return debounce(async (tag: string) => {
      const resp = await fetch(`https://dev.to/api/articles?tag=${tag}`)
      const data = await resp.json()

      setArticles(data)
    }, 350)
  }, [])
  const onChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setQuery(evt.target.value)
      fetchArticles(evt.target.value)
    },
    [fetchArticles]
  )

  return (
    <div>
      <p>Hello {username}, welcome to React!</p>
      <form onSubmit={evt => evt.preventDefault()}>
        <input value={query} placeholder="enter a topic (react)..." onChange={onChange} />
      </form>
      {query && (
        <ul>
          {articles.map(article => (
            <li key={article.created_at}>
              <article>
                <header>
                  <h2>
                    <a href={article.url}>{article.title}</a>
                  </h2>
                  <time>{new Date(article.created_at).toLocaleDateString()}</time>
                </header>
                <p>{article.description}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { ArticleSearch }
