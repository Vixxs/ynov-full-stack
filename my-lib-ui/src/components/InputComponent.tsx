import React from 'react'

const InputComponent: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  return <input {...props} className='my-lib-ui-input' />
}

export default InputComponent
