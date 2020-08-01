import React from 'react';
import Wheel from './components/wheel';
import './App.css';
import ZingTouch from 'zingtouch';
import Menu from './components/Menu';
import CoverflowMenu from './components/CoverflowMenu';
import SettingsMenu from './components/SettingsMenu';
import Musicmenu from './components/Musicmenu';
import Gamesmenu from './components/Gamesmenu';

//initializing zingtouch region
let zt = new ZingTouch.Region(document.body);

class App extends React.Component
{
  
    constructor(props)
    {
       super(props);
       //creating ref of center wheel element
       this.wheelRef=React.createRef();
       this.state={
         showCoverFlow:true,
         showMusic:false,
         showSettings:false,
         showGames:false,
         showCoverFlowMenu:false,
         showMusicMenu:false,
         showSettingsMenu:false,
         showGamesMenu:false,
         showMainMenu:true,
         showAllsongs:true,
         showArtists:false,
         showAlbums:false
       }
      
       
      
       
    }
    
    //used to go to a menu
    changeMenu = (menu) =>{
      if(menu==="showCoverFlowMenu")
      {
        this.setState({
          showCoverFlowMenu:true,
          showMusicMenu:false,
          showSettingsMenu:false,
          showGamesMenu:false,
          showMainMenu:false
        })

      }

      else if(menu==="showSettingsMenu")
      {
        this.setState({
          showCoverFlowMenu:false,
          showMusicMenu:false,
          showSettingsMenu:true,
          showGamesMenu:false,
          showMainMenu:false
        })

      }
      else if(menu==="showGamesMenu")
      {
        this.setState({
          showCoverFlowMenu:false,
          showMusicMenu:false,
          showSettingsMenu:false,
          showGamesMenu:true,
          showMainMenu:false
        })

      }
      else if(menu==="showMusicMenu")
      {
        this.setState({
          showCoverFlowMenu:false,
          showMusicMenu:true,
          showSettingsMenu:false,
          showGamesMenu:false,
          showMainMenu:false
        })

      }
      

      
    }
    
    //used to go back to main menu
    gotoMainmenu = () =>{
        this.setState({
        showCoverFlowMenu:false,
        showMusicMenu:false,
        showSettingsMenu:false,
        showGamesMenu:false,
        showMainMenu:true

      })
    }

    //change currently active menu
    changeActive = (deg) =>
    {
        if(this.state.showMainMenu===true)
        {
            if(deg<=85)
            {
              this.setState({
                showCoverFlow:true,
                showMusic:false,
                showSettings:false,
                showGames:false
              })
            }
            else if(deg>=85 && deg<=182)
            {
              this.setState({
                showCoverFlow:false,
                showMusic:true,
                showSettings:false,
                showGames:false
              })
              
            }
            else if(deg>=182 && deg<=270)
            {
              this.setState({
                showCoverFlow:false,
                showMusic:false,
                showSettings:true,
                showGames:false
              })
            }
    
              else
              {
                this.setState({
                  showCoverFlow:false,
                  showMusic:false,
                  showSettings:false,
                  showGames:true
                })
                
              }


        }
        else
        {
            if(deg<=85)
            {
              this.setState({
                showAllsongs:true,
                showArtists:false,
                showAlbums:false
                
              })
            }
            else if(deg>=85 && deg<=182)
            {
              this.setState({
                showAllsongs:false,
                showArtists:true,
                showAlbums:false
              
              })
              
            }
            else
            {
              this.setState({
                showAllsongs:false,
                showArtists:false,
                showAlbums:true
              
              })
            }
    
            
                
              

        }
        
        
           
    }
    
 
  
      componentDidMount()
    {
        //bind the rotate event to the wheel region when component is first mounted

        zt.bind(this.wheelRef.current, 'rotate',(e) => {
            //Actions here
            let delta = e.detail.distanceFromOrigin-e.detail.distanceFromLast
            console.log("rotate emitted",e.detail.distanceFromOrigin-e.detail.distanceFromLast)
            this.changeActive(delta)
            DragEvent=false;
        });
    }

    render()
    {
        let menu;
        //which menu to be rendered
        if(this.state.showCoverFlowMenu)
        {
          menu = <CoverflowMenu handleMainmenu={this.gotoMainmenu}/>
        }
        else if(this.state.showSettingsMenu)
        {
           menu= <SettingsMenu handleMainmenu={this.gotoMainmenu}/>
        }
        else if(this.state.showGamesMenu)
        {
           menu= <Gamesmenu handleMainmenu={this.gotoMainmenu}/>
        }
        else if(this.state.showMusicMenu)
        {
           menu= <Musicmenu handleMainmenu={this.gotoMainmenu} item={this.state}/>
        }
        return (
          <div className="App">
            <div className="app-contain">
              <img src="https://image.flaticon.com/icons/svg/1532/1532495.svg" id="top-logo"/>
              {
                this.state.showMainMenu
                ? <Menu setRef={this.ulRef} item={this.state}/>
                :  menu
              }
              <Wheel region={zt}  setRef={this.wheelRef} item={this.state} handleMenu={this.changeMenu} handleMainmenu={this.gotoMainmenu}/>
              

            </div>
            <div className="instruction">
              <h2>Usage Instructions</h2>
              <ul id="instruction-ul">
                <li><h4>Click and drag circularly in the control wheel the move the cursor</h4></li>
                <li><h4>Click on the center button to go in the menu</h4></li>
                <li><h4>Click on the Menu button to go back to main menu</h4></li>
              </ul>
                

            </div>

          </div>
        );
      
    }

  }



export default App;
