import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from "./../components";

const product = {
  id: "1",
  title: "Coffee Mug -  Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
          {/* <ProductCard.Image />
          <ProductCard.Title title={"Coffee"} />
          <ProductCard.Buttons/> */}
        </ProductCard>
      </div>
    </div>
  );
};
