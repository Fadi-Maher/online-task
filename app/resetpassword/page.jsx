// "use client";
// import React, { useState, useEffect } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";
// import { MailIcon, LockClosedIcon, EyeOffIcon, EyeIcon } from '@heroicons/react/outline'; 

// const ResetPassword = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [isTimerActive, setIsTimerActive] = useState(true);

//   // Validation schema for email and verification code
//   const emailValidationSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email address").required("Required"),
//   });

//   const codeValidationSchema = Yup.object().shape({
//     verificationCode1: Yup.string()
//       .required("Required")
//       .matches(/^\d$/, "Must be a digit"),
//     verificationCode2: Yup.string()
//       .required("Required")
//       .matches(/^\d$/, "Must be a digit"),
//     verificationCode3: Yup.string()
//       .required("Required")
//       .matches(/^\d$/, "Must be a digit"),
//     verificationCode4: Yup.string()
//       .required("Required")
//       .matches(/^\d$/, "Must be a digit"),
//   });

//   // Function to submit email
//   const handleEmailSubmit = async (values) => {
//     setIsSubmitting(true);
//     setErrorMessage(null);
//     setSuccessMessage(null);

//     try {
//       // Send email to the API
//       const response = await axios.post("https://sunchase.backend.aait-d.com/api/password/reset", {
//         email: values.email,
//       });

//       if (response.data.success) {
//         setIsEmailSubmitted(true);
//         setSuccessMessage("Email sent successfully! Please check your email.");
//         setTimeLeft(30); // Reset timer for code verification
//       } else {
//         setErrorMessage("Failed to send email. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Function to verify code
//   const handleCodeSubmit = async (values) => {
//     setIsSubmitting(true);
//     setErrorMessage(null);
//     setSuccessMessage(null);

//     try {
//       const verificationCode = `${values.verificationCode1}${values.verificationCode2}${values.verificationCode3}${values.verificationCode4}`;

//       // Send the verification code to the API
//       const response = await axios.post("https://sunchase.backend.aait-d.com/api/verify", {
//         code: verificationCode,
//       });

//       if (response.data.success) {
//         setSuccessMessage("Verification successful! You can now reset your password.");
//       } else {
//         setErrorMessage("Verification failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     if (timeLeft > 0 && isTimerActive) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft, isTimerActive]);

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <div className="md:w-1/2 h-full relative p-5">
//         <Image
//           src="https://s3-alpha-sig.figma.com/img/48bf/0921/6999851aadf02a908928fba17e60d4d4?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X4gAVZhgQptErnHZ~49XcXwIa1~~nIIrAx~pGX7fHC7fvWsybVBWrgTuCGwWdkPKKFE8dx55MqLPV2a4HfYLE~v4fajeMUH1T~wV10zRzPeiHH45t1xPcEP-To8~PL6Uf7nfx8BJqi1VOy7PntL8l9yZYgRG1xdGjXJdhcLZdvBvrvXX9Ev8oLCckqAzP7ZqOy1JIkr5kv1MJt7b6Qp5KnnK7Al6te4JV85iIv8MqtGeaUe2fnGOg1yQD4cPml~jK0tber8dkj142wNuekIIMXdZx1j6mFQSQddaMwaGCi1kQ9fDocBum2f4X5hsGRjtdASwrbRvamYmw8pTFeVNNw__"
//           alt="Reset Password Background"
//           fill
           
//           className="absolute inset-0"
//           priority
//         />
//       </div>

//       <div className="md:w-1/2 flex justify-center bg-gray-100 p-6 md:p-9">
//         <div className="w-full max-w-md">
//           <div className="text-center mb-5">
//             <Image
//               src="/assets/verifylogo.png"
//               alt="logo image"
//               width={50}
//               height={50}
//               className="m-auto mb-3"
//             />
//             <Image
//               src="/assets/vector.png"
//               alt="title"
//               width={225}
//               height={18}
//               className="m-auto mb-5"
//             />
//           </div>

