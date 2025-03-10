import { useState } from "react"
import orderImg from "../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover"

import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import useMenu from "../../hooks/useMenu"
import FoodCard from "../../components/FoodCard/FoodCard"
import OrderTab from "../OrderTab/OrderTab"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"

function Order() {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()

    const initialCategory = categories.indexOf(category);
    console.log(category)

    const [tabIndex, setTabIndex] = useState(initialCategory);


    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")


    return (
        <div>

            <Helmet>
                <title>Order Food</title>
            </Helmet>

            <Cover img={orderImg} title={"Order Food "}></Cover>
            <Tabs className="mt-10" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Order



