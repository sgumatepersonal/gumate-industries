import SectionHeader from './components/SectionHeader';
import { navigation, stats, capabilities, workItems } from './data/siteData';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand" aria-label="Gumate Industries brand">
            <div className="brand-mark">GI</div>
            <div>
              <span className="brand-name">Gumate Industries</span>
              <small>Precision Sheet Metal &amp; Engineering</small>
            </div>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Approved vendor manufacturing partner</p>
              <h1>Reliable engineering solutions for sheet metal and welding assemblies.</h1>
              <p className="lead">
                Gumate Industries manufactures precision sheet metal components, press tools,
                and custom engineering solutions for leading industrial and automotive clients.
              </p>

              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">
                  Request a quote
                </a>
                <a className="btn btn-secondary" href="#capabilities">
                  Explore capabilities
                </a>
              </div>

              <ul className="stats">
                {stats.map((item) => (
                  <li key={item.value}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-panel" aria-label="Company overview card">
              <div className="panel-box">
                <span className="label">Company profile</span>
                <h2>M/S GUMATE INDUSTRIES</h2>
                <ul>
                  <li>
                    <strong>Regd. Office / Mfg. Unit:</strong> Plot No. 1, Gatha Mandir Bypass Road,
                    Rasai Industrial Estate, Dehu, Pune 412109
                  </li>
                  <li>
                    <strong>Contact:</strong> +91 7387241112
                  </li>
                  <li>
                    <strong>Email:</strong> gumateindustries@gmail.com
                  </li>
                  <li>
                    <strong>GSTIN:</strong> 27AQGPG9141C1Z2
                  </li>
                  <li>
                    <strong>PAN:</strong> AQGPG9141C
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section light-section">
          <SectionHeader eyebrow="About us" title="Built on quality, trust, and engineering discipline." />

          <div className="container about-grid">
            <div>
              <p>
                We are a quality-driven manufacturer of sheet metal components and welding
                assemblies, supplying directly and indirectly to well-known automobile and industrial
                clients.
              </p>
              <p>
                Our mission is to establish a strong identity in the sheet metal industry as a trusted
                service provider committed to high quality, on-time delivery, and cost-effective
                engineering solutions.
              </p>
            </div>

            <div className="value-boxes">
              <div className="value-item">
                <span>Integrity</span>
                <p>Flexible processes and trust-based relationships with every client.</p>
              </div>
              <div className="value-item">
                <span>Accuracy</span>
                <p>Balanced speed with 100% accuracy and disciplined quality control.</p>
              </div>
              <div className="value-item">
                <span>Leadership</span>
                <p>Diverse talent, motivated teams, and continuous improvement culture.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section">
          <SectionHeader
            eyebrow="Capabilities"
            title="Engineering capabilities designed for precision manufacturing."
          />

          <div className="container cards-grid">
            {capabilities.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section light-section">
          <SectionHeader eyebrow="Our work" title="Earlier work and manufacturing execution." dark />

          <div className="container gallery-grid">
            {workItems.map((item) => (
              <article key={item.title} className="work-card">
                <img src={item.image} alt={item.title} />
                <div className="work-card-copy">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section callout">
          <div className="container callout-inner">
            <div>
              <p className="eyebrow dark">Our promise</p>
              <h2>Committed to 100% client satisfaction.</h2>
            </div>
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Let’s build a dependable manufacturing partnership.</h2>
              <p>
                We are ready to support your business with quality-focused manufacturing, dependable
                delivery, and flexible engineering support for custom industrial needs.
              </p>

              <div className="contact-detail">
                <strong>Registered Address</strong>
                <p>
                  Plot No. 1, Gatha Mandir Bypass Road, Rasai Industrial Estate, Vitthal Nagar, Dehu,
                  Pune 412109
                </p>
              </div>
              <div className="contact-detail">
                <strong>Contact Person</strong>
                <p>Sagar Gumate</p>
                <p>Cell No. +91 7387241112</p>
              </div>
              <div className="contact-detail">
                <strong>Email</strong>
                <p>gumateindustries@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <h3>Quick company details</h3>
              <ul>
                <li>
                  <span>Status:</span> Small Scale
                </li>
                <li>
                  <span>Area:</span> 2500 Sq.ft.
                </li>
                <li>
                  <span>Shop Act Registration:</span> Chinchwad, dated 25/06/2013
                </li>
                <li>
                  <span>GSTIN:</span> 27AQGPG9141C1Z2
                </li>
                <li>
                  <span>Udyog Aadhar:</span> 746500367346
                </li>
                <li>
                  <span>Bank:</span> Canara Bank, Chikhali
                </li>
                <li>
                  <span>Working Shift:</span> General
                </li>
                <li>
                  <span>Weekly Off:</span> Thursday
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© {currentYear} Gumate Industries. All rights reserved.</p>
          <p>Precision Sheet Metal Components &amp; Welding Assemblies</p>
        </div>
      </footer>
    </>
  );
}

export default App;
