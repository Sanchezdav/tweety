import Home from '@/views/Home'
import Explore from '@/views/Explore'
import Notifications from '@/views/Notifications'
import Messages from '@/views/Messages'
import Bookmarks from '@/views/Bookmarks'
import Profile from '@/views/Profile'
import Settings from '@/views/Settings'

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
