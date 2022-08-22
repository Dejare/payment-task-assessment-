import React from 'react'

export function ConfirmPayment(props) {


    return (
        <>
            <div className='w-full h-full bg-white rounded-t-xl mt-10 items-start shadow-xl'>
                <div className='w-full py-4 bg-[#2F80ED] rounded-t-xl flex flex-row justify-around text-white'>
                    <div>
                        Item name
                    </div>
                    Price
                </div>

                <div className='w-full py-4 flex flex-row justify-around mt-5 font-medium text-[#4E598C]'>
                    <h1>Data science and usability</h1>
                    <h1>50,000</h1>
                </div>

                <div className='w-full py-4 flex flex-row justify-around font-medium text-[#4E598C] align-start'>
                    <h1>Shipping</h1>
                    <h1>0</h1>
                </div>

                <hr className='w-3/4 m-auto text-[#817E9E]' />

                <div className='text-[#4e598c] flex flex-row justify-around mt-4 py-5'>
                    <div className='flex flex-row justify-around w-full border mx-16 py-4'>
                        <h1>Total</h1>
                        <h1>50,000.00</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-row mt-10'>
                <button className='btn'> <a href="/complete">Pay</a></button>
                <button className='text-[#4E598C] font-bold'>Cancel Payment</button>
            </div>

        </>
    )
}
