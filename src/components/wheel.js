import React from 'react';
import Menu from './Menu';

class Wheel extends React.Component
{
   
    constructor()
    {
        super();
        this.clickRef = React.createRef();
        
    }
    
    // handle the click event of center button of wheel
    handleClick = (e)=>{
        e.preventDefault();
        const { item }=this.props;
        const { handleMenu } = this.props;
        if(item.showMusic)
        {
            handleMenu("showMusicMenu",true);
        }
        else if(item.showCoverFlow)
        {
            handleMenu("showCoverFlowMenu",true);

        }
        else if(item.showSettings)
        {
            
            handleMenu("showSettingsMenu",true);

        }
        else if(item.showGames)
        {
            
            handleMenu("showGamesMenu",true);

        }
        

    }
 
   
    render()
    {
        return (
            <div>
                <div className="wheel-container">
                    <div className="wheel-player" ref={this.props.setRef}>
                        <img src="https://as2.ftcdn.net/jpg/02/96/81/87/500_F_296818790_3A3a6B3NXHL597KBTrAi5EzluGy2j5nc.jpg" className="next"/>
                        <img src="https://as2.ftcdn.net/jpg/02/96/81/87/500_F_296818790_3A3a6B3NXHL597KBTrAi5EzluGy2j5nc.jpg" className="previous"/>
                        <img src="https://as1.ftcdn.net/jpg/02/69/93/20/500_F_269932087_KKbvTHVIUTARY3eYcWUjRcEkQUV6Rl0c.jpg" className="play"/>
                        <label onClick={this.props.handleMainmenu}><h3 className="menu">MENU</h3></label>
                        <div className="center" onClick={this.handleClick}>

                        </div>


                    </div>


                </div>

            </div>
        )
    }
}

export default Wheel;