"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Check Your Email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to <strong>{email}</strong>. 
              Please check your email and follow the instructions to reset your password.
            </p>
            <div className="space-y-4">
              <Link
                href="/login"
                className="block w-full bg-[#344B77] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#2a3d63] transition-colors"
              >
                Back to Sign In
              </Link>
              <button
                onClick={() => setIsSubmitted(false)}
                className="block w-full text-gray-600 hover:text-gray-900 transition-colors"
              >
                Try a different email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Side - Branding */}
      <div className="lg:w-1/2 bg-gradient-to-br from-[#344B77] to-[#2a3d63] flex items-center justify-center p-8 lg:p-12">
        <div className="max-w-md text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold">Gerayo Amahoro</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            Forgot Your Password?
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
          
          <div className="relative w-full h-64 lg:h-80">
            <Image
              src="/truck.png"
              alt="Delivery truck"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Reset Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Back to Login Link */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h2>
            <p className="text-gray-600">
              Enter your email address and we'll send you a reset link.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#344B77] focus:border-transparent transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#344B77] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#2a3d63] transition-colors focus:ring-2 focus:ring-[#344B77] focus:ring-offset-2"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link href="/login" className="text-[#344B77] hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}