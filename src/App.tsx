import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './components/Home';
import About from './components/About';
import VehicleModels from './components/VehicleModels';
import Testimonials from './components/Testimonials';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'vehicle-models', element: <VehicleModels /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'our-team', element: <OurTeam /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
