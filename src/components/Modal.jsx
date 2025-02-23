'use client';

import { useImperativeHandle, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, buttonCaption, ...props }) {
  const [portalNode, setPortalNode] = useState(null);

  useEffect(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    setPortalNode(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);

  if (!portalNode) return null;

  return createPortal(
    <dialog {...props}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    portalNode
  );
}
