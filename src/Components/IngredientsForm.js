import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup'
const schema = yup.object().shape({
  name: yup.string().required('name is required').min(2, 'name must be at least 2 characters')
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
   <form>
     <label>Name
<input onChange={change} value={form.name} name="name" />
     </label>
     <label> Sizes
       <select onChange={change} value={form.Sizes} name="Sizes">
         <option value="">Select option</option>
         <option value="1">Large</option>
         </select>
     </label>
     <button disabled={disabled}>submit</button>
   </form>
</div>
)
}