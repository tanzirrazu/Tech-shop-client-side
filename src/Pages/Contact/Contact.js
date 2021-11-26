import React from 'react';
import { useForm } from 'react-hook-form';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
	const locations = <GoLocation />;
	const mail = <AiOutlineMail />;
	const call = <FaPhoneAlt />;
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<div className='my-16'>
				<div>
					<h1 className='text-6xl font-bold font-sans text-center'>Contact Us</h1>
				</div>
				<div className='rounded-full hover:text-white py-3 mt-4 mb-8 px-4 bg-indigo-200 hover:bg-indigo-600 w-1/6 mx-auto'>
					<h1 className='text-lg font-bold font-sans text-center text-gray-800 hover:text-white'>
						Home / Contact
					</h1>
				</div>
				<div>
					<div>
						<div className='md:flex lg:flex gap-4 justify-center'>
							<div className='px-4 py-16 shadow-2xl text-center'>
								<div className='shadow-2xl rounded-full h-24 w-24 mx-auto flex items-center justify-center bg-green-600 hover:bg-indigo-600'>
									<h1 className='text-5xl font-bold text-white'>{locations}</h1>
								</div>
								<div className='my-3'>
									<p className='font-bold text-lg'>Our Location </p>
									<h4 className='text-gray-400 mt-4'>
										W898 RTower Stat, Suite 56 Brockland,CA 9622 United States
									</h4>
								</div>
							</div>
							<div className='px-4 py-16 shadow-2xl text-center'>
								<div className='shadow-2xl rounded-full h-24 w-24 mx-auto flex items-center justify-center bg-green-600 hover:bg-indigo-600'>
									<h1 className='text-5xl font-bold text-white'>{mail}</h1>
								</div>
								<div className='my-3'>
									<p className='font-bold text-lg'>Our Email </p>
									<h4 className='text-gray-400 mt-4'>
										Email Us: Support@info.Com Vanamsupport.com
									</h4>
								</div>
							</div>
							<div className='px-4 py-16 shadow-2xl text-center'>
								<div className='shadow-2xl rounded-full h-24 w-24 mx-auto flex items-center justify-center bg-green-600 hover:bg-indigo-600'>
									<h1 className='text-5xl font-bold text-white'>{call}</h1>
								</div>
								<div className='my-3'>
									<p className='font-bold text-lg'>Phone Number </p>
									<h4 className='text-gray-400 mt-4'>
										Contact Numbers: 458-965-3224 458-965-3224
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className='mb-10'>
					<h1 className='text-6xl font-bold font-serif text-center'>
						We Are Here! <br /> Please Send A Quest
					</h1>
				</div>
				<div>
					<form onSubmit={handleSubmit(onSubmit)} className='mb-10'>
						<div className='shadow-2xl w-3/4 mx-auto py-10'>
							<div className='flex justify-center my-10'>
								<input
									className='border border-gray-300 mr-4 w-2/6 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400'
									placeholder='Name'
									{...register('name')}
								/>

								<input
									className='border border-gray-300 ml-4 w-2/6 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400'
									placeholder='Email'
									type='email'
									{...register('email')}
								/>
							</div>
							<input
								style={{ width: '790px' }}
								className='border border-gray-300 block  mx-auto my-6 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400'
								placeholder='Subject'
								{...register('subject')}
							/>
							<textarea
								style={{ width: '790px' }}
								className='border border-gray-300 block my-6 mx-auto dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400'
								placeholder='Message'
								{...register('dec')}
							/>

							<div className='text-center'>
								<input
									className='mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs'
									type='submit'
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
