import React from 'react';

const Model = () => {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="" >
              <input type="text" name='name' placeholder='Full Name' required className='w-100 contact-input' />
              <input type="email" name='email' placeholder='Email Address' required className='w-100 contact-input' />
              <input type="number" name='phone' placeholder="Phone No." required className='w-100 contact-input' />
              <div className='d-flex'>
                <input type="text" placeholder='Project Title' name='projectTitle' className='w-50 contact-input me-2' required />
                <select class="w-50 contact-input ms-2" name='choose' required >
                  <option value="Social media Ads">Social media Ads</option>
                  <option value="Meta ads">Meta ads</option>
                  <option value="Google ads">Google ads</option>
                  <option value="Web Analytics">Web Analytics</option>
                  <option value="Additional services">Additional services</option>
                </select>
              </div>
              <textarea name="message" id="" required placeholder='Message' className='w-100 contact-input textarea'></textarea>
              <input type="submit" value="Submit Now" className='w-100 btn contactUs-button' />
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;