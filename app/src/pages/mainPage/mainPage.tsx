import Loading from "../../components/loading/loading";
import { useGetAllGamesQuery } from "../../redux/freeToPlayApi";

function MainPage() {
    const { data, isError, isFetching } = useGetAllGamesQuery();
    console.log(data);
    return (
        <>
            <div className="h1">Main page</div>
            {isFetching && <Loading />}
            {isError && "Error occurred"}
        </>
    );
}

export default MainPage;
