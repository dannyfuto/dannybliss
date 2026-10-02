import { useState } from 'react'
import './App.css'

import logo from './assets/University Logo.jpeg'
import london from './assets/London Campus.jpeg'
import newyork from './assets/New York Campus.jpeg'
import washington from './assets/Washington Campus.jpeg'
import basketball from './assets/Basketball court.jpeg'
import library from './assets/Library.jpeg'
import cafeteria from './assets/Cafeteria.jpeg'
import user1 from './assets/user1.jpeg'
import user2 from './assets/user2.jpeg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <section className="header" id="home">
        <nav>
          <a href="#home" aria-label="University home">
            <img src={logo} alt="University Logo" />
          </a>

          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <button
              className="menu-close"
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              ×
            </button>

            <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>HOME</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
              <li><a href="#course" onClick={() => setMenuOpen(false)}>COURSE</a></li>
              <li><a href="#blog" onClick={() => setMenuOpen(false)}>BLOG</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
            </ul>
          </div>

          <button
            className="menu-open"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        </nav>

        <div className="text-box">
          <h1>World Biggest University</h1>
          <p>
            Making a website is now one of the easiest things in the world.
            You just need to learn HTML, CSS, and JavaScript.
          </p>
          <a href="#course" className="hero-btn">Visit us to know more</a>
        </div>
      </section>

      <section className="course" id="course">
        <h1>Courses We Offer</h1>
        <p>Explore courses designed to help you reach your goals.</p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>Build a strong foundation for further study.</p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>
            <p>Develop the knowledge and skills for your chosen field.</p>
          </div>

          <div className="course-col">
            <h3>Graduation</h3>
            <p>Prepare for your next step with advanced learning.</p>
          </div>
        </div>
      </section>

      <section className="Campus" id="about">
        <h1>Our Global Campus</h1>
        <p>Discover our campuses around the world.</p>

        <div className="row">
          <div className="campus-col">
            <img src={london} alt="London Campus" />
            <div className="layer"><h3>LONDON</h3></div>
          </div>

          <div className="campus-col">
            <img src={newyork} alt="New York Campus" />
            <div className="layer"><h3>NEW YORK</h3></div>
          </div>

          <div className="campus-col">
            <img src={washington} alt="Washington Campus" />
            <div className="layer"><h3>WASHINGTON</h3></div>
          </div>
        </div>
      </section>

      <section className="facilities" id="blog">
        <h1>Our Facilities</h1>
        <p>Find the resources you need to learn and thrive.</p>

        <div className="row">
          <div className="facilities-col">
            <img src={library} alt="University library" />
            <h3>World Class Library</h3>
            <p>A welcoming place to study and explore.</p>
          </div>

          <div className="facilities-col">
            <img src={basketball} alt="Basketball court" />
            <h3>Largest Playground</h3>
            <p>Stay active with space for sports and recreation.</p>
          </div>

          <div className="facilities-col">
            <img src={cafeteria} alt="University cafeteria" />
            <h3>Tasty and Healthy</h3>
            <p>Enjoy meals and spend time with other students.</p>
          </div>
        </div>
      </section>

      <section className="testiomnials">
        <h1>What Our Students Say</h1>
        <p>Hear from students about their university experience.</p>

        <div className="row">
          <div className="testiomnials-col">
            <img src={user1} alt="Christine Berkley" />
            <div>
              <p>
                “The university has given me a welcoming place to learn and grow.”
              </p>
              <h3>Christine Berkley</h3>
              <p className="stars" aria-label="5 out of 5 stars">★★★★★</p>
            </div>
          </div>

          <div className="testiomnials-col">
            <img src={user2} alt="David Byer" />
            <div>
              <p>
                “I’ve enjoyed meeting people and learning new skills here.”
              </p>
              <h3>David Byer</h3>
              <p className="stars" aria-label="5 out of 5 stars">★★★★★</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <h1>
          Enroll for Various Online Courses
          <br />
          Anywhere in the World
        </h1>
        <a href="#contact" className="hero-btn">Contact Us</a>
      </section>

      <section className="footer" id="contact">
        <h4>About Us</h4>
        <p>Learn, grow, and prepare for your future with us.</p>

        <div className="icons">
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </div>

        <p>Made with ♥ by DANIEL CHIDIEBERE</p>
      </section>
    </>
  )
}

export default App