import React from "react";
import "./Plans&Pricing.css";

const PlansPricing = () => {
  return (
    <div className="main111">
      <section className="sect122">
        <div className="container">

          <div className="Plan">

            <div className="heads">
              <h2>Choose the Payment Plan</h2>
            </div>

            <div className="percentage">

              <div className="payments">

                <div className="upper-box">
                  <h3>PERCENTAGE</h3>
                  <div className="upper-box2">
                    <span className="span-1">5%</span>
                    <span className="span-2">per load(10% for Box Trucks)</span>
                  </div>
                </div>

                <div className="lower-box">

                  <div className="list">
                    <li>Pay as you go</li>
                  </div>

                  <div className="list">
                    <li>Loads of your choice</li>
                  </div>

                  <div className="list">
                    <li>Proactive Engagement</li>
                  </div>

                </div>

              </div>

              <br/>

              <div className="payments">

                <div className="upper-box">
                  <h3>FIXED</h3>
                  <div className="upper-box2">
                    <span className="span-1">$399</span>
                    <span className="span-2">per week</span>
                  </div>
                </div>

                <div className="lower-box">

                  <div className="list">
                    <li>Weekly Billing</li>
                  </div>

                  <div className="list">
                    <li>High Priority Availability</li>
                  </div>

                  <div className="list">
                    <li>Dispute Management</li>
                  </div>

                </div>

              </div>

              <br/>


              <div className="payments">

                <div className="upper-box">
                  <h3>MONTHLY PREPAID</h3>
                  <div className="upper-box2">
                    <span className="span-1">$1,199</span>
                    <span className="span-2">per month</span>
                  </div>
                </div>

                <div className="lower-box">

                  <div className="list">
                    <li>Dedicated Dispatcher</li>
                  </div>

                  <div className="list">
                    <li>24/7 Support</li>
                  </div>

                  <div className="list">
                    <li>Automated Billing</li>
                  </div>

                </div>

              </div>
              
            </div>

          </div>
        
        </div>
      </section>
    </div>
  );
};

export default PlansPricing;
