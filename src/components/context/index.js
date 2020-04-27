import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import apiKey from '../../config';

// create Photo Context to pass props
const PhotoContext = createContext();

export const Provider = (props) => {
  // set state using hooks
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(false);

  // when DOM is rendered, call API with axios and update photos state to data received; 
    // load 3 default searches into photo state
  useEffect( () => {
    // API fetch with axios for cat search
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then( response => setCats( response.data.photos.photo ))
      .catch( error => console.log(error) );

    // API fetch for default dogs results
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then( response => setDogs( response.data.photos.photo ))
      .catch( error => console.log(error));
          
      // API fetch for default computer results
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
        .then( response => setComputers( response.data.photos.photo ))
        .catch( error => console.log(error));
  }, [cats]); // only re-run the effect if cats state changes

  // function to fetch new API with tag from search form and update photos state
  const updateResults = (search) => {
    const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
    
    // set isLoading state to true while retrieiving data; display loading text in render page
    setIsLoading(true);
    
    axios.get(URL)
      .then(response => {
        // if images are returned, set state to be an array of images, else set result state to be false
        // set isLoading to be false to display page with photos
        if(response.data.photos.photo.length > 0) {
          setSearchResults(response.data.photos.photo);
          setIsLoading(false);
          setResult(true);
        } else {
          setIsLoading(false);
          setResult(false);
        }
      })
      .catch( error => console.log(error) );
  };
  
  return(
      <PhotoContext.Provider value={{
          cats: cats,
          dogs: dogs,
          computers: computers,
          searchResults: searchResults,
          isLoading: isLoading,
          result: result,
          action: {
              updateResults: updateResults
          }
      }}>
          { props.children }
      </PhotoContext.Provider>
  );
}

export const Consumer = PhotoContext.Consumer;