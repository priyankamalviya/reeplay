import React, {Component} from 'react';
var FontAwesome = require('react-fontawesome');

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  render(){
     return (
			 <div className="col-sm-offset-2 search-bar">
       <div className="app-title">Reeplay</div>
  			 	<input
            className="col-sm-offset-1"
            type="search"
       			value = {this.state.term}
       			onChange={ event => this.onInputChange(event.target.value) }
  					/>
            <FontAwesome className="search-icon" name='search' />
	 			</div>

		);
  }

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchChange(term);
	}
}

export default SearchBar;
