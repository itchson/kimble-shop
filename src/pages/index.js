import React, { useState } from 'react';
import Head from 'next/head';

const IndexPage = () => {
  const [isLogoHovered, setLogoHovered] = useState(false);

  const handleLogoMouseEnter = () => {
    setLogoHovered(true);
  };

  const handleLogoMouseLeave = () => {
    setLogoHovered(false);
  };

  const linkStyle = {
    color: isLogoHovered ? 'yellow' : 'orange',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const currentYear = new Date().getFullYear();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Head>
        <title>KIMBLE.SHOP - Antiques and Collectables</title>
        <meta name="description" content="Welcome to KIMBLE.SHOP, a family-owned eBay store based in Brisbane, Australia, specializing in antiques and collectables. We offer a diverse range of authentic collectables, including sports and Pokémon trading cards, vintage toys, rare coins & notes, board games, art pieces, and jewelry. Secure shipping, accurate descriptions, and top-notch customer service. Start your collecting journey with KIMBLE.SHOP today." />
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
              margin: '0 auto',
            }}
            onMouseEnter={handleLogoMouseEnter}
            onMouseLeave={handleLogoMouseLeave}
          />
        </a>
        <h1 style={{ marginTop: '20px' }}>
          <a href="https://www.ebay.com.au/usr/kimble.shop" style={{ ...linkStyle, textDecoration: 'none' }} onMouseEnter={handleLogoMouseEnter} onMouseLeave={handleLogoMouseLeave}>
            KIMBLE.SHOP
          </a>
        </h1>
        <h2>Antiques and Collectables</h2>
        <p style={{ color: 'white', width: '600px', margin: '20px auto', padding: '5px', textAlign: 'left' }}>
          Welcome to{' '}
          <a href="https://www.ebay.com.au/usr/kimble.shop" style={{ ...linkStyle }} onMouseEnter={handleLogoMouseEnter} onMouseLeave={handleLogoMouseLeave}>
            KIMBLE.SHOP
          </a>
          , a family-owned eBay store based in Brisbane, Australia, specializing in antiques and collectables. We provide a
 diverse range of collectables, including sports and Pokémon trading cards, vintage toys, rare coins & notes, board games, art pieces, and jewelry. Every item in our collection is authentic, thoroughly quality-checked, and a unique piece of history ready to be added to your collection. We ensure secure and swift shipping, accurate item descriptions, and prioritize top-notch customer service. Feedback from our valued customers fuels our continuous improvement. Embark on your unique collecting journey with{' '}
          <a href="https://www.ebay.com.au/usr/kimble.shop" style={{ ...linkStyle }} onMouseEnter={handleLogoMouseEnter} onMouseLeave={handleLogoMouseLeave}>
            KIMBLE.SHOP
          </a>{' '}
          today.
        </p>
        <p style={{ color: 'gray', marginTop: '50px' }}>
          &copy; {currentYear} KIMBLE.SHOP. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
