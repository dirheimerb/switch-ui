import React from 'react';

export default function useBoolean() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpenClick = (): void => {
    setOpen(!open);
  };

  return {
    open,
    handleOpenClick,
  };
}
