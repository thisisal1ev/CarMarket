import { useMask } from '@react-input/mask'
import React from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'

import { Button } from '@nextui-org/react'

import FormErrorMessage from './FormErrorMessage'

const Form = () => {
	const inputRef = useMask({
		mask: '+998 __ ___ __ __',
		replacement: { _: /\d/ },
	})

	const methods = useForm({
		mode: 'onChange',
	})

	const {
		handleSubmit,
		control,
		reset,
		register,
		formState: { errors },
	} = methods

	const authorErr = errors['author']?.message
	const phoneErr = errors['phoneNumber']?.message
	const emailErr = errors['email']?.message
	const reviewErr = errors['review']?.message

	const onSubmit = data => {
		console.log(data)
		reset()
		alert('Xabar mufoqiyatli jonatildi!!!')
	}

	const btnDisabled = authorErr || phoneErr || emailErr || reviewErr

	return (
		<FormProvider {...methods}>
			<form
				method='POST'
				onSubmit={handleSubmit(onSubmit)}
				className='w-full max-w-3xl mx-auto px-5 space-y-5 text-black py-10 translate-y-1/4 font-medium relative'
			>
				<div className='grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-2 md:gap-x-5'>
					<label className='text-white flex flex-col'>
						<span className='hidden md:block md:mb-1'>Ism</span>

						<input
							{...register('author', {
								minLength: {
									value: 4,
									message: 'Kamida 4ta simvoldan ibort bolishi lozim',
								},
							})}
							type='text'
							placeholder='Ism'
							className={`outline-none pl-3 py-3 pr-10 rounded-md bg-secondBlack border-2 focus:bg-secondBlack/50 hover-hover:hover:bg-secondBlack/30 duration-300 transition-colors placeholder:text-[#7f7f7f] ${
								authorErr
									? 'border-red focus:border-red'
									: 'focus:border-skyBlueDarker border-transparent'
							}`}
							required
						/>

						<FormErrorMessage name={'author'} message={authorErr} />
					</label>

					<label className='text-white flex flex-col'>
						<span className='hidden md:block md:mb-1'>Telefon raqam</span>

						<Controller
							name='phoneNumber'
							control={control}
							rules={{
								pattern: {
									value: /^\+998 \d{0,2} \d{3} \d{2} \d{2}$/,
									message: 'Invalid phone number format',
								},
							}}
							render={({ field }) => (
								<input
									{...field}
									ref={inputRef}
									type='tel'
									placeholder='Telefon raqam'
									className={`outline-none pl-3 py-3 pr-10 rounded-md bg-secondBlack border-2 focus:bg-secondBlack/50 hover-hover:hover:bg-secondBlack/30 duration-300 transition-colors placeholder:text-[#7f7f7f] ${
										phoneErr
											? 'border-red focus:border-red'
											: 'focus:border-skyBlueDarker border-transparent'
									}`}
									required
								/>
							)}
						/>

						<FormErrorMessage name={'phoneNumber'} message={phoneErr} />
					</label>
				</div>

				<label className='text-white flex flex-col'>
					<span className='hidden md:block md:mb-1'>Elektron pochta</span>

					<input
						type='email'
						className={`w-full outline-none pl-3 py-3 pr-10 rounded-md bg-secondBlack border-2 focus:bg-secondBlack/50 hover-hover:hover:bg-secondBlack/30 duration-300 transition-colors placeholder:text-[#7f7f7f] ${
							emailErr
								? 'border-red focus:border-red'
								: 'focus:border-skyBlueDarker border-transparent'
						}`}
						placeholder='Elektron pochta'
						required
						{...register('email', {
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'Yaroqsiz elektron pochta manzili',
							},
						})}
					/>

					<FormErrorMessage name={'email'} message={emailErr} />
				</label>

				<label className='text-white flex flex-col'>
					<textarea
						{...register('review', {
							minLength: {
								value: 10,
								message: 'Kamida 10ta simvoldan ibort bolishi lozim',
							},
						})}
						name='review'
						placeholder='Sharx'
						className={`w-full resize-none outline-none p-3 rounded-md bg-secondBlack focus:bg-opacity-50 hover-hover:hover:bg-secondBlack/30 focus:bg-secondBlack/50 duration-300 border-2 transition-colors placeholder:text-[#7f7f7f] ${
							reviewErr
								? 'focus:border-red border-red'
								: 'focus:border-skyBlueDarker border-transparent'
						}`}
						rows={8}
						required
					></textarea>

					<FormErrorMessage name={'review'} message={reviewErr} />
				</label>

				<div className='flex items-end justify-end'>
					<Button
						className={`inline-block w-32 text-medium outline-none`}
						color={`${btnDisabled ? 'danger' : 'primary'}`}
						variant='ghost'
						type='submit'
						isDisabled={btnDisabled}
					>
						Yuborish
					</Button>
				</div>
			</form>
		</FormProvider>
	)
}

export default Form
