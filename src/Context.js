import React,{Component} from 'react';
import axios from 'axios'

const UserContext = React.createContext();
var uniqid = require('uniqid'); // I  added this lib to create unique ids for the datas.



// It is the reducer function that handles with all actions.
const reducer =  (state,action) => {
    // It works with the type of action.
    switch (action.type) {
        case "DELETE_DEVICE":
            return{
                ...state,
                devices : state.devices.filter(device => action.payLoad !== device.id)
            }
        case "ADD_DEVICE":
            return{
                ...state,
                devices : [...state.devices,action.payLoad]
            }
        default:
            return state;
    }
}


//I used Context Provider to wrap all components with their props.
export class UserProvider extends Component{
    state = {
        devices: [],

        users: [],

        dispatch : action => {
            this.setState(state => reducer(state,action));
        }
    }

    //I used this function because it gets datas from the database and it needs some times. So when component mounted it works and it waits to pulls datas from the DB.
    componentDidMount =  async () => { 
        const responseDevices = await axios.get("https://my-json-server.typicode.com/SammCro/cargom_express/devices")
        const responseUsers = await axios.get("https://my-json-server.typicode.com/SammCro/cargom_express/users")
        this.setState({
            devices : responseDevices.data,
            users : responseUsers.data
        })
     }

    render(){
        return(
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


const UserConsumer = UserContext.Consumer;

export default UserConsumer;