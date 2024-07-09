import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'; 
import {baseUrl} from '../url';
import { toast, Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
function Signup() {
    const navigate=useNavigate();
    useEffect(() => {
        const modal = document.getElementById("my_modal_3");
        if (modal) {
            modal.showModal();
        }
    }, []);

    const {
        register,   
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post(`${baseUrl}/user/signup`, userInfo);
            console.log(res.data);
            if (res.data) {
                console.log('Account created successfully!');
                toast.success('Account created successfully');
                document.getElementById("my_modal_3").close();
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error('Account couldnt be created');
        }
    };

    return (
        <div>
            <Toaster/>
            <dialog id="my_modal_3" className="modal font-playwriteNGModern" >
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Signup</h3>
                        <div className="mt-4 space-y-8">
                            {/* <label className="input input-bordered flex items-center gap-2">
                                Name
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="name"
                                    {...register('name', { required: true })}
                                />
                            </label>
                            {errors.name && <span>This field is required</span>} */}

                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input
                                    type="text"
                                    className="grow font-sans"
                                    placeholder="Email"
                                    {...register('email', { required: true })}
                                />
                            </label>
                            {errors.email && <span>This field is required</span>}

                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <input
                                    type="password"
                                    className="grow font-sans"
                                    placeholder="Password"
                                    {...register('password', { required: true })}
                                />
                            </label>
                            {errors.password && <span>This field is required</span>}

                            <div className="flex flex-col items-center">
                                <button type="submit" className="bg-orange-400 text-white rounded-md px-4 py-2 hover:bg-orange-700">
                                    Signup
                                </button>
                                <p className="mt-2">Already have an account?</p>
                                <Link to="/" className="text-orange-600">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Signup;
