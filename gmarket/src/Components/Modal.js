import React from 'react';
import Calendars from "./Calendar";
import CalenHelp from "./CalenHelp";

const Modal = () => {
    return (
        <>
            <button className="btn btn-light btnModal" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div className="timebox d-flex align-items-center"><span className="icon2 icon-timeicon"></span> <h6>By 09:00 — 23:00</h6></div>
            </button>

            <div className="offcanvas offcanvas-end px-3" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Delivery time</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Calendars/>
                      <CalenHelp/>
                </div>
            </div>
        </>
    );
};

export default Modal;
