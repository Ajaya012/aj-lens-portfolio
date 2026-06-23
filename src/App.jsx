import { useState } from "react";
import marbleBg from "./assets/background1.png";
import logo from "./assets/aj-lens-logo1.png";

function App() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [showFoodGallery, setShowFoodGallery] = useState(false);
  const [showPortraitGallery, setShowPortraitGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const videos = [
  "/videos/Sunset.mp4",
  "/videos/Tahoe.mp4",
  "/videos/Beach.mp4",
  "/videos/Chicago.mp4",
  "/videos/Lake.mp4",
  ];
  const foodImages = [
  "/images/products-food/IMG1.JPG",
  "/images/products-food/IMG2.JPG",
  "/images/products-food/IMG3.JPG",
  "/images/products-food/IMG4.JPG",
  "/images/products-food/IMG5.JPG",
  "/images/products-food/IMG6.JPG",
  "/images/products-food/IMG7.JPG",
  ];
  const portraitImages = [
  "/images/portraits/portrait1.JPG",
  "/images/portraits/portrait2.JPG",
  "/images/portraits/portrait3.JPG",
  "/images/portraits/portrait4.JPG",
  "/images/portraits/portrait5.JPG",
  "/images/portraits/portrait6.JPG",
  "/images/portraits/portrait7.JPG",
  "/images/portraits/portrait8.JPG",
  ];
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">A J&nbsp;&nbsp;L E N S</div>
        <ul>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </nav>

      {/* HERO */}
      <section id="home"
        className="hero"
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <img
            src={logo}
            alt="AJ Lens"
            className="hero-logo"
          />

          <p className="small-title">
            CAPTURING
          </p>

          <h1>
            TIMELESS
            <br />
            STORIES
          </h1>

          <p className="hero-subtitle">
            Photography & Videography
          </p>

          <div className="buttons">
            <a href="#portfolio">
              View Portfolio
            </a>

            <button
              className="secondary"
              onClick={() => setShowInquiryForm(true)}
            >
              Book Session
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section  id="portfolio" className="featured">
        <p className="section-tag">
          PORTFOLIO
        </p>

        <h2>
          Featured Work
        </h2>

        <div className="gallery">
          <div
            className="gallery-item"
            onClick={() => setShowVideoGallery(true)}
          >
            <img
              src="/images/videography-cover.png"
              alt="Videography"
            />

            <h3>Videography</h3>
            <p>Cinematic Films & Reels</p>
          </div>

          <div
            className="gallery-item"
            onClick={() => setShowPortraitGallery(true)}
          >
            <img
              src="/images/portrait.jpg"
              alt="Portrait"
            />

            <h3>Portrait</h3>

            <p>Capturing Personalities</p>
          </div>

          <div
            className="gallery-item"
            onClick={() => setShowFoodGallery(true)}
          >
            <img
              src="/images/food.jpg"
              alt="Products & Food"
            />

            <h3>Products & Food</h3>

            <p>
              Food Styling, Branding & Commercial Photography
            </p>
          </div>

          <div className="gallery-item">
            <img
              src="/images/event.jpg"
              alt="Event"
            />
            <h3>Events</h3>
            <p>Moments That Matter</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <p className="section-tag">ABOUT AJ LENS</p>

        <div className="about-layout">

          <div className="about-left">
            <h2>Every Click Tells a Story.</h2>

            <div className="about-content">
              <p>
                AJ Lens is where creativity meets storytelling. Every photo and video
                is crafted to capture authentic moments, genuine emotions, and the
                details that make each experience unique.
              </p>

              <p>
                Whether it's a portrait session, an event, food photography, or a
                cinematic video, my focus is always on creating visuals that feel
                natural, timeless, and meaningful.
              </p>

              <p>
                Through AJ Lens, I aim to transform everyday moments into memorable
                experiences that people can revisit and cherish for years to come.
              </p>
            </div>
          </div>

          <div className="about-right">

            <div className="highlight-card">
              <h3>📸 Photography</h3>
              <p>Portraits, Lifestyle, Events & Creative Shoots</p>
            </div>

            <div className="highlight-card">
              <h3>🎥 Videography</h3>
              <p>Cinematic Reels, Travel Films & Storytelling</p>
            </div>

            <div className="highlight-card">
              <h3>✨ Creative Vision</h3>
              <p>Focused on emotion, detail and visual storytelling</p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">

        <p className="section-tag">SERVICES & PRICING</p>

        <h2>Packages Designed Around Your Story</h2>

        <p className="services-intro">
          Transparent pricing designed to make professional storytelling
          accessible. Each package is tailored to preserve your genuine moments.
        </p>

        <div className="services-grid">

          <div className="service-card">
            <span>01</span>
            <h3>Mini Moments</h3>
            <p>30 minutes • 10 edited photos</p>
            <p>
              Perfect for quick portraits, social media content,
              and personal branding.
            </p>
            <h4>$75</h4>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>Signature Portraits</h3>
            <p>60 minutes • 25 edited photos</p>
            <p>
              Ideal for portraits, graduation sessions,
              and lifestyle photography.
            </p>
            <h4>$150</h4>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Friends & Couples</h3>
            <p>60–75 minutes • 30 edited photos</p>
            <p>
              Candid storytelling sessions for couples,
              friends, and meaningful connections.
            </p>
            <h4>$200</h4>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Pet Portraits</h3>
            <p>45 minutes • 15 edited photos</p>
            <p>
              Capture your furry companions with natural,
              personality-filled portraits.
            </p>
            <h4>$125</h4>
          </div>

          <div className="service-card">
            <span>05</span>
            <h3>Celebration Stories</h3>
            <p>Custom timing</p>
            <p>
              Birthdays, proposals, intimate celebrations,
              and family gatherings.
            </p>
            <h4>From $250</h4>
          </div>

          <div className="service-card">
            <span>06</span>
            <h3>Sunset & Coastal Sessions</h3>
            <p>Location based</p>
            <p>
              Tampa beaches, golden hour sessions,
              coastal portraits, and creative storytelling.
            </p>
            <h4>Custom</h4>
          </div>

          <div className="service-card">
            <span>07</span>
            <h3>Food & Brand Photography</h3>
            <p>Custom timing</p>
            <p>
              Restaurant content, menu photography,
              and social media branding.
            </p>
            <h4>From $100</h4>
          </div>

          <div className="service-card">
            <span>08</span>
            <h3>Cinematic Videography</h3>
            <p>Custom timing</p>
            <p>
              Travel films, cinematic reels,
              lifestyle videos, and event highlights.
            </p>
            <h4>From $200</h4>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <p className="section-tag">GET IN TOUCH</p>

        <h2>
          Let's Create
          <br />
          Something Timeless
        </h2>

        <p className="contact-intro">
          Whether you're looking for portraits,
          events, food photography, or cinematic
          storytelling, I'd love to hear your vision.
        </p>

        <div className="contact-links">

          <a
            href="mailto:ajlens045@gmail.com"
            className="contact-pill"
          >
            📧 Email: ajlens045@gmail.com
          </a>

          <a
            href="https://www.instagram.com/ajlen_s/"
            target="_blank"
            rel="noreferrer"
            className="contact-pill"
          >
            📸 Instagram: @ajlen_s
          </a>

        </div>
      </section>
      <footer className="footer">
        <h3>AJ Lens</h3>

        <p>Photography & Videography</p>

        <p>
          © 2025 AJ Lens. All Rights Reserved.
        </p>
      </footer>
      {showVideoGallery && (
      <div
        className="video-modal"
        onClick={() => setShowVideoGallery(false)}
      >
        <div
          className="video-gallery-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-btn"
            onClick={() => setShowVideoGallery(false)}
          >
            x
          </button>

          <h2>Videography</h2>

          <div className="video-gallery-grid">
            {videos.map((video, index) => (
              <video
                key={index}
                controls
                className="gallery-popup-video"
              >
                <source src={video} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      </div>
    )}
    {showFoodGallery && (
      <div
        className="video-modal"
        onClick={() => setShowFoodGallery(false)}
      >
        <div
          className="video-gallery-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-btn"
            onClick={() => setShowFoodGallery(false)}
          >
            x
          </button>

          <h2>Products & Food</h2>

          <div className="food-gallery-grid">
            {foodImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Food ${index}`}
                className="food-gallery-image"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      </div>
    )}
    {showPortraitGallery && (
      <div
        className="video-modal"
        onClick={() => setShowPortraitGallery(false)}
      >
        <div
          className="video-gallery-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-btn"
            onClick={() => setShowPortraitGallery(false)}
          >
            x
          </button>

          <h2>Portraits</h2>

          <div className="food-gallery-grid">
            {portraitImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Portrait ${index + 1}`}
                className="food-gallery-image"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      </div>
    )}
    {selectedImage && (
      <div
        className="image-preview-overlay"
        onClick={() => setSelectedImage(null)}
      >
        <img
          src={selectedImage}
          alt="Preview"
          className="image-preview"
        />
      </div>
    )}
    {showInquiryForm && (
      <div
        className="modal-overlay"
        onClick={() => setShowInquiryForm(false)}
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-btn"
            onClick={() => setShowInquiryForm(false)}
          >
            ×
          </button>

          <h2>Book Your Session</h2>

          <form
            action="https://formspree.io/f/mojzbrnk"
            method="POST"
            className="inquiry-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <select name="service" required>
              <option value="">Select Service</option>
              <option>Portrait Photography</option>
              <option>Event Photography</option>
              <option>Food Photography</option>
              <option>Cinematic Videography</option>
              <option>Sunset Session</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
            />

            <button type="submit" className="submit-btn">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    )}
    </>
  );
}

export default App;