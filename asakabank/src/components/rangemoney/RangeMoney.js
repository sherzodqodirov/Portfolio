import React from 'react';
import './ramgemoney.scss'

const RangeMoney = () => {

    const handlealert = () => {
      alert("РАЗРАБОТКЕ !")
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="card creditcard border-0">
                    <div className="card-body creditbody">
                        <div className="row">
                            <div className="col-xl-4 ">
                                <h6>Сколько вам нужно</h6>
                                <div className="form-group">
                                    <label htmlFor="customRange1" className="labeltext">282 017 911</label>
                                    <input type="range" className="slider" id="customRange1"/>
                                </div>
                                <p>Предварительный расчет. Не является публичной офертой.</p>
                            </div>
                         <div className="col-xl-4 ps-xl-5 ">
                                <h6>Срок кредита</h6>
                                <div className="form-group">
                                    <label htmlFor="customRange1" className="labeltext">4 года</label>
                                    <input type="range" className="slider" id="customRange1"/>
                                </div>
                            </div>
                        <div className="col-xl-4 ps-xl-5 ">
                                <h6 className='emaney'>Ежемесячный платеж</h6>
                            <h3>15 321 905  <span>сум.</span></h3>
                            <button onClick={handlealert} className=' btnzayav btn btn-danger'>Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default RangeMoney;
