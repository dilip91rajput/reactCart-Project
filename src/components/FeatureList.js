import React from 'react';
import { useDispatch } from 'react-redux';
import {useEffect, useState} from 'react'
import data from '../json/feature-product';
import { updateCart } from '../store/reducers/countReducer';

export default function FeatureList() {
  const { products } = data;
  const dispatch = useDispatch();
  // console.log(data, 'data');
  return (
      <>
      {/* <!-- ======= Services Section ======= --> */}
      <section id="service" className="services pt-0">
      <div className="container">

        <div className="section-header">
          <span>Products</span>
          <h2>Products</h2>

        </div>

        <div className="row gy-4">

        {products.map((lists, i) => (
          <div key={i} className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-img">
                <img src={lists.image} alt={lists.name} className="img-fluid"/>
              </div>
              <h3><span>{lists.name}</span></h3>
              <h6>${lists.price}</h6>
              <button className="mb-0 lt-0 btn btn-outline-black border-light mt-3 rounded-full btn-sm"
                    onClick={() => {

                      dispatch(
                        updateCart({
                          id: lists.id,
                          name: lists.name,
                          description: lists.description,
                          price: lists.price,
                          smallprice: lists.smallprice,
                          quantity: lists.quantity,
                          image: lists.image,
                        })
                      );
                    }}
                  > Add to Cart</button>            
                </div>
          </div>
          ))}
          {/* <!-- End Card Item --> */}

          
          <div className='col-lg-12 mt-5 mb-5 loadmored-bttn'>
            <button type='button'>Load More</button>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}
  </>
  )
}
