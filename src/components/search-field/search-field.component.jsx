import { Component } from "react";
import './search-field.styles.css'

class SearchField extends Component {
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          className={`search-box ${this.props.className}`}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default SearchField;
