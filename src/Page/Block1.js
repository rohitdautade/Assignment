import React from 'react';
import '../Static/CSS/Block1.css'
import * as Go from "react-icons/go";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Graph from '../Static/IMG/graph.png'
const Block1 = () => {
    return (
        <>
            <div className="block1">
                <div className="blockoneleft">
                    <div style={{ display: 'flex' }}>
                        <div className="values">
                            <p className="textmain">Dashboard<br /><small className="textlight">Overview Of Letest Month</small></p>
                            <p><span className="valuetext">$3468.96</span> <br /><small className="textlight">Current Month Earning</small></p>
                            <p><span className="valuetext">82</span> <br /><small className="textlight">Current Month Sales</small></p>
                            <button className="lastbtnsmry">Last Month Summary</button>
                        </div>
                        <div className="graph">
                            <div className="block1">
                                <div className="graphreport">
                                    <p className="activegraph">DAILY</p>
                                    <p className="othergrahreport">WEEKLY</p>
                                    <p className="othergrahreport">MONTHLY</p>
                                    <p className="othergrahreport">YEARLY</p>

                                </div>
                                <div className="onlinestetus">
                                    <p> <Go.GoPrimitiveDot className="Online" /><span className="onlinestetusclr">Online</span></p>
                                    <p> <Go.GoPrimitiveDot className="Offline" /> <span className="onlinestetusclr">Offline</span></p>
                                </div>
                            </div>
                            <div>
                                <img src={Graph} width="100%" height="100%" alt="Graph" />
                            </div>


                        </div>
                    </div>

                    <div className="walletbalance">
                        <div className="icontextwallet"><p className="wallet"><FaIcons.FaCrown /></p><p><small className="lasttextclor">Wallet Balance<br /></small><span className="lastvaluetext" >$4,567.53</span ></p></div>
                        <div className="icontextwallet"><p className="refral"><AiIcons.AiFillHeart /></p><p><small className="lasttextclor">Referral Earning<br /></small><span className="lastvaluetext">$1689.53</span ></p></div>
                        <div className="icontextwallet"><p className="estimate"><AiIcons.AiFillMoneyCollect /></p><p><small className="lasttextclor">Estimate Sale<br /></small><span className="lastvaluetext">$2851.53</span ></p></div>
                        <div className="icontextwallet"><p className="earning"><FaIcons.FaCreativeCommonsNcJp /></p><p><small className="lasttextclor">Earning<br /></small><span className="lastvaluetext" >$2851.53</span ></p></div>
                    </div>

                </div>
                <div className="bloconeright">
                    <p>Traffic</p>
                    <div className="center">
                        <div className="ui-widget">

                        </div>
                    </div>
                    <div className="walletbalance">
                        <div><p><span className="percentage">25%</span><br /> <Go.GoPrimitiveDot className="facebook" /><small className="lasttextclor">Facebook</small></p></div>
                        <div><p><span className="percentage">50%</span><br /><Go.GoPrimitiveDot className="youtube" /><small className="lasttextclor">Youtube</small></p></div>
                        <div><p><span className="percentage">25%</span><br /><Go.GoPrimitiveDot className="direct" /><small className="lasttextclor">Direct Search</small></p></div>

                    </div>

                </div>

            </div>

        </>

    )
}
export default Block1