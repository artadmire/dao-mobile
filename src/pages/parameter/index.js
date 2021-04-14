import React, {useState} from 'react'
import './index.css'
import MyBottom from '../../components/myBottom'

import bronze from '../../assets/img/bronze@2x.png'

function Parameter () {
  return (
    <div className="my-parameter">
      <div className="parameter-content">
          <div className="level">
                You don’t have a DAOStarter Tier yet. <br/>
                Please upgrade your level.
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="grade">
                     <span>
                       start
                     </span>
                     <span>
                     bronze
                     </span>
                     <span>
                     silver
                     </span>
                     <span>
                     gold
                     </span>
                     <span>
                     platinum
                     </span>
                </div>
          </div>
        <div className="parameter-detail">
          <div className="parameter-detail-top">
          <div className="ethbox-details">
              <div className="ethbox-details-title">
                         ethbox details
              </div>
              <div className="ethbox-details-title-border">

              </div>
              <div className="ethbox-details-website">
                <span>
                                 Website:
                </span>
                <a>
                             https://www.ethbox.org/
                </a>
              </div>
              <p>
                          ethbox is a DuckDAO strategic<br/>
                          partner and an up and coming escrow <br/>
                          service specializing in security,privacy,<br/> 
                          and effectiveness for the OTC <br/>
                          cryptocurrency  market. It serves as a <br/>
                          trustable, transparent and always-valid <br/>
                          intermediary between two parties <br/>
                          willing to send cryptocurrency one way<br/> 
                          or both ways. Instead of sending funds <br/>
                          directly to each other, funds are relayed <br/>
                          through the ethbox smart contract.
              </p>
            </div>
            <div className="deposited">
                <div className="reward">
                <ul>
                <li>
                  <span>
                              Total Rewards
                  </span>
                  <span>
                              0 EBOX Token
                  </span>

                </li>
                <li>
                  <span>
                              Total Rewards
                  </span>
                  <span>
                              0 EBOX Token
                  </span>
                </li>
                <li>
                  <span>
                              Total Rewards
                  </span>
                  <span>
                              0 EBOX Token
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                              Total Rewards
                  </span>
                  <span>
                              0 EBOX Token
                  </span>

                </li>
                <li>
                  <span>
                              Total Rewards
                  </span>
                  <span>
                              0 EBOX Token
                  </span>
                </li>
                <li>
                  <span>
                              Total Rewards
                  </span>
                  <span>
                              0 EBOX Token
                  </span>
                </li>
              </ul>
                </div>
           

              <div className="dates-detail">
                <div className="dates-detail-title" >
                  <span>Start Date</span>
                  <span>End Date</span>
                </div>
                <div className="dates-detail-time">
                  <span>29-03-2021 01:30 UTC</span>
                  <span>Finished</span>
                </div>
                <div className="dates-detail-process">

                </div>
              </div>
            </div>
        
          </div>
          <div className="parameter-detail-bottom">
            <div className="deposited-availale">
              <div className="title">
                       YOU HAVE <span>0</span> USDC DEPOSITED from <span>0 </span>available for your TIER
              </div>
              <div className="cont">
                <div className="cont-first">
                  <span>
                                      INPUT
                  </span>
                  <span>
                                 Your Wallet Balance: <label>0</label>
                  </span>
                </div>
                <div className="cont-last">
                       <input placeholder="0.0"/>
                  <div>
                    <span>
                         Max
                    </span>
                    <img src={bronze}/>
                    USDC
                  </div>
                </div>
              </div>
              <div className="sum">
                <div>
                             + 0% Fee: 0 USDC
                </div>
                <div>
                             TOTAL: 0 USDC
                </div>
              </div>
              <div className="handler">
                <span>
                            approve
                </span>
                <span>
                            Deposit
                </span>
              </div>
            </div>
            <div className="reward-tokens">
              <div className="title">
                        Reward tokens will be available to harvest in approx.
              </div>
              <ul className="cont">
                <li>
                  <span>
                                DAYS
                  </span>
                  <span>
                                00
                  </span>
                </li>
                <li>
                  <span>
                                DAYS
                  </span>
                  <span>
                                00
                  </span>
                </li>
                <li>
                  <span>
                                DAYS
                  </span>
                  <span>
                                00
                  </span>
                </li>
                <li>
                  <span>
                                DAYS
                  </span>
                  <span>
                                00
                  </span>
                </li>
              </ul>
              <div className="sum">
                <div>
                             Reward (0 while calculating)
                </div>
                <div>
                             0 EBOX Token
                </div>
              </div>
              <div className="handler">
                            approve
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyBottom className="parameter-bottom"/>
    </div>
  );
}

export default Parameter;