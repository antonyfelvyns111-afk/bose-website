import "../styles/WhyBose.css";


export default function WhyBose() {
  return (
    <section className="why-bose">
      <h2>Why buy from Bose</h2>

      <div className="why-grid">
        <div className="why-card">
          <div className="icon-circle">
            <span className="material-icons">event</span>
          </div>
          <h3>90-day return policy</h3>
          <p>Try it for 90 days to make sure it’s right for you.</p>
          
        </div>

        <div className="why-card">
          <div className="icon-circle">
            <span className="material-icons">handshake</span>
          </div>
          <h3>Price match promise</h3>
          <p>Shop confidently. We’ll match a lower price.</p>
          
        </div>

        <div className="why-card">
          <div className="icon-circle">
            <span className="material-icons">local_shipping</span>
          </div>
          <h3>Complimentary shipping & returns</h3>
          <p>On all in-stock orders of $49 or more.</p>
          
        </div>

        <div className="why-card">
          <div className="icon-circle">
            <span className="material-icons">person</span>
          </div>
          <h3>My Bose perks</h3>
          <p>
            Members receive welcome and birthday offers,
            exclusive experiences, and more.
          </p>
          
        </div>
      </div>
    </section>
  );
}
