import { Col, Row, Pagination } from "react-bootstrap";
import Loading from "../loading/loading";
import CardTemplate from "./cardTemplate";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useGetAllGamesQuery } from "../../redux/freeToPlayApi";

function Cards() {
    const [page, setPage] = useState(1);
    const activeParams = useSelector((state: RootState) => state.activeParams.activeParams);
    const { data, isError, isFetching } = useGetAllGamesQuery(activeParams);
    const CARDS_ON_PAGE = 30;

    const addPagination = () => {
        const pageAmount = Math.ceil((data?.length || 0) / CARDS_ON_PAGE);
        const paginationItems = new Array(pageAmount).fill("").map((_, i) => (
            <Pagination.Item
                key={i + 1}
                active={i + 1 === page}
                onClick={() => setPage(i + 1)}
            >
                {i + 1}
            </Pagination.Item>
        ));
        return paginationItems;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <Col md={10} sm={9} xs={8} className="my-3">
            <Row className="justify-content-center">
                {isFetching && <Loading />}
                {isError && <p>Error occurred</p>}
                {!isFetching &&
                    !isError &&
                    data &&
                    data.length > 0 &&
                    data
                        .slice((page - 1) * CARDS_ON_PAGE, page * CARDS_ON_PAGE)
                        .map((el) => <CardTemplate key={el.id} data={el} />)}

                {data && (
                    <Pagination className="d-flex w-100 flex-wrap justify-content-center">
                        <Pagination.First />
                        {addPagination()}
                        <Pagination.Last />
                    </Pagination>
                )}
            </Row>
        </Col>
    );
}

export default Cards;
