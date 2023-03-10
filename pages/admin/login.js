import Head from "next/head";
import React from "react";

const inputClass = "px-4 py-2 text-lg border-2 border-gray-500 rounded-lg focus:outline-blue-500 w-full duration-500 mb-4"
const labelClass = "text-xl font-bold"

const Login = () => {
  return (
    <>
      <Head>
        <title>PT XXX admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex h-screen justify-center items-center">
          <form className="flex flex-col p-8 w-1/3 shadow-2xl rounded-xl">
            <h1 className="mb-4">Admin login</h1>
            <label className={labelClass} htmlFor="email">Email</label>
            <input className={inputClass} type="email" id="email" />
            <label className={labelClass} htmlFor="password">Password</label>
            <input className={inputClass}type="password" id="password" />
            <button className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-xl hover:bg-blue-800 duration-200 active:bg-blue-500">Sign in</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
