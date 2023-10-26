import { useEffect} from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useParams, Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

export const EditPost = () => {
    const { id } = useParams();
    const editTitle = useStoreState(state=>state.editTitle);
    const setEditTitle = useStoreActions(actions=>actions.setEditTitle);
    const editBody= useStoreState(state=>state.editBody);
    const setEditBody = useStoreActions(actions=>actions.setEditBody);
    const getPostById = useStoreState(state=>state.getPostById);
    const post = getPostById(id);
    const editPost = useStoreActions(actions=>actions.editPost);

    const navigate = useNavigate();

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    const handleEdit = (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatePost = { id, title: editTitle, datetime, body: editBody };
        editPost(updatePost);
        navigate('/')
    }

    return (
        <main className="NewPost">
            {editTitle ? (<>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="postTitle">Title:</label>
                    <input
                        type="text"
                        id="postTitle"
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="postBody">Post:</label>
                    <textarea
                        id="postBody"
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => handleEdit(post.id)}
                    >
                        Submit
                    </button>
                </form>
            </>) :
                (
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>

                )}
        </main>
    )
}
