import React,{useState} from 'react';
import axios from 'axios';
import NavBar from './navBar'

const Moviez = () => {

    const [movie, setMovie]= useState([]);
        function fetchMovie(){

            
            const name=document.getElementById('name').value;
            const url="https://www.omdbapi.com/?t="+ name+"&apikey=a6ee5ff"
            axios.get(url)
            .then((response)=>{
                console.log(response.data);
                // movie=response.data;
                setMovie(response.data);
                console.log(movie);
            })
        }
        
        return (
            <React.Fragment>
                <NavBar />
                <div className="container" style={{background:"yellow"}}>
                    <div className="d-flex justify-content-center" >
                        <input type="text" id="name" className="m-3" placeholder="Search Movie"></input>
                        <button className="btn btn-primary m-3" onClick={fetchMovie}>Search</button>
                    </div>
                </div>
                <div className="card m-2 m-5" style={{width: "18rem"}}>
                        <img className="card-img-top" src={movie.Poster} alt=" "></img>
                        <div className="card-body">
                        <p className="card-text">
                        <b>Title:</b> {movie.Title}<br></br>
                        <b>Imbd Rating: </b>{movie.imdbRating}<br></br>
                        <b>Runtime: </b>{movie.Runtime}<br></br>
                        <b>Released: </b>{movie.Released}<br></br>
                        <b>Director: </b>{movie.Director}<br></br>
                        <b>Plot: </b>{movie.Plot}
                        </p>
                </div>
                </div>
            </React.Fragment>
            
            
        );
}
 
export default Moviez;
