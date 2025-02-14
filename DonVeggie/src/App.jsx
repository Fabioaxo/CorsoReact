import React, { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipe from './components/recipes';
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  
  const APP_KEY = '638e795d57dd48c3b57c167ea1c33f0c'
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('apple');

  useEffect(() => {
    getRecipe();
  },[query]);


  const getRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_KEY}&query=${query}&diet=vegetarian`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.results);
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <>
    <Navbar />
     <h1 className='mt-20 text-center text-2xl font-bold text-gray-800 '>Recipes</h1>
     <div className='mt-20 border-2 border-green-700'></div>
     <div className='mt-20 grid grid-cols-3 gap-4 items-center'>
      <p className=' text-gray-800 font-bold text-2xl'>Find the recipes 🥦</p>
      <p className='text-gray-800'>Creating dishes that are ETHICAL, HEALTHY and at the same time TASTY and BEAUTIFUL to look at is the purpose of my business. The recipes I propose are accessible to everyone, even those who are not vegan or an expert chef but are willing to experiment and test themselves without prejudice. The ingredients used are totally vegetal and generally as fresh, seasonal and organic as possible.

      </p>
      <p className='text-gray-600'>For example search for ingredients like: apple tomato onion...</p>
      


     </div>
     <div className='mt-20 border-2 border-green-700'></div>
     <div className='mt-20 items-center  '>
     <form onSubmit={getSearch} className='items-center flex justify-center'>
      <div className='flex items-center border-2 border-gray-500'>
      <input className='h-8 pl-2 pr-2 bg-gray-500 text-white' type="text" value={search} onChange={updateSearch} placeholder='Search recipes 🥕🍅🍎' />
      <button className='bg-gray-100 items-center p-0 border-gray-100' type="submit"><img src="https://img.icons8.com/?size=80&id=102719&format=png " alt="" className='h-8 w-12 bg-gray-100 border-gray-100 object-cover'/></button>
      </div>
    </form>
     { recipes.map(recipe => (
      <Link to  = {`/recipesChildren/${recipe.id}`} key={recipe.id}>
      <Recipe
        title={recipe.title}
        image={recipe.image}
        
      />
    </Link>
    ))} 






     </div>
     <Footer/>

    </>
  )
}

export default App
