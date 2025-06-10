'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps {
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  as?: 'input' | 'select' | 'textarea';
  children?: React.ReactNode;
}

export default function InputField({
  label,
  id,
  name,
  placeholder,
  required = false,
  type = 'text',
  as = 'input',
  children,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id ?? name} className="mb-2 text-base text-gray-900">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <Field
        as={as}
        id={id ?? name}
        name={name}
        placeholder={placeholder}
        type={as === 'input' ? type : undefined}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      >
        {children}
      </Field>
    </div>
  );
}
