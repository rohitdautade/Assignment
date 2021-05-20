import React, { useState } from 'react';
import '../Static/CSS/Home.css';
import { Row, Col, Container } from 'react-bootstrap';
import graph1 from '../Static/IMG/graph1.png';
import graph2 from '../Static/IMG/graph2.png';
import graph4 from '../Static/IMG/graph4.jpg';
import graph3 from '../Static/IMG/graph3.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Middle from './Middle';
import End from './End';

function Dashboard() {
  const [graph, setgraph] = useState(graph1)
  function daily() {
    setgraph(graph1)
  }
  function weeklly() {
    setgraph(graph2)
  }
  
  function month() {
    setgraph(graph3)
  }
  function year() {
    setgraph(graph4)
  }
  return (
    <>
      <div className="bg">
        <Container>
          <Row className="mt-3">
            <Col md={7} xs={6} className="mt-4">
              <div className="Dashboard">
                <Row>
                  <Col md={4}>
                    <p>Dashboard<br /><small className="text-secondary">Overview of letest Month</small></p>

                    <p><strong>$3468.96</strong><br /><small className="text-secondary">Current Month Earning</small></p>
                    <p><strong>82</strong><br /><small className="text-secondary">Current Month Sales</small></p>
                    <button className="lastmonth">Last Month Summary</button>

                  </Col>
                  <Col md={8}>
                    <div className="row">
                      <div className="d-flex justify-content-between col-md-9 ">

                        <p onClick={daily} className="graph"> <small>DAILY</small></p>
                        <p onClick={weeklly} className="graph"><small>WEEKLY</small></p>
                        <p onClick={month} className="graph"><small>MONTHLY</small></p>
                        <p onClick={year} className="graph"><small>YEARLY</small></p>
                        <div className="d-flex justify-content-between col-md-3 ">
                          <p className="ml-5"> <small> Online</small></p>
                          <p className="ml-3"> <small>Offline</small></p>
                        </div>

                      </div>

                    </div>
                    <img src={graph} width='100%' height='250px' alt="Graph" />
                  </Col>
                </Row>

                <div className="d-flex justify-content-around">
                  <div className="d-flex"><p className="wallet"><FaIcons.FaCrown /></p><p><small className="text-secondary ">Wallet Balance<br /></small><strong>$4,567.53</strong></p></div>
                  <div className="d-flex"><p className="refral"><AiIcons.AiFillHeart /></p><p><small className="text-secondary ">Referral Earning<br /></small><strong>$1689.53</strong></p></div>
                  <div className="d-flex"><p className="estimate"><AiIcons.AiFillMoneyCollect /></p><p><small className="text-secondary ">Estimate Sale<br /></small><strong>$2851.53</strong></p></div>
                  <div className="d-flex"><p className="earning"><FaIcons.FaCreativeCommonsNcJp /></p><p><small className="text-secondary ">Earning<br /></small><strong>$2851.53</strong></p></div>

                </div>



              </div>
            </Col>
            <Col md={5} xs={6} className="mt-4">
              <div className="traffic">
                <p>Traffic</p>
                <div className="text-center">
                  <div className="ui-widget bg-white">
                    <div className="ui-value">
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-around">
                  <div><p><strong>25%</strong><br /><small className="text-secondary">Facebook</small></p></div>
                  <div><p><strong>50%</strong><br /><small className="text-secondary">Youtube</small></p></div>
                  <div><p><strong>25%</strong><br /><small className="text-secondary">Direct Search</small></p></div>
                </div>



              </div>
            </Col>
          </Row>
          <br />
          <Middle />
          <End />
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
