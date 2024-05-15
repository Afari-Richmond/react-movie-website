import {useEffect} from "react";

//4fe7984a
const API_URL = 'http://www.omdbapi.com?apikey=4fe7984a';




const App = () => {


  
const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`); // Removed curly braces around title
  const data = await response.json();
  console.log(data.Search);
}




useEffect( () => {
  searchMovies('spiderman')

}, []);

  return (
    <>
    <h1>Hello World</h1>
    
    
    </>
  )
}

export default App

