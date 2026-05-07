import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error("console: ", error);
    return(<>
        <h1>Error!</h1>
        <p>{error}</p>
    </>);
}