import {
    collection,
    getDocs,
    doc,
    addDoc,
    deleteDoc,
    getDoc,
    updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const shoes = [
    {
        id: 1,
        title: "Casual Sneakers",
        price: 200,
        description: "",
        image: "../../images/casualSneaker.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 3, S: 0, M: 2, L: 8, XL: 2, XXL: 6 },
        favourite: false,
    },
    {
        id: 2,
        title: "Leather Dress Shoes",
        price: 300,
        description: "",
        image: "../../images/dressShoes.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 5, S: 4, M: 20, L: 18, XL: 3, XXL: 1 },
        favourite: false,
    },
    {
        id: 3,
        title: "Black HighTop LED Sneakers",
        price: 450,
        description: "",
        image: "../../images/ledShoes.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 1, S: 3, M: 7, L: 3, XL: 12, XXL: 16 },
        favourite: false,
    },
    {
        id: 4,
        title: "Red Hightop Sneakers",
        price: 550,
        description: "",
        image: "../../images/newShoes.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 3, S: 6, M: 2, L: 4, XL: 8, XXL: 16 },
        favourite: false,
    },
    {
        id: 5,
        title: "Blue Hightop Sneakers",
        price: 550,
        description: "",
        image: "../../images/newShoesTwo.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 2, S: 1, M: 7, L: 3, XL: 4, XXL: 5 },
        favourite: false,
    },
    {
        id: 6,
        title: "Black Runners",
        price: 150,
        description: "",
        image: "../../images/runners.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 1, S: 13, M: 3, L: 8, XL: 15, XXL: 12 },
        favourite: false,
    },
];

export const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        const product = { id, ...data };
        return product;
    });
    return data;
};

export const addProducts = async () => {
    shoes.map((shoe) => {
        addDoc(collection(db, "products"), shoe);
    });
};
