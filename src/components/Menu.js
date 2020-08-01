import React from 'react';

class Menu extends React.Component
{
    render()
    {
        
        const { item } = this.props

        return (
            <div className="menu-container">
               <div className="left">
                   <h2>ipod js</h2>
                   <ul>
                       {
                           item.showCoverFlow
                           ? <li className="list-active" value="coverflow"><h4>Cover Flow</h4></li>
                           : <li><h4>Cover Flow</h4></li>
                        }
                        
                        {
                            item.showMusic
                            ? <li className="list-active" value="music"><h4>Music</h4></li>
                            : <li><h4>Music</h4></li>
                        }

                        {
                            item.showSettings
                            ? <li className="list-active" value="settings"><h4>Settings</h4></li>
                            : <li><h4>Settings</h4></li>
                        }

                        {
                            item.showGames
                            ? <li className="list-active" value="games"><h4>Games</h4></li>
                            : <li><h4>Games</h4></li>
                        }
                       
                       
                   </ul>

               </div>
               

            </div>
        )
    }
}

export default Menu;