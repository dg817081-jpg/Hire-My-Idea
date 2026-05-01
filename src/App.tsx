import { useState, useEffect } from 'react'
import chicken from './assets/chicken.webp'
import addNutritionImage from './assets/addnutrition.jpeg'
import collageVideo from './assets/collage.mp4'
import cookies from './assets/cookies image.png'
import cutePearImage from './assets/cutepear.jpeg'
import fruits from './assets/fruits.jpg'
import milk from './assets/milk.webp'
import movingPinkNamesVideo from './assets/moving pink names.mp4'
import oliveLogo from './assets/olive logo.jpeg'
import pearVideo from './assets/pear.mp4'
import pearFamilyImage from './assets/pear family .png'
import motherson from './assets/motherson.webp'
import person1 from './assets/person1.webp'
import person2 from './assets/person2.jpg'
import person3 from './assets/person3.jpg'
import person4 from './assets/person4.jpg'
import transitionsVideo from './assets/slight transitions.mp4'
import veggies from './assets/veggies.webp'
import './App.css'

type NavItem = {
  label: string
  hasMenu?: boolean
}

type Review = {
  author: string
  copy: string
  positionClass: string
  avatar: string
}

const PRIMARY_NAV_ITEMS: readonly NavItem[] = [
  { label: 'Solutions', hasMenu: true },
  { label: 'Features' },
  { label: 'Pricing' },
  { label: 'Blog', hasMenu: true },
  { label: 'Restaurants' },
  { label: 'Food', hasMenu: true },
] as const

const FOOD_DATA = [
  {
    image: cookies,
    productImage: cookies,
    title: 'Larabar Chocolate Chip Cookie Dough Fruit & Nut Bar',
    brand: 'Larabar',
    score: 92,
    label: 'Excellent',
    dotColor: '#4CAF50',
    bgColor: '#f0f9f0',
    oliverSays: "This product, which includes ingredients like cashews and dates, scored well mainly because it doesn't contain processed sugars, harmful additives, or seed oils, making it a healthier choice for your family, especially as an occasional treat. The slight deduction for processing indicates it's not entirely raw, but it's still a good option that aligns with your goals of avoiding overly processed foods.",
    breakdown: [
      { label: 'Additives', value: 'None', status: 'good' },
      { label: 'Processed Sugars', value: 'None', status: 'good' },
      { label: 'Seed Oils', value: 'None', status: 'good' }
    ]
  },
  {
    image: chicken,
    productImage: chicken,
    title: 'Organic Chicken Breast, Boneless & Skinless',
    brand: 'Simple Truth Organic',
    score: 88,
    label: 'Great',
    dotColor: '#4CAF50',
    bgColor: '#f0f9f0',
    oliverSays: "This chicken is an excellent choice! It's organic, free from antibiotics, and a great source of lean protein for your family. It contains no added hormones or steroids.",
    breakdown: [
      { label: 'Antibiotics', value: 'None', status: 'good' },
      { label: 'Hormones', value: 'None', status: 'good' },
      { label: 'Processing', value: 'Minimal', status: 'good' }
    ]
  },
  {
    image: fruits,
    productImage: fruits,
    title: 'Mixed Berry Medley, Fresh & Organic',
    brand: 'Nature\'s Best',
    score: 95,
    label: 'Excellent',
    dotColor: '#4CAF50',
    bgColor: '#f0f9f0',
    oliverSays: "Fresh organic berries are packed with antioxidants and fiber. A perfect, healthy snack for any time of day! They are minimally processed and free from pesticides.",
    breakdown: [
      { label: 'Antioxidants', value: 'High', status: 'good' },
      { label: 'Fiber', value: 'Excellent', status: 'good' },
      { label: 'Pesticides', value: 'None', status: 'good' }
    ]
  },
  {
    image: milk,
    productImage: milk,
    title: 'Whole Milk, Grass-Fed & Pasteurized',
    brand: 'Horizon Organic',
    score: 82,
    label: 'Good',
    dotColor: '#4CAF50',
    bgColor: '#f0f9f0',
    oliverSays: "Grass-fed milk contains more Omega-3s and vitamins than conventional milk. It's a solid nutritional choice for growing kids and active adults.",
    breakdown: [
      { label: 'Omega-3', value: 'High', status: 'good' },
      { label: 'Vitamins', value: 'A & D', status: 'good' },
      { label: 'Grass-fed', value: '100%', status: 'good' }
    ]
  },
  {
    image: veggies,
    productImage: veggies,
    title: 'Garden Fresh Vegetable Platter',
    brand: 'Green Gardens',
    score: 92,
    label: 'Excellent',
    dotColor: '#4CAF50',
    bgColor: '#f0f9f0',
    oliverSays: "A variety of colorful vegetables provides essential nutrients and minerals. This platter is highly recommended for balanced meals and healthy snacking.",
    breakdown: [
      { label: 'Nutrients', value: 'Diverse', status: 'good' },
      { label: 'Fiber', value: 'High', status: 'good' },
      { label: 'Calories', value: 'Low', status: 'good' }
    ]
  },
] as const

