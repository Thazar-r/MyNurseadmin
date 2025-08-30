import SidebarProvider from '@components/Sidebar/SidebarProvider';
import Routes from './Routes';

function App(): React.JSX.Element {
  return (
    <SidebarProvider>
      <Routes />
    </SidebarProvider>
  );
}

export default App;
