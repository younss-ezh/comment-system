
import { useState } from 'react';

export function CommentForm({ 
    loading, 
    error, 
    onSubmit,
    autoFocus = false,
    initialValue = "" 
}) {
    const [ message, setMessage ] = useState(initialValue)

    function handelSubmit(e) {
        e.preventDefault()
        onSubmit(message).then(() => setMessage(""))
    }

    return (
        <form onSubmit={handelSubmit}>
            <div className="comment-form-row">
                <textarea
                     autoFocus={autoFocus}
                     className="message-input" 
                     onChange={e => setMessage(e.target.value)} value={message} />
                <button type="submit" className="btn" disabled={loading}>{ loading ? "Loading" : "Post" }</button>
            </div>
            <div className="error-msg">{error}</div>
        </form>
    )
}