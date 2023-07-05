import React, { useState } from 'react';
import Head from 'next/head';

const IndexPage = () => {
  const [isLogoHovered, setLogoHovered] = useState(false);

  const linkStyle = {
    color: isLogoHovered ? 'orange' : 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const handleLogoMouseEnter = () => {
    setLogoHovered(true);
  };

  const handleLogoMouseLeave = () => {
    setLogoHovered(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Head>
        <title>KIMBLE.SHOP</title>
        <meta name="description" content="Welcome to KIMBLE.SHOP - Your source for collectibles and rare items" />
      </Head>
      <div style={{ textAlign: 'center' }}>
        <a href="https://www.ebay.com.au/usr/kimble.shop">
          <img
            src="/logo.png"
            alt="Kimble.shop Logo"
            style={{
              width: '200px',
              height: '200px',
              transform: isLogoHovered ? 'rotate(360deg)' : 'rotate(0deg)',
              transition: 'transform 1s ease',
            }}
            onMouseEnter={handleLogoMouseEnter}
            onMouseLeave={handleLogoMouseLeave}
          />
        </a>
        <h1 style={{ marginTop: '20px' }}>
          <a href="https://www.ebay.com.au/usr/kimble.shop" style={linkStyle}>
            KIMBLE.SHOP
          </a>
        </h1>
      </div>
    </div>
  );
};

export default IndexPage;
