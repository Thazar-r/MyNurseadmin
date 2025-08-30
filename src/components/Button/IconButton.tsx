import { classNames } from '@utils/tailwind';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt?: string;
  className?: string;
}

function IconButton({
  onClick,
  src,
  alt,
  className,
  ...props
}: Readonly<Props>): React.JSX.Element {
  return (
    <button
      {...props}
      onClick={onClick}
      className={classNames(
        'h-12 w-12 md:h-6 md:w-6 lg:h-7 lg:w-7 flex items-center justify-center',
        className,
      )}
    >
      <img src={src} alt={alt} className="h-6 md:h-full" />
    </button>
  );
};

export default IconButton;