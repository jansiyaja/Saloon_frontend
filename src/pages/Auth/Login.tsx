import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

interface LoginFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Must contain uppercase, lowercase, number & special character"
    ),
});

export default function SalonAdminLogin({ onLogin }: { onLogin?: (data: LoginFormData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    onLogin?.(data);
  };

  const handleGoogleSuccess = (res: CredentialResponse) => console.log("Google Auth:", res);
  const handleGoogleError = () => console.error("Google Login Failed");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black/80 border border-yellow-600/40 rounded-2xl p-8 shadow-lg">
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-serif">Elite Salon</h1>
          <p className="text-yellow-200/70 text-sm">Admin Dashboard</p>
        </div>

        {/* Google Login */}
     

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-600/30 text-yellow-100 placeholder-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-600/30 text-yellow-100 placeholder-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-400 text-sm"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 py-3 rounded-lg text-yellow-100 font-semibold hover:from-yellow-500 hover:to-yellow-600 transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
         
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-yellow-600/30" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-black text-yellow-400/70">Or sign in with email</span>
          </div>
        </div>

          <div className="flex justify-center mb-6">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} size="large" />
        </div>

        {/* Footer */}
        <p className="text-center text-yellow-200/60 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            Request Access
          </a>
        </p>
      </div>
    </div>
  );
}
