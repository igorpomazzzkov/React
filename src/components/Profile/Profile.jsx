import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';

const Profile = (props) =>{
  let postsItem = props.profilePage.posts.map((el) => 
    <Post id={el.id} name={el.name} text={el.text} like={el.like} />);
  return (
      <div className={s.content}>
        <ProfileInfo
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
        />
        <div className={s.posts}>
          {postsItem}
        </div>
      </div>
  );
}

export default Profile;