import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { decrement, increment, removeItem } from '../../store/reducers/countReducer';

const iconHeart = <FontAwesomeIcon icon={faHeart} />;

const CartItem = ({id, image, name, description, quantity, price, smallprice}) => {
const dispatch = useDispatch()
  return (
    
    
        <figure className="itemside me-lg-5">
            <div className="aside">
            <img src={image} alt={name} className="img-sm img-thumbnail"/>
            </div>
            <figcaption className="info">
                <a href="#" className="title">{name}</a>
                <p className="text-muted">{description} </p>
            </figcaption>
            <div className="col-auto bttnCountr">
            <button className="btn btn-primary" style={{margin:'2px'}} 
            onClick={() => {
                if(quantity === 1){
                    dispatch(removeItem(id));
                    return;
                }
                dispatch(
                    decrement({id})
                );
            }} >-</button>
            <span className="btn btn-info">{quantity}</span>
            <button className="btn btn-primary" style={{margin:'2px'}} 
            onClick={() => {
                dispatch(
                    increment({id})
                );
            }}
            >+</button>
            </div>
            <div className="col-auto">
                <div className="price-wrap lh-sm"> 
                    <var className="price h6">${price}</var>  <br/>
                    <small className="text-muted">${smallprice} / per item </small> 
                </div> 
                {/* <!-- price-wrap .// --> */}
            </div>
            <div className="col-auto">
                <div className="price-wrap lh-sm"> 
                    <var className="price h6">${price*quantity}</var>  <br/>
                </div> 
                {/* <!-- price-wrap .// --> */}
            </div>
            <div className="col-auto removBtn">
                <div className="float-lg-end">
                    <button href="#" className="btn btn-light">{iconHeart}</button> 
                    <button href="#" className="btn btn-light text-danger"
                        onClick={() => {
                            dispatch(
                                removeItem((id))
                            );
                        }}
                    > Remove</button>
                </div>
            </div>
        </figure>

  )
}

export default CartItem
