import { Link } from "react-router-dom"
import Cover from "../../../Shared/Cover/Cover"
import MenuItem from "../../../Shared/MenuItem/MenuItem"

function MenuCategory({ items, title, img }) {
    return (
        <div className="pt-8" >
            {title && <Cover img={img} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 mt-4 mb-4'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className="flex justify-center mt-4">
                <Link>
                    <button
                        type="button"
                        className="btn btn-outline border-0 border-b-2 text-center items-center hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                       Order Your Fav Food
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default MenuCategory
