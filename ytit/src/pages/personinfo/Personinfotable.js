import React from 'react';
import './personinfo.scss'
const Persanalinfotable = () => {
    return (
        <div className='container-md'>
            <table className="table mt-5   table-bordered border-secondary table-hover" >
                <thead>
                <tr className='table-active'>
                    <th scope="col">ID</th>
                    <th scope="col">20000210</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td scope="row">Group</td>
                    <td>PRI-54U</td>
                </tr>
                <tr>
                    <td scope="row">Direction</td>
                    <td>(B.A.) PRIMARY EDUCATION</td>
                </tr>
                <tr>
                    <td scope="row">3</td>
                    <td colSpan="2">3</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Persanalinfotable;
