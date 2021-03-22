import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup'
const schema = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'name must be at least 2 characters'),
    size: yup.number()
})
export default function IngredientsForm () {
  const [form, setForm] = useState ({name: ''})
  const [errors, setErrors]  = useState ({name: ''})
  const [disabled, setDisabled] = useState(true)
  const setFormErrors = (name, value) => {
    yup.reach(schema,name).validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

const submit = event => {
    event.preventDefault();

    const pizzaOrder = {
        name: document.getElementById("name").value,
        size: document.getElementById("size").value
      };
  
      axios.post(`https://reqres.in/api/users`, { pizzaOrder })
        .then(apiResult => {
          console.log(apiResult);
          console.log(apiResult.data);
        })
}
const change = event => {
  const {checked, value, name, type} = event.target
  const valueToUse = type === 'checkbox' ? checked : value
  setFormErrors(name, valueToUse)
  setForm({...form, [name]: valueToUse})
}
useEffect(() => {
  schema.isValid(form).then(valid => setDisabled(!valid))
}, [form])
return (
<div className= "IngredientsForm">
   <div> {errors.name}</div>
   <form onSubmit={submit}>
     <label>Name
<input onChange={change} value={form.name} name="name" id="name"/>
     </label>
     <label> Sizes
       <select onChange={change} value={form.Sizes} name = "size" id = "size">
         Select size
         <option value="1">Large</option>
         <option value="2">Medium</option>
         <option value="3">Small</option>
         </select>
     </label>
     <button disabled={disabled}>submit</button>
   </form>
</div>
)
}