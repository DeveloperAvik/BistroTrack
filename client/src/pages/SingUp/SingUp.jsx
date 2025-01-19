import { useState, useContext, useEffect } from "react";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";

import { AuthContext } from "../../providers/AuthProvider";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);

    const { signUp } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate CAPTCHA
        if (!validateCaptcha(captcha)) {
            setCaptchaError(true);
            setIsSubmitting(false);
            return;
        }

        // Simulate user sign up
        signUp(name, email, photoURL, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error("Sign up error: ", error);
            });

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Form Submitted!");
        }, 2000);
    };

    return (
        <div className="min-h-screen from-teal-400 via-blue-500 to-indigo-600 flex justify-center items-center animate-gradient-pulse">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full transform transition-all hover:scale-105 hover:shadow-3xl ease-in-out duration-500">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
                    Sign Up
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div>
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-teal-500 focus:outline-none transform transition-all duration-300 hover:border-teal-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
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
                        <label htmlFor="enterCaptcha" className="block text-sm font-medium text-gray-700">
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
