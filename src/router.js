import * as el from './elements.js'

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  } 

  route = (event) => {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }

  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname] 
  
    switch(pathname) {
      case '/':
        document.body.style.backgroundImage = 'url(./assets/mountains-universe-1.png)'
        el.btnHome.classList.add('active')
        el.btnUniverse.classList.remove('active')
        el.btnExplorer.classList.remove('active')
        break;
      case '/universe':
        document.body.style.backgroundImage = 'url(./assets/mountains-universe02.png)'
        el.btnUniverse.classList.add('active')
        el.btnHome.classList.remove('active')
        el.btnExplorer.classList.remove('active')
        break
      case '/explorer':
        document.body.style.backgroundImage = 'url(./assets/mountains-universe-3.png)'
        el.btnExplorer.classList.add('active')
        el.btnHome.classList.remove('active')
        el.btnUniverse.classList.remove('active')
        break
      default:
      break
    }
  
    fetch(route)
    .then(data => data.text())
    .then(html => {el.pages.innerHTML = html})
  }
}