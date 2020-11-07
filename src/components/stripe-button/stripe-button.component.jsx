import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HkEmlKamCNsKcnYeHUregBoP7GVx1zjxpttmrFrPfZjT4F5O4bBoEucPX7FeMngoOftPkOVpJ1fZQ5mr12AA1Fe00XLBZ4Aue';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;