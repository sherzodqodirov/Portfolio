import React from 'react';
import senirman from '../../images/seniorman.png'
import './homepage.scss'
import RangeMoney from "../../components/rangemoney/RangeMoney";
import Bankinfo from "../../components/infobank/Bankinfo";
import Maintabs from "../../components/maintabs/Maintabs";
import KursValuta from "../../components/kursvaluta/KursValuta";
import Footer from "../../components/footer/Footer";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Home = () => {

    const handlealert = () => {
        alert('САЙТ В РАЗРАБОТКЕ')
    }
    return (
        <>

            <div className="header-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 order-xl-1 order-2">
                         <Fade left>   <div className="headertitle">
                                <h1>Кредиты для бизнеса
                                    на любые цели</h1>
                                <p>
                                    На недвижимость, транспорт, модернизацию производства или пополнение оборотных
                                    средств
                                </p>
                                <div className="butnal">
                                    <button onClick={handlealert} className='btnzay btn btn-outline-danger'>Подать
                                        заявку
                                        онлайн
                                    </button>

                                </div>
                         </div></Fade>
                        </div>
                        <div className="col-xl-7 order-xl-2 order-1">
                           <Flip right>
                            <div className="senirimg">
                                <img className='w-100' src={senirman} alt="headerimg"/>
                            </div>
                           </Flip>
                        </div>
                    </div>
                    <Fade bottom>
                    <RangeMoney/>
                    </Fade>
                </div>
            </div>
            <div className='bankinfo'>
                <div className="container">
                    <Bankinfo/>
                </div>
            </div>
            <div className="categoriybank">
                <div className="container">
                    <Maintabs/>
                </div>
            </div>
            <div className="bankkurs">
                <div className="container">
                  <KursValuta/>
                </div>
            </div>
            <div className="footerend">
                <div className="container">
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default Home;
