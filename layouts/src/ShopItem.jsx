export default function ShopItem({ name, price, color, img }) {
  return (
    <div className="shop-item">
      <div className="item-col item-image">
        <img src={img} alt={name} className="item-img" />
      </div>
      <div className="item-col item-title">{name}</div>
      <div className="item-col item-color">{color}</div>
      <div className="item-col item-price">${price}</div>
      <div className="item-col item-btn">
        <button className="item-btn-inner">Add to cart</button>
      </div>
    </div>
  );
}
