import './InputMessageComponent.scss'
import sendImg from '../../../../images/send.png'
import {useState} from "react";
import {nanoid} from "nanoid";
import {useHttp} from "../../../../hooks/http.hook";


const InputMessageComponent = ({messages}) => {
    const [dataMessages, setDataMessages] = useState(messages)
    const [inputValue, setInputValue] = useState('');
    const [date, setDate] = useState(null);

    const {request} = useHttp();

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    //Форматировать будем в другой компоненте, по факту рендеринга
    const formatDate = (mss) => {
        const dateMessage = Intl.DateTimeFormat('ru').format(mss);
        const days = parseInt(mss / (1000 * 60 * 60 * 24));
        const hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = (mss % (1000 * 60)) / 1000;
        //настроить AM/PM
        const timeMessage = `${hours}:${minutes}`
        return {days, hours, minutes, seconds, dateMessage, timeMessage}
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setDate(Date.now());
        const {dateMessage, timeMessage} = formatDate(date);
        const newMessage = {
            messageId: nanoid(),
            date: date,
            time: timeMessage,
            text: inputValue,
            isRead: true,
            isIncoming: true
        }
        sendMessage(newMessage);
        setInputValue('');
    }
    const sendMessage = (message) => {
        console.log('Отправленное имя: ' + inputValue);
        console.log(message);
        console.log(dataMessages);
        setDataMessages(message)
    }
    return (
        <div>
            {/*<form >
                <div className={'inputMessageComponent'}>
                    <input type="text" placeholder={'Write new message..'}/>
                    <button onClick={sendMessage}><img src={sendImg} alt=""/></button>
                </div>
            </form>*/}
            <form onSubmit={handleSubmit}>
                <div className={'inputMessageComponent'}>
                    <input  placeholder={'Write new message..'} type="text" value={inputValue} onChange={handleChange}/>
                    {/*<input type="submit" value="Отправить"/>*/}
                    {/*<button type="submit" value="Отправить"><img src={sendImg}/></button>*/}
                    {/*<span type="submit"><img src={sendImg} /></span>*/}
                    {/*<img src={sendImg} type="submit"/>*/}
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default InputMessageComponent;