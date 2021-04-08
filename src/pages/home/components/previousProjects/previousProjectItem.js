import React from 'react'
import Twitter from '../../../../assets/img/twitter@2x.png'
import './previousProjectItem.css'
export default function PreviousProjectItem(props) {
    console.log("props",props)
    return (
        <div className="previous-project-item" style={{"margin-right":props.styles.marginRight || '',"margin-bottom":props.styles.marginBottom || ''}}>
           <div className="section1">
                <img   src={Twitter}/>
                <span>ethbox</span>
           </div>
           <div className="section2">
                <ul>
                    <li>
                        <div>METHOD</div>
                        <div>Batch-Lottery</div>
                    </li>
                    <li>
                        <div>METHOD</div>
                        <div>Batch-Lottery</div>
                    </li>
                    <li>
                        <div>METHOD</div>
                        <div>Batch-Lottery</div>
                    </li>
                </ul>
           </div>
            <div className="section3">
            <ul>
            <li>
                        <div>METHOD</div>
                        <div>Batch-Lottery</div>
                    </li>
                    <li>
                        <div>METHOD</div>
                        <div>Batch-Lottery</div>
                    </li>
                    <li>
                        <div>METHOD</div>
                        <div>Batch-Lottery</div>
                    </li>
                    <li>
                        <div>METHOD</div>
                        <div>Batch-Lottery</div>
                    </li>
                </ul>
            </div>
            <div className="section4">
                <span className="unlock-wallet">Unlock Wallet</span>
            </div>
        </div>
    )
}
