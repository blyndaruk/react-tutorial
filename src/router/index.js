import Home from '../pages/Home';
import About from '../pages/About';
import PostsPage from '../pages/Posts';
import PostPage from '../pages/PostPage';
import Error from '../pages/Error';
import Login from '../pages/Login';

export const privateRoutes = [
  { path: '/', component: <Home/>, exact: true },
  { path: '/posts', component: <PostsPage/>, exact: true },
  { path: '/posts/:id', component: <PostPage/>, exact: true },
  { path: '/about', component: <About/>, exact: true },
  { path: '/error', component: <Error/>, exact: true },
]
export const publicRoutes = [
  { path: '/', component: <Home/>, exact: true },
  { path: '/about', component: <About/>, exact: true },
  { path: '/login', component: <Login/>, exact: true },
  { path: '/error', component: <Error/>, exact: true },
]
