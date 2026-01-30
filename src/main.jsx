import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx';
import AlertButton from './AlertButton/AlertButton.jsx';
import Footer from './Footer/Footer.jsx';
import Navbar from './Navbar/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <AlertButton text="Tekan Aku" message="Halo, ini pesan dari AlertButton!" />
    <Footer />
    <Layout />
  </StrictMode>
)
