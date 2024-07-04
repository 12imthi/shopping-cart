// Items.js
import React from 'react';
import ItemCard from './ItemCard';

function Items({ items, addToCart, removeFromCart, isInCart }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {items.map((item) => (
            <ItemCard
              key={item.itemId}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Items;
