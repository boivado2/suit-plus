'use client';

import { ChangeEvent, useState } from 'react';

type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  error?: boolean | string;
  hint?: string;
  format?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  leftIconClick?: () => void;
  rightIconClick?: () => void;
  rounded?: boolean;
};

export default function TextInput(props: InputType) {
  const {
    type = 'text',
    inputMode = 'text',
    error = false,
    disabled = false,
    placeholder,
    hint,
    format = false,
    value,
    id,
    name,
    className,
    leftIcon,
    rightIcon,
    leftIconClick,
    rightIconClick,
    onChange,
    onFocus,
    onBlur,
    rounded = false,
  } = props;

  const inputStyles = `
        ${disabled && 'pointer-events-none opacity-60'}
        h-[48px] bg-white px-4 py-2 border border-dark-100
        flex gap-2 items-center
        ${rounded ? 'rounded-3xl' : 'rounded-lg'}
        ${className}

    `;

  // //Convert value to a formated currency
  // const formatValue = (val: string): string => {
  //   const enteredValue = val;

  //   //Remove all negative value and alphabets
  //   const parsedValue = parseFloat(enteredValue.replace(/[^0-9.]/g, ''));
  //   let stringValue = parsedValue.toLocaleString();

  //   //Return the formatted string
  //   if (!isNaN(parsedValue)) {

  //   } else {

  //     return '';
  //   }

  //   return stringValue;
  // };

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   let enteredValue = event.target.value;
  //   if (format) {
  //     //Get the formatted string and remove the commas
  //     let stringValue = formatValue(enteredValue);
  //     stringValue = stringValue.split(',').join('');
  //     event.target.value = stringValue;
  //     //handle the onchange
  //     onChange && onChange(event);
  //   } else {
  //     onChange && onChange(event);

  //     setFValue(enteredValue);
  //   }
  // };

  return (
    <div className='flex flex-col w-full'>
      <div className={inputStyles}>
        {leftIcon && (
          <button
            onClick={leftIconClick}
            type='button'
            className='text-lg text-neutral cursor-pointer'
          >
            {leftIcon}
          </button>
        )}
        <input
          id={id}
          type={type}
          name={name}
          inputMode={inputMode}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`h-full text-sm w-full font-light  caret-primary text-gray-600 leading-2 focus:outline-none block appearance-none`}
          placeholder={placeholder}
        />
        {rightIcon && (
          <button
            type='button'
            onClick={rightIconClick}
            className='text-lg text-neutral cursor-pointer'
          >
            {rightIcon}
          </button>
        )}
      </div>
      {(error || hint) && (
        <div className='text-xs font-light mt-1 ml-1 p-2'>
          {error && <span className='text-red-600'>{error}</span>}
          {hint && <span className='text-dark-200'>{hint}</span>}
        </div>
      )}
    </div>
  );
}
