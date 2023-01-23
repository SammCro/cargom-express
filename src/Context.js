import React,{Component} from 'react';
import axios from 'axios'

const UserContext = React.createContext();
var uniqid = require('uniqid'); // I  added this lib to create unique ids for the datas.


const reducer =  (state,action) => {
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

export class UserProvider extends Component{
    state = {
        devices: [],

        users: [],

        dispatch : action => {
            this.setState(state => reducer(state,action));
        }
    }
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