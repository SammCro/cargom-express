import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserConsumer from '../Context';


class Notifications extends Component{
  render(){
    return (
        <UserConsumer>
            {
                value=>{
                    const{devices} = value;
                    return(
                        devices.map(
                            device=>{
                                if(device.hata==="Var"){
                                    toast.error("Cihaz hatası: "+ device.city, {theme:'colored'})
                                }
                            }
                        )
                    )
                }
            }
        </UserConsumer>
    );
  }
}
export default Notifications; 