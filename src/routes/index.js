import Home from '../components/Home'
import Explore from '../components/Explore'
import Notifications from '../components/Notifications'
import Messages from '../components/Messages'
import Bookmarks from '../components/Bookmarks'
import Profile from '../components/Profile'
import Settings from '../components/Settings'

const routes = [
  { path: '/', component: Home },
  { path: '/explore', component: Explore },
  { path: '/notifications', component: Notifications },
  { path: '/messages', component: Messages },
  { path: '/bookmarks', component: Bookmarks },
  { path: '/profile', component: Profile },
  { path: '/settings', component: Settings }
]

export default routes
