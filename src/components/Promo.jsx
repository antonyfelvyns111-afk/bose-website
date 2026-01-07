const Promo = ({ title, subtitle, image }) => {
  return (
    <section className="promo-wrapper">
      <div
        className="promo"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="promo-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
