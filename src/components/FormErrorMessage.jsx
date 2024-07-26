import React from 'react'
import { useFormContext } from 'react-hook-form';

const FormErrorMessage = ({ name, message }) => {
  const { formState: { errors } } = useFormContext();

  return errors[name] && <p className='mt-2 text-red'>{message}</p>
}

export default FormErrorMessage