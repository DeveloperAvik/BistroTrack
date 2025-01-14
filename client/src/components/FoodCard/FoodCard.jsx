
function FoodCard({ item }) {

    const { name, image, price, recipe } = item;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 p-2 border-r-2">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button
                            type="button"
                            className="btn btn-outline border-0 border-b-2 text-center items-center hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Order Now
                        </button>
                    </div>
                </div>f
            </div>
        </div>
    )
}

export default FoodCard
