import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const isPakistaniWhatsApp = (whatsappNo) => {
    return /^(\+92)[0-9]{10}$/.test(whatsappNo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, whatsappNo } = formData;

    if (!isPasswordValid(password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!isPakistaniWhatsApp(whatsappNo)) {
      setError('Invalid WhatsApp: must start with 92 and be 10 digits long (e.g., 923*********)');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105 '
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105'
          id='email'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Enter your WhatsApp No (+92xxxxxxxxxxxx)'
          className='border p-3 rounded-lg hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105 '
          id='whatsappNo'
          onChange={handleChange}
          defaultValue='+92'
            
          
        />
        <input
          type='password'
          placeholder='password '
          className='border p-3 rounded-lg hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105 '
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105 '
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth></OAuth>
      </form>
      
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700 hover:opacity- disabled:opacity-80 transform transition-transform duration-200 hover:scale-105 '>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
