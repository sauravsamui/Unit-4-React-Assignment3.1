import React from "react";
import style from "../styles/Button.module.css";
const Ratingbutton = ({sortByRating}) => {
  return (
    <div className={style.rating_div} >
         <h3>Ratings:</h3>
      <button  type="button" className="btn btn-outline-primary"
       onClick={(e)=>{
        sortByRating(1)
      }}
      >
        <span className="material-icons">star</span>1
      </button>
      <button  type="button" className="btn btn-outline-secondary"
       onClick={(e)=>{
        sortByRating(2)
      }}
      >
        <span className="material-icons">star</span>2
      </button>

      <button  type="button" className="btn btn-outline-success"
       onClick={(e)=>{
        sortByRating(3)
      }}
      >
        <span className="material-icons">star</span>3
      </button>

      <button  type="button" className="btn btn-outline-danger"
       onClick={(e)=>{
        sortByRating(4)
      }}
      >
        <span className="material-icons">star</span>4
      </button>
    </div>
  );
};

export default Ratingbutton;
