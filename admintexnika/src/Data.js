import { Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import {BiNews} from "react-icons/bi";




export const AllPages = [
  {
    path: "/",
    component: <HomePage />,
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