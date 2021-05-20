import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import '../Static/CSS/Middle.css'
import { Row, Col } from 'react-bootstrap';
const Middle = () => {
    return (
        <>
            <Row>
                <Col>
                    <div className="middlefirst">
                        <p>Revinue Status</p>
                        <div>
                            <Row>
                                <Col sm={6}>
                                    <ul className="d-flex">
                                        <li className="li"></li>
                                        <li className="li"></li>
                                        <li className="li"></li>
                                        <li className="li"></li>
                                    </ul>

                                </Col>
                                <Col sm={6} className="align-items-center">
                                    <p className="firsttext"><strong><FaIcons.FaArrowUp />$432</strong></p>
                                    <small className="text-seconary">jan 01 - jan 10</small>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="middlesecond">
                        <p>Page View <br />
                            <h6 className="secondtxt"><strong><FaIcons.FaArrowUp />$432</strong></h6></p>

                    </div>
                </Col>
                <Col>
                    <div className="middlethird">
                        <p>Bounce Rate<br />
                            <h6 className="thirdtext"><strong><FaIcons.FaArrowUp />$432</strong></h6></p>
                        <Row>
                            <Col md={6}>
                                <select className="mt-4">
                                    <option>monthly</option>
                                    <option>weeklly </option>
                                    <option>Yearly</option>
                                </select>
                            </Col>
                            <Col md={6}>
                                <h1 className="thirdtext"> <FaIcons.FaWater /><FaIcons.FaWater /></h1>
                            </Col>
                        </Row>



                    </div>
                </Col>
                <Col>
                    <div className="middlelast">
                        <p>Revinue Status</p>
                        <div>
                            <Row>
                                <Col sm={6}>
                                    <ol className="d-flex">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ol>

                                </Col>
                                <Col sm={6} className="align-items-center">
                                    <p className="lasttext"><strong><FaIcons.FaArrowUp />$432</strong></p>
                                    <small className="text-seconary">jan 01 - jan 10</small>
                                </Col>
                            </Row>
                        </div>

                    </div>
                </Col>
            </Row>
        </>

    )
}
export default Middle;