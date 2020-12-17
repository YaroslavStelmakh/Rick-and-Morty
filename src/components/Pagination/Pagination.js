import React from "react";
import { Link } from 'react-router-dom';

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
        console.log(pageNumbers)
    }

     return (
         <nav className="nav-pagination">
             <ul className="pagination">
                 {pageNumbers.map(number => (
                     <li key={number} className="page-item">
                         <Link onClick={() => paginate(number)} className="page-link" to="#">
                             {number}
                         </Link>
                     </li>
                 ))}
             </ul>
         </nav>
     )
    };