import React from 'react'
import {  useNavigate } from 'react-router-dom';
import "./styles/global.css"

export default function Pagination(props) {
    const navigate = useNavigate();
    function Previous(){
        if(props.current_page!==1)
        return (<button className='btn' onClick={()=> navigate(`/${props.toonType}/page/${props.current_page-1}`)}  data-previous-page={props.current_page-1}>Previous</button>)
    }
    function next(){
        if(props.has_next_page === true)
        return (<button className='btn' onClick={()=> navigate(`/${props.toonType}/page/${props.current_page+1}`)} data-next-page={props.current_page+1}>Next</button>)
    }

    return (
        <div className='pagination'>
            {Previous()}
            {next()}
        </div>
      )
} 