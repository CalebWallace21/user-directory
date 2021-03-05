import React from 'react'
import '../App.css';
const Cards = (props) => {

const {data, index} = props

        return (
            <div className="card">
                <div className="card-number">
                    <h2 className="index-count">{data[index].id}/25</h2>
                </div>
                <h1 className="full-name">{data[index].name.first} {data[index].name.last}</h1>
                <h3 className="location">From: {data[index].title} </h3>
                <h3>Job Title: {data[index].title}</h3>
                <h3>Employer: {data[index].employer}</h3>                
                <h3 className="fav-movie">Favorite Movies:</h3>
                <ol className="movie-list">{data[index].favoriteMovies.map(elem => <li>{elem}</li>)}
                </ol>
                
            </div>
        )
    
}

export default Cards