import Dashboard from './component/Dashboard';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import SideNavbar from './component/layout/SideNavbar';


function App() {

  return (
    <div className="sb-nav-fixed">
      <Header className="" />
      <SideNavbar >
        <div id="layoutSidenav_content">
          <Dashboard />
          <Footer />
        </div>
      </SideNavbar>

    </div>
  );
}

export default App;
