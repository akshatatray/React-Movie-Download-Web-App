import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class Hollywood extends React.Component {

     state = {
          movies: [],
     }

     render() {
          return(
               <div>
                    <Navbar></Navbar>
                    Hollywood Works
               </div>
          );
     }
}

export default Hollywood;