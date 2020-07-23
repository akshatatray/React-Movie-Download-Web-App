import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import MovieList from "./MovieList";
import Pagination from "./Pagination";

class Home extends React.Component {

     state = {
          movies: [],
          pages: [],
          term: '',
          loading: false,
          currentPage: 1,
     }
     
     fetchMovies = async () => {
          this.setState( { loading: true } );
          if(this.state.term === ''){
               const res = await axios.get('https://yts.mx/api/v2/list_movies.json/items?limit=10&page='+ this.state.currentPage +'&minimum_rating=8&sort_by=download_count');
               let p = (Math.ceil(res.data.data.movie_count / res.data.data.limit))
               this.setState( { movies: res.data.data.movies } );
               this.setState( { pages: p} );
          } else {
               const res = await axios.get('https://yts.mx/api/v2/list_movies.json/items?limit=10&page='+ this.state.currentPage +'&query_term='+ this.state.term +'&sort_by=download_count');
               let p = (Math.ceil(res.data.data.movie_count / res.data.data.limit))
               this.setState( { movies: res.data.data.movies } );
               this.setState( { pages: p} );
          }
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
          if( this.state.movies) {
               return(
                    <div>
                         <Navbar></Navbar>
                         <SearchBar className="SearchBar" onSubmit={this.onSearchSubmit}></SearchBar>
                         <MovieList movies = {this.state.movies} loading = {this.state.loading} ></MovieList>
                         <Pagination currentPage = { this.state.currentPage } pages = {this.state.pages} onClick={this.onPaginate} ></Pagination>
                    </div>
               );
          } else {
               return(
                    <div>
                         <Navbar></Navbar>
                         <SearchBar className="SearchBar" onSubmit={this.onSearchSubmit}></SearchBar>
                         <h2>No Such Movie</h2>
                    </div>
               );
          }
     }
}

export default Home;