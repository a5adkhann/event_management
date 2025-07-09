import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const AddExpoForm = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [theme, setTheme] = useState("");

    const handleExpoAddition = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:2000/addexpo", {
                title,
                date,
                location,
                description,
                theme
            });
            console.log(response);
            setTitle("");
            setTitle("");
            setDate("");
            setLocation("");
            setDescription("");
            setTheme("");
            toast.success(response.data.message);
        }
        catch(err){
            console.log(err);
        }
    }


    return (
        <>
            <div className='flex justify-center flex-col items-center'>
                    <form className='bg-white p-10 mt-3 shadow-lg border border-gray-200 w-[60%]' onSubmit={handleExpoAddition}>
                    <p className='font-bold text-2xl text-center underline underline-offset-8 uppercase'>Add Expo Event</p>
                        <label>Title</label>
                        <input type="text" className='w-[100%] focus:outline-0 focus:border-slate-900 border border-gray-300 p-2 mb-4' 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />

                        <label>Date</label>
                        <input type="date" className='w-[100%] focus:outline-0 focus:border-slate-900 border border-gray-300 p-2 mb-4' 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        />

                        <label>Location</label>
                        <input type="text" className='w-[100%] focus:outline-0 focus:border-slate-900 border border-gray-300 p-2 mb-4' 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        />

                        <label>Description</label>
                        <textarea name="" id="" className='w-[100%] focus:outline-0 focus:border-slate-900 border border-gray-300 resize-none mb-4'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        ></textarea>

                        <label>Theme</label>
                        <input type="text" className='w-[100%] border focus:outline-0 focus:border-slate-900 border-gray-300 p-2 mb-4' 
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        />

                        <button className='w-[100%] bg-gradient-to-br from-[#080000] to-[#0a0638] py-2 text-white'>Add</button>


                    </form>    
            </div>        
            <Toaster
              position="top-center"
              reverseOrder={false}
            />    
        </>
    )
}

export default AddExpoForm
