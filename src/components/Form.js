import React, { useState } from 'react';
import BusinessInfo from './BusinessInfo';
import PictureUpload from './PictureUpload';
import ProductInfo from './ProductInfo';
import Submission from './Submission';
import ProgressBar from './ProgressBar';

function Form() {
  const FormTitles = [
    'Business Information',
    'Product/Service',
    'Pictures Upload',
    'Submission',
  ];

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    username: '',
    nationality: '',
    other: '',
  });

  const prevPage = () => {
    setPage((currPage) => currPage - 1);
  };
  const nextPage = () => {
    if (page === FormTitles.length - 1) {
      alert('FORM SUBMITTED');
      console.log(formData);
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <BusinessInfo
          formData={formData}
          setFormData={setFormData}
          titles={FormTitles}
          page={page}
        />
      );
    } else if (page === 1) {
      return (
        <ProductInfo
          formData={formData}
          setFormData={setFormData}
          titles={FormTitles}
          page={page}
        />
      );
    } else if (page === 2) {
      return (
        <PictureUpload
          formData={formData}
          setFormData={setFormData}
          titles={FormTitles}
          page={page}
        />
      );
    } else {
      return <Submission titles={FormTitles} page={page} />;
    }
  };

  return (
    <article className='form'>
      <h1 className='heading'>Business Registration</h1>
      <div className='progressbar'>
        <ProgressBar
          step={page}
          titles={FormTitles}
          displayPage={PageDisplay}
          setFormData={setFormData}
        />
      </div>
      <section>
        <div className='form-container'>
          <div className='body'>{PageDisplay()}</div>
          <div className='buttons'>
            <button className={page == 0 ? 'none' : 'btn'} onClick={prevPage}>
              Prev
            </button>
            <button className='btn' onClick={nextPage}>
              {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Form;
