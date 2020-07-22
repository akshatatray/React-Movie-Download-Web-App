import React from'react';
import './Pagination.css'

const Pagination = (props) => {

     const paginate = (c, m) => {
          let current = c,
          last = m,
          delta = 1,
          left = current - delta,
          right = current + delta +1,
          range = [],
          rangeWithDots = [],
          l;

          for (let i=1; i <= last; i++) {
               if (i === 1 || i === last || i >= left && i < right) {
                    range.push(i);
               }
          }

          for (let i of range) {
               if (l) {
                   if (i - l === 2) {
                         rangeWithDots.push(l + 1);
                    } else if (i - l !== 1) {
                         rangeWithDots.push('...');
                    }
               }
               rangeWithDots.push(i);
               l = i;
          }
       
          return rangeWithDots;
     }

     const pageNumber = paginate(props.currentPage, props.pages);

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