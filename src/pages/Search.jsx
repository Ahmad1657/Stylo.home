import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Search = () => {

    const [formData, setFormData] = useState({
        searches: '',
    });
    const { searches } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const [searchData, setSearchData] = useState(null);
    const [loader, setLoader] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            const response = await axios.get(`http://localhost:8080/api/admin/product/${searches}`);
            if (response.data.success) {
                setSearchData(response.data.product);
                setLoader(false);
            } else {
                toast.error("An Error occur while searching");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='searchboxmain'  >

            <div className='searchboxbar'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }} >
                <form onSubmit={handleSubmit} >
                    <div>
                        <input className='searchfield' type="text"
                            name='searches'
                            value={searches}
                            onChange={onChange}
                            placeholder='Search Products ...'
                            style={{
                                width: '850px',
                                height: '50px',
                                border: '1px solid lightgray',
                                borderRadius: '10px',
                                padding: '25px',
                                marginTop: '25px',
                            }} />
                        <button type='submit' style={{
                            position: 'relative',
                            right: '40px',
                            bottom: '2px',
                            zIndex: '2000',
                            background: 'none',
                            border: 'none',
                        }}>
                            <CiSearch />
                        </button>
                    </div>
                </form>
            </div>

            <hr className='lineSearch mt-3' />

            <div className="container-fluid">
                {loader ? (
                    <Loader />
                ) : (
                    <div className='pro'>

                        {searchData ? (
                            <div className='card' style={{ width: '18rem' }}>

                                {/* Ensure searchData.image exists before rendering the image */}
                                {searchData.image && (
                                    <img
                                        src={`http://localhost:8080/uploads/${searchData.image}`}
                                        className='card-img-top'
                                        alt={searchData.name}
                                        width={400}
                                        height={200}
                                    />
                                )}
                                <Link to={`/product/${searchData._id}`}>
                                    <div className='card-body' >
                                        <h5 className='card-title'>{searchData.name}</h5>
                                        <p className='card-text'>{searchData.description.slice(0, 100)}</p>
                                        <h6 className='btn btn-secondary'>Class: {searchData.category}</h6>
                                        <h6 className='btn btn-primary'>US$ {searchData.price}</h6>
                                    </div>
                                </Link>
                            </div>

                        ) : (
                            <p>No product found.</p>
                        )}

                    </div>
                )}
            </div>

        </div>
    )
}

export default Search;
