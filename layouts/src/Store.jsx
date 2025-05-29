import ListView from "./ListView.jsx";
import React, { Component } from "react";
import IconSwitch from "./IconSwitch.jsx";
import CardsView from "./CardsView.jsx";


const products = [
  { name: "Nike Metcon 2", price: "130", color: "red", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg" },
  { name: "Nike Metcon 2", price: "130", color: "green", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg" },
  { name: "Nike Metcon 2", price: "130", color: "blue", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg" },
  { name: "Nike Metcon 2", price: "130", color: "black", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg" },
  { name: "Nike free run", price: "170", color: "black", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg" },
  { name: "Nike Metcon 3", price: "150", color: "green", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg" }
];

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "cards" // "cards" or "list"
    };
  }

  handleSwitch = () => {
    this.setState(prev => ({
      view: prev.view === "cards" ? "list" : "cards"
    }));
  };

  render() {
    const { view } = this.state;
    return (
      <div className="store-root">
        <div className="store-header">
            <IconSwitch
            icon={view === "cards" ? "view_list" : "view_module"}
            onSwitch={this.handleSwitch}
            />
        </div>
        {view === "cards"
            ? <CardsView cards={products} />
            : <ListView items={products} />}
      </div>
    );
  }
}

export default Store;
