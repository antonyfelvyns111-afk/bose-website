const products = [
  {
    name: "Soundlink Flex (2nd Gen)",
    price: "₹16,900",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDb8HoH0XDIFGkSxRR5V1ksIOmx7Kz9cm4UQ&s"
  },
  {
    name: "Bose QuietComfort Ultra Earbuds",
    price: "₹25,900",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzD6scFQQ4hXCzHYVzTR0QnKMrdnEl77Kaug&s"
  },
  {
    name: "Bose QuietComfort Ultra Headphones",
    price: "₹35,900",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8PYkecYEGQpjZIGZdxsOzxHGGByGg4giWA&s"
  },
  {
    name: "Bose Smart Soundbar",
    price: "₹47,900",
    image:
      "https://www.boseindia.com/cdn/shop/files/BTVS_003_RGB_d2516682-3a1c-44d7-8978-2b51d7e4bee7.png?v=1746357434"
  }
];

const Recommended = () => {
  return (
    <section className="recommended">
      <h2>Recommended</h2>

      <div className="product-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <button className="add-cart">ADD TO CART</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
