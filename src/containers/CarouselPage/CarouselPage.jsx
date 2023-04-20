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
    return (
        <div className={styles.carouselContainer}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={45}
                totalSlides={3}
                infinite={true}
            >
                <div className={styles.go__container}>
                    <div className={styles.go__left}>
                        <ButtonBack className={styles.go__text}>🢀</ButtonBack>
                    </div>
                    <div className={styles.go__right}>
                        <ButtonNext className={styles.go__text}>🢂</ButtonNext>
                    </div>
                </div>

                <Slider>
                    <Slide index={0}>
                        <img
                            className={styles.img}
                            src="../../images/nikebanner.gif"
                            alt=""
                        />
                    </Slide>
                    <Slide index={1}>
                        <img
                            className={styles.img}
                            src="../../images/pumaBanner.jpg"
                            alt=""
                        />
                    </Slide>
                    <Slide index={2}>
                        <img
                            className={styles.img}
                            src="../../images/drMartensBanner.jpg"
                            alt=""
                        />
                    </Slide>
                </Slider>
            </CarouselProvider>
        </div>
    );
};

export default CarouselPage;
