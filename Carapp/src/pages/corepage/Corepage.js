import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getcarall} from "../../redux/admincarall/reducer";
import {HiOutlineArrowRight} from "react-icons/hi"
import "./corepage.scss"
import Loading from "../../components/Loading/Loading";
import Paging from "../../components/Paging/Paging";
import Categormadal from "../../components/catedormodal/Categormadal";

const Corepage = () => {
    const dispatch = useDispatch()
    const [pnum, setpnum] = useState(1);
    const allcardata = useSelector(state => state.carall.caralldata)
    const total = useSelector(state => state.carall.total);
    const isloading = useSelector(state => state.carall.isloading)
    const error = useSelector(state => state.carall.error)
    useEffect(() => {
        dispatch(getcarall(pnum))
    }, [pnum])
    return (
        <div className='container bg-light rounded-3 p-3'>
            <div className="contcore d-flex justify-content-between align-items-center">
                <h4>Mashinalr</h4>
                <div className="addcar">
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">+ Kategoriya qo’shish</button>
                    <button className='btn btn-primary ms-5'>+ Mashina qo‘shish</button>
                </div>
                <Categormadal/>
            </div>
            {
                isloading ? (
                    <Loading/>
                ) : error !== null ? (
                    <h4>{error}</h4>
                ) : (
                    <div className="boxtable mt-3 text-center">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Markasi</th>
                                <th scope="col">Gearbook</th>
                                <th scope="col">Tanirovkasi</th>
                                <th scope="col">Motor</th>
                                <th scope="col">Year</th>
                                <th scope="col">Color</th>
                                <th scope="col">Distance</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {allcardata.map((itemcar, idn) => (
                                <tr key={idn}>
                                    <th scope="row">{idn + 1}</th>
                                    <td>{itemcar.marka?.name}</td>
                                    <td>{itemcar.gearbok}</td>
                                    <td>{itemcar.tonirovka}</td>
                                    <td>{itemcar.motor}</td>
                                    <td>{itemcar.year}</td>
                                    <td>{itemcar.color}</td>
                                    <td>{itemcar.distance}</td>
                                    <td className='delbtn'><HiOutlineArrowRight/></td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                )
            }
            <Paging pnum={pnum} setpnum={setpnum} total={total}/>
        </div>
    );
};

export default Corepage;