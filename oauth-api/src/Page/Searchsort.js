import React, {useDeferredValue, useMemo, useState} from 'react';
import {data} from "../data";

const Searchsort = () => {
    const[value,setvalue]=useState('');
    const defferedValue=useDeferredValue(value);
    const [items,setitems]=useState(data);

    const filtereditems=useMemo(()=>{
        return items.filter(item=>item.name.toLowerCase().includes(defferedValue))
    },[defferedValue]);

    const onChangeValue=(e)=>{
        setvalue(e.target.value);
    }

    return (
        <div className="text-center">
            <input className="border-1 my-5 w-25 p-2 " type="text" value={value} onChange={onChangeValue} placeholder="search"/>

            <div>
                {
                    filtereditems.map(item=>(
                        <div key={item.id}>
                            <h6>{item.name}</h6>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Searchsort;
