import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51IsjXoC1D4x5la13bnzUc6St7mSOYGZZmCIAhoJ0svZLOzhBMg1cxEzjms4NAsuV2fi8oOzrCweJOHfuYRZWKrL900ZWOyLiVp';
   
    
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
         
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;