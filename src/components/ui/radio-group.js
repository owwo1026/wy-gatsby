import React from 'react';
import { Radio, Label } from 'flowbite-react';
import cn from '@/utils/class-names';

const RadioGroup = React.forwardRef(({ options, value, onChange, errors, name, errorMsgClassName, ...props }, ref) => {
  return (
    <>
      <div className="flex flex-row gap-4 flex-wrap">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <Radio
              ref={ref}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              {...props}
            />
            <Label className="font-normal">{option.label}</Label>
          </div>
        ))}
      </div>
      {errors && errors[name]?.message && <p className={cn('text-red-600 text-sm mt-0.5', errorMsgClassName)}>{errors[name]?.message}</p>}
    </>
  );
});

export default RadioGroup;
