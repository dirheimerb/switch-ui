import React from 'react';
import styles from './checkbox.module.css';

export interface CheckboxProps {
  listItems: {
    label: string;
    value: string;
  }[];
  width?: string;
  height?: string;
  onChange?: (value: string[]) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ listItems, width, height, onChange }, ref) {
    const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const isChecked = checkedItems.includes(value);
      const newCheckedItems = isChecked
        ? checkedItems.filter((item) => item !== value)
        : [...checkedItems, value];

      setCheckedItems(newCheckedItems);
      onChange && onChange(newCheckedItems);
    };

    return (
      <>
        <svg className={styles.checkbox_symbol}>
          <symbol id="check" viewBox="0 0 12 10">
            <polyline
              points="1.5 6 4.5 9 10.5 1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polyline>
          </symbol>
        </svg>
        <div className={styles.checkbox_container}>
          {listItems.map((item, index) => (
            <>
              <input
                key={index}
                id={'checkbox'}
                name="checkbox"
                className={styles.checkbox_input}
                type="checkbox"
                value={item.value}
                checked={checkedItems.includes(item.value)}
                onChange={handleOnChange}
                ref={ref}
              />
              <label className={styles.checkbox} htmlFor={'checkbox'}>
                <span>
                  <svg width="12px" height="10px">
                    <use xlinkHref="#check"></use>
                  </svg>
                </span>
                <span>{item.label}</span>
              </label>
            </>
          ))}
        </div>
      </>
    );
  },
);

export default Checkbox;
