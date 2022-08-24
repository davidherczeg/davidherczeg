import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = async data => {
    setLoading(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      const data = await res.json();
      setSuccess(data.success);
      setMessage(data.message);
    } else {
      // error message
    }

    setLoading(false);
  };

  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <Section label='Contact'>
        <div className='flex justify-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-4 w-96'
          >
            {!success && (
              <>
                <h1 className='text-base'>
                  Please fill out the following form to send me a message. I
                  will respond to each message as quickly as I can.
                </h1>

                <div>
                  <label htmlFor='name' className='text-sm'>
                    Name *
                  </label>
                  <input
                    {...register('name', { required: true })}
                    className='rounded-md border-gray-300 bg-gray-50 shadow-sm w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50'
                    id='name'
                    type='text'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='text-sm'>
                    Email Address *
                  </label>
                  <input
                    {...register('email', { required: true })}
                    className='rounded-md border-gray-300 bg-gray-50 shadow-sm w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50'
                    id='email'
                    type='email'
                  />
                </div>
                <div>
                  <label htmlFor='subject' className='text-sm'>
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: true })}
                    className='rounded-md border-gray-300 bg-gray-50 shadow-sm w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50'
                    id='subject'
                    type='text'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='text-sm'>
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    className='rounded-md border-gray-300 bg-gray-50 shadow-sm w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50'
                    id='message'
                    rows='4'
                  />
                </div>
              </>
            )}
            {message && (
              <p
                className={`text-base ${
                  success ? 'bg-green-100' : 'bg-red-100'
                } p-4 rounded-md`}
              >
                {message}
              </p>
            )}
            {!success && (
              <button
                type='submit'
                className={`px-4 py-2 w-32 h-12 ${
                  loading
                    ? 'bg-purple-300 cursor-wait'
                    : 'bg-purple-700 cursor-pointer'
                } shadow-md rounded-md font-bold text-white text-sm`}
                disabled={loading}
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </Section>
      <Footer />
    </div>
  );
};
