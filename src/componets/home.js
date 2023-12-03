import avathars from "../images/avatars.png";
import featureOne from "../images/feature-one.png";
import featureTwo from "../images/feature-two.png";
import featureThree from "../images/feature-three.png";
import featureFour from "../images/feature-four.png";
import featureFive from "../images/feature-five.png";
import featureSix from "../images/feature-six.png";
import featureSeven from "../images/feature-seven.png";
import featureEight from "../images/feature-eight.png";
import featureNine from "../images/feature-nine.png";
import featureTen from "../images/feature-ten.png";

export default function Home() {
  return (
    <main className="home">
      <div className="home-content">
        <div>
          <p className="home-p1">An other way to manage time</p>
        </div>
        <h1>Your new favorite calender 🗓️ app</h1>
        <p className="home-p2">
          Here you should explain how cool your app is. Remember, <bt />
          focus on the benefits for your users, not on the features.
        </p>
        <div className="home-btn-p">
          <button className="home-button">Get started, it's free</button>
          <p className="home-p3">Free 14 days trials,no credit card needed</p>
        </div>
        <div className="avatars">
          <img src={avathars} alt="avathars" />
          <div>
            <span>⭐⭐⭐⭐⭐ 5.0</span>
            <p>From 200+ happy users</p>
          </div>
        </div>
        <div>
          <img
            src={
              "https://framerusercontent.com/images/eOkQipcAuByHjPvicAhsR8PzC0.png"
            }
            alt="home-page"
            className="home-page"
          />
        </div>
      </div>
      <Features />
    </main>
  );
}

function Features() {
  return (
    <section>
      <div className="sec-1">
        <p className="home-p1">Our main features 🦸🏼</p>
        <h1>Discover your new superpowers</h1>
      </div>
      <div className="features">
        <div className="feature-one">
          <div className="feature-left">
            <p className="feature-p1">Seamless Sheduling</p>
            <p className="feature-p2">Focus on what matters most for you</p>
            <p className="feature-p3">
              Effortlessly plan your day with our intuitive drag-and-drop
              interface. Sync with multiple calendar platforms, import events
              from emails, and add participants with just a few clicks.
            </p>
            <div className="feedback">
              <img
                src={
                  "https://framerusercontent.com/images/Pm9TTOkN341IYtePLdPGmhG0E.png"
                }
                alt="feature"
                className="feature-fb"
              />
              <div className="fb">
                <p className="feature-p4">
                  I tested many calendar apps. This app is the best of all! It
                  saves me hours of time.
                </p>
                <p className="feature-p5">Carla, Head of Finance </p>
              </div>
            </div>
          </div>
          <div className="feature-left">
            <img src={featureOne} alt="" className="feature-side-img" />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature-two">
          <div className="feature-left">
            <p className="feature-p1">Smart Reminders & Task</p>
            <p className="feature-p2">
              Never miss an important deadline or event again
            </p>
            <p className="feature-p3">
              Never miss an important deadline again with our AI-driven
              notifications. Our app intelligently analyzes your schedule to
              prioritize what's most important, keeping you on track and
              ensuring your day is productive and stress-free.
            </p>
            <div className="feedback">
              <img
                src={
                  "https://framerusercontent.com/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png"
                }
                alt="feature"
                className="feature-fb"
              />
              <div className="fb">
                <p className="feature-p4">
                  I love how user-friendly this app is! It's so easy to add
                  events and set reminders!
                </p>
                <p className="feature-p5">Adam, entrepreneur</p>
              </div>
            </div>
          </div>
          <div className="feature-left">
            <img src={featureTwo} alt="" className="feature-side-img" />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature-three">
          <div className="feature-left">
            <p className="feature-p1">Seamless Sheduling</p>
            <p className="feature-p2">Focus on what matters most for you</p>
            <p className="feature-p3">
              Effortlessly plan your day with our intuitive drag-and-drop
              interface. Sync with multiple calendar platforms, import events
              from emails, and add participants with just a few clicks.
            </p>
            <div className="feedback">
              <img
                src={
                  "https://framerusercontent.com/images/1OwzdZHx9ElDw1ZAavs6WGWBSw.png"
                }
                alt="feature"
                className="feature-fb"
              />
              <div className="fb">
                <p className="feature-p4">
                  I tested many calendar apps. This app is the best of all! It
                  saves me hours of time.
                </p>
                <p className="feature-p5">Carla, Head of Finance </p>
              </div>
            </div>
          </div>
          <div className="feature-left">
            <img src={featureThree} alt="" className="feature-side-img" />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature-four">
          <div className="feature-left">
            <p className="feature-p1">Smart Reminders & Task</p>
            <p className="feature-p2">
              Never miss an important deadline or event again
            </p>
            <p className="feature-p3">
              Never miss an important deadline again with our AI-driven
              notifications. Our app intelligently analyzes your schedule to
              prioritize what's most important, keeping you on track and
              ensuring your day is productive and stress-free.
            </p>
            <div className="feedback">
              <img
                src={
                  "https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png"
                }
                alt="feature"
                className="feature-fb"
              />
              <div className="fb">
                <p className="feature-p4">
                  I love how user-friendly this app is! It's so easy to add
                  events and set reminders!
                </p>
                <p className="feature-p5">Adam, entrepreneur</p>
              </div>
            </div>
          </div>
          <div className="feature-left">
            <img src={featureFour} alt="" className="feature-side-img" />
          </div>
        </div>
      </div>
      <ExtraFeatures />
      <Price />
      <FQA />
      <Footer />
      <ContactUs />
    </section>
  );
}

