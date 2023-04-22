import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductsList from "../ProductsList/ProductsList";
import styles from "./Paginate.module.scss";

function PaginatedItems({ itemsPerPage, products }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <ProductsList products={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={styles.paginate}
                pageClassName={styles.paginate__page}
                pageLinkClassName={styles.paginate__page__num}
                previousLinkClassName={styles.paginate__page__num}
                nextLinkClassName={styles.paginate__page__num}
            />
        </>
    );
}

export default PaginatedItems;
