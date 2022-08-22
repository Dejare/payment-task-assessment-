import React from "react";
import checkMark from "../assets/images/Vector.svg";
import "./component.scss";
const PurchaseComplete = () => {
    return (
        <div className="purchaseCompleteContainer">
            <div className="main ">
                <div className="w-3/4 m-auto">
                    <div className="imageCircle my-4">
                        <img src={checkMark} alt="Purchase Complete" />
                    </div>
                    <h1 className="text-4xl">Purchase Completed</h1>
                    <p className="my-4">
                        Please check your email for details concerning this
                        transaction
                    </p>
                    <button>
                        <a href="/" className="btnTwo">
                            Return Home
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseComplete;
