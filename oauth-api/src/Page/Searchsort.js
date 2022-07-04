import React, {useDeferredValue, useMemo, useState} from 'react';

const Searchsort = ({data}) => {
    const[value,setvalue]=useState('');
    const defferedValue=useDeferredValue(value);


    const filtereditems=useMemo(()=>{
        return data.filter(item=>item.name.toLowerCase().includes(defferedValue))
    },[defferedValue]);

    const onChangeValue=(e)=>{
        setvalue(e.target.value);
    }

    return (
        <div className="container text-center ">
            <input className="border-1 my-5 w-25 p-2 " type="text" value={value} onChange={onChangeValue} placeholder="search"/>
            <table className="table  table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">size</th>
                    <th scope="col">price</th>
                </tr>
                </thead>
                <tbody>
                {
                    filtereditems.map((item,idn)=>(
                        <tr key={idn}>
                            <td>{idn+1}</td>
                            <td>{item.name}</td>
                            <td>{item.properties[0].value}</td>
                            <td>{item.importRecord.landedCostPrice.USD} $</td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    );
};

export default Searchsort;
