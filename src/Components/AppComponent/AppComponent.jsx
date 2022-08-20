import ChatsWindowComponent from "./ChatsComponent/ChatsWindowComponent";
import DialogWindowComponent from "./DialogWindowComponent/DialogWindowComponent";
import data from "../../dataMessage/dataMesasge";

import './AppComponent.scss'
import {useEffect, useState} from "react";
import {useHttp} from "../../hooks/http.hook";
import {fetchUsers, usersUpdated} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

const AppComponent = () => {
    //const [users, setUsers] = useState(data);
    const [userActive, setUserActive] = useState();
    const [messages, setMessages] = useState();

    const users = useSelector(state => {
        const arrOfDate = state.usersReducer.users.map(el => +el.messages.slice(-1)[0].date);
        const sortDate = arrOfDate.sort((a, b) => b - a);
        const sortUsers = sortDate.map(d => {
            return state.usersReducer.users.filter(u => +u.messages.slice(-1)[0].date === d);
        })
        console.log(sortUsers.flat())
        return sortUsers.flat()
    });
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchUsers(request));
    }, [])

    /*const updateUsers = (data) => {
        setUsers(data);
    }*/

    const openChat = (user) => {
        console.log(user);
        setUserActive(user);
        setMessages(user.messages);
        console.log(messages);
    }

    const updateMessages = (newMessage) => {
        console.log("messages");
        console.log(messages);
        setMessages([...messages, newMessage]);

        userActive.messages = [...messages, newMessage]
        request(`http://localhost:3001/users/${userActive.id}`, "PUT", JSON.stringify(userActive))
            .then(res => console.log(res, 'Отправка успешна'))
            .then(dispatch(usersUpdated(userActive)))
            .catch(err => console.log(err));
    }
    return (
        <div className={'appComponent'}>
            <ChatsWindowComponent isOnline={true} openChat={openChat} users={users}/>
            {userActive ? <DialogWindowComponent updateMesseges={updateMessages} messages={messages} userActive={userActive} /> : 'Choose dialog'}
        </div>
    );
}

export default AppComponent;

/*
* const arrOfDate = state.usersReducer.users.map(el => el.date);
* const arrOfDate = state.usersReducer.users.map(el => +el.messages.slice(-1)[0].date);
        const sortDate = arrOfDate.sort((a, b) => b - a);
        return sortDate.map(d => {
            return state.usersReducer.users.filter(u => +u.messages.slice(-1)[0].date === d);
           })
        return state.usersReducer.users.filter((u, i) => +u.messages.slice(-1)[0].date === sortDate[i])
        })*/