import MessageItemComponent from "./MassageItemComponent/MessageItemComponent";
import InputMessageComponent from "./InputMessageComponent/InputMessageComponent";
import onlineStatusImg from './../../../images/onlineStatus.png'

import './DialogWindowComponent.scss'

const DialogWindowComponent = (props) => {
    const {name, isOnline, avatarImg} = props;
  return (
      <div className={'dialogWindow'}>
          <div className={'dialogWindow__header'}>
              <div className={'dialogWindow__header-companionAvatar'}>
                  <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt="picture"/>
                  {isOnline ? <img className={'online'} src={onlineStatusImg} alt="online"/> : null}
              </div>
              <div className={'dialogWindow__header-companionName'}>
                  {name}
              </div>
          </div>
          <div className={'dialogWindow__body'}>
              <MessageItemComponent data={'1'} incomingStatus={true}/>
              <MessageItemComponent data={'1'} incomingStatus={false}/>
              <MessageItemComponent data={'1'} incomingStatus={true}/>
              <MessageItemComponent data={'1'} incomingStatus={false}/>
              <MessageItemComponent data={'1'} incomingStatus={true}/>
              <MessageItemComponent data={'1'} incomingStatus={false}/>
              <MessageItemComponent data={'1'} incomingStatus={true}/>
              <MessageItemComponent data={'1'} incomingStatus={false}/>
              <MessageItemComponent data={'1'} incomingStatus={true}/>
              <MessageItemComponent data={'1'} incomingStatus={false}/>
              <MessageItemComponent data={'1'} incomingStatus={true}/>
              <MessageItemComponent data={'1'} incomingStatus={false}/>
              <MessageItemComponent data={'1'} incomingStatus={true}/>
              <MessageItemComponent data={'1'} incomingStatus={false}/>
              <MessageItemComponent data={'1'} incomingStatus={true}/>
              <MessageItemComponent data={'1'} incomingStatus={false}/>
          </div>
          <div className={'dialogWindow__footer'}>
              <InputMessageComponent/>
          </div>
      </div>
  )
}

export default DialogWindowComponent;