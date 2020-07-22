import React from'react';
import './Pagination.css'

const Pagination = (props) => {
     const pageNumber = [];

     for (let i=1; i<=props.pages; i++) {
          pageNumber.push(i);
     }

     return(
          <nav className="pagenav">
               <ul className="pagination">
                    { pageNumber.map(num => (
                         <li className="page-item" key={num}>
                              <button onClick={() => {props.onClick(num)}} className="page-link">
                                   {num}
                              </button>
                         </li>
                    )) }
               </ul>
          </nav>
     );
}

export default Pagination;