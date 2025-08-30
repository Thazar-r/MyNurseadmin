import { createContext, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface SidebarValue {
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
}

export const SidebarContext = createContext({} as SidebarValue);

function SidebarProvider({ children }: Readonly<Props>): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const value = {
    isCollapsed,
    toggleIsCollapsed(): void {
      setIsCollapsed((prev) => !prev);
    },
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
