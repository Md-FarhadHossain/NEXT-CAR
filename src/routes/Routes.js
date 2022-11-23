import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/HomePage/Home/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Main from '../utilities/Main'

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
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}>Routes</RouterProvider>
  )
}

export default Routes