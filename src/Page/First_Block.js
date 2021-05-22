import React from 'react';
import '../Static/CSS/first_block.css'
import * as Go from "react-icons/go";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Graph from '../Static/IMG/graph.png'
const Block1 = () => {
    return (
        <>
            <div className="block1">
                <div className="block-left">
                    <div style={{ display: 'flex' }}>
                        <div className="values">
                            <p className="text-main">Dashboard<br /><small className="text-light">Overview Of Letest Month</small></p>
                            <p><span className="value-text">$3468.96</span> <br /><small className="text-light">Current Month Earning</small></p>
                            <p><span className="value-text">82</span> <br /><small className="text-light">Current Month Sales</small></p>
                            <button className="last-btn">Last Month Summary</button>
                        </div>
                        <div className="graph">
                            <div className="block1">
                                <div className="graph-report">
                                    <p className="active-graph">DAILY</p>
                                    <p className="other-graph-report">WEEKLY</p>
                                    <p className="other-graph-report">MONTHLY</p>
                                    <p className="other-graph-report">YEARLY</p>

                                </div>
                                <div className="online-status">
                                    <p> <Go.GoPrimitiveDot className="Online" /><span className="status-text">Online</span></p>
                                    <p> <Go.GoPrimitiveDot className="Offline" /> <span className="status-text">Offline</span></p>
                                </div>
                            </div>
                            <div>
                                <img src={Graph} width="100%" height="100%" alt="Graph" />
                            </div>


                        </div>
                    </div>

                    <div className="wallet-balance">
                        <div className="icon-text-wallet"><p className="wallet"><FaIcons.FaCrown /></p><p><small className="last-text-clor">Wallet Balance<br /></small><span className="last-value-text" >$4,567.53</span ></p></div>
                        <div className="icon-text-wallet"><p className="refral"><AiIcons.AiFillHeart /></p><p><small className="last-text-clor">Referral Earning<br /></small><span className="last-value-text">$1689.53</span ></p></div>
                        <div className="icon-text-wallet"><p className="estimate"><AiIcons.AiFillMoneyCollect /></p><p><small className="last-text-clor">Estimate Sale<br /></small><span className="last-value-text">$2851.53</span ></p></div>
                        <div className="icon-text-wallet"><p className="earning"><FaIcons.FaCreativeCommonsNcJp /></p><p><small className="last-text-clor">Earning<br /></small><span className="last-value-text" >$2851.53</span ></p></div>
                    </div>

                </div>
                <div className="block-right">
                    <p className="text-main">Traffic</p>
                    <div className="center">
                        <div className="ui-widget">

                        </div>
                    </div>
                    <div className="wallet-balance">
                        <div><p><span className="percentage">25%</span><br /> <Go.GoPrimitiveDot className="facebook" /><small className="last-text-clor">Facebook</small></p></div>
                        <div><p><span className="percentage">50%</span><br /><Go.GoPrimitiveDot className="youtube" /><small className="last-text-clor">Youtube</small></p></div>
                        <div><p><span className="percentage">25%</span><br /><Go.GoPrimitiveDot className="direct" /><small className="last-text-clor">Direct Search</small></p></div>

                    </div>

                </div>

            </div>

        </>

    )
}
export default Block1