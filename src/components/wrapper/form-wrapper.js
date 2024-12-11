import React from 'react';
import cn from '@/utils/class-names';
import { Label } from 'flowbite-react';

export default function FormWrapper({ title, titleClassName, children, className, childrenWrapperClassName, isRequired, requiredClassName }) {
  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      <Label className={cn('flex font-normal', titleClassName)}>
        {title}
        {isRequired && <span className={cn('text-red-600', requiredClassName)}>*</span>}
      </Label>
      <div className={cn('grow', childrenWrapperClassName)}>{children}</div>
    </div>
  );
}
