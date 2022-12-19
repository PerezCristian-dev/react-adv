import { ReactElement } from "react";

export interface ProductsCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductsCardProps): JSX.Element;
  title: ({ title }: { title?: string }) => JSX.Element;
  image: ({ img }: { img?: string }) => JSX.Element;
  buttons: () => JSX.Element;
}
