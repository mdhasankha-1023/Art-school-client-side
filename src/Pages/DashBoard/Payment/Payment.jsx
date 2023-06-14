import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckOutPayment from "../../../Components/CheckOutPayment/CheckOutPayment";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";


// TODO: Implement published key of stripe
const stripePromise = loadStripe(import.meta.env.VITE_ONLINE_PAYMENT_KEY);

const Payment = () => {
    const {id} = useParams();
    const [selectedClasses] = useSelectedClasses(id);
    const paymentClass = selectedClasses[0];
    console.log(paymentClass[0])

    return (
        <>
            <Helmet>
                <title>Art-School || Payment</title>
            </Helmet>
            <div className="w-11/12 mx-auto">
                <SectionTitle mainHeading={"Payment Now"} topHeading={"Payment Get way"}></SectionTitle>
                <Elements stripe={stripePromise}>
                    <CheckOutPayment paymentClass={paymentClass}></CheckOutPayment>
                </Elements>
            </div>
        </>
    );
};

export default Payment;