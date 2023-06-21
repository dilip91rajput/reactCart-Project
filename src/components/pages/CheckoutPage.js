import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalState } from '../../store/reducers/modalReducer';
import CheckoutCartItem from './CheckoutCartItem';
import DiscountModal from '../Modal/DiscountModel';
import {  calculateTaxAmount, calculateDiscountedAmount, calculateFinalAmount } from '../../utils/utils'


export default function CheckoutPage() {
    const {cart, tax, netamount, total, quantity, price, discount} = useSelector((store) => store.counter);
    // console.log(discount, "final dis")
    const taxAmount = calculateTaxAmount(netamount,total,tax);
    const discountedAmount = calculateDiscountedAmount(discount, taxAmount);
    const finalAmount = calculateFinalAmount(taxAmount, discountedAmount);

    // console.log('final amount', calculateFinalAmount());
    // console.log('total', calculateTaxAmount());
    const { isOpen } = useSelector((store) => store.modal)
    // console.log('modal', isOpen)
    const dispatch = useDispatch();
  return (
    <>
        <section className="padding-y bg-light">
        {isOpen && <DiscountModal />}
        <div className="container">
        <div className="row">
            <main className="col-xl-8 col-lg-8">

                <article className="card mb-4">
                    <div className="content-body">
                        <div className="float-end">
                            <Link to="/register" className="btn btn-outline-primary btnRegister">Register</Link>
                            <Link to="/login" className="btn btn-primary btnLogin">Sign in</Link>
                        </div>
                        <h5>Have an account?</h5>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                </article>

                {/* <!-- ============== COMPONENT CHECKOUT =============== -->			 */}
                <article className="card">
                    <div className="content-body">
                        <h5 className="card-title"> Guest checkout </h5>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label className="form-label">First name</label>
                                    <input type="text" className="form-control" placeholder="Type here" />
                                </div> 
                                {/* <!-- col end.// --> */}

                                <div className="col-6">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control" placeholder="Type here"/>
                                </div> 
                                {/* <!-- col end.// --> */}

                                <div className="col-6 mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div> 
                                {/* <!-- col end.// --> */}

                                <div className="col-6 mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder="example@gmail.com" />
                                </div> 
                                {/* <!-- col end.// --> */}
                            </div> 
                            {/* <!-- row.// --> */}
                            
                            <label className="form-check mb-3">
                            <input className="form-check-input" type="checkbox"/>
                            <span className="form-check-label"> Keep me up to date on news </span>
                            </label>

                            <hr className="my-4"/>

                            <h5 className="card-title"> Shipping info </h5> 

                            <div className="row mb-3">
                                <div className="col-lg-4 mb-3">
                                    <div className="box box-check">
                                        <label className="form-check">
                                            <input className="form-check-input" type="radio" name="dostavka" />
                                            <b className="border-oncheck"></b>
                                            <span className="form-check-label">
                                                Express delivery  <br/>
                                                <small className="text-muted">3-4 days via Fedex </small>
                                            </span>
                                        </label>
                                    </div>
                                </div> 
                                {/* <!-- col end.// --> */}
                                <div className="col-lg-4 mb-3">
                                    <div className="box box-check">
                                        <label className="form-check">
                                            <input className="form-check-input" type="radio" name="dostavka"/>
                                            <b className="border-oncheck"></b>
                                            <span className="form-check-label">
                                                Post office <br/>
                                                <small className="text-muted">20-30 days via post</small>
                                            </span>
                                        </label>
                                    </div>
                                </div> 
                                {/* <!-- col end.// --> */}
                                <div className="col-lg-4 mb-3">
                                    <div className="box box-check">
                                        <label className="form-check">
                                            <input className="form-check-input" type="radio" name="dostavka"/>
                                            <b className="border-oncheck"></b>
                                            <span className="form-check-label">
                                                Self pick-up  <br/>
                                                <small className="text-muted"> Come to our shop </small>
                                            </span>
                                        </label>
                                    </div>
                                </div> 
                                {/* <!-- col end.// --> */}
                            </div> 
                            {/* <!-- row end.// --> */}

                            <div className="row">
                                <div className="col-sm-8 mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" placeholder="Type here"/>
                                </div> 
                                {/* <!-- col end.// --> */}

                                <div className="col-sm-4 mb-3">
                                    <label className="form-label">City*</label>
                                    <select className="form-select" id="city*" aria-label="City*">
                                        <option>New York</option>
                                        <option>Moscow</option>
                                        <option>Samarqand</option>
                                    </select>
                                </div> 
                                {/* <!-- col end.// --> */}

                                <div className="col-sm-4 mb-3">
                                    <label className="form-label">House</label>
                                    <input type="text" className="form-control" placeholder="Type here"/>
                                </div> 
                                {/* <!-- col end.// --> */}

                                <div className="col-sm-4 col-6 mb-3">
                                    <label className="form-label">Postal code</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div> 
                                {/* <!-- col end.// --> */}
                
                                <div className="col-sm-4 col-6 mb-3">
                                    <label className="form-label">Zip</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div> 
                                {/* <!-- col end.// --> */}
                            </div> 
                            {/* <!-- row.// --> */}

                            <label className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" />
                            <span className="form-check-label"> Save this address </span>
                            </label>

                            <div className="mb-4">
                                <label className="form-label">Message to seller</label>
                                <textarea className="form-control"></textarea>	
                            </div> 
                            {/* <!-- col end.// --> */}

                            <div className="float-end">
                                <button className="btn btn-light">Cancel</button>
                                <button className="btn btn-success">Continue</button>
                            </div>
                            
                    </div> 
                    {/* <!-- card-body end.// --> */}
                </article> 
                {/* <!-- card end.// --> */}
                {/* <!-- ============== COMPONENT CHECKOUT .// =============== --> */}

            </main>
            <aside className="col-xl-4 col-lg-4">
                    <article className="ms-lg-4 mt-4 mt-lg-0">
                            <div className="off_applied">
                                <div className="coupon_apply">
                                      <h3 className="title arrow open_model coupon_icon" id="view_available_coupons" onClick={() => {
                                          dispatch(
                                              setModalState({})
                                          );
                                        }}>
                                        <span id="view-all-coupons" className="view-all-coupons arrow_right">1 Offer Available</span>
                                    </h3>                    
                                </div>
                            </div>
                        <br></br>    
                        <h6 className="card-title">Summary</h6>
                        <br></br>
                        <dl className="dlist-align">
                        <dt>Net price:</dt>
                        <dd className="text-end">${taxAmount}</dd>
                        </dl>
                        <dl className="dlist-align">
                        <dt>Shipping cost:</dt>
                        <dd className="text-end"> + $14.00 </dd>
                        </dl>
                        { discount ? <dl className="dlist-align">
                        <dt>Discount ({discount}%):</dt>
                        <dd className="text-end">You Saved $({discountedAmount})</dd>
                        </dl>: null}
                        <hr/>
                        <dl className="dlist-align">
                        <dt> Grand Total: </dt>
                        <dd className="text-end"> <strong className="text-dark">${finalAmount}</strong></dd>
                        </dl>

                        <div className="input-group my-4">
                            <input type="text" className="form-control" name="" placeholder="Promo code" />
                            <button className="btn btn-light text-primary">Apply</button>
                        </div>

                        <hr/>
                      
                        <div>
                        {/* {products && products?.length > 0 && products?.slice(0, 4).map((product, i) => ( */}
                        {cart && cart?.length > 0 && <h6 className="mb-4">Items in the Cart</h6> }
                        {cart.map((item) => {
                            return <CheckoutCartItem key={item.id} {...item} />
                        })}
                      </div>
                </article> 
                
            </aside> 
            
        </div> 
        </div> 
        </section>
    </>
  )
}
