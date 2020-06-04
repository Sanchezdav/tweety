import MainContent from '@/components/MainContent'
import Home from '@/views/Home'
import Explore from '@/views/Explore'
import Notifications from '@/views/Notifications'
import Messages from '@/views/Messages'
import Bookmarks from '@/views/Bookmarks'
import Profile from '@/views/Profile'
import Settings from '@/views/Settings'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    component: MainContent,
    children: [
      { path: '', component: Home },
      { path: '/explore', component: Explore },
      { path: '/notifications', component: Notifications },
      { path: '/messages', component: Messages },
      { path: '/bookmarks', component: Bookmarks },
      { path: '/profile', component: Profile },
      { path: '/settings', component: Settings },
    ],
  },
  { path: '/sign_in', component: Signin },
  { path: '/sign_up', component: Signup },
  { path: '*', component: NotFound },
]

export default routes
