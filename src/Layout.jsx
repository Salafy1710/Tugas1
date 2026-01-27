import Navbar from './Navbar/Navbar'; 
import Footer from './Footer/Footer'; 

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
