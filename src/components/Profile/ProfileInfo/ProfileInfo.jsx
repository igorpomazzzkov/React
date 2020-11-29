import React from 'react'
import s from './ProfileInfo.module.css';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const ProfileInfo = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        const action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        const action = updateNewPostActionCreator(newPostElement.current.value)
        props.dispatch(action);
    }

    return (
        <div className={s.content}>
            <p>DESCRIPTION</p>
            <br/>
            <div className={s.add_post}>
                <textarea
                    rows="10"
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}/>
                <button onClick={addPost}>ADD POST</button>
            </div>
        </div>
    );
}

export default ProfileInfo;