import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { classNames } from '@utils/tailwind';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import { SidebarContext } from '@components/Sidebar/SidebarProvider';

function Layout(): React.JSX.Element {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isCollapsed, toggleIsCollapsed } = useContext(SidebarContext);

  const toggleMobileSidebar = (): void => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Add this effect to handle click outside
  const handleClickOutside = (e: React.MouseEvent<HTMLElement>): void => {
    if (isMobileOpen && !(e.target as HTMLElement).closest('aside')) {
      setIsMobileOpen(false);
    }
  };

  const handleRouteChange = (): void => {
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-neutral-200">
      <header className="h-[52px] md:h-[68px] z-30 flex-shrink-0">
        <Header
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileOpen={isMobileOpen}
        />
      </header>
      <div className="flex flex-1 relative overflow-hidden">
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
            onClick={handleClickOutside}
          />
        )}
        <div
          className={classNames(
            'fixed lg:relative lg:flex transition-all duration-300 z-40',
            {
              'lg:w-[92px]': isCollapsed,
              'lg:w-[280px]': !isCollapsed,
              '-left-[280px] lg:left-0': !isMobileOpen,
              'left-0': isMobileOpen,
            },
          )}
        >
          <button
            onClick={toggleIsCollapsed}
            className="hidden lg:flex absolute -right-3 top-3 items-center justify-center bg-white h-6 w-6 rounded-lg border border-neutral-200 z-50"
          >
            {isCollapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
          <aside
            className="h-[calc(100vh-52px)] md:h-[calc(100vh-68px)] w-[280px] lg:w-full border-r-1 border-[rgba(0,0,0,0.1)] bg-white overflow-y-auto"
          >
            <Sidebar
              isCollapsed={isCollapsed}
              onNavigate={handleRouteChange}
            />
          </aside>
        </div>
        <main className="flex-1 overflow-y-auto h-[calc(100vh-52px)] md:h-[calc(100vh-68px)] w-full p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
