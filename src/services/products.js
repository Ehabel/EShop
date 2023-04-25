import {
    collection,
    getDocs,
    doc,
    addDoc,
    deleteDoc,
    getDoc,
    updateDoc,
    where,
    query,
} from "firebase/firestore";
import { db } from "../firebase";

const shoe = [
    {
        id: 7,
        title: "Black Puma",
        price: 250,
        description: "",
        image: "../../images/blackPuma.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 13, S: 10, M: 12, L: 8, XL: 2, XXL: 6 },
        favourite: false,
    },
];
const shoes = [
    {
        id: 7,
        title: "Black Puma",
        price: 250,
        description: "",
        image: "../../images/blackPuma.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 13, S: 10, M: 12, L: 8, XL: 2, XXL: 6 },
        favourite: false,
    },
    {
        id: 8,
        title: "Blue Nike Jordans",
        price: 500,
        description: "",
        image: "../../images/blueJordans.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 15, S: 41, M: 10, L: 8, XL: 3, XXL: 1 },
        favourite: false,
    },
    {
        id: 9,
        title: "Brown Boots",
        price: 350,
        description: "",
        image: "../../images/boots.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 13, S: 31, M: 17, L: 4, XL: 12, XXL: 16 },
        favourite: false,
    },
    {
        id: 10,
        title: "Brown Dress Shoes",
        price: 575,
        description: "",
        image: "../../images/brownDress.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 4, S: 16, M: 2, L: 14, XL: 18, XXL: 16 },
        favourite: false,
    },
    {
        id: 11,
        title: "Differente",
        price: 100,
        description: "",
        image: "../../images/differente.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 21, S: 13, M: 74, L: 30, XL: 41, XXL: 5 },
        favourite: false,
    },
    {
        id: 12,
        title: "Yellow Dr Martens",
        price: 275,
        description: "",
        image: "../../images/drMartens.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 11, S: 1, M: 7, L: 3, XL: 5, XXL: 12 },
        favourite: false,
    },
    {
        id: 13,
        title: "Gold Nike",
        price: 1000,
        description: "",
        image: "../../images/goldNike.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 2, S: 1, M: 1, L: 2, XL: 15, XXL: 13 },
        favourite: false,
    },
    {
        id: 14,
        title: "Black Loafers",
        price: 675,
        description: "",
        image: "../../images/loafers.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 11, S: 11, M: 17, L: 13, XL: 15, XXL: 12 },
        favourite: false,
    },
    {
        id: 15,
        title: "Puma",
        price: 225,
        description: "",
        image: "../../images/puma.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 10, S: 9, M: 7, L: 3, XL: 10, XXL: 12 },
        favourite: false,
    },
    {
        id: 16,
        title: "Red Casual Sneakers",
        price: 235,
        description: "",
        image: "../../images/redSneakers.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 11, S: 11, M: 70, L: 30, XL: 15, XXL: 14 },
        favourite: false,
    },
    {
        id: 17,
        title: "White high top sneakers",
        price: 350,
        description: "",
        image: "../../images/whiteHighTop.jpg",
        variants: ["XS", "S", "M", "L", "XL", "XXL"],
        quantities: { XS: 6, S: 9, M: 17, L: 23, XL: 35, XXL: 19 },
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

export const getAllCartProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "cart"));
    const data = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        const product = { id, ...data };
        return product;
    });
    return data;
};

export const addToCart = async (productObj, variant, quantity) => {
    await addDoc(collection(db, "cart"), {
        item: doc(db, `/products/${productObj}`),
        itemId: `${productObj}`,
        variant: `${variant}`,
        quantity: `${quantity}`,
    });
};

// export const addProducts = async () => {
//     shoes.map((shoe) => {
//         addDoc(collection(db, "products"), shoe);
//     });
// };

export const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id, ...docSnap.data() };
    } else {
        throw new Error("Doc not found");
    }
};

export const getProductFromCart = async (id, cartId) => {
    // return db.getInstance().document(id);
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    const docRefCart = doc(db, "cart", cartId);
    const docSnapCart = await getDoc(docRefCart);
    if (docSnap.exists() && docSnapCart.exists()) {
        return {
            id,
            idCart: docRefCart.id,
            ...docSnap.data(),
            ...docSnapCart.data(),
        };
    } else {
        throw new Error("Doc not found");
    }
};

export const getProductFromCartTwo = async (productRef) => {
    const productSnapshot = await getDoc(productRef);
    return productSnapshot.data();
};

export const getProductFavourites = async () => {
    const q = query(collection(db, "products"), where("favourite", "==", true));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        const product = { id, ...data };
        return product;
    });
    return data;
};

export const updateProduct = async (id, param) => {
    const productRef = doc(db, "products", id);
    await updateDoc(productRef, param);
};

export const updateCart = async (id, param) => {
    const cartRef = doc(db, "cart", id);
    await updateDoc(cartRef, param);
};

export const removeFromCart = async (id) => {
    await deleteDoc(doc(db, "cart", id));
};
