import ListItem from "./ListItem"
import "./Navbar.css"
function Navbar(){

    return (
        <ul id="navbar" className="flex">
            <ListItem itemName="Home" icon="home" />
            <ListItem itemName="Products" />
            <ListItem itemName="Checkout" />
        </ul>
    )
}

export default Navbar