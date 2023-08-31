import { Col, Row, Form } from "react-bootstrap";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IParamsGamesList } from "../../types/types";
import { platforms, sortBy, tags } from "../../assets/data";

interface IToolBarProps {
    setActiveParams: Dispatch<SetStateAction<IParamsGamesList>>;
}

function Toolbar({setActiveParams}: IToolBarProps) {
    const formattingString = (str: string) => {
        return str.toLowerCase().replace(" ", "-");
    };

    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setActiveParams((prev) => ({
            ...prev,
            [formattingString(e.target.name)]: formattingString(e.target.value),
        }));
    };

    const addFilterCol = (options: Array<string>, title: string) => {
        return (
            <Col>
                <div className="h2">{title}</div>
                <Form.Group>
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
        <Col xs={3} className="border">
            <Row className="flex-column g-2 justify-content-center">
                {addFilterCol(tags, "Category")}
                {addFilterCol(platforms, "Platforms")}
                {addFilterCol(sortBy, "Sort by")}
            </Row>
        </Col>
    );
}

export default Toolbar;
