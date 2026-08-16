function App() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    'Home',
    'About Us',
    'Products',
    'Services',
    'Certifications',
    'Contact Us',
  ];

  const productCards = [
    {
      image: '/images/flat-machine.jpeg.jpeg',
      title: 'Press Parts',
      description: 'Manufactures of press parts, tools, dies, press and assembly components.',
    },
    {
      image: '/images/stamping-die.png.png',
      title: 'Custom Tools & Dies',
      description: 'Custom tools & dies, design engineering, and reliable fabrication support.',
    },
    {
      image: '/images/metal-detector.png.png',
      title: 'Press Parts',
      description: 'Custom tools & dies design, fabrication, and precision assembly solutions.',
    },
  ];

  return (
    <div className="page-shell">
      <div className="site-shell">
        <header className="topbar">
          <div className="brand" aria-label="Gumate Industries brand">
            <div className="brand-mark" aria-hidden="true">
              <span>GI</span>
            </div>
            <div className="brand-text">
              <span className="brand-title">GUMATE</span>
              <span className="brand-subtitle">INDUSTRIES</span>
            </div>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        <main>
          <section className="hero-banner" id="home">
            <div className="hero-copy">
              <h1>
                GUMATE INDUSTRIES:
                <span>Your Trusted Manufacturing Partner</span>
              </h1>

              <ul className="feature-list">
                <li>Precision Press Parts</li>
                <li>Custom Tools &amp; Dies</li>
                <li>Expert Design Engineering</li>
                <li>Efficient Assembly Solutions</li>
              </ul>
            </div>

            <div className="hero-media" aria-label="Manufacturing floor image">
              <div className="iso-badge">ISO-9001:2015</div>
              <img src="/images/workstation.png.png" alt="Manufacturing workshop" />
            </div>
          </section>

          <section className="products-section" id="products">
            <h2>Featured Products</h2>

            <div className="product-grid">
              {productCards.map((card, index) => (
                <article className="product-card" key={`${card.title}-${index}`}>
                  <div className="product-image-wrap">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="product-copy">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-contact">
            <p>
              Sagar S. Gumate | Mob : 7387241112
              <br />
              Plot No.1, Gatha Mandir By-Pass Road, Rasai Industrial Estate, Vitthal Nagar, Dehu,
              Pune - 412109
              <br />
              E-mail : gumateindustries@gmail.com
            </p>
          </div>

          <div className="footer-brand" aria-label="Gumate Industries logo mark">
            <div className="footer-brand-mark">GI</div>
            <p>GSTIN No : 27AQGPG9141C1Z2</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
