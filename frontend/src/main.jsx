import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home/Home';
import Notes from './components/Notes/Notes';
import AboutUs from './components/About-Us/AboutUs';
import Jobs from './components/Jobs/Jobs';
import UserProfile from './components/User-Profile/UserProfile';
import FreeMock from './components/FreeMock/FreeMock';
import MockAssessment from './components/FreeMock/MockAssessment';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='notes' element={<Notes />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='jobs' element={<Jobs />} />
      <Route path='user-profile' element={<UserProfile />} />
      <Route path='free-mock' element={<FreeMock />} />
      <Route path='mock-assessment' element={<MockAssessment />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
