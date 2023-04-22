import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unfilled } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { updateProduct } from "../../services/products";

const Favourite = ({ id, favourite, className }) => {
    const [fav, setFav] = useState(favourite);
    library.add(faHeart);
    library.add(unfilled);
    const favClick = async () => {
        console.log("Setting fav");
        setFav(!fav);
        await updateProduct(id, {
            favourite: !fav,
        });
    };
    return !fav ? (
        <FontAwesomeIcon
            className={className}
            icon="fa-regular fa-heart"
            size="2xl"
            style={{ color: "#FF00BD" }}
            onClick={favClick}
        />
    ) : (
        <FontAwesomeIcon
            className={className}
            icon="fa-solid fa-heart"
            size="2xl"
            style={{ color: "#FF00BD" }}
            onClick={favClick}
        />
    );
};

export default Favourite;
