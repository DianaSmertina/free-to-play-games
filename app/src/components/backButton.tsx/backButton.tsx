import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import backArrow from "../../assets/back.png";

import styles from "./backButton.module.scss";

function BackButton() {
    return (
        <Link to="/">
            <Button className={styles.btn} variant="dark">
                <Image src={backArrow} alt="back" width={30} height={30}/>
            </Button>
        </Link>
    );
}

export default BackButton;
