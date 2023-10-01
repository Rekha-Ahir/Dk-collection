import React from "react";
import { useState } from "react";
const Srch = (props) => {
   
    const { filterText,

        onFilterTextChange,
    } = props

    return (<>
        <form>
            <input
                type="text"
                value={filterText} placeholder="Srch..."
                onChange={(e) => {onFilterTextChange(e.target.value)
                console.log(e.target.value)}} />
            {/* <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label> */}
        </form>
    </>)
}
export default Srch;