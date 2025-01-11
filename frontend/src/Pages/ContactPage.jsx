import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from '../Components/Contact/ContactHero'
import NavBar from '../Components/NavBar/NavBar'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Fica Ad Innovations",
    "url": "https://ficaads.com/contact",
    "description": "Get in touch with Fica Ad Innovations. Reach out for inquiries, support, or partnerships through our contact page.",
    "publisher": {
      "@type": "Organization",
      "name": "Fica Ad Innovations",
      "url": "https://ficaads.com",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "hello@ficaads.com", 
    }
  };

  return (
    <div className=''>
      <Helmet>
        <title>Contact Us - Fica Ad Innovations</title>
        <meta
          name="description"
          content="Get in touch with Fica Ad Innovations. Reach out for inquiries, support, or partnerships through our contact page."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      
        <NavBar />
        <ContactHero />
    </div>
  )
}

export default ContactPage