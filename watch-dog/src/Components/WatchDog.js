import React, {Component} from 'react'
import Navbar from './nav/Navbar'
import ApplicationViews from './ApplicationViews'



class WatchDog extends Component {
    state = {
        heading: true,
      };

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <ApplicationViews />
               
            </React.Fragment>
        )
    }
}

export default WatchDog