import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import FAQ from './components/FAQ/FAQ.tsx';
import Welcome from './components/Home/Welcome.tsx';
import OurStory from './components/OurStory/OurStory.tsx';
import RSVP from './components/RSVP/RSVP.tsx';
import TravelStay from './components/TavelStay/TravelStay.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome/>,
      },
      {
        path: "/zach-sienna-wedding",
        element: <Welcome/>,
      },
      {
        path: "/ceremony-reception",
        element: <Welcome/>,
      },
      {
        path: "/our-story",
        element: <OurStory />,
      },
      {
        path: "/travel-stay",
        element: <TravelStay />,
      },
      {
        path: "/registry",
        element: <RSVP />,
      },
      {
        path: "/faqs",
        element: <FAQ />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
