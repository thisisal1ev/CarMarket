import React from 'react'
import { useFormContext } from 'react-hook-form';

const FormErrorMessage = ({ name, message }) => {
  const { formState: { errors } } = useFormContext();

  return errors[name] && <span className='inline-block mt-2 text-red'>{message}</span>
}

export default FormErrorMessage