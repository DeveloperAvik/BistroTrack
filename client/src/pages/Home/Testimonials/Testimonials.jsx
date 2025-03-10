import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating"

function Testimonials() {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section>
            <SectionTitle subHeading={"What Our Client Say's"} heading={"Testimonials"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center m-24 mb-3">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly

                            ></Rating>

                            <p>{review.details}</p>
                            <h3 className="text-3xl text-yellow-500 font-semibold">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
