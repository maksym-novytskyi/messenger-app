import './MessageItemComponent.scss'

const MessageItemComponent = (props) => {
    const incomingClass = 'messageItemComponent__position-left';
    const outgoingClass = 'messageItemComponent__position-right';
    const {incomingStatus} = props;
    const messageClass = incomingStatus ? incomingClass : outgoingClass;

    return (
        <div className={messageClass}>
            <div className={'messageItemComponent__position-block'}>
                {!incomingStatus ? null
                : <div className={'messageItemComponent__photo'}>
                        <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt=""/>
                    </div>}
                <div className={'messageItemComponent__content'}>
                    <div className={'messageItemComponent__content-message'}>message</div>
                    <div className={'messageItemComponent__content-date'}>date</div>
                </div>
            </div>
        </div>
    )
}

export default MessageItemComponent;