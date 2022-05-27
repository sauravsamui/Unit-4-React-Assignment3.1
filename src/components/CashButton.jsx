import React from 'react'
import style from "../styles/Button.module.css";

const CashButton = ({sortByPayment}) => {
  return (
    <div className={style.rating1_div}>
         <h3>Payment by:</h3>
         <button type="button" className="btn btn-warning"
            onClick={()=>{
              sortByPayment(1);
            }}
         > <span className="material-icons">credit_card</span>Card</button>
         <button type="button" className="btn btn-success"
          onClick={()=>{
            sortByPayment(2);
          }}
         > <span className="material-icons">credit_card</span>Cash</button>
         <button type="button" className="btn btn-info"
          onClick={()=>{
            sortByPayment(3);
          }}
         > <span className="material-icons">credit_card</span>All type</button>
    </div>
  )
}

export default CashButton