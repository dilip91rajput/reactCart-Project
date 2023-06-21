import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setModalState } from '../../store/reducers/modalReducer';
import data from '../../json/feature-product';
import { clearCart, setSelectedOption, applyCoupon } from '../../store/reducers/countReducer';
import { calculateTaxAmount, calculateDiscountedAmount } from '../../utils/utils'

const DiscountModal = () => {
const dispatch = useDispatch();
const { selectedOption, tax, netamount, total, discount } = useSelector((store) => store.counter);
const taxAmount = calculateTaxAmount(netamount,total,tax);
const [couponCode, setCouponCode] = useState('');
const discountedAmount = calculateDiscountedAmount(couponCode.discount || 0, taxAmount);
console.log (couponCode , "selectedOption",discountedAmount)
const handleApplyCoupon = () => {
  dispatch(applyCoupon({ couponCode }));
  setCouponCode('');
  dispatch(setModalState());
};


  return (
    <aside className='modal-container confirmBox popup_box'>
      <div className='modal add_coupon'>
              <h2 className='Headertitle'>Select Coupon Code</h2>
        <div className="cop_list">
          <ul>
            {data.promotions.map((couponitem, idx) => (
              <li key={idx}>
                <div className="test coupon_code">
                  <input className="coupon_checkbox non_sor"
                    name="add-radio-1-1"
                    // checked={selectedOption === `${(couponitem.id)}`}
                    onChange={() => setCouponCode(couponitem)}
                    value={couponitem.id}
                    id={`add-radio-${(couponitem.id)}`}
                    type="radio" />
                  <label htmlFor={`add-radio-${(couponitem.id)}`}>{couponitem.code}</label>
                  <div className="save_amt">Save <span className="success_txt">Rs {discountedAmount} </span></div>
                  <p>{couponitem.description} &amp; {couponitem.discount}% OFF</p>
                </div>
              </li>
            ))}
            </ul>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(setModalState());
            }}
          >
            Cancel
          </button>
          <button
            type='button'
            className='btn applybtn'
            onClick={handleApplyCoupon}
          >
            Apply
          </button>
        </div>
      </div>
    </aside>
  );
};
export default DiscountModal