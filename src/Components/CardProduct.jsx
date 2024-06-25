import {useContext} from 'react'

const CardProduct = ({ car }) => {

    const {removeFromCart} = useContext(CartContext)


    return (
        <div className="md:flex items-center mt-14 py-8 border-t-2 border-yellow-500 ">
            <div className="w-1/4">
                <img src={car.image} />
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{car.title}</p>
                    <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none cursor-pointer">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2"><b className='bold'>Height: </b> 10 inches</p>
                <p className="text-xs leading-3 text-gray-600 py-4"><b className='bold'>Color: </b> Black</p>
                <p className="w-96 text-xs leading-3 text-gray-600"><b className='bold'>Category: </b>{car.category}</p>
                <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                        <button onClick={()=>removeFromCart(car.id)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer font-semibold">Eliminar</button>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">${car.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct