import React from "react";
import Navbar from "../components/navbar";
import { data, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/footer";

const APP_KEY = '638e795d57dd48c3b57c167ea1c33f0c'
const RecipesChildren = () => {
    const { RecipesID } = useParams();
    console.log(RecipesID);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipe();
      },[RecipesID]);

    const getRecipe = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${RecipesID}/information?includeNutrition=false&apiKey=${APP_KEY}`);
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      }
    

    
    
    

    return (
        <>
        <Navbar />
         <div className="bg-gray-100 w-full mt-28  flex flex-row text-black">
          <div className="flex flex-row bg-gray-100 ">
              <img className=" ml-6 rounded-full shadow-xl" src={recipes.image} alt=""/>
          </div>
          <div className="flex flex-col justify-center">
              <p className="text-gray-800 text-2xl font-serif leading-relaxed mt-50">{recipes.title}</p>
              <p> ⏲️ Ready In {recipes.readyInMinutes} minutes </p>
              <p> 🦾 Health Score : {recipes.healthScore}</p>
              <a href ={recipes.spoonacularSourceUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-lg">🔗 Link to the original recipe</a>
              


          </div>
            

          </div>
          <Footer/>
        </>
    );
    
};

export default RecipesChildren;
