import AppFilterButton from './app-filter-button/app-filter-button';
import AppFilterInput from './app-filter-input/app-filter-input';

import './app-filter.css';

const AppFilter = (props) => {
  return (
    <div className="app-filter">
      <AppFilterInput onUpdateSearch={props.onUpdateSearch}/>
      <AppFilterButton onFilterSelect={props.onFilterSelect}/>
    </div>
  )
}

export default AppFilter;