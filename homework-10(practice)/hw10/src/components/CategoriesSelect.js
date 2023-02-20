import Form from 'react-bootstrap/Form';

function CategoriesSelect ({categories, changeCategories}) {
	return <Form.Select aria-label="Default select example" className={'my-3'} onChange = {e => changeCategories(e.currentTarget.value)}>
		  <option value=''>All categories</option>
		  {categories.map(category => <option key={category}>{category}</option>)}
		</Form.Select>
}

export default CategoriesSelect;