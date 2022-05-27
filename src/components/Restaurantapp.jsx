import React from "react";
import CashButton from "./CashButton";
import Ratingbutton from "./Ratingbutton";
import Restaurants from "./Restaurants";
import SortingButton from "./SortingButton";
import data from "../data/data.json";
import Form from './Form';
import styled from "styled-components";
const ButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Restaurantapp = () => {
  const [newData,setNewData] = React.useState(data);
  const [showForm,setShowForm] = React.useState(false)
 
  let dataSort = (Data) => {
    switch (Number(Data)) {
      case 1:
        newData.sort((a,b) => Number(b.costForTwo) - Number(a.costForTwo));
        setNewData([...newData]);//to tell react save the changes
        break;
     default:
      newData.sort((a,b) => Number(a.costForTwo) - Number(b.costForTwo));
      setNewData([...newData]);
  };
}
let addRestaurant =(value)=>{
   setNewData([
     ...newData,value
   ])
}
  function sortByRating(rate){
    //setNewData(data); this is not working why
    switch (rate) {
      case 1:
        //setNewData(data); this is not working why
        let one = data.filter((el) => el.rating > 1);
        setNewData(one);
        break;
      case 2:
        let two = data.filter((el) => el.rating > 2);
        setNewData(two);
        break;
        case 3:
        let three = data.filter((el) => el.rating > 3);
        setNewData(three);
        break;
      default:
        let four = data.filter((el) => el.rating > 4);
        setNewData(four);
    }
  };

let sortByPayment=(value)=>{

  switch(value){
    case 1:
      let one= data.filter((el)=>(
        el.payment_methods.card === true
      ))
      setNewData(one);
      break;

      case 2:
        
        let two=  data.filter((el)=>(
          el.payment_methods.cash === true
        ))
        setNewData(two);
        break;

        default:
          
          let three = data.filter((el)=>(
            el.payment_methods.card === true && el.payment_methods.cash === true && el.payment_methods.upi === true
          ))
          setNewData(three);
          break;
  }
}

  return (
    <>
       
    <button  className="btn btn-warning"
      onClick={()=>{
       setShowForm(!showForm)
      }}>{!showForm?"Form to Submit New Restaurant":"Restaurants Page"}</button>
      {!showForm?<>
      <ButtonDiv>
        <button className="btn btn-danger"
        onClick={()=>{
          sortByRating(1)
        }}
        >HOME</button>
      </ButtonDiv>
      
      <div className="button_div">
        <Ratingbutton sortByRating={sortByRating} />
        <CashButton sortByPayment={sortByPayment} />
        <SortingButton dataSortBy={dataSort} />
      </div>
      <Restaurants restauraData={newData} /></>:<Form addRestaurant={addRestaurant} />}
     
    </>
  );
};

export default Restaurantapp;
