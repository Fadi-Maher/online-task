// pages/login.js
"use client";
import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';  
import { MailIcon, LockClosedIcon, EyeOffIcon, EyeIcon } from '@heroicons/react/outline'; 
import Link from 'next/link';
import { UserContext } from '@/app/context/userContext';
import { useRouter } from 'next/navigation';


const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(UserContext); 

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

 const  router = useRouter()
 const handleSubmit = async (values, { setSubmitting }) => {
  setIsSubmitting(true);
  setErrorMessage(null);

  try {
    const response = await fetch('https://sunchase.backend.aait-d.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    console.log('Response data from API:', data);

    // Assuming data.data.token exists
    loginUser(data.data.token);
    router.push('/home'); // Redirect to home after successful login
  } catch (error) {
    setErrorMessage(error.message);
  } finally {
    setIsSubmitting(false);
    router.push('/');
  }
};



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    

    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Image Section */}
      <div className="md:w-1/2 h-1/3 md:h-full relative">
        <Image
          src="https://s3-alpha-sig.figma.com/img/48bf/0921/6999851aadf02a908928fba17e60d4d4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j59ZwHgl8Fv0vHZ87afcyOcXl3C19n8dE~ENrODSjScOSBbeJDaqht6mdwdn5sf3UpHg~wRo~riTWD0qLkdG0OF2j5PTiYcdGPQhsNQrznTol54w7Kv0SqGRPXqFDYWmF247-wUh6CgoPnJGy~QW42t8G-sbUfknepgYKCB-sN4dNbkbC6bI4WMio5QLsnLCnVH-Hi9Fv~298DTn3eNfATFPYBhb~X2teNHa8en20GuInPdJyZJscaz5vDkWzQXeYWxuh-Gq1rEy3IPz2PSAj1gtDn3djEx7MQLCNlPv5qYhsWc5ZO2Q0h~T1dMQe2ok7bYlgRAHmzsBWW0L8IFxOw__"
          alt="Your Image"
           fill
           className="absolute inset-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          priority
        />
      </div>

       <div className="md:w-1/2 flex justify-center bg-gray-100 p-6 md:p-9">
        <div className="w-full max-w-md">
          
            <Image className='m-auto mb-2' src={"/assets/verifylogo.png"} width={54} height={40} alt='verfylogo'/>
          
             <Image className='m-auto mb-10' src={"/assets/sainchesOfVerify.png"} width={225} height={18} alt='shanches'/>
          
          
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched }) => (
              <Form className="login-form">
                {/* Email Field */}
                <div className="form-group mb-4">
                  <div className="flex flex-row">
                    <MailIcon className="h-5 w-5 mr-2 text-gray-700" />
                    <label htmlFor="email" className="block mb-2">Email Address</label>
                  </div>
                  <Field type="email" id="email" name="email" className="w-full p-2 border mb-4" />
                  {errors.email && touched.email && <ErrorMessage name="email" component="div" className="text-red-500" />}
                </div>

                {/* Password Field */}
                <div className="form-group mb-4">
                  <div className="flex gap-2">
                    <Image src={'/assets/pass.png'} width={35} height={2} className="p-2" alt='ii' />
                    <label htmlFor="password" className="block mb-2">Password</label>
                  </div>

                  <div className="relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      className="w-full p-2 border mb-4"
                    />
                    {errors.password && touched.password && <ErrorMessage name="password" component="div" className="text-red-500" />}
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-700" /> : <EyeIcon className="h-5 w-5 text-gray-700" />}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" style={{ backgroundColor: '#2D2D2D' }} className="w-full text-white py-2 hover:bg-gray-500 flex justify-center items-center gap-2 mb-11" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Login'}
                  <Image src={'/assets/Group.png'} width={500} height={500} alt='gp' style={{height:'10px' ,width:'10px'}}  />
                </button>

                {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
              </Form>
            )}
          </Formik>

          <div className="mt-4 text-center">
            <span className="text-gray-500">Don't have an account? </span>
            <Link href="/register" className="text-black">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
