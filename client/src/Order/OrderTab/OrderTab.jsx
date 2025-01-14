import FoodCard from "../../components/FoodCard/FoodCard"

function OrderTab({items}) {
    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    )
}

export default OrderTab
 