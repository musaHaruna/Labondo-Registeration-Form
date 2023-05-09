import React from 'react';

const ProductUpload = ({ img, text, size }) => {
  return (
    <div className='product-flex'>
      <div className='product-flex-2'>
        <img src={img} />
        <div>
          <h3>{text}</h3>
          <p className='size'>{size}</p>
        </div>
      </div>

      <div className=' border'>
        <p>
          Price: <input type='text' placeholder='NGN' />
        </p>
      </div>
    </div>
  );
};

export default ProductUpload;
