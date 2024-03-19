"use client"
import React, {FC, useState} from "react";
import {IProduct} from "@/types";
import Link from "next/link";
import Image from "next/image";
import CustomImages from "@/components/CustomImage";
import ProductInfoModal from "@/components/ProductInfoModal";

const ProductDetails: FC<{ product: IProduct }> = ({product}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div onClick={()=>setIsOpen(true)} className="p-4 md:w-1/4">
                <div
                    className="cursor-pointer h-96 flex flex-col p-5 border border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-2xl duration-500">
                    <div className='relative max-h-96 flex-1'>
                        <CustomImages product={product} fill/>
                    </div>
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product.category}</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{product.title}</h1>
                        <p className="leading-relaxed mb-3"></p>
                        <div className="flex items-center flex-wrap ">

                        <span
                            className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
               rating:{product.rating.rate}
              </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                 {product.price}$
              </span>
                        </div>
                    </div>
                </div>
            </div>
            <ProductInfoModal isOpen={isOpen} setIsOpen={setIsOpen} id={product.id}/>
        </>
    );
}

export default ProductDetails;