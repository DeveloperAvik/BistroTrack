import { Helmet } from "react-helmet-async"
import Cover from "../../../Shared/Cover/Cover"
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"

import useMenu from "../../../hooks/useMenu"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

function Menu() {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>

            {/* Main cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Todays Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>


            {/* dessert menu catrgory */}

            <MenuCategory items={dessert} title={"Dessert"} img={dessertImg}></MenuCategory>


            {/* Pizza menu category */}

            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>

            {/* Salad Category */}

            <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>

            {/* Soup category */}

            <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>


        </div>

    )
}

export default Menu
