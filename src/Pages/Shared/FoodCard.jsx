import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const FoodCard = ({ item }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const { user } = useAuth()
    const [, refetch] = useCart()

    const { name, image, recipe, price, _id } = item;
    const handleAddCart = () => {
        // console.log(food);
        if (user) {
            // console.log(user);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    // console.log(res.data)
                    refetch()
                    toast.success("Added to cart");
                    
                })
                .catch(err => console.log(err))
        }

        else {

            Swal.fire({
                title: "Login Please",
                text: "Without login you won't able to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 px-4 py-1 mr-2 mt-2 rounded'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-cneter">
                    <button onClick={handleAddCart} className="btn btn-outline border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;