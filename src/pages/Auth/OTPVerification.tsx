import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import FRONTEND_ROUTES from '../../Routes/frontendRoutes';

const schema = yup.object().shape({
  otp: yup.string().length(6, 'OTP must be 6 digits').required('OTP is required')
});

const OtpVerification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [timeLeft, setTimeLeft] = useState(180);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);

  const onSubmit = (data: { otp: string }) => {
    console.log('OTP Submitted:', data);
  };

  const handleResendOtp = () => {
    setTimeLeft(180);
    setIsResendDisabled(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border-2 bg-black p-6 rounded-lg shadow-xl border-amber-400">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-300">OTP Verification</h2>
          <p className="text-sm text-gray-300">Enter the OTP sent to your email</p>
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-300">
              OTP
            </label>
            <input
              id="otp"
              type="text"
              {...register('otp')}
              className="mt-1 block w-full border-gray-700 bg-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:ring-gold focus:border-gold text-center"
            />
            {errors.otp && <p className="mt-1 text-sm text-red-500">{errors.otp.message}</p>}
          </div>
          <div className="text-center text-gray-300">
            {timeLeft > 0 ? (
              <p>Resend OTP in {timeLeft}s</p>
            ) : (
              <button
                type="button"
                className="text-gold hover:text-yellow-400"
                onClick={handleResendOtp}
                disabled={isResendDisabled}
              >
                Resend OTP
              </button>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-amber-300 rounded-md shadow-sm text-sm font-medium bg-gold hover:bg-amber-300 text-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold focus:ring-offset-amber-400 transition duration-150"
            >
              Verify OTP
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Didn't receive an OTP?{' '}
            <Link to={FRONTEND_ROUTES.REGISTER} className="font-medium text-gold hover:text-yellow-400">
              Register Again
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
