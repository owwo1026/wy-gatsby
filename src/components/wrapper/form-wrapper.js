import React from 'react';
import cn from '@/utils/class-names';
import { Label } from 'flowbite-react';

export default function FormWrapper({ title, titleClassName, children, className, childrenWrapperClassName, isRequired, requiredClassName, full }) {
  return (
    <div className={cn(
      `grid ${full ? 'grid-cols-8':'grid-cols-4'} gap-5 w-full items-center`,
      full ? 'col-span-2':'',
      className,
      )}
    >
      <Label className={cn('col-span-1 flex font-normal', titleClassName)}>
        {title}
        {isRequired && <span className={cn('text-red-600', requiredClassName)}>*</span>}
      </Label>
      <div className={cn(`${full ? 'col-span-7':'col-span-3'}`, childrenWrapperClassName)}>{children}</div>
    </div>
  );
}
