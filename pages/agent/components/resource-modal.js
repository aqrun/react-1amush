import React, {useState, ChangeEvent} from 'react'
import { generateIcon } from '../../../icons'
import PropTypes from 'prop-types'
import './resource-modal.scss'

let PlusSvg = generateIcon('plus')


export default function ResourceModal(props){
    const [data, setData] = useState('')

    // input change event
    function dataChange(e){
        setData(e.target.value)
    }
    // close modal
    function closeHandle(){
        props.close()
    }
    // add resource handle
    function addHandle(){
        //@ts-ignore
        props.agentActions.fetchAddResource({
            id: props.agentId,
            data: data
        })
        setData('')
        props.close()
    }

    let cls = 'resource-modal'
    if(props.show){
        cls = 'resource-modal show'
    }

    return(
        <div className={cls}>
            <div className="in">
                <div className="up-arraw"></div>
                <div className="btn_close" onClick={closeHandle}>
                    <span className="iconw close">
                        <PlusSvg />
                    </span>
                </div>

                <p className="des">Separate multiple resource name with commas</p>
                <div className="inputw">
                    <input value={data} onChange={dataChange}/>
                </div>
                <div className="btnw clearfix">
                    <div className="btn btn-add" onClick={addHandle}>Add Resources</div>
                    <div className="btn btn-cancel" onClick={closeHandle}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

ResourceModal.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func,
    agentActions:PropTypes.object,
    agentId: PropTypes.any
}