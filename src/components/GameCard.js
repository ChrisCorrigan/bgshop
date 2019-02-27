import React from "react";

const GameCard = () => (
     <div className="ui card">
         <div className="image">
             <span className="ui green ribbon label">$32.99</span>
             <img src="" alt="Game Cover"/>
         </div>
         <div className="content">
             <a href="https://cf.geekdo-images.com/itemrep/img/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg" className="header">
                 Quadropolis
            </a>
             <div className="meta">
                <i className="icon users">2-4&nbsp;</i>
                <i className="icon wait">60 min</i>
            </div>
         </div>
     </div>
); 

export default GameCard;