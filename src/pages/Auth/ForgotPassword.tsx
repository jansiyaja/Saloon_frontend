import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import FRONTEND_ROUTES from '../../Routes/frontendRoutes';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required')
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: { email: string }) => {
    console.log('Reset password request for:', data);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border-2 bg-black p-6 rounded-lg shadow-xl border-amber-400">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-300">Forgot Password</h2>
          <p className="text-sm text-gray-300">Enter your email to receive a reset link</p>
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
              className="mt-1 block w-full border border-amber-100 bg-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:ring-gold focus:border-gold"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-amber-300 rounded-md shadow-sm text-sm font-medium bg-gold hover:bg-amber-300 text-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold focus:ring-offset-amber-400 transition duration-150"
            >
              Send Reset Link
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Remember your password?{' '}
            <Link to={FRONTEND_ROUTES.LOGIN} className="font-medium text-gold hover:text-yellow-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
