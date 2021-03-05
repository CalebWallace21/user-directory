import React from 'react'
import '../App.css';
const Nav = (props) => {

    return (
        <div className="buttons">
            <button className="previous-button" onClick={props.decrease}> {"<"} Previous </button>
            <section className="extra-buttons">
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
            <button className="new-button">New</button>
            </section>
            <button className="next-button"onClick={props.increase}>Next {">"} </button>
        </div>
    )

}

export default Nav