import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);

  const singleProduct = products.find((ele) => ele.id === id);

  return (
    <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto mt-10">
      {singleProduct && (
        <div className="m-6 p-4 bg-white rounded overflow-hidden shadow-lg">
          <img className="w-full" src={singleProduct.image} alt="" />
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl mb-2">{singleProduct.name}</h2>
            <p className="font-semibold text-l">{singleProduct.brand}</p>
            <p className="font-semibold text-l">$ {singleProduct.price}</p>
          </div>
          <div className="flex justify-between mt-2">
            <button className="bg-[#1C94E8] hover:bg-red-600 text-white font-bold py-2 px-9 rounded focus:outline-none focus:shadow-outline">
              <p className="flex items-center gap-2">
                <BiLike />
                Like
              </p>
            </button>
            <button className="bg-[#E13C54] hover:bg-green-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
              <p className="flex items-center gap-2">
                <BiDislike /> Dislike
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
