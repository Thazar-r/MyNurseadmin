import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@utils/tailwind';
import { MENU_SECTION, type MenuLink } from '@constants/sidebar';
import Typography from '../Typography';
import { getDefaultMenuToggleState, renderMenuLinks } from './utils';

interface Props {
  isCollapsed: boolean;
  onNavigate: () => void;
}

function Sidebar({ isCollapsed, onNavigate }: Readonly<Props>): React.JSX.Element {
  const { pathname } = useLocation();
  const [menuToggleState, setMenuToggleState] =
    useState<Record<string, boolean>>(getDefaultMenuToggleState(pathname));

  const handleMenuItemClick = useCallback((
    link: MenuLink,
    hasChildren?: boolean,
  ): void => {
    if (!hasChildren) {
      onNavigate();
    } else {
      setMenuToggleState({
        ...menuToggleState,
        [link.name]: !menuToggleState[link.name],
      });
    }
  }, [menuToggleState]);
  //   const hasChildren = !!link.children?.length;
  //   const showNestedChildren = hasChildren && !isCollapsed ;
  //   const Comp = showNestedChildren ? 'span' : Link;
  //   const isParentActive = (): boolean => {
  //     if (!hasChildren) {
  //       return pathname === link.url;
  //     }
      
  //     return isCollapsed && pathname.includes(link.url);
  //   };
    
  //   const parentCompOrLinkClasses = classNames(
  //     'group hover:cursor-pointer flex items-center gap-x-3',
  //     'text-neutral-800 hover:bg-neutral-200 p-3 rounded-lg',
  //     { 
  //       'lg:justify-center': isCollapsed,
  //       'text-primary-900 bg-primary-200': isParentActive(),
  //     },
  //   );
  //   const Chevron = menuToggleState[link.name] ? ChevronUpIcon : ChevronDownIcon;
  
  //   return (
  //     <li key={link.name}>
  //       <Comp
  //         to={link.url}
  //         className={parentCompOrLinkClasses}
  //         onClick={() => handleMenuItemClick(link, showNestedChildren)}
  //         data-tooltip-id={isCollapsed ? link.name : undefined}
  //         data-tooltip-content={isCollapsed ? link.name : undefined}
  //       >
  //         {link.icon && (
  //           <link.icon className="h-6 w-6 group-hover:text-neutral-900" />
  //         )}
  //         <Typography
  //           variant="span"
  //           weight="medium"
  //           className={classNames(
  //             'text-neutral-900',
  //             {
  //               'flex': !isCollapsed,
  //               'lg:hidden flex': isCollapsed,
  //               'text-primary-90': isParentActive(),
  //             },
  //           )}
  //         >
  //           {link.name}
  //         </Typography>
  //         {showNestedChildren && (
  //           <Chevron
  //             width={20}
  //             height={20}
  //             className="ml-auto text-neutral-900"
  //           />
  //         )}
  //       </Comp>
  //       {showNestedChildren && (
  //         <ul
  //           className={classNames(
  //             'hidden flex-col pl-15 mt-2 gap-y-1',
  //             { 'flex': menuToggleState[link.name] },
  //           )}
  //         >
  //           {link.children?.map((child) => (
  //             <li key={child.name}>
  //               <Link
  //                 to={child.url}
  //                 onClick={() => handleMenuItemClick(child)}
  //                 className={classNames(
  //                   'hover:cursor-pointer flex items-center',
  //                   'text-neutral-800 hover:bg-neutral-200 py-2 px-3 rounded-lg',
  //                   { 
  //                     'text-primary-900 bg-primary-200': pathname === child.url,
  //                   },
  //                 )}
  //               >
  //                 <Typography
  //                   variant="body3"
  //                   className={classNames('text-[13px] text-neutral-800', {
  //                     'text-primary-90': pathname === child.url,
  //                   })}
  //                 >
  //                   {child.name}
  //                 </Typography>
  //               </Link>
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //       {isCollapsed && (
  //         <Tooltip place="right" id={link.name} />
  //       )}
  //     </li>
  //   );
  // }, [
  //   pathname,
  //   isCollapsed,
  //   menuToggleState,
  //   handleMenuItemClick,
  // ]);

  return (
    <article className="h-full w-full flex flex-col gap-y-4 p-4">
      <section
        id="profile"
        className={classNames(
          'flex flex-row justify-between items-center w-full h-16',
          { 'justify-center': isCollapsed },
        )}
      >
        <div className="flex flex-row gap-x-2 items-center">
          <div className="h-11 w-11 rounded-full overflow-hidden">
            <img
              src="/images/default-profile.png"
              alt="user image"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={classNames('flex-col justify-start', {
              'flex': !isCollapsed,
              'lg:hidden flex': isCollapsed,
            })}
          >
            <Typography
              variant="h5"
              weight="medium"
              className="text-black"
            >
              John Doe
            </Typography>
            <Typography variant="body3" color="secondary">
              john.doe@email.com
            </Typography>
          </div>
        </div>
      </section>
      <hr className="h-[2px] text-neutral-200 w-full" />

      <section id="menu" className="md:flex-grow pt-2">
        <nav id={MENU_SECTION.id}>
          <Typography
            variant="body3"
            weight="medium"
            color="secondary"
            className={classNames({
              'lg:text-center lg:w-full': isCollapsed,
            })}
          >
            {MENU_SECTION.header}
          </Typography>
          <ul
            className={classNames('flex flex-col gap-y-2 mt-3', {
              'lg:items-center': isCollapsed
            })}
          >
            {MENU_SECTION.links.map((link) => renderMenuLinks(
              link,
              pathname,
              isCollapsed,
              menuToggleState,
              handleMenuItemClick,
            ))}
          </ul>
        </nav>
        <hr className="h-[2px] text-neutral-200 w-full my-2" />
      </section>
    </article>
  );
};

export default Sidebar;
