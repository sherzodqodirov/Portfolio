import React, {useDeferredValue, useState} from 'react';
import {FcCurrencyExchange} from "@react-icons/all-files/fc/FcCurrencyExchange";
import {RiMapPin2Fill} from "@react-icons/all-files/ri/RiMapPin2Fill";
import './kursvaluta.scss'

const KursValuta = () => {
    const defval = useDeferredValue(100)
    const [kurssm, setkurssum] = useState(defval);

    const handlekurs = (e) => {
        setkurssum(e.target.value)
    }

    const handlealert = () => {
        alert("в разработке")
    }
    return (
        <div className='boxkurs'>
            <div className="row">
                <div className="col-lg-4">
                    <div className="cardkurs">
                        <h1>Курс валют</h1>
                        <h6 className='active'>Для физических лиц</h6>
                        <h6>Для юридических лиц <span>Курс ЦБ</span></h6>

                        <table className="table table-borderless">
                            <thead>
                            <tr>
                                <th scope="col">Валюта</th>
                                <th scope="col">Покупка</th>
                                <th scope="col">Продажа</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">USD</th>
                                <td>11 420</td>
                                <td>11 450</td>
                            </tr>
                            <tr>
                                <th scope="row">EUR</th>
                                <td>12 500</td>
                                <td>12 700</td>
                            </tr>
                            <tr>
                                <th scope="row">GBP</th>
                                <td>13 200</td>
                                <td>13 500</td>
                            </tr>
                            <tr>
                                <th scope="row">CHF</th>
                                <td>10 450</td>
                                <td>10 550</td>
                            </tr>
                            <tr>
                                <th scope="row">JPY</th>
                                <td>90</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th scope="row">RUB</th>
                                <td>110</td>
                                <td>170</td>
                            </tr>
                            <tr>
                                <th scope="row">USD ATM</th>
                                <td>10 450</td>
                                <td>10 700</td>
                            </tr>
                            </tbody>
                        </table>
                        <hr/>
                        <h6>Данные на 10.08.2021</h6>
                        <button onClick={handlealert} className=' btnkurs btn btn-danger'>динамика курса валют</button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="convertkursval">
                        <h3><FcCurrencyExchange size='45px'/> Конвертер валют</h3>
                        <div className="convertcurrent">

                            <input value={kurssm} onChange={handlekurs} type="number" id='kurssum'/>
                            <div className="curray">
                                usd
                            </div>
                            <div className='converuzs'><h5 className='m-0'>{11400 * kurssm}</h5></div>
                            <div className="curray currayusz">
                                uzs
                            </div>
                        </div>
                    </div>
                    <div className='cardmaps'>
                        <iframe title='maps'
                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d95888.08350990509!2d69.17146211459193!3d41.31968290048086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x38ae8b75480edae7%3A0x43e85ed15008046f!2zQXNha2EgQmFuaywg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!3m2!1d41.3193543!2d69.2414795!5e0!3m2!1sru!2sus!4v1652620332994!5m2!1sru!2sus"
                                width="100%" height="260" style={{border: 0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"/>
                        <div className="mapinfo">
                            <div className="maptext">
                                <h1><RiMapPin2Fill size='30px' color='red'/> Офисы и банкоматы</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero!</p>
                            </div>
                            <div className="srcmapbtn">
                                <a href="https://goo.gl/maps/42mhjBjU1Zj1ErXZ9" target='_blank' rel='noopener noreferrer'>
                                    <button className=' btnsrc btn btn-danger'>перейти</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KursValuta;
