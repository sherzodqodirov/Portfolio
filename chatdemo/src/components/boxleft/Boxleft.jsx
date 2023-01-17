import React from 'react';
import imgprofil from '../../assets/imgprofil.svg'
import usericon2 from '../../assets/usericon2.svg'
import addbtn from '../../assets/addbtn.svg'
import Addbtnmodal from "../addbtnmodal/Addbtnmodal";
const Boxleft = () => {
    return (
        <div className='boxleft rounded-3'>
            <div className="prof text-center">
                <div className="profimg">
                    <img className='w-100' src={imgprofil} alt="img"/>
                </div>
                <h6>Dilfuza Qodirova</h6>
                <p>@username</p>
            </div>
            <div className="users">
                <ul className="nav nav-pills mb-3 justify-content-between" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">All
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">Subscribed
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">Friends
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane tabcon fade show active" id="pills-home" role="tabpanel"
                         aria-labelledby="pills-home-tab" tabIndex="0">
                        <div className="usersbox d-flex">
                            <div className="imguser">
                                <img className='w-100' src={usericon2} alt="img"/>
                            </div>
                            <h4>Sarah Bakerson <br/> <span>#1546234</span></h4>
                        </div>
                     <div className="usersbox d-flex">
                            <div className="imguser">
                                <img className='w-100' src={usericon2} alt="img"/>
                            </div>
                            <h4>Sarah Bakerson <br/> <span>#1546234</span></h4>
                        </div>
                     <div className="usersbox d-flex">
                            <div className="imguser">
                                <img className='w-100' src={usericon2} alt="img"/>
                            </div>
                            <h4>Sarah Bakerson <br/> <span>#1546234</span></h4>
                        </div>
                     <div className="usersbox d-flex">
                            <div className="imguser">
                                <img className='w-100' src={usericon2} alt="img"/>
                            </div>
                            <h4>Sarah Bakerson <br/> <span>#1546234</span></h4>
                        </div>
                     <div className="usersbox d-flex">
                            <div className="imguser">
                                <img className='w-100' src={usericon2} alt="img"/>
                            </div>
                            <h4>Sarah Bakerson <br/> <span>#1546234</span></h4>
                        </div>
                     <div className="usersbox d-flex">
                            <div className="imguser">
                                <img className='w-100' src={usericon2} alt="img"/>
                            </div>
                            <h4>Sarah Bakerson <br/> <span>#1546234</span></h4>
                        </div>
                     <div className="usersbox d-flex">
                            <div className="imguser">
                                <img className='w-100' src={usericon2} alt="img"/>
                            </div>
                            <h4>Sarah Bakerson <br/> <span>#1546234</span></h4>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                         aria-labelledby="pills-profile-tab" tabIndex="0"> no data
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                         aria-labelledby="pills-contact-tab" tabIndex="0">no data
                    </div>
                </div>
                <button className='addbtn' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
                <Addbtnmodal/>
            </div>
        </div>
    );
};

export default Boxleft;