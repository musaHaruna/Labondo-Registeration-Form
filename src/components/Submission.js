import React from 'react';
import { uploadPictureData } from '../data';
import ProductUpload from './ProductUpload';

const Submission = ({ titles, page }) => {
  return (
    <section className='inputs-container'>
      <h2>{titles[page]}</h2>
      <p> Provide the necessary details to register your business with us</p>
      {uploadPictureData.map((info) => {
        return <ProductUpload key={info.id} {...info} />;
      })}
    </section>
  );
};

export default Submission;
