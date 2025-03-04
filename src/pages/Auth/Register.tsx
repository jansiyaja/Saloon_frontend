
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { GoogleLogin } from '@react-oauth/google';
import { CredentialResponse } from "@react-oauth/google"; 
import { RegisterFormData } from '../../interfaces/form';
import { Link } from 'react-router-dom';
import FRONTEND_ROUTES from '../../Routes/frontendRoutes';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number and special character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
 
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data:RegisterFormData) => {
    console.log(data);
   
  };

  const handleGoogleSuccess = (credentialResponse: CredentialResponse ) => {
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
              <span className="px-2 bg-gray-900 text-gray-300">Or register with email</span>
            </div>
          </div>
          
          <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register('firstName')}
                  className="mt-1 block w-full border-gray-700 bg-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:ring-gold focus:border-gold"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register('lastName')}
                  className="mt-1 block w-full border-gray-700 bg-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:ring-gold focus:border-gold"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
               className="mt-1 block w-full border-gray-700 bg-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:ring-gold focus:border-gold"
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
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                className="mt-1 block w-full border-gray-700 bg-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:ring-gold focus:border-gold"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  {...register('terms')}
                  className="h-4 w-4 text-gold border-gray-700 rounded focus:ring-gold bg-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-300">
                  I accept the <a href="#" className="text-gold hover:text-yellow-400">Terms and Conditions</a>
                </label>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-amber-300 rounded-md shadow-sm text-sm font-medium bg-gold hover:bg-amber-300 text-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold focus:ring-offset-amber-400 transition duration-150"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
        
       <div className="mt-6 text-center">
  <p className="text-sm text-gray-400">
    Already  have an account?{' '}
    <Link to={FRONTEND_ROUTES.LOGIN} className="font-medium text-gold hover:text-yellow-400">
      Sign In
    </Link>
  </p>
</div>

      </div>
    </div>
  );
};

export default Register;