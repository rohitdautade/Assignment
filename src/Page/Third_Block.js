import React from 'react';
import '../Static/CSS/third_block.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
const Block3 = () => {
    return (
        <>
            <div className="block-last-layout">
                <div className="block-last-left">
                    <p className="tital-text">Recent Activities</p>
                    <div className="block-three-content">
                        <div className="mar">
                            <p className="last-light-text1" >42 Min Ago</p>
                            <p className="last-light-text1 botm" >1 Day Ago</p>
                            <p className="last-light-text1 botm" >42 Min Ago</p>
                            <p className="last-light-text1 botm" >1 Day Ago</p>
                            <p className="last-light-text1 botm" > 1 Day Ago</p>
                        </div>
                        <div className="mid-content">
                            <div className="last-display"><p className="task-updated"><FaIcons.FaTasks /></p><p><strong className="activity-name">Task Updated<br /></strong><span className="person-name">Nikolai</span><small className="overview">Updated a Task</small></p></div>
                            <div className="last-display"><p className="deal-added"><IoIcons.IoMdFlash /></p><p><strong className="activity-name" >Deal Added<br /></strong><span className="person-name">Pranashi</span><small className="overview">Updated a Task</small></p></div>
                            <div className="last-display"><p className="publish"><AiIcons.AiFillEdit /></p><p><strong className="activity-name">Published Artical<br /></strong><span className="person-name">Rasel</span><small className="overview">Published a Article</small></p></div>
                            <div className="last-display"><p className="updated"><IoIcons.IoMdFlash /></p><p><strong className="activity-name">Dock Updated<br /></strong><span className="person-name">Reshmi</span><small className="overview">Updated a Task</small></p></div>
                            <div className="last-display"><p className="comment"><IoIcons.IoMdFlash /></p><p><strong className="activity-name">Replayed Comments<br /></strong><span className="person-name">Jenathon</span><small className="overview"> Added a Comment</small></p></div>


                        </div>
                        <div>

                        </div>
                    </div>



                </div>
                <div className="block-last-right">
                    <p className="tital-text">Order Status<br /><span className="last-light-text">Overview Of Letest Month</span></p>
                    <div>
                        <div className="display1" style={{ marginTop: '1.5rem' }}>
                            <div>
                                <button className="Add"> <AiIcons.AiFillPlusCircle />Add</button>
                                <button className="info"> <AiIcons.AiFillInfoCircle /></button>
                                <button className="info"> <AiIcons.AiTwotoneDelete /></button>
                                <button className="info"> <AiIcons.AiFillPrinter /></button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: '1rem' }} > <input type="text" placeholder="Search" /></div>
                                <button className="info"> <AiIcons.AiFillPrinter /></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table>
                            <thead>
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
                                    <td><button className="brn-process">Process</button></td>

                                </tr>
                                <tr>
                                    <td>12386</td>
                                    <td>Marko</td>
                                    <td>US</td>
                                    <td>$2642</td>
                                    <td><button className="btn-open">Open</button></td>

                                </tr>
                                <tr>
                                    <td>12386</td>
                                    <td>Roy</td>
                                    <td>Japan</td>
                                    <td>$8797</td>
                                    <td><button className="btn-hold">On Hold</button></td>

                                </tr>
                                <tr>
                                    <td>12386</td>
                                    <td>Mittal</td>
                                    <td>Dubai</td>
                                    <td>$9697</td>
                                    <td><button className="btn-open">Open</button></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>

    )
}
export default Block3