import { useEffect } from "react"
import axios from "axios"


const HomePage = () => {
  let fetchData=async()=>{
    let res=await axios.get("http://localhost:5000/products")
    console.log(res.data)

  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default HomePage