import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../reducers/productSlice";

const EditProduct = () => {
  const { id } = useParams();
  console.log(id);

  let [data,setData]=useState()
  const {products} =useSelector((store)=>store.products)

  let dispatch=useDispatch()
  let navigate=useNavigate()
  // console.log("pd",products)

  useEffect(()=>{
    if(id){
      let singleProduct=products.filter((ele)=>ele.id==id)
      setData(singleProduct[0])
    }
    
  },[])

  let handleAdd=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }

  let handleUpdate=(e)=>{
    e.preventDefault()

    dispatch(updateProduct(data))
    navigate("/")


  }
  console.log("d",data)
  return (
    // <div>
    //   <form onSubmit={handleUpdate}>
    //     <input type="text" placeholder="name" name="name" value={data && data.name} onChange={handleAdd}/>
    //     <input type="text" placeholder="img" name="image" value={data && data.image} onChange={handleAdd}/>
    //     <input type="number" placeholder="price" name="price" value={data &&  data.price} onChange={handleAdd} />
    //     <input type="text" placeholder="brand" name="brand" value={data && data.brand}  onChange={handleAdd}/>
    //     <input type="submit" />
    //   </form>
    // </div>

    <div className="w-[100%]    flex justify-center ">
<form className="bg-white mt-10 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[25%]  " onSubmit={handleUpdate}>
<div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Name
      </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="name" name="name" value={data && data.name} onChange={handleAdd} />
  </div>
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Image
      </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="img" name="image" value={data && data.image} onChange={handleAdd} />
  </div>
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
       Price
      </label>
  
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number"  placeholder="price" name="price" value={data && data.price} onChange={handleAdd}/>
  </div>
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Brand
      </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="brand" name="brand" value={data && data.brand} onChange={handleAdd}/>
</div>
<input className="bg-[#4B4FEA] text-white hover:bg-blue-700 cursor-pointer shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" type="submit" />
</form>
</div>
  );
};

export default EditProduct;
