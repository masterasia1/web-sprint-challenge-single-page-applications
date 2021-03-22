import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import * as Yup from "yup";

function doSubmit(){
    console.log('do submit');
}

  function IngredientsForm() {

    
        const intialValues = { email: "", password: "" };
        const [formValues, setFormValues] = useState(intialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);
      

    const submitForm = () => {
        console.log(formValues);
    };
    
     const handleChange = (e) => {
        console.log("line 23");
       // if(e.name === undefined){
         //   console.log("line 21");
          //  return;
       // }
        //const { name, value } = e.target;
        //setFormErrors(validate(formValues));
        //setFormValues({ ...formValues, [name]: value });
      };
    
    const handleSubmit = (e) => {
        console.log("line 24");
       // e.preventDefault();

//        setFormErrors(validate(formValues));
  //      setIsSubmitting(true);
      };
    
    const validate = (values) => {
        let errors = {};
        //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if((values.name === undefined) ||  (!(values.name.length > 1))){
          errors.name = "Cannot be blank";
          return errors;
        }
      };
    
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
          submitForm();
        }
      }, [formErrors]);


      return (
        <div className="container">
                    <button>some </button>
          <h1>Select the Stuff You Want!</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">Customer Name</label>
              <input type="text" name="name" onChange={handleChange}/>
              {formErrors.name && (
                <span className="error">{formErrors.name}</span>
              )}
            </div>
            <select name = "sliceSize">
            <option value = "Small">Small</option>
            <option value = "Medium">Medium</option>
            <option value = "Large">Large</option>
        </select>
        <input type = "text" name = "specialInstructions" placeholder = "Special Instructions" />
        <br />
        Toppings:<br />
        <ul>
            <li>
                <input type = "checkbox" name = "sausage" />Sausage
            </li>
            <li>
                <input type = "checkbox" name = "cheese" />Cheese
            </li>
            <li>
                <input type = "checkbox" name = "boogers" />Boogers
            </li>
        </ul>
        <button type = "button">ORDER THIS NOW</button>
          </form>
        </div>
      );
  }

export default IngredientsForm; 