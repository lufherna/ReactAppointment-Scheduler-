import { Component } from 'react'
// this is a skeleton of how we want the app to look like
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
export default class App extends Component {
    constructor() {
    super()
      this.state = {
            // initial state
              loading: true,
			  navOpen: false,
			  confirmationModalOpen: false,
			  confirmationTextVisible: false,
			  stepIndex: 0,
			  appointmentDateSelected: false,
			  appointmentMeridiem: 0,
			  validEmail: false,
			  validPhone: false,
			  smallScreen: window.innerWidth < 768,
			  confirmationSnackbarOpen: false
        }
        
  //method bindings
    }
  
  //component methods?

   //lifecycle methods
componentWillMount() {
        //fetch data from cosmic, watch window width
    }
  componentWillUnmount() {
        //remove window width event listener
    }
  render() {
     //define variables
      return (
        <div>
          </div>
        )
    }
}

