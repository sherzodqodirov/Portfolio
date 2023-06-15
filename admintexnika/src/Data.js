import { Link } from "react-router-dom";
import {BiNews} from "react-icons/bi";
import {lazy} from "react";

const HomePage =lazy(()=>import('./pages/HomePage'))
const ProductPage =lazy(()=>import('./pages/ProductPage'))
const AboutPage =lazy(()=>import('./pages/AboutPage'))



export const AllPages = [
  {
    path: "/",
    component: <HomePage />,
  },
 {
    path: "products/:id",
    component: <ProductPage/>,
  },
  {
    path: "about",
    component: <AboutPage />,
  },
];

export const ItemMenu=[
  {
    key:"1",
    icon: <BiNews />,
    label: (
        <Link to='/'>
            HomePage
        </Link>
    ),
  },
 {
    key:"2",
    icon: <BiNews />,
    label: (
        <Link to='about'>
            AboutPage
        </Link>
    ),
  }
]