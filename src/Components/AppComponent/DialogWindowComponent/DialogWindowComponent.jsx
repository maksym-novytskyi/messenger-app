import MessageItemComponent from "./MassageItemComponent/MessageItemComponent";
import InputMessageComponent from "./InputMessageComponent/InputMessageComponent";
import onlineStatusImg from './../../../images/onlineStatus.png'

import './DialogWindowComponent.scss'

const DialogWindowComponent = (props) => {
    const {userName, isOnline, img, messages} = props.userActive;

    const messagesElements = messages.map((m, i) => {
        return <MessageItemComponent key={i}
                                     date={m.date}
                                     time={m.time}
                                     messageText={m.text}
                                     userImg={img}
                                     incomingStatus={m.isIncoming}/>
    })
    return (
        <div className={'dialogWindow'}>
            <div className={'dialogWindow__header'}>
                <div className={'dialogWindow__header-companionAvatar'}>
                    <img src={img} alt="picture"/>
                    {isOnline ? <img className={'online'} src={onlineStatusImg} alt="online"/> : null}
                </div>
                <div className={'dialogWindow__header-companionName'}>
                    {userName}
                </div>
            </div>
            <div className={'dialogWindow__body'}>
                {messagesElements}
            </div>
            <div className={'dialogWindow__footer'}>
                <InputMessageComponent/>
            </div>
        </div>
    )
}

export default DialogWindowComponent;