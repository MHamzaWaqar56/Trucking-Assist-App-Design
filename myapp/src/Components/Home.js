import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import PlansPricing from "./Plans&Pricing";

const Home = () => {
  return (
    <div className="main-home">
      <div className="main-drive">
        <div className="main-drive1">
          <div className="load-drive">
            <span className="spaan">
              We get the loads,<br></br>You drive
            </span>
          </div>

          <div className="paying-load">
            <p>We find the best paying loads in the market.</p>
            <p>
              Get a personal dispatcher assigned for you and do not worry any
              more about your payments or empty miles.
            </p>
            <p>Dispatch has never been so good!</p>
          </div>

          <div className="dispatcher">
            <Link to="/starttoday">
              <button className="btn2">HIRE A DISPATCHER TODAY</button>
            </Link>
          </div>
        </div>

        <div className="truck-img">
          <img
            src={"https://www.truckingassist.com/truck_img.webp"}
            alt="truck"
          />
        </div>
      </div>

      <section className="sect1">
      
        <div className="container">
        
           <div className="money-div">
           
           <div className="empty"></div>

           <div className="reefer">
             <p>53</p>
           </div>
   
           <div className="flatbed">
             <p>
               Dry Vans, Reefers,
               <br />
               and Flatbeds Only.
             </p>
           </div>
   
           <div className="equipment">
             <p>
               A Bigger
               <br />
               Equipment makes
               <br />
               you more Money!
             </p>
           </div>
   
           <div className="empty"></div>
           
           </div>
        
        </div>

      </section>

      <section className="sect2">
        <div className="truck-driver">
          <img src="	https://www.truckingassist.com/tru1.webp" alt="img" />
        </div>

        <div className="road-boss">
          <div className="hit">
            <h3>
              Hit the road on your
              <br />
              terms, you are the boss
            </h3>
          </div>

          <div className="upfront">
            <p>
              Loads, rates and routes are your choice, no force dispatching. We
              make sure you get the best freight at the best rate and get paid
              on time. Documentation, prices and fees are disclosed upfront.
            </p>
          </div>

          <div className="inputt">
            <input type="text" placeholder="Email Address*" />
            <Link to="/starttoday">
              <button className="bttn">START TODAY!</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="sect3">
        <div className="consider">
          <div className="phone-text">
            <div className="phone-text-inner">
              <h2>
                Call us today, get loaded
                <br />
                and be profitable now
              </h2>

              <Link to="/starttoday">
                <button className="bttn">START TODAY</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PlansPricing />

      <section className="sect4">
        <div className="container">
          <div className="service">
            <h2>
              "From the day my company hit the road Trucking Assist is the one that has my company moving. Great service, transparency and very friendly."
            </h2>

            <div className="moving">
              <h2>- Eduardo Flores, F & S USA Transport Corp.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="sect5">
        <div className="container">
          <div className="transparency">
            <img src="	https://www.truckingassist.com/trg.webp" alt="truck-img"/>
          </div>
        </div>
      </section>



      <section className="sect6">
        <div className="container">
           
           <div className="dedicated">

              <div className="charge">
              
              <h2>Top dedicated truck dispatching service</h2>

              <p>As truck dispatchers providing freight dispatching services, we take a low percentage of your rate. This is an incentive to negotiate high rates for you. The more money you make, the more money we make.</p>

              <p>There are NO contracts. It is difficult to be profitable and that is why we charge only a small Percentage Fee for any premium load we find. Other dispatchers and brokers charge much higher fees and do not care about the service they provide to their drivers, we believe in long term relationships, our main focus is a great truck dispatch and happy customers.</p>

              <Link to="/starttoday" ><button className="btnn">HIRE A DISPATCHER TODAY</button></Link>

              </div>

              <div className="contracts">
                 <img src="https://www.truckingassist.com/call-removebg-preview.webp" alt="img" />
              </div>

           </div>

        </div>
      </section>




      <section className="sect7">
        <div className="container">
          <div className="wide">
            <h2>What is truck dispatching service?</h2>

            <p>A Truck Dispatch Service help truck drivers and owner operators who have their own trucking company manage the load
            booking and back-office processes of running a trucking company. Some dispatchers specialize only in booking loads, while
            others, like Trucking Assist, offer a wide variety of services such as Invoice Management and TONU/Detention Requests.</p>

            <Link to="/starttoday"><button className="btn-9">HIRE A DISPATCHER TODAY</button></Link>

          </div>
        </div>
      </section>



      <section className="sect8">
        <div className="container">

          <div className="freight">

             <div className="dot">
             
               <h2>Trucking Assist is your freight planning partner.</h2>

               <p>Our services are mainly for owner operators, independent truckers & carriers with their own DOT or MC authority. It’s in our best interest for us to find the best paying loads available for you. We dispatch dry-vans, reefers , flatbeds. We find you the best truck loads in the US. We help you improve your profits and experience. Whether you are looking for your next load or you need a load that takes you home, Trucking Assist is committed to your goals. For us to be successful, you must be successful first. We are the best dispatch service in the US.</p>

               <Link to="/starttoday"><button className="btnn">START TODAY</button></Link>
             
             </div>

          </div>

        </div>
      </section>






      <section className="sect9">
        <div className="container">

          <div className="haul">

             <div className="haul1">

               <h2>Tell us about your goals and let us help</h2>

               <p>Having some idea of what your company needs or what are your hauling plans and desires will help us provide the best dispatch service solution for your trucking company. Complete the form now and start today!</p>
             </div>


          
             <div className="haul1">


             <select className="select-opt">
             <option disabled="" value="Intrested Plans">Intrested Plans</option>
             <option value="Percentage">Percentage</option>
             <option value="Weekly">Weekly</option>
             <option value="Prepaid">Prepaid</option>
             </select>


             
             

             <select className="select-opt">
             <option disabled="" value="How many trucks do you have?">How many trucks do you have?</option>
             <option value="1 truck">1 truck</option>
             <option value="2 trucks">2 trucks</option>
             <option value="Betwen 3 - 10 trucks">Betwen 3 - 10 trucks</option>
             <option value="+ 10 trucks">+ 10 trucks</option>
             </select>


             


             <input type="text" placeholder="Email Address" className="select-opt1"></input>


             <br/>


             <div className="check-boxes">
               <p className="type-truck">Which type of truck do you have?</p>
               <div className="check-boxes-1">
               
               <label className="dry-van">
               <input type="checkbox" className="dry-van1"/> Dry Van </label>

               <label className="dry-van">
               <input type="checkbox" className="dry-van1" /> Reefer </label>

               <label className="dry-van">
               <input type="checkbox" className="dry-van1" /> Flatbed </label>

               <label className="dry-van">
               <input type="checkbox" className="dry-van1" /> Power only </label>

               </div>
             </div>


             </div>
          
             <div className="haul1">
             
               <input type="text" placeholder="Income desired?" className="select-opt1" />
                
               <input type="text" placeholder="First Name" className="select-opt1" />
                
               <input type="text" placeholder="Phone" className="select-opt1" />
                
               <Link to="/starttoday"><button className="btnn1">START TODAY</button></Link>


             </div>
          
          </div>

        </div>
      </section>








     




    </div>
  );
};

export default Home;
