import React from 'react';
import ZingTouch from 'zingtouch';


class Musicmenu extends React.Component
{
    render()
    {
        const { item } = this.props;

        return (
          
          <div className="menu-container">
              <h1>Music</h1>
              <ul id="ul-contain">
                {
                   item.showAllsongs
                   ?<li className="list-active"><h4>All songs</h4></li>
                   :<li><h4>All songs</h4></li>
                }

                {
                  item.showArtists
                  ?<li className="list-active"><h4>Artists</h4></li>
                  :<li><h4>Artists</h4></li>
                }

                {
                  item.showAlbums
                  ?<li className="list-active"><h4>Albums</h4></li>
                  :<li><h4>Albums</h4></li>
                }
                
             


              </ul>
           
            
        
          
          </div>
        );
      
    }

  }



export default Musicmenu;
