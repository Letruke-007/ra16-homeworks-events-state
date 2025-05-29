import ShopCard from "./ShopCard.jsx";

export default function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map(product => <ShopCard key={product.img} {...product} />)}
    </div>
  );
}
