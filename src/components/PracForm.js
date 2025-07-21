import React, {useState} from 'react';

function PracForm() {

  const [details, setDetails] = useState({
    name: "",
    email: "",
    options: "",
    message: ""
  });

  const handleChange = (event) => {
    const {name,value} = event.target;

    setDetails((prev) => {
      return {...prev, [name]: value}
    });    
  };

  //console.log(details);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(details);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto my-5">
            <h3 className="text-center mb-5">React Form Handling and Validation</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput11" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput11" placeholder="Full Name" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="" className="form-label">Select Options</label>
                <select name="options" className="form-select" aria-label="Default select example" onChange={handleChange}>
                  <option selected>Select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              {/* <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                  <label className="form-check-label" for="checkDefault">
                    Default checkbox
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="checkChecked" checked1 />
                  <label className="form-check-label" for="checkChecked">
                    Checked checkbox
                  </label>
                </div>
              </div> */}
              {/* <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                  <label className="form-check-label" for="radioDefault1">
                    Default radio
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked1 />
                  <label className="form-check-label" for="radioDefault2">
                    Default checked radio
                  </label>
                </div>
              </div> */}
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleChange} ></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary float-end">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PracForm;
