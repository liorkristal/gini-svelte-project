import './app.css'
import FormPage from './pages/FormPage.svelte'

const app = new FormPage({
  target: document.getElementById('app')!,
})

export default app
