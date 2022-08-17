import ChatsWindowComponent from "./ChatsComponent/ChatsWindowComponent";
import DialogWindowComponent from "./DialogWindowComponent/DialogWindowComponent";
import data from "../../dataMessage/dataMesasge";

import './AppComponent.scss'
import {useState} from "react";

const AppComponent = () => {
    const [userActive, setUserActive] = useState();
    const openChat = (user) => {
        console.log(user);
        setUserActive(user)
    }
    return (
        <div className={'appComponent'}>
            <ChatsWindowComponent isOnline={true} openChat={openChat}/>
            {userActive ? <DialogWindowComponent userActive={userActive} /> : 'Choose dialog'}
        </div>
    );
}

export default AppComponent;