import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";

import { AuthContext } from "../../providers/AuthProvider";

function SignUp() {
    const [captcha, setCaptcha] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);


    const { createUser, updateUserProfile } = useContext(AuthContext);

    // useForm hook
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        console.log(data)

        // Validate CAPTCHA
        if (!validateCaptcha(captcha)) {
            setCaptchaError(true);
            setIsSubmitting(false);
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log(`user profile info updated`)
                        reset()
                    })
                    .catch(error => console.log(error))
            })


        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen from-teal-400 via-blue-500 to-indigo-600 flex justify-center items-center animate-gradient-pulse">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full transform transition-all hover:scale-105 hover:shadow-3xl ease-in-out duration-500">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
                    Sign Up
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            {...register("name", { required: "Full Name is required" })}
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Photo URL Input */}
                    <div>
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            {...register("photoURL", { required: "Photo URL is required" })}
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                        />
                        {errors.photoURL && <p className="text-red-500 text-sm">{errors.photoURL.message}</p>}
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
                                    message: "Password must contain at least one letter and one number",
                                },
                            })}
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* CAPTCHA */}
                    <div>
                        <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                            CAPTCHA
                        </label>
                        <div className="mb-2">
                            <LoadCanvasTemplate />
                        </div>
                        {captchaError && <p className="text-red-500 text-sm">Invalid CAPTCHA, please try again.</p>}
                    </div>

                    {/* CAPTCHA Input */}
                    <div>
                        <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                            Enter CAPTCHA
                        </label>
                        <input
                            type="text"
                            id="captcha"
                            name="captcha"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                            placeholder="Enter CAPTCHA"
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-all transform hover:scale-105 duration-300"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="animate-pulse">Submitting...</span>
                        ) : (
                            "Sign Up"
                        )}
                    </button>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <span className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <a href="#" className="text-teal-600 hover:text-teal-800 transition-all duration-300">
                                Log In
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
