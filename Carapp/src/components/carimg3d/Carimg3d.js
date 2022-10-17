import React, {useState} from 'react';
import {Pannellum} from "pannellum-react";

const Carimg3d = ({carinfo}) => {
    const imginside = `https://cartestwebapp.herokuapp.com/${carinfo?.imgUrlInside}`;
    const imgoutside = `https://cartestwebapp.herokuapp.com/${carinfo?.imgUrlAutside}`;

    const [gender, setGender] = useState("ichki");

    function onChangeValue(event) {
        setGender(event.target.value);
    }

    return (
        <div>
            <h2 className='mb-3'>{carinfo?.marka?.name}</h2>
            <div className="img3d">
                <Pannellum
                    width="100%"
                    height="450px"
                    image={gender === "ichki" ? imginside : imgoutside}
                    pitch={0}
                    yaw={0}
                    hfov={115}
                    maxHfov={113}
                    minPitch={-70}
                    autoLoad

                />
                <p className=' text-center mt-2'><small>Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
                    Mashinaning
                    rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</small></p>

                <form className='d-flex justify-content-center' >
                    <div className='me-5 '>
                        <input    id='input1' onChange={onChangeValue} type="radio" value="tashki" name="gender"
                               checked={gender === "tashki"}/>
                        <label style={{cursor:"pointer"}} htmlFor='input1' className='h6'>Tashqi makon</label>
                    </div>
                    <div >
                        <input  id='input2' onChange={onChangeValue} type="radio" value="ichki" name="gender"
                               checked={gender === "ichki"}/>
                        <label style={{cursor:"pointer"}} htmlFor='input2' className='h6'>Ichki makon</label>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Carimg3d;