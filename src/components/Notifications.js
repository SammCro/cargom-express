import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserConsumer from '../Context';



//It is the Notification component that works and give notifications with every refresh of the page.
//I used tostify library to give notifications because it is easy to use and it is easy if we try to style the nofitications.
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