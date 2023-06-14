import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const CheckOutPayment = ({ totalPrice }) => {
    const { successAlert, errorAlert } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                    // setClientSecret(res.data.paymentIntent.client_secret)
                })
        }
    }, [totalPrice, axiosSecure]);


    // handle stripe form
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
            successAlert('Payment Successfully')
            // console.log('[PaymentMethod]', paymentMethod);

        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'email not found',
                        name: user?.displayName || 'name not found'
                    },
                },
            },
        );

        if (confirmError) {
            errorAlert(confirmError.message)
        }
        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const paymentInfo = {
                email: user.email,
                transactionId: paymentIntent.id,
                date: new Date()
            } 
            axiosSecure.post('/payments', paymentInfo)
            .then(res => {
                if(res.data.insertedId){
                    navigate('/dashBoard/selected-classes')
                }
            })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn bg-[#FF3131] border-0 text-white mt-8 px-8" disabled={!stripe || processing || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError.message}</p>}
            {transactionId && <p className="text-green-500">payment Successfully transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckOutPayment;