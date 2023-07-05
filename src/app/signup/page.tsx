"use client"

import React from "react";

import { handleRecaptcha } from '../../utils/handleRecaptcha';


const SignUp = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isRecaptchaPass = await handleRecaptcha(
          "LOGIN",
          process.env.NEXT_PUBLIC_RECAPTCHA_KEY
        );
        if (!isRecaptchaPass) {
          alert("Recaptcha verification fail");
          //other work
        } else {
          alert("Passed recaptcha");
        }
      };

    return (
    <div className="flex justify-center align-middle mt-9">
        <div className="bg-yellow-800 w-[450px] h-[300px] p-4 m-[0 auto]">
        <h1 className="text-2xl text-center mb-3">ReCaptcha In Next JS</h1>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="email"
            className="p-3 w-full text-black"
            type="email"
            />
            <br />
            <br />
            <input
            placeholder="password"
            className="p-3 w-full text-black"
            type="password"
            />
            <br />
            <br />
            <script src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}></script>
            <button className="bg-blue-600 px-4 py-2 w-full">SignUp</button>
        </form>
        </div>
    </div>
    );
};

export default SignUp;