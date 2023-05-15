import React from 'react';
import './subscribe.css'
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com'

const Subscribe = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target.email);
      emailjs.sendForm('service_0gb8yw7', 'template_j1mckmk', event.target, 'GGJcUSYKscponjqL2')
      .then((result) => {
          toast.success('Send your email message Successfully')
          event.target.reset()
      }, (error) => {
          toast.error(`Send message failed ${error} !!`)
      });
      event.target.reset();
    };
    return (
      <div className="pt-5 inbox">
        <div className="container">
          <div className="row g-4 pt-5 pb-5 d-flex   align-items-center">
            <div className="col-lg-6 mt-0">
              <h2 className="text-white  fs-2 fw-bold">Subscribe To Our Newsletter For Latest Update Of New Products</h2>
            </div>
            <div className="col-lg-6 m-0  ">
              <form
                action=""
                className="row px-4 px-lg-0 input-from "
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="col-lg-8  inbox-input-filed-email"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="col-lg-3  inbox-input-button "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Subscribe;