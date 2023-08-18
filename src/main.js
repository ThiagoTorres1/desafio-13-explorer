import * as el from './elements.js'
import { Router } from './router.js'
const router = new Router()

el.btnHome.addEventListener('click', router.route)
el.btnUniverse.addEventListener('click', router.route)
el.btnExplorer.addEventListener('click', router.route)


router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explorer", "/pages/explorer.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()