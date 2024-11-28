"use client";
import React, { useState , useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const VerifyCode = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);  
  const [isTimerActive, setIsTimerActive] = useState(true);

  
  const validationSchema = Yup.object().shape({
    verificationCode1: Yup.string()
      .required('Required')
      .matches(/^\d$/, 'Must be a digit'),
    verificationCode2: Yup.string()
      .required('Required')
      .matches(/^\d$/, 'Must be a digit'),
    verificationCode3: Yup.string()
      .required('Required')
      .matches(/^\d$/, 'Must be a digit'),
    verificationCode4: Yup.string()
      .required('Required')
      .matches(/^\d$/, 'Must be a digit'),
  });
 
   const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const verificationCode = `${values.verificationCode1}${values.verificationCode2}${values.verificationCode3}${values.verificationCode4}`;
       const router = useRouter()
       const response = await axios.post('https://sunchase.backend.aait-d.com/api/verify', {
        code: verificationCode,
      });

      if (response.data.success) {
        setSuccessMessage('Verification successful!');
        router.push('/login');
        
      } else {
        setErrorMessage('Verification failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

    useEffect(() => {
    if (timeLeft > 0 && isTimerActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);  
    }
  }, [timeLeft, isTimerActive]);

  const handleResend = async () => {
  try {
    
    setIsSubmitting(true);
    setErrorMessage(null);

    
    const response = await axios.post('https://sunchase.backend.aait-d.com/api/resend', {
      email: 'example40@gmail.com',  
    });

    if (response.data.success) {
    
      setTimeLeft(30);
      setIsTimerActive(true);
      setSuccessMessage('Code resent successfully! Please check your email.');
    } else {
      setErrorMessage('Failed to resend the code. Please try again.');
    }
  } catch (error) {
    setErrorMessage('An error occurred while trying to resend the code. Please try again later.');
  } finally {
    setIsSubmitting(false);  
  }
};

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full relative p-5">
        <Image
        src="/assets/loginPage.png"
          alt="Verification Background"
          fill
          className="absolute inset-0"
           
        />
      </div>

      <div className="md:w-1/2 flex justify-center bg-gray-100 p-6 md:p-9">
        <div className="w-full max-w-md">
          <div className="text-center mb-5">
            <Image
              src="/assets/verifylogo.png"
              alt="logo image"
              width={50}
              height={50}
              className="m-auto mb-3"
            />
            <Image
               src="/assets/sainchesOfVerify.png"
              alt="title"
              width={225}
              height={18}
              className="m-auto mb-5"
            />
          </div>

          <Link href="/login" className="flex items-center mb-5">
            <Image src="/assets/leftArrow.png" width={16} height={9} alt="back arrow" />
            <p   className="text-gray-700 ml-2">
              Back
            </p>
          </Link>

          <h2 className="text-xl font-bold text-left mb-4">Verification Code</h2>

          <span style={{ color: '#8D999D' }} className="text-left mb-4 me-2">
            Enter the verification code we just sent you on your email address
          </span>
          <span className="font-semibold">example40@gmail.com</span>

          <Formik
            initialValues={{
              verificationCode1: '',
              verificationCode2: '',
              verificationCode3: '',
              verificationCode4: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="verify-code-form mt-5">
                <div className="flex gap-2 justify-between mb-7">
                  {['verificationCode1', 'verificationCode2', 'verificationCode3', 'verificationCode4'].map(
                    (field, index) => (
                      <div key={index} className="w-1/4">
                        <Field
                          type="text"
                          id={field}
                          name={field}
                          maxLength="1"
                          className="w-full p-2 text-center border rounded text-xl"
                        />
                        <ErrorMessage name={field} component="div" className="text-red-500 text-center" />
                      </div>
                    )
                  )}
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: '#2D2D2D' }}
                  className="w-full text-white py-2 rounded flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Verifying...' : 'Send'}
                  <Image src="/assets/Group.png" width={10} height={10} alt="Arrow" />
                </button>

                {errorMessage && <div className="text-red-500 mt-4 text-center">{errorMessage}</div>}
                {successMessage && <div className="text-green-500 mt-4 text-center">{successMessage}</div>}
              </Form>
            )}
          </Formik>

         <div className="mt-60 text-center">
           <span className="text-black">If you don’t receive  code </span>
            {timeLeft > 0 ? (
             <span className="text-gray-700">{`Resend available in ${timeLeft} seconds`}</span>
              ) : (
             <button onClick={handleResend} className="text-gray-600">
                Resend  
             </button>
           )}
         </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
