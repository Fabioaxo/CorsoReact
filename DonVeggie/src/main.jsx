import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from  './pages/about.jsx'
import Recipes from './pages/home.jsx'
import RecipesChildren from './pages/ricepesChildren.jsx'
import { useParams } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/recipes",
    element: <App />,
  },
  {
    path: "/home",
    element: <Recipes />,
   
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "*",
    element: <h1>404</h1>,
  },
  {
    path: "/recipesChildren/:RecipesID",
    element: <RecipesChildren />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
