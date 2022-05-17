 

const App = () => {
  console.log('render');
  const categories =[
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Sneakers'
    },
    {
      id: 4,
      title: 'Womens'
    },
    {
      id: 5,
      title: 'Mens'
    }
  ]
  return (
    <div className="vrs_catergories-container">
      {categories.map(({title, id}) => (
        <div className="vrs_category-container">
        {/* <img/> */}
        <div className="vrs_category-body-container" key={id}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      ))}
      
    </div>
  );
}

export default App;
