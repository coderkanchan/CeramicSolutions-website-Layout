
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './Routes/About.jsx';
import Services from './Routes/Services.jsx';
import Portfolio from './Routes/Portfolio.jsx';
import ContactUs from './Routes/ContactUs.jsx';
import Showcase from './Routes/Showcase.jsx';
import TermsOfUse from './Routes/termsOfUse.jsx';
import PrivacyPolicy from './Routes/privacyPolicy.jsx';
import CookiePolicy from './Routes/cookiePolicy.jsx';
import TakeTour from './Routes/TakeTour.jsx';
import LiveChat from './Routes/LiveChat.jsx';
import Reveiws from './Routes/Reveiws.jsx';
import RequestAQoute from './Routes/RequestAQoute.jsx';
import AboutUs from './Routes/AboutUs.jsx';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact-Us' element={<ContactUs />} />
            <Route path='/showcase' element={<Showcase />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/terms-Of-Use' element={<TermsOfUse />} />
            <Route path='/privacy-Policy' element={<PrivacyPolicy />} />
            <Route path='/cookie-Policy' element={<CookiePolicy />} />
            <Route path='/take-Tour' element={<TakeTour />} />
            <Route path='/live-Chat' element={<LiveChat />} />
            <Route path='/reveiws' element={<Reveiws />} />
            <Route path='/request-A-qoute' element={<RequestAQoute />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
