import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from "./../components";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons
                className="custom-buttoms"
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              />
            </ProductCard>
          );
        })}
      </div>

      <div className="shopping-cart">
        {Object.values(shoppingCart).map((item) => {
          return (
            <ProductCard
              key={item.id}
              product={item}
              className="bg-dark"
              style={{ width: "100px" }}
              onChange={onProductCountChange}
              value={item.count}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttoms"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
