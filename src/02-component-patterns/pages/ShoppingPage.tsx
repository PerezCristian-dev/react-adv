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
    <div >
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark" style={{background: "blue"}}>
          <ProductImage img={product.img} className="custom-image"/>
          <ProductTitle  className="text-white text-bold"/>
          <ProductButtons className="custom-buttoms" style={{
            display: "flex", 
            justifyContent: "center",
            }}/>
          {/* <ProductCard.Image />
          <ProductCard.Title title={"Coffee"} />
          <ProductCard.Buttons/> */}
        </ProductCard>
      </div>
    </div>
  );
};
