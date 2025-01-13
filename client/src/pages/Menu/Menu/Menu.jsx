import { Helmet } from "react-helmet-async"
import Cover from "../../../Shared/Cover/Cover"
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu"

function Menu() {
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    )
}

export default Menu
