import s from './Message.module.css';

const Messages = (props) => {
    return(
        <div>
            <p>{props.text}</p>
        </div>
    );
}

export default Messages;