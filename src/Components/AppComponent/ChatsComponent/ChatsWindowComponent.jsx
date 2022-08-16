import DialogItemComponent from "./DialogItemComponent/DialogItemComponent";

import './ChatsWindowComponent.scss'

const ChatsWindowComponent = (props) => {
    const {dialogsItems} = props;
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