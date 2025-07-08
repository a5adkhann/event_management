import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BG from '../components/BG'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleRegisteration = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:2000/register", {
                fullname,
                email,
                password,
                role
            })
            toast.success(response.data.message);
            setFullname("");
            setEmail("");
            setPassword("");
            setRole("×");
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <BG />
            <div className='registeration-form w-[30%] border border-gray-300 shadow-xl mx-auto mt-[10%] p-10 bg-white'>
                <h1 className='font-bold uppercase text-2xl text-center mb-3 underline underline-offset-8'>Register</h1>
                <form onSubmit={handleRegisteration}>
                    <input type="text" placeholder='Full Name' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300'
                     value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    />
                    <input type="email" placeholder='Email Address' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300'
                     value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder='Password' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300'
                     value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="label">Select Role:</label>
                    <div className="filter">
                        <input className="btn btn-square" type="reset" value="×" />
                        <input className="btn" type="radio" name="frameworks" aria-label="Admin" value="Admin" onChange={(e) => setRole(e.target.value)} />
                        <input className="btn" type="radio" name="frameworks" aria-label="Exibiter" value="Exibiter" onChange={(e) => setRole(e.target.value)} />
                        <input className="btn" type="radio" name="frameworks" aria-label="Attendee" value="Attendee" onChange={(e) => setRole(e.target.value)} />
                    </div>

                    <p className='text-sm my-3 text-center'>Already have an Account? <Link className='text-blue-600' to="/login">Login</Link></p>

                    <button className='w-[100%] border border-gray-300 hover:bg-black hover:text-white py-2 transition-all ease-in-out duration-300 uppercase'>Create Account</button>
                </form>
            </div>
                 <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </>
    )
}

export default Register