function ExtraFeatures() {
  return (
    <section>
      <div className="sec-1">
        <p className="home-p1">And so much more... 💼</p>
        <h1>Our features to make your life easier</h1>
      </div>
      <div className="extra-features">
        <div className="ex-feature">
          <img src={featureFive} alt="featureFive" className="ex-img" />
          <p className="ex-p1">Cross-Device Sync</p>
          <p>
            Automatically import events from emails, social media, and other
            sources, so you never miss a beat or have to manually input details.
          </p>
        </div>
        <div className="ex-feature">
          <img src={featureSix} alt="featureFive" className="ex-img" />
          <p className="ex-p2">Auto Event Import</p>
          <p>
            Keep your schedule in sync across all your devices, ensuring
            seamless access to your calendar, events, and tasks wherever you go.
          </p>
        </div>
        <div className="ex-feature">
          <img src={featureSeven} alt="featureFive" className="ex-img" />
          <p className="ex-p3">Task Delegation</p>
          <p>
            Easily assign tasks to team members, family, or friends, promoting
            shared responsibility and seamless collaboration.
          </p>
        </div>
        <div className="ex-feature">
          <img src={featureEight} alt="featureFive" className="ex-img" />
          <p className="ex-p4">Voice Command Integration</p>
          <p>
            Quickly create events, set reminders, or reschedule appointments
            with voice commands, thanks to compatibility with popular virtual
            assistants.
          </p>
        </div>
        <div className="ex-feature">
          <img src={featureNine} alt="featureFive" className="ex-img" />
          <p className="ex-p5">Customizable Alerts</p>
          <p>
            Personalize notification types and timings for events, tasks, and
            goals, ensuring you stay on track and informed without feeling
            overwhelmed.
          </p>
        </div>
        <div className="ex-feature">
          <img src={featureTen} alt="featureFive" className="ex-img" />
          <p className="ex-p6">Privacy Protection</p>
          <p>
            Safeguard your personal information and event details with our
            robust security measures, including end-to-end encryption and
            optional password protection.
          </p>
        </div>
      </div>
    </section>
  );
}

function Price() {
  return (
    <main>
      <div className="sec-1">
        <p className="home-p1">Pricing and plans 💰</p>
        <h1>Find the best plan for your needs</h1>
        <p>✨ save 30%</p>
        <div className="toggle">
          <button className="monthly">Monthly</button>
          <button className="annually">Annually</button>
        </div>
      </div>
      <Pricelist />
    </main>
  );
}

