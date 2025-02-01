
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure"

function FoodCard({ item }) {

    const { name, image, price, recipe, _id } = item;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()

    const handelToCart = food => {
        console.log(food)

        if (user && user.email) {
            // to do
            // console.log(user.email)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        alert("Working ")
                    }
                })


        } else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }


    }

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
                        <button onClick={() => handelToCart(item)}
                            type="button"
                            className="btn btn-outline border-0 border-b-2 text-center items-center hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
