import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Search our store"
            onChange={e => setSearch(e.target.value.toString())} />

            <div className="row sort">
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value='sort=-sold'>Best Selling</option>
                    <option value=''>Date, new to old</option>
                    <option value='sort=oldest'>Date, old to new</option>
                    <option value='sort=-price'>Price, high to low</option>
                    <option value='sort=price'>Price, low to high</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
