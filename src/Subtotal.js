import React from 'react'
import "./subtotal.css";
import CurrencyFormate from "react-currency-format";

function subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormate renderText={(value) => ( 
        <>
          <p>
            subtotal (0 items): <strong>0</strong>  
          </p>
          <small className='subtotal__gift'>
            <input type="checkbox" /> This order contains a gift
          </small>
       </> 
      )} 
      decimalScale ={2}
      value = {0}
      displayType ={"text"}
      thousandSeparator = {true}
      prefix = {"Rs"}
      />

      <button>Proceed to checkout</button>
    </div>
  )
}

export default subtotal