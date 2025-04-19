import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">InvoiceApp</div>
      <nav className="navbar-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/clients" className="nav-item">Clients</NavLink>
        <NavLink to="/invoices" className="nav-item">Invoices</NavLink>
      </nav>
    </header>
  );
};

export default Sidebar;
