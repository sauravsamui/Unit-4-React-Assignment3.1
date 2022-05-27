import React, { useRef, useState } from "react";
import styled from "styled-components";
const FormDiv = styled.div`
  width: 50%;
  background-color: white;
  margin: auto;
  margin-top: 50px;
  padding:20px;
`;
const Button = styled.button`

border:1px solid green;
background-Color:white;
color:green;
cursor:pointer;
padding:10px 20px;
font-size:medium;
outline:none;

`
const Form = ({ addRestaurant }) => {
  const ide = useRef(20);
  const [details, setDetails] = useState({
    id: ide,
    image: "",
    name: "",
    category: [],
    rating:"" ,
    reviews:"" ,
    deliveryTimings: "",
    costForTwo: "",
    offer: ["20% off", "Use TRYNEW"],
    payment_methods: {
      card: true,
      cash: true,
      upi: true,
    },
  });

  let handleChange = (e) => {
    let { type, name, value } = e.target;
   
    // if(type=="radio"){
    //   setDetails({
    //     ...details ,[payment_methods]:{
    //       [name]:checked
    //     }
    //   })
    // }
    if (name === "category") {
      setDetails({
        ...details,
        [name]: [value.split(",")],
      });
    } else {
      setDetails({
        ...details,
        [name]: value,
      });
    }
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    ide.current = ide.current + 1;
    console.log(details);
    addRestaurant(details);
    setDetails({
      id: ide,
      image: "",
      name: "",
      category: [],
      rating:"" ,
      reviews:"" ,
      deliveryTimings: "",
      costForTwo: "",
      offer: ["20% off", "Use TRYNEW"],
      payment_methods: {
        card: true,
        cash: true,
        upi: true,
      }})
  };
  return (
    <>
      <FormDiv>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Image</label>
            <input
             value={details.image}
              name="image"
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Provide Url"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input value={details.name}
              name="name"
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Restaurant Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input value={details.category}
              name="category"
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Category..."
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Rating</label>
            <input value={details.rating}
              name="rating"
              type="float"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="rating"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Number of Reviews</label>
            <input value={details.reviews}
              name="reviews"
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="No. Of Reviews"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Delivery Time(in mins)</label>
            <input value={details.deliveryTimings}
              name="deliveryTimings"
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Delivery Timing"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Cost For Two</label>
            <input value={details.costForTwo}
              name="costForTwo"
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Cost"
              onChange={handleChange}
            />
          </div>
         <Button type="submit">Submit</Button>
        </form>
      </FormDiv>
    </>
  );
};

export default Form;
