import React from "react";



const Entry = () =>
{

    return(
        <form>
            <label>title
            <input  type="text" required></input>
            </label>
            <label>desciption
            <input  type="text" required></input>
            </label>
            <label>link
            <input  type="text"required ></input>
            </label>
            <label>technologies
            <input  type="text" required></input>
            </label>
            <button oncklick="">submit</button>
        </form>
    )
}
export default Entry;