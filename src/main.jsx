import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartContext from "./context/CartContext/CartContext";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartContext>
            <App />
        </CartContext>
    </React.StrictMode>
);
