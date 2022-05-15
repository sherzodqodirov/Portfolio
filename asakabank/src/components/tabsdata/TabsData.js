import React from 'react';
import {FaDotCircle} from "@react-icons/all-files/fa/FaDotCircle";
import creditimgob from '../../images/creditimgob.png'
import creditimgob2 from '../../images/creditimgob2.png'
import './tabsdata.scss'

const TabsData = () => {
    const handlealert = () => {
        alert('Сайт в разработке 👩🏻‍💻👩🏻‍💻👩🏻‍💻')
    }
    return (
        <div className="creditoborot">
            <div className='row mb-5'>
                <div className="col-xl-5 col-lg-5">
                    <div className="creditimgob">
                        <img className='w-100' src={creditimgob} alt="???"/>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                    <div className="creditobtext">
                        <h2>Кредит Оборотный</h2>
                        <ul>
                            <li><FaDotCircle color='red' size='12px' style={{marginRight: "20px"}}/> Пополнение
                                оборотных средств
                            </li>
                            <li><FaDotCircle color='red' size='12px' style={{marginRight: "20px"}}/>Осуществление
                                текущих расходов
                            </li>
                            <li><FaDotCircle color='red' size='12px' style={{marginRight: "20px"}}/>Исполнение текущих,
                                государственных и экспортных
                                контрактов
                            </li>
                            <li><FaDotCircle color='red' size='12px' style={{marginRight: "20px"}}/>Финансирование любых
                                целей без подтверждения целевого
                                использования
                            </li>
                            <li><FaDotCircle color='red' size='12px' style={{marginRight: "20px"}}/>Рефинансирование
                                оборотных кредитов других банков
                            </li>
                        </ul>
                        <div className="bankcreditin">
                            <div className="getmoney">
                                <h5>до 36 месяцев</h5>
                                <p>срок кредита</p>
                            </div>
                            <div className="getmoney">
                                <h5>18%</h5>
                                <p>минимальная ставка</p>
                            </div>
                            <div className="getmoney">
                                <h5>от 25 000 000 сумов</h5>
                                <p>минимальная сумма</p>
                            </div>
                        </div>

                        <div className="btnzayavkalar">
                            <button onClick={handlealert} className='btn btn-danger podzay'>Подать заявку онлайн
                            </button>
                            <h5>Подробнее</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='row mb-5 mt-5'>
                <div className="col-xl-5 col-lg-5">
                    <div className="creditimgob">
                        <img className='w-100' src={creditimgob2} alt="???"/>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                    <div className="creditobtext">
                        <h2>Кредит Инвестиционный</h2>
                        <ul>
                            <li><FaDotCircle color='red' size='12px' style={{marginRight: "20px"}}/> Рефинансирование
                                задолженности перед банками
                                и лизинговыми компаниями
                            </li>
                            <li><FaDotCircle color='red' size='12px' style={{marginRight: "20px"}}/>Приобретение жилой
                                или коммерческой недвижимости
                                под залог приобретаемых объектов

                            </li>
                            <li><FaDotCircle color='red' size='12px' style={{marginRight: "20px"}}/>Покупка транспорта и
                                оборудования для хозяйственной
                                деятельности
                            </li>

                        </ul>
                        <div className="bankcreditin">
                            <div className="getmoney">
                                <h5>до 36 месяцев</h5>
                                <p>срок кредита</p>
                            </div>
                            <div className="getmoney">
                                <h5>18%</h5>
                                <p>минимальная ставка</p>
                            </div>
                            <div className="getmoney">
                                <h5>от 25 000 000 сумов</h5>
                                <p>минимальная сумма</p>
                            </div>
                        </div>

                        <div className="btnzayavkalar">
                            <button onClick={handlealert} className='btn btn-danger podzay'>Подать заявку онлайн
                            </button>
                            <h5>Подробнее</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsData;
