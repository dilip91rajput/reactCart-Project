import React from 'react'

const CheckoutCartItem = ({id, image, name, description, quantity, price, smallprice, tax}) => {
    
  return (
    <div>
        <figure className="itemside align-items-center mb-4">
            <div className="aside">
                <b className="badge bg-secondary rounded-pill">{quantity}</b>
                <img src={image} alt={name} className="img-sm rounded border" />
            </div>
            <figcaption className="info">
                <a href="#" className="title">{name}</a>
                <div className="price text-muted">Total: ${quantity*price}</div> 
            </figcaption>
        </figure>

    </div>
  )
}

export default CheckoutCartItem
