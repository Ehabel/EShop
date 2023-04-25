import ProductsList from "../ProductsList/ProductsList";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContextVal } from "../../context/CartContext/CartContext";
import { getProductFavourites } from "../../services/products";

const FilteredPage = ({ products }) => {
    const [favouritesArr, setFavouritesArr] = useState([]);
    const { inputVal, setInputVal } = useContext(CartContextVal);
    const filtArr = products.filter((product) => product.favourite);

    const getFavs = async () => {
        setFavouritesArr(await getProductFavourites());
    };

    useEffect(() => {
        getFavs();
    }, [inputVal]);

    console.log(favouritesArr);
    return (
        <div>
            <div>
                <ProductsList products={favouritesArr} />
            </div>
        </div>
    );
};

export default FilteredPage;
