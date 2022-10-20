import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contactus">
        <div className="row mt-5 ">
          <div className="col-md-8 col-12 mx-auto bg-light">
            <div className="container-fluid rounded">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-12">
                  <div className="contact-form mt-3">
                    <div class="card text-white bg-secondary mb-5">
                      <div className="card-header text-center">Contact Us</div>
                      <div className="card-body text-center">
                        <h5 className="card-title text-center mt-4 mb-4">
                          Contact Information
                        </h5>
                        <p className="card-text mb-4">
                          Fill up the form and our Team will get back to you
                          within 24 hours.
                        </p>

                        <div className="mb-5">
                          <h6 className="fs-6">phone: +91987654321</h6>
                        </div>

                        <div className="mb-5">
                          <h6 className="fs-6">email: findr@gmail.com</h6>
                        </div>

                        <div className="mb-5">
                          <h6 className="fs-6">Address: GRIET AAC</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-12 text-dark">
                  <div className="container">
                    <form className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                          placeholder="email"
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="name"
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="address"
                        />
                      </div>
                      <div class="form-floating">
                        <textarea
                          className="form-control area"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                        ></textarea>
                        <label for="floatingTextarea2">
                          write your message
                        </label>
                      </div>

                      <div className="col-12">
                        <button type="submit" class="btn btn-primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
