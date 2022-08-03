import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./home.css";
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
function Home() {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const [message, Setmessage] = useState('')

  const [alignment, setAlignment] = React.useState('No');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    Setmessage('Got it! We will submit to our partner your need for immediate help.')
  };


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
  return (<div className='contain'>
    <div>

      <NavLink to={"/"}></NavLink>

      <NavLink to={"/Login"}></NavLink>

      <NavLink to={"/Home"}></NavLink>
    </div>
    <div className='banner'>
      <p className='bannername'>Your product</p>
    </div>
    <div className='bannerdown'>
      <p id='down'>Your Hybrid Electric Water Heater Recommended Options</p>
    </div>
    <div className='estimate'>

    </div>
    <div className='partdivide'>
      <div className='division'>
        <div className='leftdivide'>
          <div className='left_container'>
            <div className='left_filter'>
              <div className='left_tittle'>
                <p id='down'>Tell Us About Your Project</p>
              </div>
              <div className='left_content'>
                <div className='left_line'></div>
                <div><p className='location'>Location</p></div>
              </div>
              <div id='searchBar'>
                <div id='addressBar'>
                  <div className='address'>
                    <div className='search_add'>
                      <form id='form'>
                        <input type='text' placeholder='search' className='input' name='search'></input>
                        <Button variant="contained" id='click' disableElevation>
                          Click
                        </Button>
                      </form>
                    </div>

                  </div>
                </div>
              </div>

              <div>
                <p className='location'>Size your water heater</p>
              </div>
              <div className='scroll'>
                <div className='slidecontainer'>
                  <Slider
                    size="small"
                    defaultValue={50}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                  />
                </div>
                <div className='left_slide_container'>
                  <p className='slide_text'>
                    50 Gallons
                    <br className='slide_text' />
                    (3-5 people)

                  </p>

                </div>

              </div>
              <div className='scroll_content'>
                <p className='location'>What is your current water heater fuel type?</p>
              </div>
              <div className='select'>
                {/* <select name="cars" id="cars" className='option'>
                  <option >Oil Fule</option>
                  <option >Propen</option>
                  <option >Electric</option>
                  <option>Other</option>
                </select> */}
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                  >
                    <MenuItem value={10}>Oil Fule</MenuItem>
                    <MenuItem value={20}>Propen</MenuItem>
                    <MenuItem value={30}>Electric</MenuItem>
                    <MenuItem value={40}>Others</MenuItem>

                  </Select>
                </FormControl>

              </div>
              <div className='left_bottom'>
                <div className='left_bottom_tittle'>
                  <p className='location'>Is this a water heater emergency?</p>
                  <div className='left_banner'>

                    <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      onChange={handleChange}
                    >
                      <ToggleButton value="yes" id="click_gap">Yes </ToggleButton>
                      <ToggleButton value="No" id="click_gap">No</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <p id='letter'>{message}</p>
                </div>

              </div>

            </div>

          </div>


          <div className='item'>
            {
              post.map((item, k) =>

                <div key={k} className='block'>



                  <div className='heading'>
                    <div className='headingName'> <h3>{item.name}</h3>
                      <h3>{item.fuel_type_usage_rate}</h3>
                    </div>
                  </div>
                  <div className='detail'>
                    <img src='https://d3vfc40r4nq6xo.cloudfront.net/partner_assets/hpwh/products-images/Pro-Prestige-ProTerra-65-gal.-30A-w--LeakGuard-PROPH65-T2-RH375-SO.png' alt='images' />

                    <ul className='a'>
                      {/* <li>{item.detail_highlight}</li> */}
                      <li>Increased Energy Efficiency</li>
                      <li>Electronic User Interface</li>
                      <li>Backup Electric Elements</li>
                      <li>Heat Pump Technology</li>
                    </ul>

                  </div>
                  <div className='estimate'>

                  </div>

                  <div className='Price'>
                    <div className='negociableprice'>
                      <p id='k'><strong>Price</strong></p>
                      <p></p>
                      <p id='k'>{item.base_price}</p>


                      {/* 
                <p id='k'><strong>DeliveryCharge---------</strong>{item.delivery_charge} </p>
                <p id='k'><strong>Est_annual_kwh_usag</strong>:{item.est_annual_kwh_usage} </p>
                <p id='k'><strong>fuel_type_usage_rate---</strong>{item.fuel_type_usage_rate} </p>
                <p id='k'><strong>NetCost-----------------</strong>{item.netCost} </p> */}

                    </div>
                  </div>
                  <div className='Price'>
                    <div className='negociableprice'>
                      <p id='k'><strong>Delivery Charge</strong></p>
                      <p></p>
                      <p id='k'>{item.delivery_charge}</p>

                    </div>
                  </div>
                  <div className='Price'>
                    <div className='negociableprice'>
                      <p id='k'><strong>Equipment Cost</strong></p>
                      <p></p>
                      <p id='k'>{item.est_annual_kwh_usage}</p>

                    </div>
                  </div>

                  <div className='Price'>
                    <div className='negociableprice'>
                      <p id='k'><strong>Net Cost</strong></p>
                      <p></p>
                      <p id='k'>{item.netCost}</p>

                    </div>

                  </div>


                  <div className='anualsaving'>
                    <h3><strong>Your annual savings:</strong>{item.est_annual_savings_cal}</h3>
                  </div>

                  <div>
                    <button id='button'>Get Install Quote</button>
                  </div>

                  <div className='footer'>
                    <div className='moredetails'>View More Details</div>
                  </div>





                  {/* <div className='details'>
              <p> Price:{item.base_price} </p>
              <p> DeliveryCharge:{item.delivery_charge} </p>
              <p> EstHighlight:{item.est_highlight} </p>
              <p>  </p>

            </div> */}
                  {/* <button>Get Install Quote</button> */}




                </div>



              )
            }
            <div className='buttom_box'>
              <p id='buttom_box_content'>The Heat Pump Water Heater Advantage</p>
              <div className='buttom_box_part'>

                <div className='buttom_box_part_1'>
                  <div className='buttom_box_part_1_contant'>
                    <p id='Part_content_1'>Clean & Healthy Air</p>
                    <p id='Part_content_2'>No in-home air pollution or greenhouse gas emissions</p>
                  </div>
                  <div className='buttom_box_part_1_contant'>
                    <p id='Part_content_1'>Reduced Carbon Footprint</p>
                    <p id='Part_content_2'>Carbon offset equivalent for your home equals 647 trees planted</p>
                  </div>
                  <div className='buttom_box_part_1_contant'>
                    <p id='Part_content_1'>Lower Energy Bills</p>
                    <p id='Part_content_2'>Up to 75% reduction in energy use</p>
                  </div>
                </div>
                <div className='estimate'>

                </div>
                <div>
                  <p className='buttom_text'>A hybrid electric water heater uses a compressor to take heat from the surrounding air and transfers it inside the water tank. It works similarly to a refrigerator, but in reverse. The “hybrid” component means that the water heater can heat water either via the heat pump, or, when the surrounding air is too cold, it can heat the same as a conventional electric water heater. This means your water heating is as efficient as possible, and also ensures you have hot water in all environments.</p>
                  <div className='buttom_text'>
                    <img src='https://assets.solar.com/partner_assets/hpwh/hpwh-process-tab.png' alt='heater' />
                  </div>
                  <p id='buttom_content'>All values displayed on this page are based on standard industry assumptions. Savings numbers are calculated based on present day market circumstances, but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance payments displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher.

                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </div>







  </div>
  )
}

export default Home