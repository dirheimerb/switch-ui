import Dropdown from '@/components/Dropdown/Dropdown';
import TriggerDropdown from '@/components/Dropdown/TriggerDropdown';
import BasicModel from '@/components/Models/BasicModel';

import React from 'react';

export const menuItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Home() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const handleOpenClick = (): void => {
    setOpen(!open);
  };
  const handleButtonClick = (): void => {
    console.log('Button Clicked');
  };

  const handleModalClose = (): void => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Dropdown
        buttonCloseLabel="Close" //{<XIcon />}
        buttonOpenLabel="Navigation" //{<ThreeBarsIcon />}
        menuItems={menuItems}
      />
      <TriggerDropdown
        trigger={<button>Dropdown</button>}
        menu={[
          <button key="1" onClick={handleButtonClick}>
            Menu 1
          </button>,
          <button key="2" onClick={handleButtonClick}>
            Menu 2
          </button>,
          <button key="3" onClick={handleButtonClick}>
            Menu 3
          </button>,
        ]}
      />
      <BasicModel
        title={'Confirmation'}
        message={'Confirm'}
        modelType={'alert'}
        buttonColor={'sky'}
        textColor={'sky'}
        hoverTextColor={'sky'}
        width={'md'}
        buttonTitle="Confirm"
      />
    </div>
  );
}
