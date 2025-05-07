import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/components/common/Layout';

// Pages
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Services from './assets/pages/Services';
import ServiceDetail from './assets/pages/ServiceDetail';
import Contact from './assets/pages/Contact';
import PrivacyPolicy from './assets/components/footer/PrivacyPolicy';
import TermsofService from './assets/components/footer/TermsOfService';
import CookiePolicy from './assets/components/footer/CookiePolicy';

// Error page
const ErrorPage = () => (
  <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
  </div>
);

// Define routes
const router = createHashRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '/services',
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
  },
  {
    path: '/services/:serviceId',
    element: (
      <Layout>
        <ServiceDetail />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: '/privacy',
    element: (
      <Layout>
        <PrivacyPolicy/>
      </Layout>
    ),
  },
  {
    path: '/terms',
    element: (
      <Layout>
        <TermsofService/>
      </Layout>
    ),
  },
  {
    path: '/cookies',
    element: (
      <Layout>
        <CookiePolicy/>
      </Layout>
    ),
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