const TRUSTED_AVATARS = [person1, person2, person3, person4] as const

const BENEFIT_POINTS = {
  clarity: [
    'Olive breaks down every ingredient into clear, actionable information.',
    'Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins.',
    'Our rating system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.',
  ],
  filtering: [
    'Olive flags harmful additives and controversial ingredients before they become mainstream concerns.',
    'Keeps you ahead of potential food safety concerns.',
    'Gives busy parents the confidence to make safer food choices every time.',
  ],
  outcomes: [
    'Empowers parents to feel more in control of their family\'s health.',
    'Delivers personalized suggestions for healthier food choices.',
    'Promotes long-term well-being through informed, balanced decisions.',
  ],
} as const

const REVIEWS: readonly Review[] = [
  {
    author: 'Megan L.',
    copy: 'Olive has completely changed the way I shop for my family. I feel confident knowing exactly what is in our food before it ever hits our pantry.',
    positionClass: 'review-card-top',
    avatar: person1,
  },
  {
    author: 'Lila M.',
    copy: 'After just a week of using Olive, I feel more in control of my family\'s nutrition than ever before. It is empowering to make informed choices so quickly.',
    positionClass: 'review-card-bottom-left',
    avatar: person2,
  },
  {
    author: 'Tina B.',
    copy: 'Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It is that easy.',
    positionClass: 'review-card-right',
    avatar: person3,
  },
] as const

