import { Component } from 'react';

import './app-filter-input.css';

class AppFilterInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term })
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <div className="app-filter-input">
        <p className='app-filter-text'>Lokiing for</p>
        <input
          type="text"
          placeholder="start typing here..."
          onChange={this.onUpdateSearch}/>
      </div>
    );
  }
}

export default AppFilterInput;