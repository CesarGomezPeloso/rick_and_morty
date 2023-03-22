import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

class Nav extends React.Component {
    constructor(props){
      super(props);
}

render() {
    return(
        <div >
            <SearchBar onSearch={this.props.onSearch} />
            <Link to= "/about" >
             <h3>About</h3>
             </Link>
        </div>
    );
}
}

export default Nav