function BrandLogo() {
  return (
    <img src={oliveLogo} alt="Olive" className="brand-logo-img" />
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="apple-icon" aria-hidden="true">
      <path
        d="M16.22 12.07c.03 3.16 2.78 4.21 2.81 4.22-.02.07-.43 1.5-1.42 2.98-.86 1.28-1.75 2.55-3.16 2.58-1.39.03-1.84-.83-3.43-.83-1.59 0-2.09.81-3.41.85-1.36.05-2.39-1.37-3.26-2.64C2.57 16.68 1.2 12.06 3.04 8.87c.91-1.58 2.54-2.58 4.31-2.61 1.34-.03 2.6.9 3.43.9.83 0 2.39-1.11 4.03-.95.69.03 2.62.28 3.86 2.1-.1.06-2.3 1.35-2.45 3.76Zm-2.67-7.64c.72-.87 1.2-2.07 1.07-3.27-1.04.04-2.31.69-3.06 1.56-.67.77-1.26 2-1.1 3.17 1.16.09 2.37-.59 3.09-1.46Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" className="arrow-icon" aria-hidden="true">
      <path
        d="M3 8h8.2M8.6 4.8 12 8l-3.4 3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 16 16" className="nav-chevron" aria-hidden="true">
      <path
        d="M4.2 6.2 8 10l3.8-3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/*function RatingStars() {
  return <span className="rating-stars">★★★★★</span>
}*/

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>
          <span className="bullet-dot" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ReviewCard({ author, copy, positionClass, avatar }: Review) {
  return (
    <div className={`review-card ${positionClass}`}>
      <div className="review-content">
        <p className="review-copy">{copy}</p>
        <div className="review-meta">
          <strong>{author}</strong>
          <div className="review-stars">★★★★★</div>
        </div>
      </div>
      <div className="review-avatar">
        <img src={avatar} alt={author} />
      </div>
    </div>
  )
}

function lockVideoPlaybackRate(
  event: React.SyntheticEvent<HTMLVideoElement>,
) {
  const video = event.currentTarget
  if (video.playbackRate !== 1) {
    video.playbackRate = 1
  }
}

function App() {
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFoodIndex((prev) => (prev + 1) % FOOD_DATA.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const currentFood = FOOD_DATA[currentFoodIndex]

  return (
    <main className="page-shell">
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="remove-white" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            -1 -1 -1 3 0
          " />
          <feComponentTransfer>
            <feFuncA type="linear" slope="2" intercept="-0.5" />
          </feComponentTransfer>
        </filter>
      </svg>
      <section className="hero-panel">
        <header className="topbar">
          <a className="brand" href="/" aria-label="Olive home">
            <BrandLogo />
          </a>

          <div className="topbar-actions">
            <a href="/" className="signin-link">
              Sign in
            </a>
            <a href="/" className="cta-pill">
              Get Olive
              <ArrowRightIcon />
            </a>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
            {PRIMARY_NAV_ITEMS.map(({ label, hasMenu }) => (
              <a key={label} href="/" className="nav-link">
                <span>{label}</span>
                {hasMenu ? <ChevronDownIcon /> : null}
              </a>
            ))}
          </nav>
        </header>

        <section className="hero-section">
          <div
            className="trust-row"
            aria-label="Trusted by thousands of healthy families"
          >
            <div className="avatar-group" aria-hidden="true">
              {TRUSTED_AVATARS.map((avatar, index) => (
                <span key={index} className={`avatar avatar-${index + 1}`}>
                  <img src={avatar} alt={`User ${index + 1}`} />
                </span>
              ))}
            </div>
            <p className="trust-copy">Trusted by thousands of healthy families</p>
          </div>

          <div className="hero-copy">
            <h1>The Safest Way to Shop for Groceries</h1>
            <p>
              Use the Olive Food Scanner App to instantly eliminate harmful
              ingredients from your family&apos;s diet and get expert-backed food
              insights.
              
            </p>
            
          </div>

          <div className="hero-actions">
            <a href="/" className="download-button hero-download-btn">
              <span className="apple-mark">
                <AppleIcon />
              </span>
              Download for iOS
            </a>
            <a href="/" className="community-link">
              Join the Olive Community
              <ArrowRightIcon />
            </a>
          </div>

          <div className="hero-visual">
              <div className="iphone-wrapper">
                <div className="iphone-button volume-up" />
                <div className="iphone-button volume-down" />
                <div className="iphone-button power" />
                <div className="iphone-frame">
                  <div className="iphone-notch">
                    <div className="iphone-camera" />
                  </div>
                  <div className="iphone-screen">
                    <div className="food-slider-area">
                      <div 
                        className="food-slider" 
                        style={{ transform: `translateX(calc(-${currentFoodIndex * 120}px + 50% - 60px))` }}
                      >
                        {FOOD_DATA.map((food, index) => (
                          <div 
                            key={index} 
                            className={`slider-item ${index === currentFoodIndex ? 'active' : ''}`}
                          >
                            <img src={food.image} alt={food.title} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div key={`content-${currentFoodIndex}`} className="phone-content-popup">
                      <div className="popup-product-header">
                        <div className="popup-product-image">
                          <img src={currentFood.productImage} alt={currentFood.title} />
                        </div>
                        <div className="popup-product-info">
                          <div className="title-row">
                            <h3>{currentFood.title}</h3>
                            <div className="action-icons">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="heart-icon">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                              </svg>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="share-icon">
                                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                              </svg>
                            </div>
                          </div>
                          <p className="brand-name">{currentFood.brand}</p>
                          <div className="score-badge" style={{ backgroundColor: currentFood.bgColor }}>
                            <span className="score-dot" style={{ backgroundColor: currentFood.dotColor }} />
                            <span className="score-text">{currentFood.score}/100</span>
                            <span className="score-label" style={{ color: currentFood.dotColor }}>{currentFood.label}</span>
                          </div>
                        </div>
                      </div>

                      <div className="oliver-says">
                        <div className="oliver-header">
                          <img src={oliveLogo} alt="Olive" className="oliver-icon brand-logo-img" />
                          <strong>Oliver Says:</strong>
                        </div>
                        <p>{currentFood.oliverSays}</p>
                      </div>

                      <div className="breakdown-section">
                        <strong>Breakdown</strong>
                        <div className="breakdown-list">
                          {currentFood.breakdown.map((item, idx) => (
                            <div key={idx} className="breakdown-item">
                              <span className="breakdown-label">{item.label}</span>
                              <span className="breakdown-value">{item.value}</span>
                            </div>
                          ))}
                        </div>
                        <p className="breakdown-footer-text">
                          * Values based on standard nutritional data for {currentFood.brand} products.
                        </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="how-section">
        <div className="section-heading">
          <h2>How the Olive Food <br /> Scanner App Works</h2>
          <img
            src={cutePearImage}
            alt=""
            className="section-heading-pear"
            loading="lazy"
          />
        </div>

        <div className="how-grid">
          <article className="how-card">
            <span className="card-kicker">Scan &amp; Detect</span>
            <div className="scan-visual" aria-hidden="true">
              <video
                className="section-video how-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                onRateChange={lockVideoPlaybackRate}
                onContextMenu={(event) => event.preventDefault()}
              >
                <source src={pearVideo} type="video/mp4" />
              </video>
            </div>
            <p>
              When you open Olive, simply scan the barcode to instantly detect
              product ingredients. Olive uses its food scoring engine to quickly
              see which items contain harmful substances.
            </p>
          </article>

          <article className="how-card">
            <span className="card-kicker">Data Analysis &amp; Validation</span>
            <div className="validate-visual" aria-hidden="true">
              <video
                className="section-video how-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                onRateChange={lockVideoPlaybackRate}
                onContextMenu={(event) => event.preventDefault()}
              >
                <source src={transitionsVideo} type="video/mp4" />
              </video>
            </div>
            <p>
              After scanning, our food scanner app compares product data with an
              extensive database. Using expert nutritional guidance, Olive filters
              out potentially dangerous ingredients so you never have to second
              guess.
            </p>
          </article>

          <article className="how-card">
            <span className="card-kicker">
              Actionable Insights &amp; Recommendations
            </span>
            <div className="insights-visual" aria-hidden="true">
              <video
                className="section-video how-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                onRateChange={lockVideoPlaybackRate}
                onContextMenu={(event) => event.preventDefault()}
              >
                <source src={collageVideo} type="video/mp4" />
              </video>
            </div>
            <p>
              Once analyzed, Olive provides tailored insights and healthier product
              suggestions. Olive proactively flags harmful ingredients and offers
              personalized recommendations, empowering you to make better choices
              for your family&apos;s health.
            </p>
          </article>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-band">
          <div className="benefits-header">
            <h2>Health Benefits of Using Olive</h2>
            <div className="benefits-copy">
              <p>
                Olive proactively flags harmful ingredients and offers personalized
                recommendations, empowering you to make better choices for your
                family&apos;s health.
              </p>
              <a href="/" className="benefits-button">
                <AppleIcon />
                Download for iOS
              </a>
            </div>
          </div>
        </div>

        <div className="benefits-cards">
          <article className="benefit-card benefit-card-wide">
            <div className="benefit-copy">
              <h3>Achieve Nutritional Clarity</h3>
              <BulletList items={BENEFIT_POINTS.clarity} />
            </div>
            <div className="benefit-visual benefit-visual-clarity" aria-hidden="true">
              <img src={addNutritionImage} alt="Nutritional Clarity" className="benefit-main-img" />
            </div>
          </article>

          <article className="benefit-card">
            <div className="benefit-copy">
              <h3>Proactive Ingredient Filtering</h3>
              <BulletList items={BENEFIT_POINTS.filtering} />
            </div>
            <div className="benefit-visual benefit-visual-tags" aria-hidden="true">
              <video
                className="section-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                onRateChange={lockVideoPlaybackRate}
                onContextMenu={(event) => event.preventDefault()}
              >
                <source src={movingPinkNamesVideo} type="video/mp4" />
              </video>
            </div>
          </article>

          <article className="benefit-card">
            <div className="benefit-copy">
              <h3>Real Health Outcomes for Your Family</h3>
              <BulletList items={BENEFIT_POINTS.outcomes} />
            </div>
            <div className="benefit-visual benefit-visual-family" aria-hidden="true">
              <div className="pear-family">
                <img src={pearFamilyImage} alt="Pear Family" className="pear-family-img" />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="results-section">
        <div className="results-container">
          <span className="results-flower" aria-hidden="true" />
          
          <div className="results-content-wrapper">
            <div className="results-photo-column">
                  <div className="results-photo-main">
                    <img src={motherson} alt="Happy family" className="grayscale-photo" />
                  </div>
                  <ReviewCard {...REVIEWS[1]} /> {/* Lila M. at bottom-left/center of photo */}
                </div>

            <div className="results-text-column">
              <ReviewCard {...REVIEWS[0]} /> {/* Megan L. at top-right */}
              
              <div className="results-copy">
                <h2>Real Mothers Real Results</h2>
                <a href="/" className="results-link">
                  read all 3,147+ reviews
                  <ArrowRightIcon />
                </a>
              </div>

              <ReviewCard {...REVIEWS[2]} /> {/* Tina B. at bottom-right */}
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-col">
              <h3>Explore More Olive Tools</h3>
              <ul className="footer-links">
                <li><a href="/">Explore Foods</a></li>
                <li><a href="/">Allergy Scanner App</a></li>
                <li><a href="/">Gluten Free Scanner</a></li>
                <li><a href="/">Dairy Free App</a></li>
                <li><a href="/">Food Ingredient Checker</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>About</h3>
              <ul className="footer-links">
                <li><a href="/">Blog</a></li>
                <li><a href="/">Email us</a></li>
                <li><a href="/">Contact us</a></li>
              </ul>
            </div>
            <div className="footer-col footer-newsletter">
              <div className="footer-logo-area">
                <img src={oliveLogo} alt="Olive" className="footer-logo-img" />
              </div>
              <p>Get the latest lab testing data sent directly to your inbox.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter Email address" className="newsletter-input" />
                <button type="submit" className="newsletter-submit">Subscribe</button>
              </form>
            </div>
          </div>
          
          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <nav className="footer-legal">
              <a href="/">Terms of Service</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Refund Policy</a>
              <a href="/">Medical Consent</a>
              <a href="/">Sign in</a>
            </nav>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Olive Inc.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
