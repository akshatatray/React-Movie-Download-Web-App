import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import MovieList from "./MovieList";
import Pagination from "./Pagination";

class Bollywood extends React.Component {

     state = {
          movies: [],
          pages: [],
          term: '',
          loading: false,
          currentPage: 1,
     }
     
     fetchMovies = async () => {
          this.setState( { loading: true } );
          const res = await axios.get("https://api.jsonbin.io/b/5f19363cc1edc466175cad8a/5",{
               headers: {"secret-key": "$2b$10$4h8tpZJ9aKAxqWTrz.VgHePRr6Dl7gIzsGJb/aCJ.tK8p9gHNocku"}
          });
          this.setState( { movies: res.data.data.movies } );
          this.setState( { loading: false } );
     }

     onSearchSubmit = async (term) => {
          await this.setState({movies: []});
          await this.setState({term: term});
          this.fetchMovies();
     }

     componentDidMount() {
          this.fetchMovies();
     } 

     onPaginate = async (num) => {
          await this.setState( { currentPage: num } );
          this.fetchMovies();
     }

     render() {
          return(
               <div>
                    <Navbar></Navbar>
                    <SearchBar className="SearchBar" onSubmit={this.onSearchSubmit}></SearchBar>
                    <MovieList movies = {this.state.movies} loading = {this.state.loading} ></MovieList>
                    <Pagination currentPage = { this.state.currentPage } pages = {this.state.pages} onClick={this.onPaginate} ></Pagination>
               </div>
          );
     }
}

export default Bollywood;