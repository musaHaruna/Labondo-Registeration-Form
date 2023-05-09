import React from 'react';
import { uploadPictureData } from '../data';
import ProductUpload from './ProductUpload';
import upload from '../../images/upload.png';
function PictureUpload({ formData, setFormData, titles, page }) {
  return (
    <section className='inputs-container'>
      <h2>{titles[page]}</h2>
      <p>Provide the necessary details to register your business with us</p>
      <section className='upload-grid'>
        <div>
          <div className='upload-container'>
            <img src={upload} alt='' />
            <p>Drag and drop</p>
            <p>Or</p>
            <button className='login'>Browse</button>
          </div>
          <h4>Add More</h4>
        </div>

        <div className='upload-pictures'>
          {uploadPictureData.map((info) => {
            return <ProductUpload key={info.id} {...info} />;
          })}
        </div>
      </section>
    </section>
  );
}

export default PictureUpload;
