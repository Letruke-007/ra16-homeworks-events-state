import ShopItem from "./ShopItem.jsx";

export default function ListView({ items }) {
  return (
    <div className="list-view">
      <div className="list-view-inner">
        {items.map(product => <ShopItem key={product.img} {...product} />)}
      </div>
    </div>
  );
}
