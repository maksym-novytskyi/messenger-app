import './InputMessageComponent.scss'
import sendImg from '../../../../images/send.png'

const InputMessageComponent = () => {
    return (
        <form>
            <div className={'inputMessageComponent'}>
                <input type="text" placeholder={'Write new message..'}/>
                <button><img src={sendImg} alt=""/></button>
            </div>
        </form>
    )
}

export default InputMessageComponent;