import React from 'react';
import { TextInput } from 'flowbite-react';
import cn from '@/utils/class-names';

const Input = React.forwardRef(({ errors, errorMsgClassName, name, ...props }, ref) => {
  return (
    <>
      <TextInput ref={ref} name={name} {...props} />
      {errors && errors[name]?.message && <p className={cn('text-red-600 text-sm mt-0.5', errorMsgClassName)}>{errors[name]?.message}</p>}
    </>
  );
});

export default Input;
