import { Col, Row, Form } from "react-bootstrap";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IParamsGamesList } from "../../types/types";
import { platforms, sortBy, tags } from "../../assets/data";

import styles from "./toolbar.module.scss";
import { formatString } from "../../utilities/utilities";

interface IToolBarProps {
    setActiveParams: Dispatch<SetStateAction<IParamsGamesList>>;
}

function Toolbar({ setActiveParams }: IToolBarProps) {
    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setActiveParams((prev) => ({
            ...prev,
            [formatString(e.target.name)]: formatString(e.target.value),
        }));
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
