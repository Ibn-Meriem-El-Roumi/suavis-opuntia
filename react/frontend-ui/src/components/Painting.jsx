import { useState } from "react"

function Painting(props){
    const [likes, setLikes] = useState(0)
    // const [img, setImg] = useState("../assets/image.png")
    return(
        <div className="painting">
            <h2>{props.name}</h2>
            <img src="../assets/vite.svg" alt="" />
            <p>{props.price} DA</p>

            <h4>{likes} Likes</h4><br />

            <button onClick={() => setLikes(likes + 1)}>Like</button>
            <button onClick={() => setLikes(likes - 1)}>Dislike</button>
        </div>
    )
}

export default Painting