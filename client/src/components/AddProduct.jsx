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
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="name" name="name" onChange={handleChange} />
//         <input type="text" placeholder="img" name="image" onChange={handleChange} />
//         <input type="number"  placeholder="price" name="price" onChange={handleChange}/>
//         <input type="text" placeholder="brand" name="brand" onChange={handleChange}/>
// <input type="submit" />
//       </form>
//     </div>

<div className="w-[100%]    flex justify-center ">
<form className="bg-white mt-10 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[25%]  " onSubmit={handleSubmit}>
<div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Name
      </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="name" name="name" onChange={handleChange} />
  </div>
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Image
      </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="img" name="image" onChange={handleChange} />
  </div>
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
       Price
      </label>
  
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number"  placeholder="price" name="price" onChange={handleChange}/>
  </div>
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Brand
      </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="brand" name="brand" onChange={handleChange}/>
</div>
<input className="bg-[#4B4FEA] text-white hover:bg-blue-700 cursor-pointer shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" type="submit" />
</form>
</div>
  )
}

export default AddProduct