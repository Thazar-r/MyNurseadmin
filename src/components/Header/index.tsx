import { Link } from 'react-router-dom';
import { IconButton } from '../Button';
import Typography from '../Typography';
import { classNames } from '@utils/tailwind';

interface Props {
  toggleMobileSidebar: () => void;
  isMobileOpen: boolean;
}

function Header({
  isMobileOpen,
  toggleMobileSidebar,
}: Readonly<Props>): React.JSX.Element {
  const flexMdHidden = 'flex md:hidden';
  return (
    <div
      className="h-[52px] md:h-[68px] w-full flex flex-row items-center justify-between bg-primary-600 text-white px-1 md:px-5 lg:px-10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.15)]"
    >
      <div
        className={classNames(
          'flex flex-row items-center md:w-auto md:gap-x-3', {
          'pl-3': isMobileOpen,
        })}
      >
        <IconButton
          onClick={toggleMobileSidebar}
          src="/images/header-icons/hamburger-icon.svg"
          alt="menu icon"
          className={classNames(flexMdHidden, {
            hidden: isMobileOpen,
          })}
        />
        <Link
          to="/admin"
          className="flex flex-row gap-x-2 items-center text-white h-7 lg:h-10"
        >
          <img src="/images/header-icons/Logo.svg" alt="My Nurse logo" />
          <Typography
            variant="h4"
            weight="semiBold"
            className="text-white"
          >
            MyNurse
          </Typography>
        </Link>
      </div>

      <IconButton
        onClick={toggleMobileSidebar}
        src="/images/header-icons/close-icon.svg"
        alt="close menu icon"
        className={classNames(flexMdHidden, {
          hidden: !isMobileOpen,
        })}
      />
    </div>
  );
};

export default Header;
