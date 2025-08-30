import SearchIcon from '../SearchIcon';
import { classNames } from '@utils/tailwind';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: string;
  placeholder?: string;
  inputClassName?: string;
}

function SearchInput({
  name = 'search',
  value,
  onChange,
  className,
  inputClassName,
  placeholder = 'Search..'
}: Props): React.JSX.Element {
  return (
    <div className={classNames('relative w-full text-xl-2', className)}>
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(
          'bg-white placeholder:text-neutral-gray-7 placeholder:opacity-50 border border-neutral-300 w-full rounded',
          'px-4 py-4 outline-none focus:border-primary-500 transition-colors',
          inputClassName,
        )}
      />
      <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchInput;