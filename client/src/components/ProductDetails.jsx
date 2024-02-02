import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import {  showProducts, showSingleProduct } from "../reducers/productSlice";
// import { useEffect } from "react";


const ProductDetails = () => {
  const { id } = useParams();
  const {products}=useSelector((store)=>store.products)

  const singleProduct=products.filter((ele)=>ele.id===id)
  console.log("sng",singleProduct)

  // my
  console.log("pooo",products)
  console.log("id",id)

  // let dispatch=useDispatch()
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(showProducts(id));
  // }, [dispatch, id]);
  return (
    <div className="w-[100%]    flex justify-center ">
       {
        singleProduct?.map((ele)=>(
        <div  key={ele.id}  className=" p-4 w-[20%] h-[30%] bg-white rounded overflow-hidden shadow-lg ">
    
        <img className="w-[100%]" src={ele.image} alt="" />
        <div className=" flex flex-col items-center">
        <h2 className="font-bold text-xl mb-2">{ele.name}</h2>
        <p className="font-semibold text-l">{ele.brand}</p>
        <p className="font-semibold text-l">$ {ele.price}</p>
        </div>
   
       
       


        </div>
      ))
    }

    </div>
  )
}

export default ProductDetails