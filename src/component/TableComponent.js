import React from 'react'

const TableComponent = ({ data }) => {

    let headings = Object.keys(data[0]);
    return (
        <table className='w-full '>
            <thead className='w-full py-4 bg-[#2F80ED] rounded-t-xl flex justify-around text-white'>
                <tr className='text-black flex flex-row justify-around w-full'>
                    {
                        headings.map(heading => <th>{heading}</th>)
                    }
                </tr>
            </thead>
            <tbody className='text-black w-full flex flex-col'>
                {
                    data.map(item =>
                        <tr className='w-[100%] flex flex-row justify-around my-4'>
                            {
                                headings.map(heading => <td>{item[heading]}</td>)
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}




export default TableComponent