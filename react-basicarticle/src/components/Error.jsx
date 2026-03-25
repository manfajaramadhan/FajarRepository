import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return <div>Oh No, Laman Ini Sedang Error Hehe..</div>
}

export default ErrorPage;