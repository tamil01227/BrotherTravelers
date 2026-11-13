import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'drawer' | 'footer';
}

const variantStyles = {
  header: {
    image: 'h-10 w-10 sm:h-11 sm:w-11',
    name: 'text-[17px] sm:text-lg',
    travels: 'text-[10px] sm:text-[11px] tracking-[0.18em]',
    primary: 'text-[#142B49]',
    secondary: 'text-[#A9761D]',
  },
  drawer: {
    image: 'h-10 w-10',
    name: 'text-lg',
    travels: 'text-[10px] tracking-[0.18em]',
    primary: 'text-[#142B49]',
    secondary: 'text-[#A9761D]',
  },
  footer: {
    image: 'h-11 w-11',
    name: 'text-lg',
    travels: 'text-[10px] tracking-[0.18em]',
    primary: 'text-white',
    secondary: 'text-amber-300',
  },
};

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header' }) => {
  const styles = variantStyles[variant];

  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src="/brand-mark.svg"
        alt=""
        aria-hidden="true"
        className={`${styles.image} shrink-0`}
        width="48"
        height="48"
      />
      <span className="flex flex-col items-start leading-none">
        <span className={`${styles.name} font-extrabold tracking-tight ${styles.primary}`}>
          BROTHER'S
        </span>
        <span className={`mt-1 font-bold uppercase ${styles.travels} ${styles.secondary}`}>
          TRAVELS
        </span>
      </span>
    </span>
  );
};
