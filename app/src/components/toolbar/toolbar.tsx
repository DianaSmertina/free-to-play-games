import { Col, Row, Form } from "react-bootstrap";
import { ChangeEvent } from "react";
import { platforms, sortBy, tags } from "../../assets/data";
import { formatString } from "../../utilities/utilities";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addParams } from "../../redux/paramsSlice";

import styles from "./toolbar.module.scss";

function Toolbar() {
    const activeParams = useSelector(
        (state: RootState) => state.activeParams.activeParams
    );
    const dispatch = useDispatch();

    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newParams = {
            ...activeParams,
            [formatString(e.target.name)]: formatString(e.target.value),
        };
        dispatch(addParams(newParams));
    };

    const addFilterCol = (options: Array<string>, title: string) => {
        return (
            <Col>
                <div className="h3 my-3">{title}</div>
                <Form.Group className={styles["radio_" + formatString(title)]}>
                    {options.map((el) => (
                        <Form.Check
                            key={el}
                            type="radio"
                            label={el}
                            id={`${title}-${el}`}
                            name={title}
                            value={el}
                            onChange={(e) => checkHandler(e)}
                            checked={
                                activeParams[
                                    formatString(
                                        title
                                    ) as keyof typeof activeParams
                                ] === formatString(el)
                                    ? true
                                    : false
                            }
                        />
                    ))}
                </Form.Group>
            </Col>
        );
    };

    return (
        <Col md={2} sm={3} xs={4} className="px-4">
            <Row className="flex-column g-2 justify-content-center position-fixed">
                {addFilterCol(tags, "Category")}
                {addFilterCol(platforms, "Platforms")}
                {addFilterCol(sortBy, "Sort by")}
            </Row>
        </Col>
    );
}

export default Toolbar;
