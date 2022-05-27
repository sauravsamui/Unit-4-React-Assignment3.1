import React from "react";

const Restaurants = ({ restauraData }) => {
   //console.log(restauraData)
  return (
    <div className="container divider">
      <div className="cards">
          {
              restauraData.map((el)=>(
                <div className="card" key={el.id}>
          <img  width="220" height="160px" src={el.image} alt=""/>
          <div className="restaurant-details">
            <div className="restaurant-title">{el.name}</div>
            <div className="restaurant-subtitle">
             {el.category.join(", ")}
            </div>
          </div>
          <div className="restaurant-info">
            <div className="restaurant-ratings">
              <i className="material-icons star-icon">star</i> {el.rating}
            </div>
            <div className="restaurant-delivery-timings">{el.deliveryTimings} MINS</div>
            <div className="restaurant-cost-for-two">₹{el.costForTwo} FOR TWO</div>
          </div>
          <p className="rev">reviews: {el.reviews}</p>
          <p className="p">Payment methods <i className="material-icons star-icon">keyboard_arrow_right</i></p>
          <div className="offer-banner">
            <span className="material-icons"> local_offer </span>
            <span className="offer-text">{el.offer}</span>
          </div>
        </div>
              ))
          }
       
      </div>
    </div>
  );
};

export default Restaurants;
// {  "id":1,
//       "image": "https://raw.githubusercontent.com/riteshf/cherry/main/assets/restaurant1.jpeg",
//       "name": "Chaitanya Parathas",
//       "category": [
//         "North India",
//         "Punjabi",
//         "Chinese",
//         "Thalis Combo",
//         "Beverages"
//       ],
//       "rating": 4.3,
//       "reviews":4356,
//       "deliveryTimings": "33",
//       "costForTwo": 200,
//       "offer": ["20% off", "Use TRYNEW"],
//       "payment_methods": {
//         "card": true,
//         "cash": true,
//         "upi": true
//     }
//     }
