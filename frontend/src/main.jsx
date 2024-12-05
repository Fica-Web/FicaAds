import { StrictMode } from 'react'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Provider } from "react-redux"
import NavBar from './Components/NavBar/NavBar.jsx'
import store from './store.js'
import Footer from './Components/Footer/Footer.jsx'
import { initGA, logPageView } from "./analytics.js";

// Initialize Google Analytics on app load
initGA();

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(); // Log page views on route changes
  }, [location]);

  return null;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AnalyticsTracker />
      <Provider store={store}>
        
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
