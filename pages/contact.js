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

  const onSubmit = async data => {};

  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Section label='Contact'>
        <div className='flex'>
          <div className='flex-1' />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex-1 flex flex-col space-y-4'
          >
            <h1 className='text-base'>
              Please fill out the following form to send me a message. I will
              respond to each message as quickly as I can.
            </h1>
            <div>
              <label htmlFor='name' className='text-sm'>
                Name *
              </label>
              <input
                {...register('name')}
                className='rounded-md border-gray-300 bg-gray-50 shadow-sm w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50'
                id='name'
                type='text'
              />
            </div>
            <div>
              <label htmlFor='emailAddress' className='text-sm'>
                Email Address *
              </label>
              <input
                {...register('emailAddress')}
                className='rounded-md border-gray-300 bg-gray-50 shadow-sm w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50'
                id='emailAddress'
                type='text'
              />
            </div>
            <div>
              <label htmlFor='subject' className='text-sm'>
                Subject *
              </label>
              <input
                {...register('subject')}
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
                {...register('message')}
                className='rounded-md border-gray-300 bg-gray-50 shadow-sm w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50'
                id='message'
                rows='4'
              />
            </div>
            <button
              type='submit'
              className='px-4 py-2 w-32 h-12 bg-black shadow-md rounded-md font-bold text-white text-sm'
            >
              Send Message
            </button>
          </form>
          <div className='flex-1' />
        </div>
      </Section>
      <Footer />
    </div>
  );
};
