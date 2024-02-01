
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Add Product</Link>
      

    </div>
  )
}

export default Navbar