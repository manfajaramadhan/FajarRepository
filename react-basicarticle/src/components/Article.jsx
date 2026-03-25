import { useContext } from "react";
import { GlobalContext } from "../context";


const ArticleStatus = ({ isNew }) => {
    return isNew && <span> -- New Article</span>;
};

const ArticleStatus2 = () => {
    return <span> -- Baru</span>;
};

function Article(props) {
    const user = useContext(GlobalContext);
    return (
        <>
            <h3>{props.title}</h3>
            <small>
                Date : {props.date}, Players : {props.players.join(", ")}
                {/* {props.isNew ? '--Baru' : '--Lama'} */}
                <ArticleStatus isNew={props.isNew} />
                {props.isNew && <ArticleStatus2 />}
            </small>
            <div>
                <small>Ditulis Oleh {user.username}</small>
            </div>
        </>
    );
}
export default Article;