import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

function PopularMenu() {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <div>
            <section className='mb-12'>
                <SectionTitle
                    heading={"From Our Menu"}
                    subHeading={"Popular Items"}
                ></SectionTitle>

                <div className='grid md:grid-cols-2 gap-10 mt-4'>
                    {
                        popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    }
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        type="button"
                        className="btn btn-outline border-0 border-b-2 text-center items-center hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        View Full Menu
                    </button>
                </div>
            </section>
        </div>
    )
}

export default PopularMenu;
