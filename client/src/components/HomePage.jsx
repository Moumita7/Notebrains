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
    <div className="flex flex-wrap  gap-5">
       {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    
    {
      products?.map((ele)=>(
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
          <button onClick={()=>dispatch(deleteProduct(ele.id))}>Delete</button>
        </div>
       
        <Link to={`/products/${ele.id}`}>
        view

        </Link>
        <br />
        <Link to={`/products/${ele.id}/edit`}>
        edit

        </Link>
        </div>
      ))
    }
    </div>
  )
}

export default HomePage