import ProductsList from "../ProductsList/ProductsList";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContextVal } from "../../context/CartContext/CartContext";
import { getProductFavourites } from "../../services/products";

const FilteredPage = () => {
    const [favouritesArr, setFavouritesArr] = useState([]);
    const { inputVal } = useContext(CartContextVal);

    const getFavs = async () => {
        setFavouritesArr(await getProductFavourites());
    };

    useEffect(() => {
        getFavs();
    }, [inputVal]);

    return (
        <div>
            <div>
                <ProductsList products={favouritesArr} />
            </div>
        </div>
    );
};

export default FilteredPage;
