import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddProducts } from "../reducers/productSlice"
import { useNavigate } from "react-router-dom"


const AddProduct = () => {

  const [products,setProducts]=useState({})
  let dispatch=useDispatch()
  let navigate=useNavigate()

  let handleChange=(e)=>{

    setProducts({...products,[e.target.name]:e.target.value})
  }
  
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log("pp",products)
    dispatch(AddProducts(products))
    navigate("/")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" onChange={handleChange} />
        <input type="text" placeholder="img" name="image" onChange={handleChange} />
        <input type="number"  placeholder="price" name="price" onChange={handleChange}/>
        <input type="text" placeholder="brand" name="brand" onChange={handleChange}/>
<input type="submit" />
      </form>
    </div>
  )
}

export default AddProduct