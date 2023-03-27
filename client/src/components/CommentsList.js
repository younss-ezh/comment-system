import { Comment } from './Comment';

export function CommentsList({ comments }) {
    return comments.map(comment => (
        <div key={comment.id} className="comment-stack">
            <Comment {...comment} />
        </div>
    ))
}