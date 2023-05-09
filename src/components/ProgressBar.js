const ProgressBar = ({ step, titles, displayPage }) => {
  function handleClick() {
    console.log('Button clicked');
  }

  return (
    <section className='progress-bar line-div'>
      <div className='line'></div>
      <div>
        <button className={`step-num ${step >= 0 ? 'active' : ''}`}>1</button>
        <div className='step-title'>{titles[0]}</div>
      </div>
      <div>
        <button
          className={`step-num  ${step >= 1 ? 'active' : ''}`}
          onClick={handleClick}
        >
          2
        </button>
        <div className='step-title'>{titles[1]}</div>
      </div>
      <div>
        <button className={`step-num   ${step >= 2 ? 'active' : ''}`}>3</button>
        <div className='step-title'>{titles[2]}</div>
      </div>
      <div>
        <button className={`step-num   ${step >= 3 ? 'active' : ''}`}>4</button>
        <div className='step-title'>{titles[3]}</div>
      </div>
    </section>
  );
};

export default ProgressBar;
