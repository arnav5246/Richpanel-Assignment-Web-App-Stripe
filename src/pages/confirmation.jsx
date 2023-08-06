
import '../confirm_pay.css'
import ImgCard from "./credit-card-svgrepo.svg"

export default function Confirmation() {
  return (
    <div>
        <title>Payment</title>
        <div className="parent-container">
          <div className="payment-container">
            <div className="card-details">
              <h2 className="card-details-heading">Complete Payment</h2>
              <label htmlFor="card-details">Enter your credit or debit card details below</label>
              <div className="input-group flex items-center">
                <img src={ImgCard} alt="img" width={"24"} height={"24"} />
                <input type="text" id="card-details" placeholder="Card Number" style={{width: '50%', textAlign: 'left'}} />
                <input type="text" id="card-details" placeholder="MM / YY" style={{width: '15%', textAlign: 'right'}} />
                <input type="text" id="card-details" placeholder="CVV" style={{width: '10%', textAlign: 'right'}} />
              </div>
              <button className="confirm-button">Confirm Payment</button>
            </div>
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="order-line">
                <span>Plan Name</span>
                <span>Basic Plan</span>
              </div>
              <div className="order-line">
                <span>Billing Cycle</span>
                <span>Monthly</span>
              </div>
              <div className="order-line">
                <span>Plan Price</span>
                <span>₹200/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
  }
