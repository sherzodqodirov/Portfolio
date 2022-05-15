import React from 'react';
import {FiPercent} from "@react-icons/all-files/fi/FiPercent";
import {RiCalendarCheckLine} from "@react-icons/all-files/ri/RiCalendarCheckLine";
import {GiReceiveMoney} from "@react-icons/all-files/gi/GiReceiveMoney";
import {HiOutlineUserGroup} from "@react-icons/all-files/hi/HiOutlineUserGroup";
import manper from '../../images/manper.png';
import iphone from '../../images/iphone.png';
import mockup from '../../images/mockup.png';
import manwoman from '../../images/manwoman.png';
import './Bankinfo.scss'
const Bankinfo = () => {
    return (
        <>
         <div className="iconbank row">
             <div className="cardicon col-3">
                 <div className="iconbody">
                  <FiPercent size='24px'/>
                 </div>
                 <h6>От 18%</h6>
                 <p>ставка</p>
             </div>

             <div className="cardicon col-3">
                 <div className="iconbody">
                  <RiCalendarCheckLine size='24px'/>
                 </div>
                 <h6>От 1 до 5 лет</h6>
                 <p>срок</p>
             </div>
             <div className="cardicon col-3">
                 <div className="iconbody">
                  <GiReceiveMoney size='24px'/>
                 </div>
                 <h6>До 3 млрд. сумов </h6>
                 <p>сумма</p>
             </div>
             <div className="cardicon col-3">
                 <div className="iconbody">
                  <HiOutlineUserGroup size='24px'/>
                 </div>
                 <h6>Для ЮЛ и ИП</h6>
                 <p>кредит на расчетный счёт компании</p>
             </div>

         </div>

         <div className="cardsbank">
                 <div className="row">
                     <div className="col-12">
                         <div className="selectsty">
                             <div className="row">
                                 <div className="col-xl-4">
                                     <h1>Выбирайте, сколько взять</h1>
                                     <p>Получайте деньги одной суммой или в пределах
                                         одобренного лимита</p>
                                 </div>
                                 <div className="col-xl-8 telef">
                                     <div className="iphone">
                                         <img className='w-100' src={iphone} alt="tel"/>
                                     </div>
                                     <div className="mockup">
                                         <img className='w-100' src={mockup} alt="moc"/>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-xl-6">
                         <div className="minicardbank">
                             <div className="row">
                                 <div className="col-xl-8 col-12 order-xl-1 order-2">
                                    <h1>Без скрытых комиссий</h1>
                                     <p>Нет комиссий за выдачу и сопровождение
                                         кредита</p>
                                 </div>
                                 <div className="col-xl-4 col-12 order-xl-2 order-1">
                                   <div className="minicardimg">
                                       <img className='w-100'  src={manper} alt="??"/>
                                   </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-xl-6">
                         <div className="minicardbank">
                             <div className="row">
                                 <div className="col-xl-8 col-12 order-xl-1 order-2">
                                    <h1>Возвращайте, как удобно</h1>
                                     <p>Выбирайте график и погашайте кредит
                                         любым доступным способом</p>
                                 </div>
                                 <div className="col-xl-4 col-12 order-xl-2 order-1">
                                   <div className="minicardimg">
                                       <img className='w-100'  src={manwoman} alt="??"/>
                                   </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
         </div>
        </>
    );
};

export default Bankinfo;
