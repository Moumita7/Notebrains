// import { useEffect } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, showProducts } from "../reducers/productSlice"
import { Link } from "react-router-dom"
// import Loader from "react-loader-spinner"
// import Loader from 'react-loader-spinner/dist/loader/ThreeDots';



const HomePage = () => {

  const {products}=useSelector((store)=>store.products)

  // my

  // let dispatch=useDispatch()
  const dispatch = useDispatch();
  console.log("usssnewwww",products)
  let fetchData=async()=>{
    return await axios.get("http://localhost:5000/products")
    // console.log(res.data)

  }
  // useEffect(()=>{
  //   fetchData()
  // },[])

  let {data,isLoading}=useQuery("data",
  fetchData
  // ()=>{
  //  return fetch("http://localhost:5000/products").then((res)=>res.json())
  // }
)
console.log(data?.data)
console.log("ss",showProducts())


  useEffect(()=>{
dispatch(showProducts())
  },[dispatch])


if(isLoading) return  <h2>loading...</h2>
{/* <Loader
type="Puff"
color="#00BFFF"
height={100}
width={100}
timeout={3000} // 3 secs
/>  */}
  return (
    <div className="flex flex-wrap  gap-10 pt-10 pl-10 bg-[#F5F5F5]">
       {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    
    {
      products?.map((ele)=>(
        <div  key={ele.id}  className=" p-4 w-[20%] h-[30%] bg-white rounded overflow-hidden shadow-lg ">
        <img className="w-full h-48 object-cover" src={ele.image} alt="" />
        <div className=" flex flex-col items-center">


        <Link to={`/products/${ele.id}`}><h2 className="font-bold text-xl mb-2">{ele.name}</h2></Link>
        <p className="font-semibold text-l">{ele.brand}</p>
        <p className="font-semibold text-l">$ {ele.price}</p>
        {/* <div>
          <button>like</button>
          <button>Disloke</button>
        </div> */}
        {/* <div className=" border flex gap-12 ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>dispatch(deleteProduct(ele.id))}>Delete</button>
          <Link to={`/products/${ele.id}/edit`}>  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" >        edit</button></Link>
        </div> */}
       
        {/* <Link to={`/products/${ele.id}`}>
        view

        </Link> */}
        {/* <br /> */}
        {/* <Link to={`/products/${ele.id}/edit`}>
        edit

        </Link> */}
        </div>
        <div className="  flex justify-between mt-2">
          <button className="bg-[#F20000] hover:bg-red-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" onClick={()=>dispatch(deleteProduct(ele.id))}>Delete</button>
          <Link to={`/products/${ele.id}/edit`}>  <button className="bg-[#4AAA4D] hover:bg-green-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" >        edit</button></Link>
        </div>
        </div>
      ))
    }
    </div>
  )
}

export default HomePage