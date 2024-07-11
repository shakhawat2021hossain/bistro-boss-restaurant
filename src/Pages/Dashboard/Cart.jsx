import React from 'react';
import useCart from '../../Hooks/useCart';
import CaartTable from './CaartTable';
import SectionTitle from '../../Components/SectionTitle';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((accu, curr) => accu + curr.price, 0)
    // console.log(totalPrice);
    return (
        <div className='my-8'>
            <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"}></SectionTitle>
            <div className='my-4 max-w-3xl mx-auto flex text-lg justify-around items-center'>
                <p>Items: {cart.length}</p>
                <p>Total: ${totalPrice}</p>
                {
                    cart.length ? <Link to='/dashboard/payment'><button className='btn btn-secondary'>Pay</button></Link> :
                    <button disabled className='btn btn-secondary'>Pay</button>
                }
                
            </div>
            <div className="overflow-x-auto max-w-3xl mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <CaartTable key={item._id} item={item} index={index} refetch={refetch}></CaartTable>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Cart;