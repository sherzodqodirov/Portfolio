import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import aplesincard from "../image/aplesincard.png";
import tomatocard from"../image/tomatocard.png";
import lagcard from"../image/lagcard.png";
import 'swiper/css';

const ProdctCarusel = () => {

    const cardproduct = [
        {
            texth3: "Orange",
            textp: "Promocode down",
            img: aplesincard,
            backcolor: "backorange",
        },
        {
            backcolor: "backred",
            texth3: "Tomato",
            textp: "Promocode down",
            img: tomatocard
        },
        {
            backcolor: "backyallow",
            texth3: "Sale 40%",
            textp: "Promocode down",
            img: lagcard
        },
        {
            backcolor: "backbule",
            texth3: "Collection",
            textp: "Promocode down",
            img: aplesincard
        },
        {
            backcolor: "backorange",
            texth3: "Sale 40%",
            textp: "Promocode down",
            img: aplesincard
        },
    ];

    const fetchCardproduct = () => {
        return cardproduct.map((item, id) => (
            <SwiperSlide key={id}>
                <div className={`card cardproduct ${item.backcolor}`}>
                    <div className="cardteximg d-flex">
                        <div className="cardtext">
                            <h3>{item.texth3}</h3>
                            <p>{item.textp}</p>
                            <button className="btn btncard ">TEST</button>
                        </div>
                        <div className="cardimg">
                            <img className="w-100" src={item.img} alt="img"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        ))

    }
    return (
        <Swiper className="Swipercarusel"
                spaceBetween={50}
                slidesPerView={4.5}
        >
            {fetchCardproduct()}
        </Swiper>
    );
};

export default ProdctCarusel;