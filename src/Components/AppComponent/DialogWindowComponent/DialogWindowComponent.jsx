import MessageItemComponent from "./MassageItemComponent/MessageItemComponent";
import InputMessageComponent from "./InputMessageComponent/InputMessageComponent";
import onlineStatusImg from './../../../images/onlineStatus.png'

import './DialogWindowComponent.scss'

const DialogWindowComponent = (props) => {
    const {userName, isOnline, img} = props.userActive;
    const {messages, updateMesseges} = props;

    const messagesElements = messages.map((m, i) => {
        const formatDate = (mss) => {
            const dateMessage = Intl.DateTimeFormat('ru').format(mss);
            const days = parseInt(mss / (1000 * 60 * 60 * 24));
            const hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = (mss % (1000 * 60)) / 1000;
            //настроить AM/PM
            const timeMessage = `${dateMessage}  ${hours}:${minutes}`
            return {days, hours, minutes, seconds, dateMessage, timeMessage}
        }
        const  {timeMessage} = formatDate(m.date)
        return <MessageItemComponent key={i}
                                     date={m.date}
                                     time={timeMessage}
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
                <InputMessageComponent updateMesseges={updateMesseges} messages={messages}/>
            </div>
        </div>
    )
}

export default DialogWindowComponent;