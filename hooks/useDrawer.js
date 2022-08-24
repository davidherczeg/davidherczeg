import { useState } from 'react';

const useDrawer = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => setIsShowing(!isShowing);

  return {
    isShowing,
    toggle,
  };
};

export default useDrawer;
