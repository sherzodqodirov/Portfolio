import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {IProduct} from "@/types";
import {Dialog} from "@headlessui/react";
import CustomImage from "@/components/CustomImage";
import {toast} from "react-toastify";

const ProductInfoModal = ({isOpen, setIsOpen, id}: any) => {
    const router = useRouter()
    const [infoData, setInfoData] = useState<IProduct>()
    const [load, setLoad] = useState<boolean>(true)


    const getInfoDataById = async function (id: string | string[]) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const resJson = await res.json();
            setInfoData(resJson)

        } catch (e) {
            console.log('error', e)
        } finally {
            setLoad(false)
        }
    }

    useEffect(() => {
        getInfoDataById(id)
    }, [id])

    const handleAddProduct = () => {
        const productsLocal: IProduct[] = JSON.parse(localStorage.getItem('carts') as string) || [];

        const isExist = productsLocal?.find(c => c?.id === infoData?.id)
        if (isExist){
            const upDataProduct=productsLocal.map(c=>{
                if (c.id === infoData?.id){
                    return {
                        ...c,quantity: c.quantity+1
                    }
                }
                return  c
            })
            localStorage.setItem('carts', JSON.stringify(upDataProduct))
        }
        else {
            const data=[...productsLocal,{...infoData,quantity:1}]
            localStorage.setItem('carts', JSON.stringify(data))
        }
        toast.success('Carts saved successfully')
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => {
                setIsOpen(false);
            }}
            className='relative z-50'
        >
            <div className='fixed inset-0 bg-black/30' aria-hidden='true'/>

            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4'>
                    <Dialog.Panel
                        className={'mx-auto max-w-3xl rounded bg-white p-10'}
                    >
                        {load ? (
                            <div className='h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin'/>
                        ) : (
                            <div className='flex gap-x-8 h-96'>
                                {infoData?.image && (
                                    <div className='relative w-72 h-full hidden md:inline'>
                                        <CustomImage product={infoData} fill/>
                                    </div>
                                )}
                                <div className='flex-1 flex flex-col'>
                                    <div className='flex-1'>
                                        <h4 className='font-semibold'>
                                            {infoData?.title}
                                        </h4>
                                        <p className='font-medium text-sm'>
                                            ${infoData?.price}
                                        </p>

                                        <div className='flex items-center text-sm my-4'>
                                            <p>{infoData?.rating.rate}</p>

                                            <p className='text-blue-600 hover:underline cursor-pointer text-xs'>
                                                See all {infoData?.rating.count} reviews
                                            </p>
                                        </div>
                                        <p className='line-clamp-5 text-sm'>
                                            {infoData?.description}
                                        </p>
                                    </div>

                                    <div className='space-y-3 text-sm'>
                                        <button
                                            onClick={handleAddProduct}
                                            className='py-2 rounded-2xl button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black hover:border'>
                                            Add to bag
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsOpen(false)
                                                router.push(`/product/${id}`)
                                            }}
                                            className='py-2 rounded-2xl button w-full bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent'
                                        >
                                            View full details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductInfoModal;
