import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateTaxAmount, vatCalculation } from '../../utils/utils';

export default function ShoppingcartBasket() {
  const {cart, tax, total, netamount, quantity} = useSelector((store) => store.counter);
  // console.log('netamount', netamount)
  const taxAmount = calculateTaxAmount(netamount,total,tax);
  const vatAmount = vatCalculation(total,tax);
  const dispatch = useDispatch();
  return (
    <>
      <aside className="col-lg-3">
                <div className="card">
                <div className="card-body">
                    <dl className="dlist-align">
                    <dt>Net Price:</dt>
                    <dd className="text-end"> <span>${total.toFixed(2)}</span></dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>VAT({tax}%)</dt>
                    <dd className="text-end"> {<span>${vatAmount}</span>} </dd>
                    </dl>
                    <hr/>
                    <dl className="dlist-align">
                    <dt>Total Price:</dt>
                    <dd className="text-end text-dark h5"> <span>${taxAmount}</span> </dd>
                    </dl>
                    
                    <div className="d-grid gap-2 my-3">
                        <Link href="#" className="btn btn-success w-100" to="/checkout"> Make Purchase </Link>
                        <Link className='btn btn-light w-100' to="/product">Back to Shop</Link>
                    </div>
                </div> 
                {/* <!-- card-body.// --> */}
                </div> 
                {/* <!-- card.// --> */}

            </aside> 
            {/* <!-- col.// --> */}

    </>
  )
}
