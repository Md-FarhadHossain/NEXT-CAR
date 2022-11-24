import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/HomePage/Home/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Main from '../utilities/Main'
import Blog from '../pages/Blog/Blog.jsx'
import CarBrandCategory from '../pages/CategoryPage/CarBrandCategory/CarBrandCategory'
import { async } from '@firebase/util'
import axios from 'axios'
import Dashbord from '../pages/DashbordLayout/Dashbord/Dashbord'
import DashbordData from '../pages/DashbordLayout/DashbordData/DashbordData'
import AddAProduct from '../pages/DashbordLayout/AddAProduct/AddAProduct'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/signup',
                    element: <Signup />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/blog',
                    element: <Blog />
                },
                {
                    path: '/category/:id',
                    element: <CarBrandCategory />,
                    loader: async ({params}) => axios(`http://localhost:5000/category-car?brand=${params.id}`)
                }
            ]
        },
        {
            path: '/dashbord',
            element: <Dashbord />,
            children: [
                {
                    path: '/dashbord',
                    element: <DashbordData />
                },
                {
                    path: 'add-a-product',
                    element: <AddAProduct />
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}>Routes</RouterProvider>
  )
}

export default Routes