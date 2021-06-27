import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import ApiGrid from './components/ApiGrid'

const ApiExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
           <h3>Rick and Morty API</h3>
           <AddCategory setCategories={setCategories}/> 
           <hr/>

           <ol>
               {    
                    categories.map((category) => (
                        <ApiGrid 
                            key={category} 
                            category={category}
                        />
                   ))
               }
           </ol>
        </>
    )
}

export default ApiExpertApp
