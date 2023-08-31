import { Row } from "react-bootstrap";
import Toolbar from "../../components/toolbar/toolbar";
import Cards from "../../components/cards/cards";
import { useState } from "react";
import { IParamsGamesList } from "../../types/types";
import { useGetAllGamesQuery } from "../../redux/freeToPlayApi";

function MainPage() { 
    const [activeParams, setActiveParams] = useState<IParamsGamesList>({});
    const { data, isError, isFetching } = useGetAllGamesQuery(activeParams);
    
    return (
        <Row>
            <Toolbar setActiveParams={setActiveParams}/>
            <Cards data={data} isError={isError} isFetching={isFetching}/>
        </Row>
    );
}

export default MainPage;
