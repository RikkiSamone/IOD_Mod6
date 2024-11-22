import Avatar from './Avatar';
import UserInfo from './UserInfo';
import FormattedDate from './FormattedDate';

function Comment({ author, text, date }) {
    return (
        <div className="Comment componentBox">
            <UserInfo user={author} />
            <div className="Comment-text">
                {text}
            </div>
            <div className="Comment-date">
                <FormattedDate date={date} />
            </div>
        </div>
    );
}

export default Comment;