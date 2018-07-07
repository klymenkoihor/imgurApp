import React from "react";

import Filter from "./Filter";

const Header = ({gallery})=>{
    return(
        <div>
            <div>Hello header!</div>
            {gallery.map(( item, i) => (

                <Filter
                    key={i}
                    id={item.name}
                    className={""}
                    label={item.name}
                    options={item.value}
                />
            ))}
        </div>
    )
};

export default Header;