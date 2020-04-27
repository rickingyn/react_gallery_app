import React, { Component, createContext } from 'react';
import axios from 'axios';
import apiKey from '../../config';

// create Photo Context to pass props
const PhotoContext = createContext();

export class Provider extends Component {
    state = {
        cats: [],
        dogs: [],
        computers: [],
        searchResults: [],
        isLoading: false,
        result: false
      };
    
      // when DOM is rendered, call API with axios and update photos state to data received; 
        // load 3 default searches into photo state
      componentDidMount() {
        // API fetch with axios for cat search
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
          .then(response => (
            this.setState({ 
              cats: response.data.photos.photo
            }))
          )
          .catch( error => console.log(error) );
    
        // API fetch for default dogs results
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
          .then( response => (
            this.setState({
              dogs: response.data.photos.photo
            })
          ))
          .catch( error => console.log(error));
              
          // API fetch for default computer results
          axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
          .then( response => (
            this.setState({
              computers: response.data.photos.photo,
              isLoading: false
            })
          ))
          .catch( error => console.log(error));
      }
    
      // function to fetch new API with tag from search form and update photos state
      updateResults = (search) => {
        const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
        
        // set isLoading state to true while retrieiving data; display loading text in render page
        this.setState({
          isLoading: true
        });
        
        axios.get(URL)
          .then(response => {
            // if images are returned, set state to be an array of images, else set result state to be false
            // set isLoading to be false to display page with photos
            if(response.data.photos.photo.length > 0) {
              this.setState({ 
                searchResults: response.data.photos.photo,
                isLoading: false,
                result: true
              })
            } else {
              this.setState({
                isLoading: false,
                result: false
              });
            }
          })
          .catch( error => console.log(error) );
      };

    render() {
        return(
            <PhotoContext.Provider value={{
                cats: this.state.cats,
                dogs: this.state.dogs,
                computers: this.state.computers,
                searchResults: this.state.searchResults,
                isLoading: this.state.isLoading,
                result: this.state.result,
                action: {
                    updateResults: this.updateResults
                }
            }}>
                { this.props.children }
            </PhotoContext.Provider>
        );
    }
}

export const Consumer = PhotoContext.Consumer;