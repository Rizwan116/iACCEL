import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import Slider from './components/slider/SliderSection.jsx';
import Crousel from './components/crousel/Crousel.jsx';
import Data from './components/data/Data.jsx';
import News from './components/news/News.jsx';
import About from './components/about/About.jsx';
import Services from './components/services/Services.jsx';
import Media from './components/media/Media.jsx';
import Community from './components/community/Community.jsx';
import ContactUs from './components/contactus/ContactUs.jsx';
import Login from './components/login/Login.jsx';
import Discord from './components/discord/Discord.jsx';
import PrivacyAndPolicy from './components/privacyPolicy/PrivacyAndPolicy.jsx';
import TermsAndConditions from './components/termsAndConditions/TermsAndConditions.jsx';
import Github, { githubInfoLoader } from './components/github/Github.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Insight from './components/insight/Insight.jsx';
import NotFound from './components/Error/NotFount.jsx';
import { HelmetProvider } from "react-helmet-async";
import Page from './Page.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" element={<Layout />}>
      <Route index element={<Page title="Home"><Home /></Page>} />
      <Route path="home" element={<Page title="Home"><Home /></Page>} />
      <Route path="about" element={<Page title="About"><About /></Page>} />
      <Route path="services" element={<Page title="Services"><Services /></Page>} />
      <Route path="media" element={<Page title="Media"><Media /></Page>} />
      <Route path="community" element={<Page title="Community"><Community /></Page>} />
      <Route path="contactus" element={<Page title="Contact Us"><ContactUs /></Page>} />
      <Route path="login" element={<Page title="Login"><Login /></Page>} />
      <Route path="discord" element={<Page title="Discord"><Discord /></Page>} />
      <Route path="privacyPolicy" element={<Page title="Privacy Policy"><PrivacyAndPolicy /></Page>} />
      <Route path="termsAndConditions" element={<Page title="Terms & Conditions"><TermsAndConditions /></Page>} />
      <Route path="github" loader={githubInfoLoader} element={<Page title="Github"><Github /></Page>} />
      <Route path="insight" element={<Page title="Insight"><Insight /></Page>} />
      <Route path="signup" element={<Page title="Sign Up"><SignUp /></Page>} />

      {/* 404 */}
      <Route path="*" element={<Page title="404"><NotFound /></Page>} />
    </Route>,
  ),
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
