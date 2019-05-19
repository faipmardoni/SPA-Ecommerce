import { routes } from './config/constants'
import Home from './pages/home'
import Detail from './pages/detail'

const { root, detail } = routes

export default [
  {
    path: root,
    component: Home,
    exact: true,
  },
  {
    path: detail,
    component: Detail,
    exact: true,
  },
  {
    component: Error,
  },
]
