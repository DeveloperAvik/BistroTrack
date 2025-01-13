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

        </div>
    )
}

export default MenuCategory
