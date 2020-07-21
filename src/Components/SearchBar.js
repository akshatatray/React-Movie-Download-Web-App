import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
     state = {
       movieName: ""
     };

     onFormSubmit = (e) => {
          e.preventDefault();
          this.props.onSubmit(this.state.movieName);
     }

     render() {
          return (
               <div>
                    <form className="form" onSubmit={this.onFormSubmit}>
                         <input
                         type="text"
                         className="Bar"
                         value={this.state.movieName}
                         placeholder="Search Movie"
                         onChange={e => this.setState({ movieName: e.target.value })}
                         />
                    </form>
               </div>
          );
     }
}

export default SearchBar;