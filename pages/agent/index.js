import React, {useEffect, useRef} from 'react'
import { withRouter } from 'react-router-dom'
import {generateIcon} from '../../icons'
import useWindowScrollBottom from '../../utils/useWindowScrollBottom'

import {Item} from './components/item'

import './style.scss'
const LoadingSvg = generateIcon('loading')

let init = false
const Agent = (props) => {
    let pager = props.pagination
    const pagerRef = useRef(null)
    pagerRef.current = pager
    const tableListLoadingRef = useRef(0)
    tableListLoadingRef.current = props.table_list_loading
    //const pagerRef = useRef(pager)
    //pagerRef.current = pager
    //@ts-ignore
    let listSize = props.table_list.size
    ///
    useWindowScrollBottom(bindScrollDown)
    /* const store = useStore()
    const state = store.getState()
    const agentState = state.agent */
    // @ts-ignore
    //console.log('pager=========', agentState.get('pagination').toJS())
    function loadTableList(current, pageSize){
        console.log('start load', pager)
        props.agentActions.fetchTableList({
            current:current, pageSize:pageSize
        })
    }
    
    function loadMoreHandle(){
        loadTableList(pager.current+1, pager.pageSize)
    }

    function bindScrollDown(){
        if(!tableListLoadingRef.current && listSize<pagerRef.current.total){
            console.log('callback state not change:', pagerRef.current)
            loadTableList(pagerRef.current.current+1, pagerRef.current.pageSize)
        }
    }

    useEffect(() => {
        //console.log('pager ...............', pager)
        //changeMainContainerHeight()
        if(!init){
            init = true
            loadTableList(pager.current+1, pager.pageSize)
        }
        
    })
    
    let loadingCls = 'iconw loading'
    const initText = 'Load More'
    let loadingText = initText
    let nomoreText = 'No more data to load'
    if(listSize>=pager.total){
        loadingText = nomoreText
    }
    if(props.table_list_loading){
        loadingCls = 'iconw loading show'
        loadingText = 'Loading...'
        nomoreText = 'Loading...'
    }

    let loadMore = (<div className="li">
        <div className="load_more" onClick={loadMoreHandle}>
            <div className="tx">
                <span className="tx">{loadingText}</span>
                <span className={loadingCls}>
                    <LoadingSvg />
                </span>
            </div>
        </div>
    </div>)

    return(
        <div className="agent-ul" id="agent-ul">
            {props.table_list.map(item =><Item 
                data={item} 
                key={'agi_' + item.id}
                agentActions={props.agentActions}
                />)
            }
            {loadMore}
        </div>
    )
}


export default withRouter(Agent)