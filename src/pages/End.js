import React from 'react';
import '../Static/CSS/End.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Row, Col, Table } from 'react-bootstrap';
import * as IoIcons from 'react-icons/io';

const End = () => {
    return (
        <>
            <div className="mt-3">
                <Row>
                    <Col md={5}>
                        <div className="recentacticity">
                            <p>Recent Activity</p>
                            <Row>
                                <Col md={4} sm={4} xs={4}>
                                    <ul>
                                        <li>
                                            <p className="text-secondary"> 42 Mins Ago</p>
                                        </li>
                                        <li>
                                            <p className="text-secondary mt-5"> 1 Day Ago</p>
                                        </li>
                                        <li>
                                            <p className="text-secondary mt-5"> 42 Mins Ago</p>
                                        </li>
                                        <li>
                                            <p className="text-secondary mt-5"> 1 Day Ago</p>
                                        </li>
                                        <li>
                                            <p className="text-secondary mt-4"> 1 Day Ago</p>
                                        </li>
                                    </ul>

                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <div>

                                        <div className="d-flex"><p className="taskupdated"><FaIcons.FaTasks /></p><p><strong >Task Updated<br /></strong><>Nikolai</><small className="text-secondary">Updated a Task</small></p></div>
                                        <div className="d-flex"><p className="dealadded"><IoIcons.IoMdFlash /></p><p><strong >Deal Added<br /></strong><>Pranashi</><small className="text-secondary">Updated a Task</small></p></div>
                                        <div className="d-flex"><p className="publish"><AiIcons.AiFillEdit /></p><p><strong >Published Artical<br /></strong><>Rasel</><small className="text-secondary">Published a Article</small></p></div>
                                        <div className="d-flex"><p className="updated"><IoIcons.IoMdFlash /></p><p><strong >Dock Updated<br /></strong><>Reshmi</><small className="text-secondary">Updated a Task</small></p></div>
                                        <div className="d-flex"><p className="comment"><IoIcons.IoMdFlash /></p><p><strong >Replayed Comments<br /></strong><>Jenathon</><small className="text-secondary"> Added a Comment</small></p></div>


                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="recentacticity">
                            <p>Order Stetus<br /><small className="text-secondary">Overview Of Letest Month</small></p>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <button className="Add"> <AiIcons.AiFillPlusCircle /><span className="ml-2  ">Add</span></button>
                                        <button className="info"> <AiIcons.AiFillInfoCircle /></button>
                                        <button className="info"> <AiIcons.AiTwotoneDelete /></button>
                                        <button className="info"> <AiIcons.AiFillPrinter /></button>
                                    </div>
                                    <div className="d-flex">
                                        <input type="text" className="form-control " placeholder="Search"></input>
                                        <button className="info"> <AiIcons.AiFillPrinter /></button>
                                    </div>
                                </div>
                            </div>

                            <Table responsive="sm" className="mt-2">
                                <thead className="bg-secondary text-white">
                                    <tr>
                                        <th>INVOICE</th>
                                        <th>CUSTOMERS</th>
                                        <th>FROM</th>
                                        <th>PRICE</th>
                                        <th>STETUS</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12386</td>
                                        <td>Rohit Autade</td>
                                        <td>Shrirampur</td>
                                        <td>$8757</td>
                                        <td><button className="btn btn-danger btn-sm">Process</button></td>

                                    </tr>
                                    <tr>
                                        <td>12386</td>
                                        <td>Marko</td>
                                        <td>US</td>
                                        <td>$2642</td>
                                        <td><button className="btn btn-success btn-sm">Open</button></td>

                                    </tr>
                                    <tr>
                                        <td>12386</td>
                                        <td>Roy</td>
                                        <td>Japan</td>
                                        <td>$8797</td>
                                        <td><button className="btn btn-info btn-sm">On Hold</button></td>

                                    </tr>
                                </tbody>
                            </Table>


                        </div>
                    </Col>
                </Row>
                <br /><br />
            </div>
        </>
    )

}
export default End;