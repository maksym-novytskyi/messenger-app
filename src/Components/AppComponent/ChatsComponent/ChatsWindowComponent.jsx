import DialogItemComponent from "./DialogItemComponent/DialogItemComponent";

import './ChatsWindowComponent.scss'
import data from "../../../dataMessage/dataMesasge";
import {useState} from "react";

const ChatsWindowComponent = (props) => {
    console.log(props)
    const chatsList = () => {

    }
    const [term, setTerm] = useState('');
    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term)
    }
    const items = props.users.map((el, i) => {
        const lastMessage = el.messages.slice(-1)[0];
        //доделать формат даты из милисекунд
        /*const a = Date.now()
        console.log(new Date())
        console.log(a)
        console.log(Intl.DateTimeFormat('ru').format(a))*/
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
        const  {timeMessage} = formatDate(lastMessage.date)
        return <DialogItemComponent key={i} lastMessageText={lastMessage.text}
                                    user={el}
                                    date={timeMessage}
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
                <input type="text" placeholder={'Search friend'} className={'search'} onChange={onUpdateSearch} value={term}/>
            </div>
            <div>
                <h3>Chats</h3>
                <div>
                    {items}
                    {/*{dialogsItems.map(el => {
                        return <DialogItemComponent name={'Maksym Novytskyi'}/>
                    })}*/}
                    {/*<DialogItemComponent name={'Maksym Novytskyi'}/>
                    <DialogItemComponent name={'Nikita'}/>
                    <DialogItemComponent name={'ANDREY'}/>
                    <DialogItemComponent name={'TARAS'}/>*/}
                </div>
            </div>
        </div>
    )
}

export default ChatsWindowComponent;