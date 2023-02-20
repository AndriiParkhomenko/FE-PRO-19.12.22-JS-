import {Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
	<>
	<Navbar bg="primary" variant="dark" className="row">
       <Nav className="me-auto">
         <Link className={"nav-link"} to={'/products'}>Products</Link>
         <Link className={"nav-link"} to={'/about'}>About</Link>
			<Link className={"nav-link"} to={'/contact-us'}>Contact us</Link>
       </Nav>
   </Navbar>
	<Outlet/>
	</>
  );
}

export default App;
