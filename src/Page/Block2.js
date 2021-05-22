import React from 'react';
import '../Static/CSS/Block2.css'
import * as FaIcons from 'react-icons/fa';
const Block2 = () => {
    return (
        <>
            <div className="mainlayout">
                <div className="revinue">
                    <p className="textital">Revinue Status</p>
                    <div className="revinuecontent">
                        <ul className="colmundisply">
                            <li className="li1"></li>
                            <li className="li1"></li>
                            <li className="li1"></li>
                            <li className="li1"></li>
                        </ul>
                        <div>
                            <p className="dollervalue"><strong><FaIcons.FaArrowUp className="dollervaluesign" />$432</strong></p><br />
                            <p className="textsecond">jan 01 - jan 10</p>
                        </div>


                    </div>

                </div>
                <div className="revinue1">
                    <p className="textital">Page View</p>
                    <p className="dollervalue1"><strong ><FaIcons.FaArrowUp className="dollervaluesign1" />$432</strong></p>

                </div>
                <div className="revinue2">
                    <p className="textital">Bounce Rate</p>
                    <p className="dollervalue2"><strong><FaIcons.FaArrowUp className="dollervaluesign2" />$432</strong></p>
                    <select>
                        <option>monthly</option>
                        <option>weeklly </option>
                        <option>Yearly</option>
                    </select>

                </div>
                <div className="revinue3">
                    <p className="textital">Revinue Status</p>
                    <div className="revinuecontent">
                        <ul className="colmundisply">
                            <li className="li2"></li>
                            <li className="li2"></li>
                            <li className="li2"></li>
                            <li className="li2"></li>
                        </ul>
                        <div>
                            <p className="dollervaluelast"><strong><FaIcons.FaArrowUp className="dollervaluesign3" />$432</strong></p><br />
                            <p className="textsecond">jan 01 - jan 10</p>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}
export default Block2