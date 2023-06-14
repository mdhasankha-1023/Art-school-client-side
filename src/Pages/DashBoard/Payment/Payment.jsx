import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckOutPayment from "../../../Components/CheckOutPayment/CheckOutPayment";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";


// TODO: Implement published key of stripe
const stripePromise = loadStripe(import.meta.env.VITE_ONLINE_PAYMENT_KEY);

const Payment = () => {
    const [selectedClasses] = useSelectedClasses();
    const total = selectedClasses.reduce( (sum, item) => sum + item.Price , 0)
    const totalPrice = parseFloat(total.toFixed(2))

    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle mainHeading={"Payment Now"} topHeading={"Payment Get way"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutPayment totalPrice={totalPrice}></CheckOutPayment>
            </Elements>
        </div>
    );
};

export default Payment;