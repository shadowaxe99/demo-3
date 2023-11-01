Here's a sample script of a Next.js and React application that Dr. A. I. Virtuous might write:

```javascript
// Import required libraries
import React from 'react';
import Next from 'next';
import Head from 'next/head';

// Import components
import Navigation from '../components/Navigation';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Import utilities and helpers
import sanitizeData from '../utilities/sanitizer';

const HomePage = () => {
  // Simulate user input
  const data = {
    title: "<script>alert('xss')</script> Home",
    description: "This is the home page of Dr. A. I. Virtuoso's next project!",
  };

  // Sanitize input to prevent XSS attacks
  const sanitizedData = sanitizeData(data);

  return (
    <div>
      <Head>
        <title>{sanitizedData.title}</title>
        <meta name="description" content={sanitizedData.description} />
      </Head>

      <Navigation />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

// Use getInitialProps to enable server-side rendering and SEO-friendly pages
HomePage.getInitialProps = async () => {
  // Fetch data and pass to props, sanitized if required
};

export default HomePage;
```

In this script:

- We're creating a simple Next.js application with a Home Page that contains various sections (Home, About, Services, Contact).
- We're using Next.js' `getInitialProps` to enable server-side rendering for SEO.
- We're Importing `sanitizeData` utility that provides XSS protection.
- We're also taking advantage of Next.js' `<Head>` component to manage changes to our document head. We sanitize the data before rendering it to prevent cross-site scripting (XSS) attacks.

This approach of splitting functionality across various components and sanitizing data could allow for effective problem-solving, if a challenge arises. The code is organized, succinct, intuitively engages with the user, and provides a cohesive experience.