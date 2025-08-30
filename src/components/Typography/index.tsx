import { classNames } from '@utils/tailwind';
import type React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
  variant: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1'
    | 'body2' | 'body3';
  weight?: 'strong' | 'semiBold' | 'medium' | 'regular';
  color?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'disabled' | 
    'alert' | 'link' | 'primaryHeading' | 'secondaryHeading'
    | 'tertiaryHeading' | 'white';
}

const variantStyles = {
  p: 'text-base',
  span: 'text-base',
  h1: 'text-2xl text-[40px] font-semibold leading-tight leading-snug',
  h2: 'text-xl text-[32px] leading-[40px] font-medium',
  h3: 'text-lg text-2xl font-medium',
  h4: 'text-lg text-xl font-medium',
  h5: 'text-base font-medium',
  body1: 'text-base',
  body2: 'text-sm',
  body3: 'text-xs',
};

const weightStyles = {
  strong: 'font-bold',
  semiBold: 'font-semibold',
  medium: 'font-medium',
  regular: 'font-normal',
};

const colorStyles = {
  primary: 'text-neutral-1000',
  secondary: 'text-neutral-600',
  tertiary: 'text-neutral-800',
  white: 'text-white',
  warning: 'text-state-warning',
  disabled: 'text-neutral-500',
  alert: 'text-state-alert',
  link: 'text-state-link',
  primaryHeading: 'text-primary-1000',
  secondaryHeading: 'text-primary-700',
  tertiaryHeading: 'text-neutral-gray-6',
};

function Typography({
  variant,
  weight = 'regular',
  color = 'primary',
  children,
  className,
  ...props
}: Readonly<Props>): React.JSX.Element {
  const Tag: keyof React.JSX.IntrinsicElements = ['body1', 'body2', 'body3']
    .includes(variant) ? 'p' : variant as keyof React.JSX.IntrinsicElements;

  return (
    <Tag
      {...props}
      className={classNames(
        'font-poppins',
        variantStyles[variant],
        weightStyles[weight],
        colorStyles[color],
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
