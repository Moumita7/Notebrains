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
    <div>
       {
        singleProduct?.map((ele)=>(
        <div  key={ele.id}  className="border w-[20%] h-[40%] ">
    
        <img className="w-[100%]" src={ele.image} alt="" />
        <h2>{ele.name}</h2>
        <p>{ele.brand}</p>
        <p>{ele.price}</p>
        <div>
          <button>like</button>
          <button>Disloke</button>
        </div>
        <div>
          <button>Delete</button>
        </div>
       


        </div>
      ))
    }

    </div>
  )
}

export default ProductDetails