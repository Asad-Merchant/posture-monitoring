import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Monitor from './pages/Monitor.jsx'
import Layout from './Layout.jsx'

const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '',
                element: <App />,
                children: [
                    {path: '', element: <Home />},
                    {path: 'monitor', element: <Monitor />}
                ]
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
