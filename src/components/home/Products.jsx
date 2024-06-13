import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const searchQuery = useSelector((state) => state.amazon.searchQuery);
  const selectedCategory = useSelector((state) => state.amazon.selectedCategory);

  const productData = data;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = productData.filter((item) => {
    const categoryMatch = selectedCategory === 'All' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const searchMatch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div>
      {/* Inline style for left-to-right animation */}
      <style>
        {`
          .move-left-to-right {
            transition: transform 0.8s ease-in-out;
          }
          .move-left-to-right:hover {
            transform: translateX(20px);
          }
        `}
      </style>
      
      <div className='products-container max-w-screen-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className='bg-white h-auto border border-gray-200 py-6 shadow-md relative flex flex-col gap-4 rounded-lg'>
              <span className='text-xs capitalize italic absolute top-2 right-5 text-gray-500'>{item.category}</span>
              <div className='w-full h-auto flex items-center justify-center relative'>
                <img
                  className='w-52 h-64 object-contain move-left-to-right'
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className='px-4 z-10 bg-white'>
                <div className='flex items-center justify-between'>
                  <h2 className='font-titleFont tracking-wide text-lg text-blue-700 font-bold'>
                    {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                  </h2>
                  <p className='text-sm text-gray-600 font-semibold'>${item.price}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-700'>{item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}</p>
                  <div className='text-yellow-500 flex'>
                    {[...Array(item.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
                <button onClick={() => dispatch(addToCart({
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  price: item.price,
                  category: item.category,
                  image: item.image,
                  quantity: 1 // assuming adding one item at a time
                }))} className='w-full font-titlefont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:from-yellow-300 hover:to-yellow-300 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p className='col-span-full text-center text-xl text-gray-700'>No products available</p>
        )}
        {isModalOpen && selectedProduct && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-4 rounded-lg max-w-lg w-full relative'>
              <button onClick={closeModal} className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'>
                Close
              </button>
              <h2 className='text-xl font-bold mb-2'>{selectedProduct.title}</h2>
              <img className='w-64 h-64 object-contain mx-auto' src={selectedProduct.image} alt={selectedProduct.title} />
              <p className='text-gray-700 mt-4'>{selectedProduct.description}</p>
              <p className='text-lg font-semibold mt-2'>${selectedProduct.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
