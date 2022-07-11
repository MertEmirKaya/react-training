import React from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';



class App extends React.Component{
    state={
        movies:[
            {
                'id':1,
                'name':'The Flash',
                'rating':8.3,
                'overview':'wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq ',
                'imageURL':'https://picsum.photos/id/15/200/300',
            },
            {
                'id':2,
                'name':'Cars',
                'rating':3.3,
                'overview':'wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq ',
                'imageURL':'https://picsum.photos/id/215/200/300',
            },
            {
                'id':3,
                'name':'Thor',
                'rating':5.3,
                'overview':'wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq wewqeqweqweq ',
                'imageURL':'https://picsum.photos/id/35/200/300',
            }
        ]
    }
    deleteMovie =(movie)=>{
        const newMovieList= this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState({
            movies:newMovieList
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                     
                    </div>
                </div>
                <MovieList 
                movies={this.state.movies}
                deleteMovieObject={this.deleteMovie}
                />
            </div>
        )
    }
}

export default App