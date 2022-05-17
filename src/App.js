 import CategoryItem from './components/vrs_category-item/vrs_category_item.component.jsx';
 import './categories.styles.scss';

const App = () => {
  console.log('render');
  const categories =[
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem  key={category.id} category = {category} />
      ))}
    </div>
  );
}

export default App;
