import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

const SearchList = ({ news }) => {
    return (
        <div className='news-list'>
            {news.map((newsItem, index) => (
                <div key={index} className='news-item'>
                    <div className='news-container-img'>
                        <img
                            className="news-img"
                            src={newsItem.urlToImage}
                            alt={"image" + index}
                            width={200}
                        />
                    </div>
                    <div className='news-data'>
                        <a href={newsItem.url}>{newsItem.title}</a>
                        <p>{newsItem.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const queryText = params.get('query');

    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [query] = useState(queryText || ''); // Initialize with query from URL
    const [news, setNews] = useState([]);

    const handleChangeQuery = (newQuery) => {
        params.set('query', newQuery);
        navigate(`?${params.toString()}`);
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
        handleChangeQuery(event.target.value);
    };

    const handleSearchClick = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACK_API}/news`, {
                params: {
                    query: search || query || '',
                    from: '2024-03-09',
                    sort: 'popularity',
                },
                headers: {
                    token: 123456
                }
            });

            setNews(response.data.news);
            setIsLoading(false);

        } catch (error) {
            console.error('error', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (query) {
            setSearch(query);
            handleSearchClick();
        }
    }, [query]);


    useEffect(() => {
        console.log('news', news);
    }, [news]);

    return (
        <div className='search'>
            <h1>Search</h1>
            {news.length > 0 ? null : (
                <img
                    className="logo"
                    src={`${process.env.REACT_APP_PUBLIC}/img/logo.jpg`}
                    alt="Logo"
                    height={150}
                />
            )}

            <div className="search-bar">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search"
                />
                <button className="button" onClick={handleSearchClick}> Search </button>
            </div>
            {isLoading ? <p>Loading...</p> : <SearchList news={news} />}
        </div>
    );
};

export default Search;