import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../Hooks/useAuth";
// import { useEffect } from "react";


const CheckOutPayment = () => {
    const { successAlert, errorAlert } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    // const [clientSecret, setClientSecret] = useState("");

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     if (price > 0) {
    //         fetch("http://localhost:5000/create-payment-intent", {
    //             method: "POST",
    //             headers: { "content-type": "application/json" },
    //             body: JSON.stringify({ price }),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => console.log(data.clientSecret))
    //             .catch(error => console.log(error.message))
    //     }
    // }, [price]);





    // handle stripe form
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            errorAlert(error.message)
        } else {
            successAlert('Payment Successfully')
            console.log('[PaymentMethod]', paymentMethod);
        }

    }

    return (
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
            <button type="submit" className="btn bg-[#FF3131] border-0 text-white mt-8 px-8" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutPayment;