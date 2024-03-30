'use client';

import { usePopper } from 'react-popper';
import { useEffect, useState } from 'react';

export function TextLabel({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [referenceEl, setReferenceEl] = useState<HTMLElement | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceEl, popperEl, {
    placement: 'bottom',
  });

  const showPopover = () => {
    // @ts-ignore
    popperEl?.setAttribute('data-show', true);
  };

  useEffect(() => {
    const hidePopover = () => {
      popperEl?.removeAttribute('data-show');
    };

    referenceEl?.addEventListener('mouseleave', hidePopover);

    return () => {
      referenceEl?.removeEventListener('mouseleave', hidePopover);
    };
  }, [popperEl, referenceEl]);

  return (
    <div>
      <div
        className="popover text text-label"
        onMouseEnter={() => {
          showPopover();
        }}
        ref={setReferenceEl}
      >
        {children}
      </div>
      <div
        className="text-label-menu"
        ref={setPopperEl}
        style={styles.popper}
        {...attributes.popper}
      >
        {text}
      </div>
    </div>
  );
}
