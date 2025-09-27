import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { RegisterFormData } from "../../interfaces/form";
import { Link } from "react-router-dom";
import FRONTEND_ROUTES from "../../Routes/frontendRoutes";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain uppercase, lowercase, number and special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    console.log("Google Auth Success:", credentialResponse);
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-black/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-amber-400">
        {/* Branding Section */}
        <div className="hidden md:flex md:w-2/5 flex-col justify-between bg-gradient-to-br from-yellow-900/90 via-yellow-800/90 to-yellow-900/90 p-10 relative">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          {/* Logo */}
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center border border-yellow-500/40 shadow-lg">
                <svg
                  className="w-8 h-8 text-yellow-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-yellow-100 font-serif">ELITE</h1>
                <p className="text-yellow-200/80">SALON & SPA</p>
              </div>
            </div>

            <div className="space-y-6 mt-12">
              <div>
                <h3 className="text-yellow-100 font-semibold">Premium Dashboard</h3>
                <p className="text-yellow-200/70 text-sm">Manage appointments, clients, and staff.</p>
              </div>
              <div>
                <h3 className="text-yellow-100 font-semibold">Real-time Analytics</h3>
                <p className="text-yellow-200/70 text-sm">Track business performance with insights.</p>
              </div>
              <div>
                <h3 className="text-yellow-100 font-semibold">Client Management</h3>
                <p className="text-yellow-200/70 text-sm">Full client profiles with preferences.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-3/5 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-yellow-100 text-center mb-2">Create Account</h2>
          <p className="text-yellow-200/60 text-center mb-6">
            Join our premium salon experience
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("firstName")}
                  placeholder="First Name"
                  className="w-full px-4 py-2 bg-black/40 border border-yellow-600/30 rounded-lg text-yellow-100 focus:ring-2 focus:ring-yellow-500"
                />
                {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName.message}</p>}
              </div>
              <div>
                <input
                  {...register("lastName")}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 bg-black/40 border border-yellow-600/30 rounded-lg text-yellow-100 focus:ring-2 focus:ring-yellow-500"
                />
                {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-black/40 border border-yellow-600/30 rounded-lg text-yellow-100 focus:ring-2 focus:ring-yellow-500"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-black/40 border border-yellow-600/30 rounded-lg text-yellow-100 focus:ring-2 focus:ring-yellow-500"
              />
              {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
            </div>

            <div>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 bg-black/40 border border-yellow-600/30 rounded-lg text-yellow-100 focus:ring-2 focus:ring-yellow-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                {...register("terms")}
                type="checkbox"
                className="h-4 w-4 text-yellow-500 bg-black/40 border-yellow-600/30 rounded"
              />
              <span className="ml-2 text-sm text-yellow-200/80">
                I accept the{" "}
                <a href="#" className="text-yellow-400 hover:text-yellow-300">
                  Terms and Conditions
                </a>
              </span>
            </div>
            {errors.terms && <p className="text-red-400 text-sm">{errors.terms.message}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-yellow-100 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition"
            >
              Register Now
            </button>
          </form>

             <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-yellow-200/70">Or register with email</span>
            </div>
          </div>
             {/* Google Login */}
          <div className="flex justify-center mb-6">
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
          </div>

          <p className="text-center text-sm text-yellow-200/60 mt-6">
            Already have an account?{" "}
            <Link
              to={FRONTEND_ROUTES.LOGIN}
              className="text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
