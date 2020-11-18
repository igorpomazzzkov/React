import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';
import {sendMessageCreator, updateNewMessageBody} from "../../redux/state";

const Dialogs = (props) => {
    let dialogItem = props.data.dialogs.map((el) => <Dialog name={el.name} id={el.id} />);
    let messageItem = props.data.messages.map((el) => <Messages text={el.text} id={el.id} />);
    let newMessageBody = props.data.newMessageBody;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onChangeMessage = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageBody(text))
    }

    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messageItem}
            </div>
            <div>
                <p>Send new message:</p>
                <textarea value={newMessageBody} onChange={onChangeMessage}/>
                <button onClick={ onSendMessageClick }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;