import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return(
        <div>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>   
    );
}

export default Dialog;