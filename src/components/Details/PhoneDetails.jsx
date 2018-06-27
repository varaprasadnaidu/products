import React from 'react'

function PhoneDetails(props) {
    return (
        <h3>
            <p>{props.phn.id}</p>
            <p>{props.phn.phone_number}</p>
            <p>{props.phn.customer_name}</p>
            <p>{props.phn.date}</p>
            </h3>
    );
  }
  
  export default PhoneDetails;
