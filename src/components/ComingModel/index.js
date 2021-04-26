import React from 'react'
import './index.css'
import close from '@/assets/img/删除@2x.png'
import pro from '@/assets/img/编组6@2x.png'


function ComingModel (props) {
  function hideModal () {
    const { hideModal } = props
    typeof hideModal === 'function' && hideModal(false)
  }
  return (
    <div className="my-ComingModel">
      <div className="parameter-detail">
        <div className="progress"><img  src={pro}/></div>
        <span>COMING SOON</span>
        <img className="close" onClick={hideModal} src={close} />
      </div>
    </div>
  )

}
export default ComingModel
