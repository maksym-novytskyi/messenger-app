import './InputMessageComponent.scss'
import sendImg from '../../../../images/send.png'
import {useState} from "react";
import {nanoid} from "nanoid";
import {useHttp} from "../../../../hooks/http.hook";
import {useDispatch} from "react-redux";
import {addNewMessage, usersFetched} from "../../../../actions";


const InputMessageComponent = ({messages, updateMesseges, updateGetMessages}) => {
    const [inputValue, setInputValue] = useState('');

    const {request} = useHttp();

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //const {dateMessage, timeMessage} = formatDate();
        const newMessage = {
            messageId: nanoid(),
            date: Date.now(),
            //time: timeMessage,
            text: inputValue,
            isRead: true,
            isIncoming: false
        }
        sendMessage(newMessage);
        setInputValue('');
        setTimeout(() => {
            request("https://api.chucknorris.io/jokes/random")
                .then(data => {
                        getMessage(data.value, newMessage)
                })
        }, 10000);

    }
    const sendMessage = (message) => {
        console.log('Отправленное sms: ' + inputValue);
        console.log(message);
        updateMesseges(message);
    }

    const getMessage = (textValue, newMessage) => {
        const newGetMessage = {
            messageId: nanoid(),
            date: Date.now(),
            //time: timeMessage,
            text: textValue,
            isRead: true,
            isIncoming: true
        }
        updateGetMessages(newMessage, newGetMessage)
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