import React from 'react'

export default function Register() {
  return (
    <>
    {/* <!-- ======= Get a Quote Section ======= --> */}
    <section id="login-wrapper" className="login-wrapper">
      <div className="container">

        <div className="row g-0">
        <div className='col-lg-7 mx-lg-auto p-5 mt-5'>
          <div className='login-form p-5'>
            <form action="forms/quote.php" method="post">
              <div className="row gy-4">
                <div className="col-lg-12 text-center">
                  <h2>Create account</h2>
                </div>
                <div className="col-md-12">
                  <input type="text" name="name" className="form-control" placeholder="Name" required />
                </div>
                <div className="col-md-12">
                  <input type="number" name="phone" className="form-control" placeholder="Phone" required />
                </div>
                <div className="col-md-12 ">
                  <input type="email" className="form-control" name="email" placeholder="Email" required />
                </div>

                <div className="col-md-12">
                <input type="password" className="form-control" name="customer[password]" id="CustomerPassword" placeholder="Password"/>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                  <button type="submit">Create</button>
                </div>

              </div>
            </form>

          {/* <!-- End Quote Form --> */}
          <div className="form-group text-left">
            <div className="x py-2">
                <div className="d-block f-15 text-center">
                    <a href="#" className="return-store m-1">Return To Store</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
    {/* <!-- End Get a Quote Section --> */}
    </>
  )
}
