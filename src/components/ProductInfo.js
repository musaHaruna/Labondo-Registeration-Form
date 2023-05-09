import React from 'react';
import { productInforData } from '../data';

function PersonalInfo({ formData, setFormData, titles, page }) {
  return (
    <section className='inputs-container form-bg'>
      <h2>{titles[page]}</h2>
      <p>Provide the necessary details to register your business with us</p>
      {productInforData.map((info, index, arr) => {
        if (index === arr.length - 1) {
          return (
            <div className='inputs' key={info.id}>
              <label htmlFor=''>{info.title}</label>
              <textarea
                className='msgArea'
                name=''
                id=''
                cols='30'
                rows='15'
                style={{ resize: 'none' }}
                placeholder={info.placeholder}
              ></textarea>
            </div>
          );
        }
        return (
          <section className='inputs' key={info.id}>
            <label htmlFor=''>{info.title}</label>
            <input
              className='input'
              type='text'
              placeholder={info.placeholder}
            />
          </section>
        );
      })}

      {/* <input
        type='text'
        placeholder='Email...'
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
       */}
    </section>
  );
}
export default PersonalInfo;
