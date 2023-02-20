import { Button } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Confirmation () {
	const {user} = useContext(UserContext);
	return <div className="text-center"><Button variant={'success'}>Send confirmation to {user.email} </Button></div>
}

export default Confirmation;