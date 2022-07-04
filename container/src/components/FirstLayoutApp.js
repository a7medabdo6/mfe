import { mount } from 'firstLayout/FirstLayoutApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);
console.log(mount) 
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
