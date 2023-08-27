import { useGetAllGamesQuery } from "../../redux/freeToPlayApi";

function MainPage() {
    const { data, isError, isFetching } = useGetAllGamesQuery();
    console.log(data);
    return (
        <div className="h1">Main page</div>
    );
}

export default MainPage;