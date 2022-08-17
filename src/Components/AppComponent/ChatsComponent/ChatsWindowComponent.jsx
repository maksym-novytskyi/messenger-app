import DialogItemComponent from "./DialogItemComponent/DialogItemComponent";

import './ChatsWindowComponent.scss'
import data from "../../../dataMessage/dataMesasge";

const ChatsWindowComponent = (props) => {
    const {dialogsItems} = props;

    const chatsList = () => {

    }

    const items = data.users.map((el, i) => {
        const lastMessage = el.messages.slice(-1)[0];
        //доделать формат даты из милисекунд
        /*const a = Date.now()
        console.log(new Date())
        console.log(a)
        console.log(Intl.DateTimeFormat('ru').format(a))*/
        return <DialogItemComponent key={i} lastMessageText={lastMessage.text}
                                    user={el}
                                    date={lastMessage.date}
                                    userName={el.userName}
                                    userImg={el.img}
                                    openChat={props.openChat}/>
    })
    return (
        <div className={'chatsWindow'}>
            <div className={'chatsWindow__header'}>
                <div>
                    <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt=""/>
                </div>
                <input type="text" placeholder={'Search friend'} className={'search'}/>
            </div>
            <div>
                <h3>Chats</h3>
                <div>
                    {items}
                    {/*{dialogsItems.map(el => {
                        return <DialogItemComponent name={'Maksym Novytskyi'}/>
                    })}*/}
                    <DialogItemComponent name={'Maksym Novytskyi'}/>
                    <DialogItemComponent name={'Nikita'}/>
                    <DialogItemComponent name={'ANDREY'}/>
                    <DialogItemComponent name={'TARAS'}/>
                </div>
            </div>
        </div>
    )
}

export default ChatsWindowComponent;