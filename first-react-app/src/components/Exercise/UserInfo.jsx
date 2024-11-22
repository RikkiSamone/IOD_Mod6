//simpler Comment component with the user info section extracted out into its own component
import Avatar from './Avatar';

function UserInfo({ user }) {
    return (
        <div className="UserInfo">
            <Avatar user={user} />
            <div className="UserInfo-name">
                {user.name}
            </div>
        </div>
    );
}

export default UserInfo;