//           <Link href="/login" className="flex items-center mb-5">
//             <Image src="/assets/leftArrow.png" width={16} height={9} alt="back arrow" />
//             <p className="text-gray-700 ml-2">Back</p>
//           </Link>

//           {isEmailSubmitted ? (
//             <>
//               <h2 className="text-xl font-bold text-left mb-4">Verification Code</h2>
//               <span style={{ color: "#8D999D" }} className="text-left mb-4 me-2">
//                 Enter the verification code sent to your email address
//               </span>
//               <span className="font-semibold">example40@gmail.com</span>

//               <Formik
//                 initialValues={{
//                   verificationCode1: "",
//                   verificationCode2: "",
//                   verificationCode3: "",
//                   verificationCode4: "",
//                 }}
//                 validationSchema={codeValidationSchema}
//                 onSubmit={handleCodeSubmit}
//               >
//                 {({ errors, touched }) => (
//                   <Form className="verify-code-form mt-5">
//                     <div className="flex gap-2 justify-between mb-7">
//                       {["verificationCode1", "verificationCode2", "verificationCode3", "verificationCode4"].map(
//                         (field, index) => (
//                           <div key={index} className="w-1/4">
//                             <Field
//                               type="text"
//                               id={field}
//                               name={field}
//                               maxLength="1"
//                               className="w-full p-2 text-center border rounded text-xl"
//                             />
//                             <ErrorMessage name={field} component="div" className="text-red-500 text-center" />
//                           </div>
//                         )
//                       )}
//                     </div>

//                     <button
//                       type="submit"
//                       style={{ backgroundColor: "#2D2D2D" }}
//                       className="w-full text-white py-2 rounded flex items-center justify-center gap-2"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Verifying..." : "Verify Code"}
//                       <Image src="/assets/Group.png" width={10} height={10} alt="Arrow" />
//                     </button>

//                     {errorMessage && <div className="text-red-500 mt-4 text-center">{errorMessage}</div>}
//                     {successMessage && <div className="text-green-500 mt-4 text-center">{successMessage}</div>}
//                   </Form>
//                 )}
//               </Formik>

//               <div className="mt-60 text-center">
//                 <span className="text-black">If you don’t receive a code </span>
//                 {timeLeft > 0 ? (
//                   <span className="text-gray-700">{`Resend available in ${timeLeft} seconds`}</span>
//                 ) : (
//                   <button className="text-gray-600">Resend</button>
//                 )}
//               </div>
//             </>
//           ) : (
//             <>
//               <h2 className="text-xl font-bold text-left mb-4">Reset Password</h2>
//               <p className="text-gray-400">please enter your email address below to recovery your password.</p>

//               <Formik
//                 initialValues={{
//                   email: "",
//                 }}
//                 validationSchema={emailValidationSchema}
//                 onSubmit={handleEmailSubmit}
//               >
//                 {({ errors, touched }) => (
//                   <Form className="mt-5">

//                     <div className="form-group mb-4">
//                         <div className="flex flex-row">
//                             <MailIcon className="h-5 w-5 mr-2 text-gray-700" />
//                             <label htmlFor="email" className="block mb-2">Email Address</label>
//                         </div>
//                         <Field type="email" id="email" name="email" className="w-full p-2 border mb-4" />
//                         {errors.email && touched.email && <ErrorMessage name="email" component="div" className="text-red-500" />}
//                     </div>


//                     <button
//                       type="submit"
//                       style={{ backgroundColor: "#2D2D2D" }}
//                       className="w-full text-white py-2 rounded flex items-center justify-center gap-2"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "sending..." : "send  "}
//                       <Image src="/assets/Group.png" width={10} height={10} alt="Arrow" />
//                     </button>

//                     {errorMessage && <div className="text-red-500 mt-4 text-center">{errorMessage}</div>}
//                     {successMessage && <div className="text-green-500 mt-4 text-center">{successMessage}</div>}
//                   </Form>
//                 )}
//               </Formik>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
