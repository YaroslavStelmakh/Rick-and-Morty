import React, {Fragment, useState, useEffect} from 'react';

import {Pagination} from "../Pagination/Pagination";
import {ModalPage} from "../ModalPage/ModalPage";

export const Characters = () => {

    const [items, setItems] = useState([]);
    const [currentPage ,setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [modalVisible, setModalVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        const data = await fetch("https://rickandmortyapi.com/api/character/");
        const characters = await data.json();
        setItems(characters.results);
        console.log(characters.results);
    };

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirsPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirsPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handler = () => {};

     function openModal(index) {
         setModalVisible(true);
         setCurrentIndex(index);
     }

    return (
        <Fragment>
            <div className="characters-card">
                <div className="characters-filter">
                    <label> Filter:
                        <input value="value2" onChange={handler}>
                        </input>
                    </label>
                </div>
                {currentPosts.map((item, itemIndex) => (
                    <button key={item.id} className="characters-block" onClick={() => openModal(itemIndex)}>
                        <div>{item.name}</div>
                        <div className="image-poster">
                            <img src={item.image} alt=""/>
                        </div>
                    </button>
                ))}
            </div>
            <Pagination
                postsPerPage = {postsPerPage}
                totalPosts = {items.length}
                paginate ={paginate}
            />
            {modalVisible &&
                <ModalPage
                    item = {items[currentIndex]}
                    setModalVisible={setModalVisible}
                />
            }
        </Fragment>
    )
};