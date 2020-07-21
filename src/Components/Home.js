import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import MovieList from "./MovieList";

class Home extends React.Component {

     state = {
          movies: [],
          pages: [],
     }

     onSearchSubmit = async (term) => {
          this.setState({movies: []});
          let page = 1
          await axios.get('https://yts.mx/api/v2/list_movies.json/items?page='+ page +'query_term='+ term +'&sort_by=download_count')
               .then(response => {
                    let p = (Math.ceil(response.data.data.movie_count / response.data.data.limit))
                    this.setState({movies: response.data.data.movies});
                    this.setState( { pages: p} );
                    console.log(this.state);
               })
     }

     async componentDidMount() {
          let page = 1
          await axios.get('https://yts.mx/api/v2/list_movies.json/items?page='+ page +'&minimum_rating=8')
          .then(res => {
               let p = (Math.ceil(res.data.data.movie_count / res.data.data.limit))
               this.setState( { movies: res.data.data.movies } );
               this.setState( { pages: p} );
               console.log(this.state);
          })
     } 

     render() {
          return(
               <div>
                    <Navbar></Navbar>
                    <SearchBar className="SearchBar" onSubmit={this.onSearchSubmit}></SearchBar>
                    <MovieList movies = {this.state.movies} ></MovieList>
               </div>
          );
     }
}

export default Home;