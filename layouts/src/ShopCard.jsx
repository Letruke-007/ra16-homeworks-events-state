export default function ShopCard({ name, price, color, img }) {
  return (
    <div className="shop-card">
      <div className="card-title">{name}</div>
      <div className="card-color">{color}</div>
      <div className="card-image-wrapper">
        <img src={img} alt={name} className="card-img" />
      </div>
      <div className="card-footer">
        <span className="card-price">${price}</span>
        <button className="card-btn">Add to cart</button>
      </div>
    </div>
  );
}
