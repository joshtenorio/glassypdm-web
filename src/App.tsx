import './index.css'
import { ThemeProvider } from '@/components/theme-provider'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom"
import Home from './routes/Home'
import SignIn from './routes/SignIn'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      }
    ]
  }
])

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

function App() {
  return (
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
  )
}

export default App
