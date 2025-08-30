import DashboardIcon from '@components/DashboardIcon';
import CalendarCheckIcon from '@components/CalendarCheckIcon';

export interface MenuLink {
  name: string;
  url: string;
  icon?: React.FC<any>;
  children?: MenuLink[];
}

interface MenuSection {
  id: string;
  header: string;
  links: MenuLink[];
}

export const MENU_SECTION: MenuSection = {
  id: 'my-menu',
  header: 'My Menu',
  links: [
    {
      name: 'Dashboard',
      url: '/admin',
      icon: DashboardIcon,
    },
    {
      name: 'Bookings',
      url: '/admin/bookings',
      icon: CalendarCheckIcon,
      children: [
        { name: 'All Bookings', url: '/admin/bookings' },
        { name: 'Missed/Failed Sessions', url: '/admin/bookings/missed-and-failed' },
      ],
    },
  ],
};
