import React from 'react'

import "./Payment.css"
const Payment = () => {
    function handlesubmit(){
        alert("Payment Successfull")
    }
  return (
    <div>
           
           <form>
  <label for="card-number">Card Number:</label>
  <input type="text" id="card-number" class="form-control" placeholder="Enter card number"/>
  
  <label for="expiry-date">Expiry Date:</label>
  <input type="text" id="expiry-date" class="form-control" placeholder="MM/YY"/>
  
  <label for="cvv">CVV:</label>
  <input type="text" id="cvv" class="form-control" placeholder="CVV"/>

  <label for="card-holder-name">Card Holder Name:</label>
  <input type="text" id="card-holder-name" class="form-control" placeholder="Enter card holder name"/>
  
  <input type="submit" value="Submit" class="form-submit" onClick={handlesubmit}/>
</form>
            </div>
       
       
  )
}

export default Payment