import React from 'react'
import Breadcrumb from '../Breadcrumb';
import ShoppingcartBasket from './ShoppingcartBasket';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { useEffect } from 'react';
import { setModalState } from '../../store/reducers/modalReducer';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import { calculateTotals, clearCart } from '../../store/reducers/countReducer';

export default function ShoppingCart() {
  const {cart, total, quantity} = useSelector((store) => store.counter);
  const { isOpen } = useSelector((store) => store.modal);
  console.log('modal', isOpen)
  console.log('checkout page is ', cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  if (quantity < 1) {
    return (
        <div>
        <Breadcrumb/>
        <section className="padding-y bg-light">
        <div className="container">
        <div className="row">
        <header className='cart'>
          <h2>Your shopping cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
          <Link className='backToshop' to="/product">Back to Shop</Link>
        </header>
        </div>
        </div>
      </section>
      </div>
    );
  }

  return (
    <div>
        <Breadcrumb/>
        {isOpen && <Modal/>}
        <section className="padding-y bg-light">
        <div className="container">

        {/* <!-- =================== COMPONENT CART+SUMMARY ====================== --> */}
        <div className="row">
            <div className="col-lg-9">

                <div className="card">
                <div className="content-body">
                    <h4 className="card-title mb-4">Your shopping cart</h4>
                    <article className="row gy-3 mb-4">
                      <div> 
                        {cart.map((item) => {
                            return <CartItem key={item.id} {...item} />
                        })}
                      </div>
                    </article> 
                    {/* <!-- row.// --> */}
                </div> 
                {/* <!-- card-body .// --> */}
                <div className="d-grid gap-2 my-3 col-md-3 clear-cart">
                    <button href="#" className="btn btn-success w-20"  
                        onClick={() => {
                        dispatch(
                            setModalState({})
                            );
                        }}
                    > Clear Cart </button>
                </div>
                <div className="content-body border-top">
                    <p><i className="me-2 text-muted fa-lg fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div> 
                {/* <!-- card-body.// --> */}

                </div> 
                {/* <!-- card.// --> */}

            </div> 
            {/* asid basket rendering */}
            <ShoppingcartBasket/>
        </div> 
        <br/>

        </div> 
        {/* <!-- container .//  --> */}
        </section>
    </div>
  )
}
