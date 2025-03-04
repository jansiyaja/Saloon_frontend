
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { GoogleLogin } from '@react-oauth/google';
import { CredentialResponse } from "@react-oauth/google";
import { LoginFormData } from '../../interfaces/form';
import { Link } from 'react-router-dom';
import FRONTEND_ROUTES from '../../Routes/frontendRoutes';

const schema = yup.object().shape({

  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number and special character'
    ),

});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);

  };

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    console.log('Google Auth Success:', credentialResponse);

  };

  const handleGoogleError = () => {
    console.error('Google Login Failed');

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border-2 bg-black p-6 rounded-lg shadow-xl border-amber-400">
        <div className="text-center">

          <p className=" text-sm text-gray-300">
            Join our premium salon experience
          </p>
        </div>

        <div className="mt-5" >
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              size="large"
              width="250"
            />
          </div>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-300">Or Sign In with email</span>
            </div>
          </div>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>


            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="mt-1 block w-full border border-amber-100  bg-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:ring-gold focus:border-gold"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>



            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register('password')}
                className="mt-1 block w-full border-gray-700 bg-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:ring-gold focus:border-gold"
              />
              <p className="mt-1 text-sm text-red-100">
                <Link to={FRONTEND_ROUTES.FORGOT_PASSWORD} className="hover:underline">
                  Forgot password?
                </Link>
              </p>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>


            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-amber-300 rounded-md shadow-sm text-sm font-medium bg-gold hover:bg-amber-300 text-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold focus:ring-offset-amber-400 transition duration-150"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to={FRONTEND_ROUTES.REGISTER} className="font-medium text-gold hover:text-yellow-400">
              Register Now
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;