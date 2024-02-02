import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, showProducts } from "../reducers/productSlice";
import { Link } from "react-router-dom";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import "../styles/homepage.css";
import { ClipLoader } from "react-spinners";
const HomePage = () => {
  const { products,loading } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProducts());
  }, [dispatch]);
  console.log("load",loading)

  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#4B4FEA" loading={loading} size={50} />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-4 sm:pt-6 pl-4 sm:pl-6 bg-[#F5F5F5]">
      {products?.map((ele) => (
        <div
          key={ele.id}
          className="card-container gap-2 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-[20%] bg-white rounded overflow-hidden shadow-lg"
        >
          <img className="w-full h-48 object-cover" src={ele.image} alt="" />
          <div className="flex flex-col items-center">
            <Link to={`/products/${ele.id}`}>
              <h2 className="font-bold text-xl mb-2 hover:text-blue-700">
                {ele.name}
              </h2>
            </Link>
            <p className="font-semibold text-l">{ele.brand}</p>
            <p className="font-semibold text-l">$ {ele.price}</p>
          </div>
          <div className="flex justify-between mt-2">
            <button
              className="bg-[#F20000] hover:bg-red-600 text-white font-bold py-2 px-4 sm:px-6 rounded focus:outline-none focus:shadow-outline"
              onClick={() => dispatch(deleteProduct(ele.id))}
            >
              <p className="flex items-center gap-2">
                <MdDeleteOutline />
                Delete
              </p>
            </button>
            <Link to={`/products/${ele.id}/edit`}>
              <button className="bg-[#4AAA4D] hover:bg-green-700 text-white font-bold py-2 px-4 sm:px-9 rounded focus:outline-none focus:shadow-outline">
                <p className="flex items-center gap-2">
                  <MdOutlineEdit />
                  Edit
                </p>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

