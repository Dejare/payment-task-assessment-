import React from 'react'
import checkMark from '../assets/images/Vector.svg'
const PurchaseComplete = () => {
    return (
        <div className='purchaseCompleteContainer'>
            <div>
                <div>
                    <img src={checkMark} alt="Purchase Complete" />
                </div>
                <div><h1>Purchase Completed</h1>
                    <p>Please check your email for details concerning
                        this transaction</p></div>

            </div>
        </div>
    )
}

export default PurchaseComplete