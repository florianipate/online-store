import CategoryItem from '../vrs_category-item/vrs_category_item.component';
import './vrs_directory.style.scss';
const Directory =() =>{
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem  key={category.id} category = {category} />
            ))}
        </div>
    );
}
export default Directory;