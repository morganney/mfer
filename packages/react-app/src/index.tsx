import { createRoot } from 'react-dom/client'

import { ArticleSearch } from './articleSearch'

const rootEl = document.getElementById('react-app') as HTMLElement
const root = createRoot(rootEl)

root.render(<ArticleSearch username="Morgan" />)
