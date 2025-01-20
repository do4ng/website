'use client';

import { usePopper } from 'react-popper';
import { useEffect, useState } from 'react';

export function Popover({ children, text }: { children: React.ReactNode; text: string }) {
  const [referenceEl, setReferenceEl] = useState<HTMLElement | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLElement | null>(null);
  const [popperContainer, setPopperContainer] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceEl, popperEl, {
    placement: 'bottom-start',
  });

  const showPopover = () => {
    // @ts-ignore
    popperEl?.setAttribute('data-show', true);
  };

  useEffect(() => {
    const hidePopover = () => {
      popperEl?.removeAttribute('data-show');
    };

    popperContainer?.addEventListener('mouseleave', hidePopover);

    return () => {
      popperContainer?.removeEventListener('mouseleave', hidePopover);
    };
  }, [popperEl, referenceEl, popperContainer]);

  return (
    <div
      ref={setPopperContainer}
      onMouseEnter={() => {
        showPopover();
      }}
      className="popper-container"
    >
      <button className="popover btn text" ref={setReferenceEl}>
        {text} <i className="ri-arrow-down-s-line"></i>
      </button>
      <div
        className="popover-menu"
        ref={setPopperEl}
        style={styles.popper}
        {...attributes.popper}
      >
        {children}
      </div>
    </div>
  );
}
