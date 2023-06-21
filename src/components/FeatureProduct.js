import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../json/feature-product';
import { updateCart, saveProducts } from '../store/reducers/countReducer';

export default function FeatureProduct() {
  const { products } = data
  // console.log('data', products);
  const dispatch = useDispatch();

  // const [cartitem, setCartitem] = useState([]);
  // useEffect(() => {
  //   if(products.length) {
  //     let updatedProducts = products.map((product) => ({...product, addedToCart: false}))
  //     console.log(updatedProducts, "Prodss");
  //   }
    
  // }, [products])
  // const checkoutpage = useSelector((state) => state.counter.cart);
  // console.log('product page ', checkoutpage);
  // console.log('new array')
  return (
    <>
      {/* <!-- ======= Services Section ======= --> */}
      <section id="service" className="services pt-0">
        <div className="container">

          <div className="section-header">
            <span>Feature Product</span>
            <h2>Feature Product</h2>
          </div>

          <div className="row gy-4">

            {products && products?.length > 0 && products?.slice(0, 4).map((product, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-img">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                  </div>
                  <h3><span>{product.name}</span></h3>
                  <h6>${product.price}</h6>
                  <button className="mb-0 lt-0 btn btn-outline-black border-light mt-3 rounded-full btn-sm"
                    onClick={() => {
                      dispatch(
                        updateCart({
                          id: product.id,
                          name: product.name,
                          description: product.description,
                          price: product.price,
                          smallprice: product.smallprice,
                          quantity: product.quantity,
                          image: product.image,
                        })
                      );
                    }}
                  > Add to Cart</button>
                </div>
              </div>
            ))}
            {/* <!-- End Card Item --> */}
          </div>

        </div>
      </section>
      {/* <!-- End Services Section --> */}
    </>
  )
}
