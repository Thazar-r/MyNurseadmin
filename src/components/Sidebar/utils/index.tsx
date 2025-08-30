import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import Typography from '@components/Typography';
import { MENU_SECTION, type MenuLink } from '@constants/sidebar';
import { classNames } from '@utils/tailwind';

export const getDefaultMenuToggleState = (
  currPathname: string,
): Record<string, boolean> => {
  const link = MENU_SECTION.links.findLast(
    (s): boolean => currPathname.includes(s.url),
  );
  return link?.children ? { [link.name]: true } : {};
};

export const renderMenuLinks = (
  link: MenuLink,
  pathname: string,
  isCollapsed: boolean,
  menuToggleState: Record<string, boolean>,
  handleMenuItemClick: (l: MenuLink, showChildren?: boolean) => void,
): React.JSX.Element => {
  const hasChildren = !!link.children?.length;
  const showNestedChildren = hasChildren && !isCollapsed;
  const Comp = showNestedChildren ? 'span' : Link;
  const isParentActive = (): boolean => {
    if (!hasChildren) {
      return pathname === link.url;
    }
    
    return isCollapsed && pathname.includes(link.url);
  };
  
  const parentCompClasses = classNames(
    'group hover:cursor-pointer flex items-center gap-x-3',
    'text-neutral-800 hover:bg-neutral-200 p-3 rounded-lg',
    { 
      'lg:justify-center': isCollapsed,
      'text-primary-900 bg-primary-200': isParentActive(),
    },
  );
  const Chevron = menuToggleState[link.name] ? ChevronUpIcon : ChevronDownIcon;

  return (
    <li key={link.name}>
      <Comp
        to={link.url}
        className={parentCompClasses}
        onClick={() => handleMenuItemClick(link, showNestedChildren)}
        data-tooltip-id={isCollapsed ? link.name : undefined}
        data-tooltip-content={isCollapsed ? link.name : undefined}
      >
        {link.icon && (
          <link.icon className="h-6 w-6 group-hover:text-neutral-900" />
        )}
        <Typography
          variant="span"
          weight="medium"
          className={classNames(
            'text-neutral-900',
            {
              'flex': !isCollapsed,
              'lg:hidden flex': isCollapsed,
              'text-primary-90': isParentActive(),
            },
          )}
        >
          {link.name}
        </Typography>
        {showNestedChildren && (
          <Chevron
            width={20}
            height={20}
            className="ml-auto text-neutral-900"
          />
        )}
      </Comp>
      {showNestedChildren && (
        <ul
          className={classNames(
            'hidden flex-col pl-15 mt-2 gap-y-1',
            { 'flex': menuToggleState[link.name] },
          )}
        >
          {link.children?.map((child) => (
            <li key={child.name}>
              <Link
                to={child.url}
                onClick={() => handleMenuItemClick(child)}
                className={classNames(
                  'hover:cursor-pointer flex items-center',
                  'text-neutral-800 hover:bg-neutral-200 py-2 px-3 rounded-lg',
                  { 
                    'text-primary-900 bg-primary-200': pathname === child.url,
                  },
                )}
              >
                <Typography
                  variant="body3"
                  className={classNames('text-[13px] text-neutral-800', {
                    'text-primary-90': pathname === child.url,
                  })}
                >
                  {child.name}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isCollapsed && (
        <Tooltip place="right" id={link.name} />
      )}
    </li>
  );
};
