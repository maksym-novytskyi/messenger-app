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
    const [term, setTerm] = useState('');

    const sortingUsers = (state) => {
        const arrOfDate = state.usersReducer.users.map(el => +el.messages.slice(-1)[0].date);
        const sortDate = arrOfDate.sort((a, b) => b - a);
        const sortUsers = sortDate.map(d => {
            return state.usersReducer.users.filter(u => +u.messages.slice(-1)[0].date === d);
        })
        console.log(sortUsers.flat())
        return searchUsers(sortUsers.flat(), term);
    }

     const searchUsers = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.userName.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }
    const users = useSelector(state => sortingUsers(state));
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchUsers(request));
    }, [request])

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
    const updateGetMessages = (newMessage,newGetMessage) => {
        console.log("messages");
        console.log(messages);
        setMessages([...messages, newMessage, newGetMessage]);

        userActive.messages = [...messages, newMessage, newGetMessage]
        request(`http://localhost:3001/users/${userActive.id}`, "PUT", JSON.stringify(userActive))
            .then(res => console.log(res, 'Отправка успешна'))
            .then(dispatch(usersUpdated(userActive)))
            .catch(err => console.log(err));
    }
    return (
        <div className={'appComponent'}>
            <ChatsWindowComponent onUpdateSearch={onUpdateSearch} isOnline={true} openChat={openChat} users={users}/>
            {userActive ? <DialogWindowComponent updateMesseges={updateMessages} updateGetMessages={updateGetMessages} messages={messages} userActive={userActive} /> : 'Choose dialog'}
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