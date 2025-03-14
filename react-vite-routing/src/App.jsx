import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobLayout from './layout/JobLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetail, { jobsDetailLoader } from './components/JobDetail'
import Error from './components/Error'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout></RootLayout>}>
        <Route index element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />}></Route>
          <Route path='form' element={<ContactForm />}></Route>
        </Route>
        <Route path='jobs' element={<JobLayout />} errorElement={<Error />} >
          <Route index element={<Jobs />} loader={jobsLoader}></Route>
          <Route path=':id' element={<JobDetail />} loader={jobsDetailLoader} ></Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App