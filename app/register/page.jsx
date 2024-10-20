"use client";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';  
import { UserIcon, MailIcon, LockClosedIcon, EyeOffIcon, EyeIcon } from '@heroicons/react/outline'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CreateAccount = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [placeholderText, setPlaceholderText] = useState('Upload Image ID');
  const [showPassword, setShowPassword] = useState(false);



  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
      national_image: Yup.mixed().required('ID image is required'),
    terms: Yup.boolean().oneOf([true], 'Please agree to the Terms and Conditions'),
  });
  
  const router = useRouter();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    
    setIsSubmitting(true);
    setErrorMessage(null);
    router.push('/login');
  

    try {
     

      const response = await fetch('https://sunchase.backend.aait-d.com/api/register', {
        method: 'POST',
        body:  JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      setAccountCreated(true);
      resetForm(); // Clear the input fields after submission
      router.push('/login');
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
    <div className="flex flex-col md:flex-row h-screen ">
      <div className="md:w-1/2 h-full relative">
        <Image
          src="https://s3-alpha-sig.figma.com/img/48bf/0921/6999851aadf02a908928fba17e60d4d4?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X4gAVZhgQptErnHZ~49XcXwIa1~~nIIrAx~pGX7fHC7fvWsybVBWrgTuCGwWdkPKKFE8dx55MqLPV2a4HfYLE~v4fajeMUH1T~wV10zRzPeiHH45t1xPcEP-To8~PL6Uf7nfx8BJqi1VOy7PntL8l9yZYgRG1xdGjXJdhcLZdvBvrvXX9Ev8oLCckqAzP7ZqOy1JIkr5kv1MJt7b6Qp5KnnK7Al6te4JV85iIv8MqtGeaUe2fnGOg1yQD4cPml~jK0tber8dkj142wNuekIIMXdZx1j6mFQSQddaMwaGCi1kQ9fDocBum2f4X5hsGRjtdASwrbRvamYmw8pTFeVNNw__"
          alt="Your Image"
          //  fill
          // width={756}
          // height={982}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="absolute inset-0"  
          priority
        />
      </div>

      <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-4 md:p-6     ">  
        <div className="w-full max-w-md "> 
          <Image className='m-auto mb-2 mt-10' src={"/assets/verifylogo.png"} width={54} height={40} alt='verfylogo' />
          <Image className='m-auto mb-6' src={"/assets/sainchesOfVerify.png"} width={225} height={18} alt='shanches' /> 

          <Formik
            initialValues={{
              full_name: '',
              email: '',
              password: '',
              password_confirmation:'',
              national_image: null,
              terms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, touched, resetForm }) => (
              <Form className="create-account-form">
                <div className="form-group mb-3">
                  <div className="flex flex-row"> 
                    <UserIcon className="h-5 w-5 mr-2 text-gray-700" />
                    <label htmlFor="full_name" className="block mb-1">Name</label>
                  </div>
                  <Field placeholder="Enter your Full name" type="text" id="full_name" name="full_name" className="w-full p-2 mb-2 bg-gray-50" />
                  {errors.full_name && touched.full_name && <ErrorMessage name="full_name" component="div" className="text-red-500" />}
                </div>

                <div className="form-group mb-3">
                  <div className="flex flex-row"> 
                    <MailIcon className="h-5 w-5 mr-2 text-gray-700" />
                    <label htmlFor="email" className="block mb-1">Email Address</label>
                  </div>
                  <Field placeholder="Enter your email address" type="email" id="email" name="email" className="w-full p-2 mb-2 border bg-gray-50" />
                  {errors.email && touched.email && <ErrorMessage name="email" component="div" className="text-red-500" />}
                </div>

                <div className="form-group mb-3">
                  <div className="flex gap-2 items-center">
                     <Image src={'/assets/pass.png'} width={30} height={6} className='p-2' alt='pass' />
                    <label htmlFor="password" className="block mb-1">Password</label>
                  </div>

                  <div className="relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      className="w-full p-2 bg-gray-50"
                      placeholder="Enter your password"
                    />
                    {errors.password && touched.password && <ErrorMessage name="password" component="div" className="text-red-500" />}

                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-700" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-700" />
                      )}
                    </div>
                  </div>
                </div>


                <div className="relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      id="password_confirmation"
                      name="password_confirmation"
                      className="w-full p-2 bg-gray-50"
                      placeholder="Enter your password"
                    />
                    {errors.password_confirmation && touched.password_confirmation && <ErrorMessage name="password_confirmation" component="div" className="text-red-500" />}

                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-700" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-700" />
                      )}
                    </div>
                  </div>
                

                <div className="form-group  ">
                  <label htmlFor="national_image" className="block mb-1">National ID Image</label>
                  <div className="relative">
                    <input 
                      id="national_image"
                      name="national_image"
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        setFieldValue('national_image', event.currentTarget.files[0]);
                        setPlaceholderText(event.currentTarget.files[0]?.name || 'Scan National ID');
                      }}
                      className="absolute opacity-0 inset-0 cursor-pointer"
                    />
                    <div className="w-full h-20 p-4 border-dotted border-gray-300 cursor-pointer text-gray-500 bg-gray-50 text-center flex items-center justify-center gap-2">
                      <Image src={'/assets/uploadImg.png'} width={16} height={16} alt='upload' />
                      {placeholderText}
                    </div>
                  </div>
                  <ErrorMessage name="national_image" component="div" className="text-red-500" />
                </div>

                <div className="form-group mb-7">
                  <label>
                    <Field type="checkbox" name="terms" className="mr-2 font-medium" />
                    <span className='text-gray-500' >agree to the </span> Terms and Conditions
                  </label>
                  {errors.terms  && touched.terms  && (
                    <div className="text-red-500">{errors.terms }</div>
                  )}
                </div>

                {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}
                {accountCreated && <div className="text-green-500 mb-2">Account created successfully!</div>}

                <button type="submit" style={{ backgroundColor: '#2D2D2D' }} className="w-full text-white py-2 hover:bg-gray-500 flex justify-center items-center gap-2" disabled={isSubmitting}>
                      {isSubmitting ? 'creating...' : 'Create Account'}
                      <Image src={'/assets/Group.png'} width={10} height={10} alt='group' />
                 </button>
              </Form>
            )}
          </Formik>

          <p className="mt-4 text-center text-gray-500">
            Have   an account?{' '}
            <Link href="/login" className="text-black font-medium">Log in  </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;




              //  <button type="submit" style={{ backgroundColor: '#2D2D2D' }} className="w-full text-white py-2 hover:bg-gray-500 flex justify-center items-center gap-2" disabled={isSubmitting}>
              //     {isSubmitting ? 'creating...' : 'Create Account'}
              //     <Image src={'/assets/Group.png'} width={10} height={10} alt='group' />
              //   </button>