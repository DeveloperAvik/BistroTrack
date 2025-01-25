import { useState, useEffect, useContext } from "react";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";

// Importing the AuthContext
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const { signIn } = useContext(AuthContext);

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

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error("Error signing in:", error);
                setIsSubmitting(false);
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
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">Welcome Back!</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                    {/* CAPTCHA 1 */}
                    <div>
                        <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                            CAPTCHA
                        </label>
                        <div className="mb-2">
                            <LoadCanvasTemplate />
                        </div>
                        {captchaError && <p className="text-red-500 text-sm">Invalid CAPTCHA, please try again.</p>}
                    </div>

                    {/* CAPTCHA 2 */}
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

                    {/* Forgot Password Link */}
                    <div className="text-right">
                        <a href="#" className="text-teal-600 hover:text-teal-800 transition-all duration-300 text-sm">
                            Forgot Password?
                        </a>
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
                            "Login"
                        )}
                    </button>

                    {/* Sign Up Link */}
                    <div className="text-center mt-6">
                        <span className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/singup">
                                <a href="#" className="text-teal-600 hover:text-teal-800 transition-all duration-300">
                                    Sign Up
                                </a>
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
