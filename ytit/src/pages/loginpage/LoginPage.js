import React from 'react';
import './loginpage.scss';
import logo1 from '../../icons/logo1.png';
import appstore from '../../icons/appstore.svg'
import googleplay from '../../icons/googleplay.svg'
import Loginheader from "../../components/loginheader/Loginheader";
import Socialmedia from "../../components/socialmedia/Socialmedia";

const LoginPage = () => {

    const handlidnum = (e) => {
        e.preventDefault();
        const idnum = {
            idvalue: e.target.idnumber.value,
        }
        console.log(idnum)
        e.target.reset();
    }

    return (
        <>
            <Loginheader/>
            <section className='header-content'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-12 order-md-1 order-2">
                            <div className="logo1">
                                <img className='w-100' src={logo1} alt="logo1"/>
                            </div>
                            <div className="boxform">
                                <form onSubmit={handlidnum} className='loginform  '>
                                    <label htmlFor="idnumber"> ID номер</label>
                                    <input type='number' id="idnumber"/>
                                </form>
                            </div>
                            <div className="appstoreplay">
                                <div className="appstore">
                                    <img className='w-100' src={appstore} alt="ico"/>
                                </div>
                                <div className="googleplay">
                                    <img className='w-100' src={googleplay} alt="ico"/>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-7 col-12 order-md-2 order-1">
                            <h1>Be Smart! Be Skilled! Be Professional!</h1>
                            <p> В рамках Корейско-узбекского бизнес-форума, посвященного государственному визиту
                                Президента Республики Узбекистан Шавката Мирзиёева в Республику Корея 22-24 ноября 2017
                                года, был подписан Меморандум о создании Технического института Ёджу в городе Ташкент
                                между корейскими и узбекскими партнерами. На основании данного Меморандума, Технический
                                институт Ёджу в городе Ташкент получил статус официального учреждения, обеспечивающего
                                образовательные услуги в сфере высшего образования в Республике Узбекистан на основании
                                государственной лицензии, предоставленной Государственной инспекцией по надзору за
                                качеством образованием при Кабинете Министров Республики Узбекистан 24 июля 2018 года.
                            </p>
                            <p>
                                Основной задачей Технического института Ёджу в городе Ташкент является подготовка
                                высококвалифицированных кадров и специалистов с современными профессиональными навыками,
                                востребованных на рынке труда. В связи с этим, образовательные программы формируются с
                                учетом современных требований и тенденции развития экономики, а также согласовываются с
                                основными и потенциальными работодателями.
                            </p>
                            <p>
                                Институт имеет современную материально-техническую базу. При этом,
                                информационно-ресурсная база обновляется на регулярной основе. В целом, на высоком
                                уровне созданы все условия для студентов для получения качественного образования и
                                проведения досуга в институте. В учебный процесс привлечены зарубежные профессора из
                                США, Великобритании, Бельгии, Южной Кореи, Саудовской Аравии и др. Национальная команда
                                профессорско-преподавательского состава сформирован в основном из числа выпускников
                                ведущих зарубежных вузов США, Великобритании, Италии, Германии, Японии, Южной Кореи и
                                др.
                            </p>
                            <p>
                                У студентов есть возможность участвовать в обменных программах, а также в программах по
                                получению совместных или двойных дипломов. Так, студенты могут участвовать в обменных
                                программах по модели 2+2 и продолжить обучение в Hanyang University, Chungbuk National
                                University, Hankyong University, Chosun University, Busan University of Foreight
                                studies, Jeonju University, Chungcheong university (Республика Корея), United Business
                                Institutes (Бельгия) и Yeoju Institute of Technology. Так, Технический институт Ёджу в
                                городе Ташкент открывает широкие возможности для получения качественного образования в
                                мульти- национальной и дружеской атмосфере.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Socialmedia/>
        </>
    );
};

export default LoginPage;
