'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

export default function Modal({ children, buttonCaption, ...props }) {
  const [portalNode, setPortalNode] = useState(null);

  useEffect(() => {
    const element = document.createElement('div');
    document.querySelector('main').appendChild(element);
    setPortalNode(element);

    return () => {
      document.querySelector('main').removeChild(element);
    };
  }, []);

  if (!portalNode) return null;

  return createPortal(
    <dialog {...props} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    portalNode
  );
}
