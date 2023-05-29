import React from "react";
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
        <div className={styles.carousel__wrapper}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={20}
                totalSlides={4}
                infinite={true}
                className={styles.carousel__container}
                isPlaying={true}
                interval={5000}
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
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7307e562514417.5a931ab904cad.gif"
                            alt=""
                        />
                    </Slide>
                    <Slide index={1}>
                        <img
                            className={styles.img}
                            src="https://wallpaperaccess.com/full/1376635.png"
                            alt=""
                        />
                    </Slide>
                    <Slide index={2}>
                        <img
                            className={styles.img}
                            src="https://images.squarespace-cdn.com/content/v1/5d7fe48a00c0503e9f33da41/1588730211646-174E9XHWBAM8D9NAJSC3/DrMartens_banner.jpg?format=1500w"
                            alt=""
                        />
                    </Slide>
                    <Slide index={3}>
                        <img
                            className={styles.img}
                            src="https://cdn.denimandcloth.com.au/content/uploads/2014/11/18121834/adidas-banner.jpg"
                            alt=""
                        />
                    </Slide>
                </Slider>
            </CarouselProvider>
        </div>
    );
};

export default CarouselPage;
