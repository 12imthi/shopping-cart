import "./App.css";
import Navbar from "./components/Navber";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";

function App() {
  const items = [
    {
      itemId: 1,
      itemName: "Apple iPhone 13",
      category: "Mobile",
      price: 999.99,
      quantity: 1,
      description:
        "Latest model with A15 Bionic chip, 6.1-inch display, and dual-camera system.",
        img: 'https://picsum.photos/200/300?random=1',
      rating: 4,
    },
    {
      itemId: 2,
      itemName: "Samsung Galaxy Watch 4",
      category: "Smartwatch",
      price: 249.99,
      quantity: 1,
      description:
        "Smartwatch with health monitoring features and seamless integration with Samsung devices.",
        img: 'https://picsum.photos/200/300?random=2',
        rating: 5,
    },
    {
      itemId: 3,
      itemName: "Sony WH-1000XM4",
      category: "Headphones",
      price: 349.99,
      quantity: 1,
      description:
        "Noise-canceling headphones with superior sound quality and long battery life.",
        img: 'https://picsum.photos/200/300?random=3',
        rating: 4,
    },
    {
      itemId: 4,
      itemName: "Apple MacBook Pro",
      category: "Laptop",
      price: 1999.99,
      quantity: 1,
      description:
        "Powerful laptop with M1 chip, 16GB RAM, and 512GB SSD for top performance.",
        img: 'https://picsum.photos/200/300?random=4',
        rating: 3,
    },
    {
      itemId: 5,
      itemName: "Amazon Echo Dot (4th Gen)",
      category: "Smart Home",
      price: 49.99,
      quantity: 2,
      description:
        "Smart speaker with Alexa voice assistant and improved sound quality.",
        img: 'https://picsum.photos/200/300?random=5',
        rating: 2,
    },
    {
      itemId: 6,
      itemName: "Fitbit Charge 5",
      category: "Fitness Tracker",
      price: 179.99,
      quantity: 1,
      description:
        "Advanced fitness and health tracker with built-in GPS and stress management tools.",
        img: 'https://picsum.photos/200/300?random=6',
        rating: 4,
    },
    {
      itemId: 7,
      itemName: "Sony PlayStation 5",
      category: "Gaming Console",
      price: 499.99,
      quantity: 1,
      description:
        "Next-gen gaming console with lightning-fast loading and immersive gameplay.",
        img: 'https://picsum.photos/200/300?random=7',
        rating: 5,
    },
    {
      itemId: 8,
      itemName: "Canon EOS R5",
      category: "Camera",
      price: 3899.99,
      quantity: 1,
      description:
        "High-end mirrorless camera with 45MP sensor and 8K video recording capabilities.",
        img: 'https://picsum.photos/200/300?random=8',
        rating: 1,
    },
  ];

  
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    console.log(item);
    if (!cartItems.some(cartItem => cartItem.itemId === item.itemId)) {
      setCartItems([...cartItems, { ...item}]);
      setCartCount(cartCount + 1);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.itemId !== item.itemId));
    setCartCount(cartCount - 1);
  };

  const isInCart = (item) => {
    return cartItems.some(cartItem => cartItem.itemId === item.itemId);
  };


  return (
    <div className="container-fluid">
      <Navbar cartCount={cartCount} />
      <Header />
      <div>
      <Items
          items={items}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={isInCart}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
