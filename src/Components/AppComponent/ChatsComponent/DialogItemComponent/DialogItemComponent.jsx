import './DialogItemComponent.scss'

const DialogItemComponent = (props) => {
    const {lastMessageText, date, userName, userImg, openChat, user} = props;
    return (
        <div className={'dialogItem'} onClick={() => openChat(user)}>
            <div>
                <img src={userImg} alt=""/>
            </div>
            <div>
                <div>{userName}</div>
                <div>{lastMessageText}</div>
            </div>
            <div>
                {date}
            </div>

        </div>
    )
}

export default DialogItemComponent;