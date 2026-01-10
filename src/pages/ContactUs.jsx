import Navbar from "../components/Navbar";
import "../styles/ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <Navbar />

      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-country">India</p>

        <div className="contact-cards">
          {/* LEFT CARD */}
          <div className="contact-card">
            <div className="icon">⚙️</div>
            <h2>Product Support</h2>
            <p>
              Our product support site offers you the tools and information
              that you need to ensure the lasting value of your Bose® products.
            </p>
            <button className="black-btn">Product Support</button>
          </div>

          {/* RIGHT CARD */}
          <div className="contact-card">
            <div className="icon">📞</div>
            <h2>Customer Support for Product Service</h2>
            <p>Bose Support at Servify</p>

            <p className="bold">
              Phone: <span>1-800-267-7995</span>
            </p>

            <p className="bold">
              Email:{" "}
              <a href="mailto:Bose_Support@servify.in">
                Bose_Support@servify.in
              </a>
            </p>

            <p className="time">
              Monday – Saturday | 9:30 AM to 6:30 PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
