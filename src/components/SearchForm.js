// import useState from react Hooks
import React, { useState } from 'react';
// import withRouter to use history prop outside of Router
import { withRouter } from 'react-router-dom';
import { Consumer } from './context';
import '../css/index.css';

const SearchForm = (props) => {
    // use hooks to set search state
    const [search, setSearch] = useState('');

    return(
        <Consumer>
            { context => {
                // set state to current value of input field
                const handleUpdate = (event) => {
                    // use hooks setState method to update search state
                    setSearch(event.target.value);
                };
                            
                // prevent page refresh and call function from parent, passing search as parameter to update URL
                const handleSubmit = (event) => {
                    event.preventDefault();
                    context.action.updateResults(search);
                    setSearch('');

                    // redirect page to search with router's history prop
                    props.history.push(`${search}`);
                };

                return(
                    <div>
                        {/* Search field */}
                        <form className='search-form' onSubmit={ handleSubmit } >
                            {/* update search state on every keypress */}
                            <input type='search' value={ search } onChange={ handleUpdate} />
                            <button>
                                {/* svg of search icon */}
                                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                );
            }}
        </Consumer>
    );
}

// wrap export with withRouter to use history prop outside of Router
export default withRouter(SearchForm);