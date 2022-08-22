import React from 'react'

export function BillingInfo(props) {


    return (
        <>
            <form className='flex flex-col md:w-[40vw] justify-between border-b border-black'>
                <div className='flex flex-col mt-8 w-[100%]'>
                    <label htmlFor="Name" className='font-semibold mb-3'>Name on Card <sup className='text-red-500'>*</sup></label>
                    <input type="text" placeholder='Opara Linus Ahmed' className='inputOne focus:ring-1 ' />

                </div>

                <div className='flex flex-col mt-8 w-[100%]'>
                    <label htmlFor="Name" className='font-semibold mb-3'>Card Type <span className='text-red-500'><sup>*</sup></span></label>
                    <select name="" id="" className='text-black py-[0.8rem] rounded-[10px] outline-0'>
                        <option value="VISA">Visa</option>
                        <option value="VISA">Mastercard</option>
                        <option value="VISA">Velve</option>
                    </select>

                </div>


                <div className='flex flex-row mt-8 w-[100%] items-center align-middle mb-10 justify-between'>
                    <div className='flex flex-col w-[60%] mr-4'>
                        <label htmlFor="Name" className='font-semibold mb-3'>Local Government</label>
                        <input type="text" className='w-[50%] inputOne focus:ring-1 ' placeholder='Surulere' />
                    </div>
                    <div className='flex flex-col w-[20%]'>
                        <label htmlFor="Name" className='font-semibold mb-3'>Expiry date <sup className='text-red-500'>*</sup></label>
                        <input type="text" placeholder="04 / 23" className='inputOne' />

                    </div>
                    <div className='flex flex-col w-[20%] ml-4'>
                        <label htmlFor="Name" className='font-semibold mb-3'>CVV <sup className='text-red-500'>*</sup></label>
                        <input type="text" placeholder="923" className='inputOne' />

                    </div>
                </div>
                <div className='flex flex-row mb-10'>
                    <button className='btn'>Next</button>
                    <button className='text-[#4E598C] font-bold'>Cancel Payment</button>
                </div>
            </form>
        </>
    )
}
