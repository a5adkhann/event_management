import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewExposTable = () => {

    const [expos, setExpos] = useState([]);

    const fetchExpos = async() => {
        try {
            const response = await axios.get("http://localhost:2000/getexpos");
            setExpos(response.data.expos);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchExpos();
    }, [])
    return (
        <>
                <p className='font-bold text-2xl mb-4 uppercase underline underline-offset-8'>All Expos</p>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-gray-100">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Theme</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expos.map((expo, index) => (
                        <tr>
                            <th>1</th>
                            <td>{expo.title}</td>
                            <td>{expo.date}</td>
                            <td>{expo.location}</td>
                            <td>{expo.description}</td>
                            <td>{expo.theme}</td>
                            <td className='space-x-3'>
                                <button className="btn btn-soft btn-info">Edit</button>
                                <button className="btn btn-soft btn-error">Delete</button>
                            </td>
                        </tr>
                        ))}
                     
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewExposTable
