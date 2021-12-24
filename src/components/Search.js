 import { Component } from "react";
 class Search extends Component {
     constructor(props){
         super(props);
         this.props=props;
         this.handleSearch = props.handleSearch
     }
    

     render(){
         return (
            <div className="py-5">
            <form className="d-flex" onSubmit={this.handleSearch}>
                <input className="form-control" placeholder="Search..." name="city" />
                <button type="submit" className="btn btn-primary ms-2">Search</button>
            </form>
        </div>);
         
     }
 }
 export default Search;