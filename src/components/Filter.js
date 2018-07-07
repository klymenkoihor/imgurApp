import React from "react";

const Filter = ({id, className, label, options})=>{
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id}>
                {
                    options.map( item =>(
                        <option value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
};

export default Filter;



