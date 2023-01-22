import React,{Component} from 'react';
var uniqid = require('uniqid'); // I  added this lib to create unique ids for the datas.
const UserContext = React.createContext();

export class UserProvider extends Component{
    state = {
        devices: [
            {"id":uniqid(),"city":"Ankara","position":[38,34],"hata":"Yok","hataKodu":"G","skt":"24.01.2023 19.00","doluluk":"az"},
            {"id":uniqid(),"city":"İzmir","position":[38,33],"hata":"Var","hataKodu":"123","skt":"25.01.2023 19.00","doluluk":"orta"},
            {"id":uniqid(),"city":"İstanbul","position":[38,32],"hata":"Var","hataKodu":"421","skt":"26.01.2023 19.00","doluluk":"cok"}
        ]
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