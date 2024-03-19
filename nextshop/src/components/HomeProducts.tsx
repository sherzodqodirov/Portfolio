import React from 'react';
import {IProduct} from "@/types";
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";

async function getAllProducts() {
    try {
        const res = await fetch('https://fakestoreapi.com/products',{cache:"force-cache"})
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const resJson = await res.json();
        return resJson
    }
    catch (err) {
        console.log(err)
    }
}
async function HomeProducts() {
    const products:IProduct[]=await getAllProducts()

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map(product =>(
                        <ProductDetails key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeProducts;