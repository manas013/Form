import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./home.css";
function Home() {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get('https://98b389d9-3f2c-431e-92a6-4fd9a942a8ef.mock.pstmn.io/quote').then(res => {
      console.log(res.data.data.quotes.product_quotes)
      setPost(res.data.data.quotes.product_quotes)


    })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (<>
    <div className='header'>

      <NavLink to={"/"}></NavLink>

      <NavLink to={"/Login"}></NavLink>

      <NavLink to={"/Home"}></NavLink>
    </div>
    <div className='item'>
      {
        post.map((item, k) =>

          <div key={k}>
            <div className='heading'><p>Name:{item.name} </p> </div>

            <img className='img' src='https://d3vfc40r4nq6xo.cloudfront.net/partner_assets/hpwh/products-images/Pro-Prestige-ProTerra-65-gal.-30A-w--LeakGuard-PROPH65-T2-RH375-SO.png' alt='images' />
            
              <p id='d'>Details:{item.detail_highlight}</p>
           

            <div className='details'>
              <p> Price:{item.base_price} </p>
              <p> DeliveryCharge:{item.delivery_charge} </p>
              <p> EstHighlight:{item.est_highlight} </p>
              <p> Rate:{item.fuel_type_usage_rate} </p>

            </div>
            <button>Get Install Quote</button>




          </div>



        )
      }

    </div>





  </>
  )
}

export default Home