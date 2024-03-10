import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Image from '../images/blacklogo.png';
import './style.css';

function Donate() {
    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [showQRCode, setShowQRCode] = useState(false);

    let paypalRef = useRef();

    const product = {
        price: 100.00,
        descripttion: "donation for corona virus",
        img: "assets/fb.png"
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AbHIJkP9wZLOjgTPB1KbzBiqK7PYFyQHv--VjFQJ9n8JNwUtTTbFLSTVdWK2bnoGs6v7iqOG6wT-XrCj"

        script.addEventListener("load", () => setLoaded(true));

        document.body.appendChild(script);

        if (loaded) {
            setTimeout(() => {
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        descripttion: product.descripttion,
                                        amount: {
                                            currency_code: "Rupees",
                                            value: product.price
                                        }
                                    }
                                ]
                            });
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture();
                            setPaidFor(true);
                            console.log(order);
                            console.log(data);
                        },
                    })
                    .render(paypalRef);
            });
        }
    });

    const handleShowQRCode = () => {
        setShowQRCode(!showQRCode);
    };

    return (
        <div className="App">
            {paidFor ? (
                <div style={{ padding: "20px" }}>
                    <h1>Thank you for your donation!</h1>
                    <img src={Image} alt='' width="500px" height="350px" />
                </div>
            ) : (
                <div>
                    <div className="inner_page_div" style={{ paddingTop: "30px" }}>
                        <h1 id="responsive_h1">Please help us jump start our non-profit organization by donating to our go fund me</h1>
                        <Button variant="info" href="https://www.gofundme.com/f/donationally?=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1">GoFundme</Button>
                        <h3 style={{ paddingTop: "20px" }}>This page is under construction. The PayPal payment below is on testing mode (not live)</h3>
                        <h3 style={{ paddingTop: "20px" }}>Paypal buttons are on test mode! ({product.descripttion} for ${product.price}).</h3>
                    </div>
                    <div ref={v => (paypalRef = v)} id="format" />
                    <Button
                        variant="primary"
                        onClick={handleShowQRCode}
                        style={{ marginTop: "20px" }}
                    >
                        Show QR Code (PhonePe)
                    </Button>
                    {showQRCode && (
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <h4>Scan the QR code below to pay via PhonePe</h4>
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Your%20PhonePe%20payment%20link%20or%20details" alt="PhonePe QR Code" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Donate;
