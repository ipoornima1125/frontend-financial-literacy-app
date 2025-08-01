import React, { useState } from "react";

import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import {baseUrl} from '../url';
import axios from 'axios';
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const res = await axios.post(`${baseUrl}/contact/`, contactInfo);
      console.log(res.data);
      if (res.data) {
        console.log("Message sent successfully!");
        toast.success("Thanks for contacting us");
      }
    } catch (error) {
      console.log(error);
      toast.error("Message couldnt be sent");
    }
  };

  return (
    <>
      <Toaster />
   
      <div className="mt-32 mb-32 flex flex-col md:flex-row justify-center space-x-8 ">
        <div className="flex flex-col space-y-12 mb-12">
          <h3 className="text-orange-400 font-bold text-3xl font-playwriteNGModern">CONTACT US</h3>
          <p>
            "Your thoughts and inquiries are important to us. Please fill out
            the form below to get in touch with our team."{" "}
          </p>
          <nav>
            <h6 className="text-orange-400 font-bold text-xl font-playwriteNGModern">Social</h6>
            <div className="grid grid-flow-col gap-0">
              <a
                className="hover:cursor-pointer mt-1"
                href="https://www.twitter.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                className="hover:cursor-pointer mt-1"
                href="https://www.youtube.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                className="hover:cursor-pointer mt-1"
                href="https://www.facebook.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="font-playwriteNGModern">
            <label className="input input-bordered flex items-center gap-2 mb-5 font-bold">
              Name:
              <input
                type="text"
                className="grow"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && <p className="text-red-500">Name is required</p>}

            <label className="input input-bordered flex items-center gap-2 mb-5 font-bold">
              Email:
              <input
                type="text"
                className="grow"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && <p className="text-red-500">Email is required</p>}

            <label className="input input-bordered flex items-center gap-2 mb-5 font-bold">
              Subject:
              <input
                type="text"
                className="grow"
                {...register("subject", { required: true })}
              />
            </label>
            {errors.subject && (
              <p className="text-red-500">Subject is required</p>
            )}

            <label className="input input-bordered flex items-center gap-2 mb-5 font-bold">
              Message:
              <input
                type="text"
                className="grow"
                {...register("message", { required: true })}
              />
            </label>
            {errors.message && (
              <p className="text-red-500">Message is required</p>
            )}

            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md hover:bg-orange-300 hover:text-black"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="bg-orange-300">
      <Footer />
      </div>
    </>
  );
}

export default Contact;
