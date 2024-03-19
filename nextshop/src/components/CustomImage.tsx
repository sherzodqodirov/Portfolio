'use client'
import React, {FC, useState} from "react";
import {IProduct} from "@/types";
import Image from "next/image";

interface Props {
    product: IProduct;
    fill?: boolean;
}

const CustomImages: FC<Props> = ({product, fill}) => {
    const [load, setLoad] = useState(true)

    return (
        <>
            {fill ? (
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                        load
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                    }}`}
                    onLoadingComplete={() => setLoad(false)}
                />
            ) : (
                <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={1000}
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                        load
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                    }}`}
                    onLoadingComplete={() => setLoad(false)}
                />
            )}
        </>
    );
};

export default CustomImages;
