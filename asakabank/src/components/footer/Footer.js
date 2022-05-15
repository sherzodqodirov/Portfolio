import React from 'react';
import {FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF";
import {AiFillInstagram} from "@react-icons/all-files/ai/AiFillInstagram";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import './footer.scss'
const Footer = () => {
    return (
        <div className='bankfooter'>
            <div className="row">
                <div className="col-xl-3 col-md-3">
                    <ul className='ulf'>
                        <a href="#">
                            <li>Офисы и банкоматы</li>
                        </a>
                    <a href="#">
                            <li>Пресс-центр</li>
                        </a>
                    <a href="#">
                            <li>Реквизиты</li>
                        </a>
                    </ul>
                </div>
                <div className="col-xl-3 col-md-3">
                    <ul className='ulf'>
                        <a href="#">
                            <li>Справочный центр</li>
                        </a>
                        <a href="#">
                            <li>Тарифы</li>
                        </a>
                        <a href="#">
                            <li>Документы</li>
                        </a>
                    </ul>
                </div>
                <div className="col-xl-3 col-md-3">
                    <h4>Мы социальных сетях</h4>
                    <div className='socmedia'>
                        <FaFacebookF size='20px' style={{marginRight:'30px'}}/>
                        <AiFillInstagram size='25px' style={{marginRight:'30px'}}/>
                        <FaTelegramPlane size='20px'/>
                    </div>
                </div>
                <div className="col-xl-3 col-md-3">
                    <h4>Круглосуточный Контакт центр</h4>
                    <h3>1152</h3>
                    <h4>c 9.00 до (13.00-14.00 обет) с понедельника по пятницу</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;
