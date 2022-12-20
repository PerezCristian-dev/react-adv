import { ReactElement, CSSProperties } from "react";
import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps } from "../interfaces/interfaces";
import { Product } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import "../styles/custom-styles.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}

        {/* <ProductImage img={product.img}/>

        <ProductTitle title={product.title}/>

        <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
      </div>
    </Provider>
  );
};
