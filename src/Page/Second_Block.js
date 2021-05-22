import React from 'react';
import '../Static/CSS/second_block.css'
import * as FaIcons from 'react-icons/fa';
const Block2 = () => {
    return (
        <>
            <div className="main-layout">
                <div className="revinue">
                    <p className="text-tital">Revinue Status</p>
                    <div className="revinue-content">
                        <ul className="col-disply">
                            <li className="li1"></li>
                            <li className="li1"></li>
                            <li className="li1"></li>
                            <li className="li1"></li>
                        </ul>
                        <div>
                            <p className="doller-value"><strong><FaIcons.FaArrowUp className="doller-value-sign" />$432</strong></p><br />
                            <p className="text-second">jan 01 - jan 10</p>
                        </div>


                    </div>

                </div>
                <div className="revinue1">
                    <p className="text-tital">Page View</p>
                    <p className="doller-value1"><strong ><FaIcons.FaArrowUp className="doller-value-sign1" />$432</strong></p>

                </div>
                <div className="revinue2">
                    <p className="text-tital">Bounce Rate</p>
                    <p className="doller-value2"><strong><FaIcons.FaArrowUp className="doller-value-sign2" />$432</strong></p>
                    <select>
                        <option>monthly</option>
                        <option>weeklly </option>
                        <option>Yearly</option>
                    </select>

                </div>
                <div className="revinue3">
                    <p className="text-tital">Revinue Status</p>
                    <div className="revinue-content">
                        <ul className="col-disply">
                            <li className="li2"></li>
                            <li className="li2"></li>
                            <li className="li2"></li>
                            <li className="li2"></li>
                        </ul>
                        <div>
                            <p className="doller-value-last"><strong><FaIcons.FaArrowUp className="doller-value-sign3" />$432</strong></p><br />
                            <p className="text-second">jan 01 - jan 10</p>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}
export default Block2