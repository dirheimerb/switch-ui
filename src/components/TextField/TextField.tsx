import React from 'react';
import styles from './textfield.module.css';

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  width?: string;
  height?: string;
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, placeholder, width, height, handleInputChange },
    ref,
  ) {
    return (
      <>
        <label htmlFor="textfield" className={styles.label}>
          {label}
        </label>
        <input
          id="textfield"
          name="textfield"
          className={styles.textfield}
          style={{
            width: width,
            height: height,
          }}
          type="text"
          placeholder={placeholder}
          onChange={handleInputChange}
          ref={ref}
        />
      </>
    );
  },
);
