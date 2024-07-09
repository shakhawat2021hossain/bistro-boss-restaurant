import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();

    const [value, setValue] = useState({});
    useEffect(() => {
        fetch(`https://bistro-boss-server-mu-six.vercel.app/menu/${id}`)
            .then(res => res.json())
            .then(data => setValue(data))
            .catch(err =>console.log(err))
    }, [])
    console.log(value);
    return (
        <div>
            <SectionTitle heading={"Update Menu"} subHeading={"Refresh"}></SectionTitle>
        </div>
    );
};

export default UpdateItem;