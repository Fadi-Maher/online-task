"use client";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';  
 import { UserIcon, MailIcon, LockClosedIcon, QrcodeIcon, EyeOffIcon, EyeIcon } from '@heroicons/react/outline'; 
import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/navigation';
const CreateAccount = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [placeholderText, setPlaceholderText] = useState('Upload Image ID');
  const [showPassword, setShowPassword] = useState(false);

const router  = useRouter()




  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    idImage: Yup.mixed().required('ID image is required'),
    termsAndConditions: Yup.boolean().oneOf([true], 'Please agree to the Terms and Conditions'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    router.push('/login')


    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('password', values.password);
      formData.append('idImage', values.idImage);
      formData.append('termsAndConditions', values.termsAndConditions);

        const response = await fetch('https://sunchase.backend.aait-d.com/api/register', {
            method: 'POST',
            body: formData,  
        });

      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      const data = await response.json();
      setAccountCreated(true);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">  
      <div className="md:w-1/2 h-full relative">
        <Image
          src="https://s3-alpha-sig.figma.com/img/48bf/0921/6999851aadf02a908928fba17e60d4d4?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X4gAVZhgQptErnHZ~49XcXwIa1~~nIIrAx~pGX7fHC7fvWsybVBWrgTuCGwWdkPKKFE8dx55MqLPV2a4HfYLE~v4fajeMUH1T~wV10zRzPeiHH45t1xPcEP-To8~PL6Uf7nfx8BJqi1VOy7PntL8l9yZYgRG1xdGjXJdhcLZdvBvrvXX9Ev8oLCckqAzP7ZqOy1JIkr5kv1MJt7b6Qp5KnnK7Al6te4JV85iIv8MqtGeaUe2fnGOg1yQD4cPml~jK0tber8dkj142wNuekIIMXdZx1j6mFQSQddaMwaGCi1kQ9fDocBum2f4X5hsGRjtdASwrbRvamYmw8pTFeVNNw__"
          alt="Your Image"
          layout="fill"   
          objectFit="cover"  
          className="absolute inset-0"  
          priority
        />
      </div>

      <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-6 md:p-9">  
        <div className="w-full max-w-md"> 
          
              <Image className='m-auto mb-2' src={"/assets/verifylogo.png"} width={54} height={40} alt='verfylogo'/>
          
             <Image className='m-auto mb-10' src={"/assets/sainchesOfVerify.png"} width={225} height={18} alt='shanches'/>

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              idImage: null,
              termsAndConditions: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, touched, isSubmitting }) => (
              <Form className="create-account-form">
                <div className="form-group mb-4">
                  <div className="flex flex-row"> 
                    <UserIcon className="h-5 w-5 mr-2 text-gray-700" />
                    <label htmlFor="name" className="block mb-2">Name</label>
                  </div>
                  <Field  placeholder="Enter your Full name" type="text" id="name" name="name" className="w-full p-2   mb-4  bg-gray-50" />
                  {errors.name && touched.name && <ErrorMessage name="name" component="div" className="text-red-500" />}
                </div>

                <div className="form-group mb-4">
                  <div className="flex flex-row"> 
                    <MailIcon className="h-5 w-5 mr-2 text-gray-700" />
                    <label htmlFor="email" className="block mb-2">Email Address</label>
                  </div>
                  <Field  placeholder="Enter your email address" type="email" id="email" name="email" className="w-full p-2 border mb-4  bg-gray-50" />
                  {errors.email && touched.email && <ErrorMessage name="email" component="div" className="text-red-500" />}
                </div>

                <div className="form-group mb-4">
                  <div className="flex gap-2 items-center">
                     <Image src={'/assets/pass.png'} width={30} height={6} className='p-2' alt='pass'/>
                    <label htmlFor="password" className="block mb-2">Password</label>
                  </div>

                  <div className="relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      className="w-full p-2  bg-gray-50"
                      placeholder="Enter your password"
                    />
                    {errors.password && touched.password && <ErrorMessage name="password" component="div" className="text-red-500" />}

                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-700 mb-2 "  />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-700 mb-2" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                <label htmlFor="idImage" className="block mb-2">National ID Image</label>
                <div className="relative">
                  <input 
                    id="idImage"
                    name="idImage"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue('idImage', event.currentTarget.files[0]);
                      setPlaceholderText(event.currentTarget.files[0]?.name || 'Scan National ID');
                    }}
                    className="absolute opacity-0 inset-0 cursor-pointer"
                  />
                  <div className="w-full h-20 p-4 border-dotted border-gray-300 cursor-pointer text-gray-500 bg-gray-50 text-center flex items-center justify-center gap-2">
                    <Image src={'/assets/uploadImg.png'} width={16} height={16} alt='upload'/>
                    {placeholderText}
                  </div>
                </div>
                <ErrorMessage name="idImage" component="div" className="text-red-500" />
              </div>


                <div className="form-group mb-4">
                  <label>
                    <Field type="checkbox" name="termsAndConditions" className="mr-2" />
                    I agree to the Terms and Conditions
                  </label>
                  {errors.termsAndConditions && touched.termsAndConditions && (
                    <div className="text-red-500">{errors.termsAndConditions}</div>
                  )}
                </div>

                 <button type="submit" style={{ backgroundColor: '#2D2D2D' }} className="w-full text-white py-2 hover:bg-gray-500 flex justify-center items-center gap-2" disabled={isSubmitting}>
                  {isSubmitting ? 'creating...' : 'Create Account'}
                  <Image src={'/assets/Group.png'} width={10} height={10} alt='group' />
                </button>

                {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
                {accountCreated && <div className="text-green-500 mt-4">Account created successfully!</div>}
              </Form>
            )}
          </Formik>

          <div className="mt-4 text-center">
            <span className="text-gray-500">  have an account? </span>
            <Link style={{fontWeight:400}} href=" / " className="text-black">Login  </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
