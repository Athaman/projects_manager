import React, { useId } from 'react';

export default function Input({ textarea, label, type, value, onChange, ...props }) {
  const generatedId = useId();
  // const inputId = props.id || generatedId;
  const inputId = 'whargarbl';

  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor={inputId} className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea id={inputId} className={classes} {...props} value={value} onChange={onChange} />
      ) : (
        <input id={inputId} className={classes} {...props} type={type} value={value} onChange={onChange} />
      )}
    </p>
  );
}
