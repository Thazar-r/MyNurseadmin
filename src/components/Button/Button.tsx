import { classNames } from '@utils/tailwind';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  weight?: 'regular' | 'medium' | 'strong';
}

const VARIANTS = {
  primary: 'text-white bg-primary-700 hover:text-primary-700 hover:bg-primary-200 border border-primary-700',
  secondary: 'text-primary-800 border border-primary-800 hover:bg-primary-200 hover:text-primary-04',
};

const weightStyles = {
  regular: 'font-normal',
  medium: 'font-medium',
  strong: 'font-semibold',
};

function Button({
  variant = 'primary',
  type = 'button',
  disabled,
  onClick,
  children,
  className,
  weight = 'regular',
}: Readonly<Props>): React.JSX.Element {
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={classNames(
        'font-poppins text-base text-center rounded-lg py-2 px-8 disabled:bg-opacity-20 disabled:border-0 shadow-bs10 disabled:cursor-not-allowed transition-colors duration-300',
        VARIANTS[variant],
        weightStyles[weight],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
