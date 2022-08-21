import DialogItemComponent from "./DialogItemComponent/DialogItemComponent";

import './ChatsWindowComponent.scss'
import data from "../../../dataMessage/dataMesasge";
import {useEffect, useRef, useState} from "react";
import moment from "moment-timezone";

const ChatsWindowComponent = (props) => {
    console.log(props)
    const chatsList = () => {

    }
    const [term, setTerm] = useState('');
    const bodyChats = useRef(null);
    const scrolls = () => {
        bodyChats.current.scrollIntoView({top: true} );
    }

    useEffect(() => {
        scrolls();
    })

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
            const dateMessage = moment(mss).format("MMM DD, YYYY");
            const days = moment(mss).format("D");
            const hours = moment(mss).format("H");
            const minutes = moment(mss).format("mm");
            const seconds = moment(mss).format("ss");
            const timeMessage = moment(mss).format("MMM DD, YYYY")

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
            <div  className={'chatsWindow__body'}>
                <div ref={bodyChats}></div>
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