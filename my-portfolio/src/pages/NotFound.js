import React from 'react';
import {
    Link
} from 'react-router-dom';
import data from "../api/data-mock.json";



const NotFoundPage = () => (
    <div className="max-w-75 mx-auto grid place-content-center ">
        <h1 className="text-9xl font-bold font-bodoni py-5">
            {data.notFound.text}
        </h1>

        <Link
            className="w-28 justify-end bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400"
            to="/">{data.notFound.button}</Link>

    </div>
);
export default NotFoundPage;


