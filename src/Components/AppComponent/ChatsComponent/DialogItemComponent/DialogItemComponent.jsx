import './DialogItemComponent.scss'

const DialogItemComponent = (props) => {
    const {lastMessageText, date, userName, userImg} = props;
    return (
        <div className={'dialogItem'}>
            <div>
                {/*<img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt=""/>*/}
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