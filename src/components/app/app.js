import { Component } from "react";

import AppAbout from "../app-about/app-about";
import AppFilter from "../app-filter/app-filter";
import AppProduct from "../app-product/app-product";
import Footer from "../footer/app-footer";
import Header from "../header/app-header";

import './app.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [
        { name: 'Brazil', price: 900, id: 1 },
        { name: 'Columbia', price: 1000, id: 2 },
        { name: 'Columbia', price: 1000, id: 3 },
        { name: 'Kenya', price: 900, id: 4 },
        { name: 'Brazil', price: 1000, id: 5 },
        { name: 'Brazil', price: 800, id: 6 },
      ],
      term: '',
      filter: '',
    }
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case 'bra':
        return items.filter(item => item.name === 'Brazil')
      case 'ken':
        return items.filter(item => item.name === 'Kenya')
      case 'col':
        return items.filter(item => item.name === 'Columbia')
      default:
        return items
    }
  }

  searchProduct = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  render() {

    const { data, filter, term } = this.state;
    const visibleData = this.filterPost(this.searchProduct(data, term), filter);

    return (
      <div className="app">
        <Header />
        <AppAbout />

        <AppFilter
          onFilterSelect={this.onFilterSelect}
          onUpdateSearch={this.onUpdateSearch}/>
        <AppProduct data={visibleData}/>

        <Footer />
      </div>
    );
  }
}

export default App;