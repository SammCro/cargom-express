import React,{Component} from 'react';
var uniqid = require('uniqid'); // I  added this lib to create unique ids for the datas.
const UserContext = React.createContext();


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
        devices: [
            {"id":uniqid(),"city":"Ankara","position":[39.9272,32.8644],"hata":"Yok","hataKodu":"G","skt":"24-01-2023","doluluk":"az"},
            {"id":uniqid(),"city":"İstanbul","position":[41.0122,28.976],"hata":"Var","hataKodu":"123","skt":"25-01-2023","doluluk":"orta"},
            {"id":uniqid(),"city":"İzmir","position":[38.423733,27.142826],"hata":"Var","hataKodu":"421","skt":"26-01-2023","doluluk":"cok"}
        ],

        users: [
            {"email": "gizem@bee.com.tr", "password" : "1234"},
            {"email" : "onur@bee.com.tr", "password" : "1234"}    
        ],

        dispatch : action => {
            this.setState(state => reducer(state,action));
        }
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