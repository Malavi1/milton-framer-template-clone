export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/fluency-systems-filled/48/triangle.png"
          alt="triangle"
        />
        <p className="text-logo">Milton</p>
      </div>
      <ul>
        <li>Features</li>
        <li>Testimonial</li>
        <li>Pricing</li>
        <li>FAQs</li>
        <li>Blog</li>
      </ul>
      <div className="nav-btn">
        <button className="login">Log in</button>
        <button className="getstarted">Get Started</button>
      </div>
    </nav>
  );
}
