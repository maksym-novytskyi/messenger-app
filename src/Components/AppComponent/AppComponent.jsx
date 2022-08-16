import ChatsWindowComponent from "./ChatsComponent/ChatsWindowComponent";
import DialogWindowComponent from "./DialogWindowComponent/DialogWindowComponent";

import './AppComponent.scss'

const AppComponent = () => {
    return (
        <div className={'appComponent'}>
            <ChatsWindowComponent isOnline={true}/>
            <DialogWindowComponent name={'Maksym'} isOnline={true}/>
        </div>
    );
}

export default AppComponent;