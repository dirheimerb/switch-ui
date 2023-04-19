import React from 'react';
import styles from './dropdown.module.css';

export interface DropdownProps {
  trigger: React.ReactElement;
  menu: React.ReactElement[];
}

const TriggerDropdown = ({ trigger, menu }: DropdownProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropdown}>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className={styles.menu}>
          {menu.map((item, index) => (
            <li key={index} className={styles.menu_item}>
              {React.cloneElement(item, {
                onClick: () => {
                  item.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TriggerDropdown;
