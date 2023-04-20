import React, { useState } from "react";
import styles from "./CarouselPage.module.scss";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const CarouselPage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className={styles.carouselContainer}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={45}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}>
                        <img
                            className={styles.img}
                            src="../../images/runners.jpg"
                            alt=""
                        />
                    </Slide>
                    <Slide index={1}>
                        <img
                            className={styles.img}
                            src="../../images/differente.jpg"
                            alt=""
                        />
                    </Slide>
                    <Slide index={2}>
                        <img
                            className={styles.img}
                            src="../../images/goldNike.jpg"
                            alt=""
                        />
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </div>
    );
};

export default CarouselPage;
