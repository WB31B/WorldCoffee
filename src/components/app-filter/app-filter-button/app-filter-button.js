import './app-filter-button.css';

const AppFilterButton = (props) => {

  const buttonsData = [
    {name: 'bra', label: 'Brazil'},
    {name: 'ken', label: 'Kenya'},
    {name: 'col', label: 'Columbia'},
    {name: 'all', label: 'All'}
  ]

  const buttons = buttonsData.map(({ label, name }) => {
    return (
      <button onClick={() => props.onFilterSelect(name)}>{label}</button>
    );
  })

  return (
    <div className="app-filter-button">
      <p className='app-filter-text'>Or filter</p>
      { buttons }
    </div>
  );
}

export default AppFilterButton;