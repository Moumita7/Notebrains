
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#4B4FEA] text-white py-4 px-10 flex gap-20 font-bold text-l'>
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Add Product</Link>
      

    </div>
  )
}

export default Navbar