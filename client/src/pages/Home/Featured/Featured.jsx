import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featuredImg from "../../../assets/home/banner.jpg"
import "./Featured.css"

function Featured() {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle subHeading={"check it out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center items-center py-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="ml-10">
                    <p>Aug 21, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem at minus rerum sit optio veritatis suscipit culpa quo labore eveniet quidem, iusto quis, laborum possimus illo molestias quam minima a! Ullam accusamus dicta ea laudantium vitae? Rem modi nostrum et repellat eius amet necessitatibus, culpa alias, possimus ea quidem? Illum
                    </p>
                    <button className="btn btn-outline mt-4">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
