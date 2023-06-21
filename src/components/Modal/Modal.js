import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/reducers/countReducer';
import { setModalState } from '../../store/reducers/modalReducer';

const Modal = () => {
const dispatch = useDispatch();
  return (
    <aside className='modal-container confirmBox'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(setModalState());
            }}
          >
            Confirm
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => {
              dispatch(setModalState());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal
