'use client'
import React, {useState} from 'react';
import {IProduct} from "@/types";
import CustomImage from "@/components/CustomImage";
import Link from "next/link";

const Carts = () => {
    const [productsLocal, setProductsLocal] = useState<IProduct[]>(JSON.parse(localStorage.getItem('carts') as string))

    const handleIncrement = (id:string | number) => {
        const upDate=productsLocal.map(item =>{
            if (item.id === id){
                return{
                    ...item,
                    quantity:item.quantity+1
                }
            }
            return item
        })
        localStorage.setItem('carts', JSON.stringify(upDate))
        setProductsLocal(upDate)
    }
    const handleDec = (id:string | number) => {
        const upDate=productsLocal.map(item =>{
            if (item.id === id && item.quantity>1){
                    return{
                        ...item,
                        quantity:item.quantity-1
                    }
            }
            return item
        })
        localStorage.setItem('carts', JSON.stringify(upDate))
        setProductsLocal(upDate)
    }
    const handleDeleteCart = (id: number | string): void => {
        const upDate: IProduct[] = productsLocal.filter(item => item.id !== id)
        localStorage.setItem('carts', JSON.stringify(upDate))
        setProductsLocal(upDate)
    }
    const calculateSubtotal = ():number => {
        return productsLocal.reduce((total, product) => {
            return total + (product.quantity * product.price);
        }, 0);
    };

    return (
        <>
            {productsLocal.length>0 ? (
                <div className="pt-10">
                    <h1 className="mb-10 text-center text-2xl font-bold">Store</h1>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            {productsLocal?.map(product => (
                                <div key={product?.id}
                                     className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                    <div className='relative w-40 h-full hidden md:inline'>
                                        <CustomImage product={product}/>
                                    </div>
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
                                            <p className="mt-1 text-xs text-gray-700">{product.description}</p>
                                        </div>
                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex items-center border-gray-100">
                                        <span onClick={()=>handleDec(product.id)}
                                              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                <input
                                                    readOnly
                                                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                                    type="number"
                                                    value={product.quantity}
                                                    min="1"/>
                                                <span onClick={()=>handleIncrement(product.id)}
                                                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <p className="text-sm">{(product.price*product.quantity).toFixed(2)}$</p>
                                                <svg
                                                    onClick={() => handleDeleteCart(product.id)}
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="1.5" stroke="currentColor"
                                                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">${calculateSubtotal().toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700">$12.99</p>
                            </div>
                            <hr className="my-4"/>
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">${(calculateSubtotal()+12.99).toFixed(2)} USD</p>
                                    <p className="text-sm text-gray-700">including VAT</p>
                                </div>
                            </div>
                            <button
                                className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check
                                out
                            </button>
                        </div>
                    </div>
                </div>
            ):(
                <div className=" from-purple-300 ">
                    <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                        <div className="bg-white  shadow-2xl overflow-hidden sm:rounded-lg pb-8">
                            <div className=" text-center pt-8">
                                <h1 className="text-6xl font-medium py-8">Cart is empty</h1>
                                <p className="text-2xl pb-8 px-12 font-medium">The page you are looking for does not exist. It might have been moved or deleted.</p>
                               <Link href={'/'}>
                                   <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                       Product
                                   </button>
                               </Link>

                                <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Carts;
