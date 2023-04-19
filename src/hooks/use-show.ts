import React from 'react';

export default function useShow() {
  const [show, setShow] = React.useState<boolean>(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return { show, toggleShow };
}
