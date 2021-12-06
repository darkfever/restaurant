import React from "react"
import "../favorite/favorite.css"

function Favorite(props) {
    const { addToFavorite, resId, fav} = props
    return (
        <div>
            {fav[0]?.restaurantId === resId ? <img className="fav-icon-added" src="/images/remove-favorite.png" alt="favorite" />
             : <img onClick={() => addToFavorite(resId)} className="fav-icon" src="/images/add-favorite.png" alt="favorite" />}
        </div>
    )
}

export default Favorite