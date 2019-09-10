import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_iE3FNq4sIbC7uvaFAKajAiHo00CsZy02hl';

	const onToken = token => {
		console.log(token);
		alert('Payment Succesful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="eCommerce"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/Cuz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;

// ihvx - anpi - ryqa - xbzz - uszq
