"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const { register,
    handleSubmit,  formState: { errors }} = useForm();
// data handle

const [isShowing, setIsShowing] = useState(false);

const handleLoginFunc = async (data) => {
    console.log(data);

    const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
if(error){
    alert(error.message);


}
if(res){
    alert("Login successful");
}


};






    return (
        <div className = "container mx-auto my-10 min-h-[80vh] flex justify-center bg-slate-100 items-center">
           <div className='p-4 rounded-xl bg-white' >
            <h2 className='font-bold text-3xl text-center'>Login Your Account</h2>

            <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4 mt-6'>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input {...register('email')} type="email" className="input" placeholder="Type your email" />
 
</fieldset>

<fieldset className="fieldset relative">
  <legend className="fieldset-legend">Password</legend>
  <input {...register('password' , { required: "password field is required" })} type={isShowing ? "text" : "password"} className="input" placeholder="Type your password" />
  
<span className='absolute right-2 top-4' onClick={() => setIsShowing(!isShowing)}>
    {isShowing ? <FaEye  /> : <FaEyeSlash />}
</span>
  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
 
</fieldset>

<button className="btn w-full bg-black text-white border-[#e5e5e5]">
 Login 
</button>
            </form>

            <p className='m-4 text-center'>Don't have an account? <Link href="/register" className="text-red-500 hover:underline">Register</Link></p>

           </div>
        </div>
    );
};

export default LoginPage;