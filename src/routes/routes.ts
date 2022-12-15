import {lazy} from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";



type JSXComponent = 
  | (()=>JSX.Element)
  | (React.LazyExoticComponent<() => JSX.Element>)

interface Route {
  to: string;
  path: string;
  Component: JSXComponent;
  name: string;
}


const LazyLoyaout= lazy(()=> import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLoyaout,
    name: "LazyLayout-Dashboard",
  },
  {
    to: "/NoLazy",
    path: "NoLazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
