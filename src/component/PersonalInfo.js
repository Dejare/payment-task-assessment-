import React from 'react'
import "./component.scss"
export function PersonalInfo({ nextTab }) {


    return (
        <>
            <form className='flex flex-col md:w-[40vw] justify-between '>
                <div className='flex flex-col mt-8 w-[100%]'>
                    <label htmlFor="Name" className='font-semibold mb-3'>Name</label>
                    <input type="text" placeholder='Opara Linus Ahmed' className='inputOne focus:ring-1 ' />

                </div>

                <div className='flex flex-col mt-8 w-[100%]'>
                    <label htmlFor="Name" className='font-semibold mb-3'>Email <span className='text-red-500'><sup>*</sup></span></label>
                    <input type="text" placeholder='OparaLinusAhmed@devmail.com' className='inputOne focus:ring-1' />

                </div>

                <div className='flex flex-col mt-8 w-[100%]'>
                    <label htmlFor="Name" className='font-semibold mb-3'>Address</label>
                    <input type="text" placeholder='The address of the user goes here' className='inputOne focus:ring-1 ' />

                </div>

                <div className='flex flex-col mt-8 w-[100%]'>
                    <label htmlFor="Name" className='font-semibold mb-3'>Address 1</label>
                    <input type="text" placeholder='and here' className='inputOne focus:ring-1 ' />

                </div>

                <div className='flex flex-row mt-8 w-[100%] items-center mb-10 justify-between'>
                    <div className='flex flex-col w-[100%] mr-4'>
                        <label htmlFor="Name" className='font-semibold mb-3'>Local Government</label>
                        <input type="text" className='w-[70%] inputOne focus:ring-1 ' placeholder='Surulere' />
                    </div>
                    <div className='flex flex-col w-[40%]'>
                        <label htmlFor="Name" className='font-semibold mb-3'>State</label>
                        <select name="" id="" className='w-[100%] inputOne focus:ring-1 '>
                            <option value="Lagos" className='pl-5'>Lagos</option>
                            <option value="Lagos" className='pl-5'>Abuja</option>
                            <option value="Lagos" className='pl-5'>PortHacourt</option>
                        </select>

                    </div>
                </div>


                <div className='flex flex-row mb-10'>
                    <button className='btn' onClick={nextTab}>Next</button>
                    <button className='text-[#4E598C] font-bold'>Cancel Payment</button>
                </div>
            </form>
        </>
    )
}