function Pricelist() {
  return (
    <main className="main-price-list">
      <div className="price-list">
        <p className="pl-p1">Free</p>
        <p className="pl-p2">So you can see how incredible our tool is. </p>
        <h1>
          $0 <span>/mo</span>
        </h1>
        <p className="pl-p3">Free forever</p>
        <div className="click">
          <button className="getstarted">Get Started</button>
          <p>No credit card needed</p>
        </div>
        <div className="benifites">
          <p className="pl-p5">What's included:</p>
          <p>✓ A cool feature </p>
          <p>✓ A basic feature </p>
          <p>✓ A top feature with limitations</p>
          <p>✓ An incredible feature so useful</p>
          <p>✓ A top feature</p>
        </div>
      </div>
      <div className="price-list">
        <p className="pl-p1">Starter</p>
        <p className="pl-p2">So you can see how incredible our tool is. </p>
        <h1>
          $19 <span>/mo</span>
        </h1>
        <p className="pl-p3">Billed Monthly</p>
        <div className="click">
          <button className="getstarted">Get Started</button>
          <p>7 days free trial no credit card needed</p>
        </div>
        <div className="benifites">
          <p className="pl-p5">What's included:</p>
          <p>✓ A cool feature </p>
          <p>✓ A basic feature </p>
          <p>✓ A top feature with limitations</p>
          <p>✓ An incredible feature so useful</p>
          <p>✓ A top feature</p>
        </div>
      </div>
      <div className="price-list">
        <p className="pl-p1">Pro</p>
        <p className="pl-p2">So you can see how incredible our tool is. </p>
        <h1>
          $49 <span>/mo</span>
        </h1>
        <p className="pl-p4">Billed monthly</p>
        <div className="click">
          <button className="getstarted">Get Started</button>
          <p>7 days free trial no credit card needed</p>
        </div>
        <div className="benifites">
          <p className="pl-p5">What's included:</p>
          <p>✓ A cool feature </p>
          <p>✓ A basic feature </p>
          <p>✓ A top feature with limitations</p>
          <p>✓ An incredible feature so useful</p>
          <p>✓ A top feature</p>
        </div>
      </div>
    </main>
  );
}

function FQA() {
  return (
    <main>
      <div className="faq">
        <div className="sec-1">
          <p className="home-p1">Relevant stuff, bla bla 📣</p>
          <h1>Frequently asked questions</h1>
        </div>
        <div className="faq-qa">
          <p>Can I cancel my subscrition?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
          </svg>
        </div>
        <div className="faq-qa">
          <p>What happens when my trial ends?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
          </svg>
        </div>
        <div className="faq-qa">
          <p>What payment methods do you offer?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
          </svg>
        </div>
        <div className="faq-qa">
          <p>What is your refund policy?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
          </svg>
        </div>
        <div className="faq-qa">
          <p>Do you offer discounts to educational institutions ?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
          </svg>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <section>
      <div className="sec-1">
        <p className="home-p1">Last call Baby! 🚀</p>
        <h1>Ready to start?</h1>
        <p>
          Here is your last chance to explain how cool your app is. Focus on the
          benefits for your users, not on the features.{" "}
        </p>
        <button className="getstarted"> Get started, It's FREE</button>
      </div>
    </section>
  );
}

function ContactUs() {
  return (
    <main className="contact-main">
      <div className="milton">
        <div className="milton-logo">
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/fluency-systems-filled/48/triangle.png"
            alt="triangle"
          />
          <p className="text-logo">Milton</p>
        </div>
        <p className=" pl-p2">
          A short text explaining why my startup is so cool
        </p>
        <p className="pl-p2">© My super start-up</p>
        <div className="socials">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/twitter--v1.png"
            alt="twitter--v1"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/facebook-new.png"
            alt="facebook-new"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/linkedin.png"
            alt="linkedin"
          />
        </div>
      </div>
      <div className="product">
        <p className="pro-p1">Product</p>
        <p>Features</p>
        <p>Testimonials</p>
        <p>Pricing</p>
        <p>FQAs</p>
      </div>
      <div className="resources">
        <p className="pro-p1">Resources</p>
        <p>Change log</p>
        <p>Help center</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="others">
        <p className="pro-p1">Others</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Affiliation</p>
        <p>Press</p>
      </div>
      <div className="blog">
        <p className="pro-p1">From the blog</p>
        <p>
          Mastering Your Schedule: Top Time Management Techniques for Balancing
          Work and Life
        </p>
        <p>Organizing Your Calendar for Enhanced Productivity and Focus</p>
        <p>
          The Power of Prioritization: Effective Strategies for Managing Your
          Time and Tasks
        </p>
        <p>
          Maximizing Your Minutes: Essential Tips for Streamlining Your Daily
          Routine and Calendar
        </p>
      </div>
    </main>
  );
}
