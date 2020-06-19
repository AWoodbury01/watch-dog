import React, {Component} from 'react'
// import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'


class WatchDog extends Component {
    state = {
        heading: true,
      };

    render(){
        return(
            <React.Fragment>
                
                <NavBar />
                <ApplicationViews />
               
            </React.Fragment>
        )
    }
}

export default WatchDog