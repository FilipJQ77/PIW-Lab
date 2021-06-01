import React, {createContext, Component} from 'react';

export const Context = createContext()

export default class ContextProvider extends Component {
    state = { 
        currentUser: "",
        loggedIn: false
     }

     setCurrentUser = (user) => {
         this.setState({currentUser: user})
     }

     setLoggedIn = (logged) => {
         this.setState({loggedIn: logged})
     }


    render() { 
        return (  
            <Context.Provider value={{...this.state, setUser: this.setCurrentUser, setLogged: this.setLoggedIn}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
 