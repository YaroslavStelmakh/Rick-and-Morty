import React, {Fragment, useState, useEffect} from 'react';

import {Pagination} from "../Pagination/Pagination";
import {ModalPage} from "../ModalPage/ModalPage";

export const Characters = () => {

    const [items, setItems] = useState([]);
    const [currentPage ,setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [modalVisible, setModalVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    let [filteredValue, filterArray] = useState("");
    let [currentItems, setCurrentItems] = useState([])

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        const data = await fetch("https://rickandmortyapi.com/api/character/");
        const characters = await data.json();
        setItems(characters.results);
        setCurrentItems(characters.results);
        console.log(characters.results);
    };

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirsPost = indexOfLastPost - postsPerPage;
    const currentPosts = currentItems.slice(indexOfFirsPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    let newArr = [];

     function openModal(index) {
         setModalVisible(true);
         setCurrentIndex(index);
     }

     filterArray = (e, items, filterBy) => {
         filteredValue = e.target.value;
         filterValue(items, filteredValue, filterBy)
     }

     function filterValue(arr, filteredItem, filterBy){
        console.log(arr)
        newArr = arr.filter(item => item[filterBy] == filteredItem)
        setCurrentItems(newArr)
        return newArr
     }

     function unique(items, filterBy){
         let result = [];
         let arr = items.map(item => item[filterBy])
         for(let item of arr){
             if(!result.includes(item)){
                 result.push(item);
             }
         }
         return(
             <Fragment>
                <select onChange={(e) => filterArray(e, items, filterBy)}>
                    {result.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
             </Fragment>
         )
     }

    return (
        <Fragment>
            <div className="characters-card">
                <div className="characters-filter">
                    <label> Filter by gender
                        {unique(items, 'gender')}
                    </label>
                </div>
                <div className="characters-filter">
                    <label> Filter by status
                        {unique(items, 'status')}
                    </label>
                </div>
                {currentPosts.map((item, itemIndex) => (
                    <button key={item.id} className="characters-block" onClick={() => openModal(itemIndex)}>
                        <div>{item.name}</div>
                        <div className="image-poster">
                            <img src={item.image} alt=""/>
                        </div>
                    </button>
                ))
            }
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