
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#4B4FEA] text-white p-2 flex gap-20'>
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Add Product</Link>
      

    </div>
  )
}

export default Navbar