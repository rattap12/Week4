import { HomePage } from "./pages/home"
import { AdminPage } from "./pages/admin"
import { AboutPage } from "./pages/About"
import { ContactPage } from "./pages/Contact"

const routes = {
  '/': HomePage,
  '/admin': AdminPage,
  '/about': AboutPage,
  '/contact': ContactPage,
}

function render(){
  const path = location.hash.slice(1) || '/'
  const page = routes[path] || HomePage
  document.querySelector('#app').innerHTML = page()
}
window.addEventListener('hashchange', render)
render()
