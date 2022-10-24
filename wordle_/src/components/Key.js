import React from 'react'


export default function Key(props) {
    return (props.id ==='ENTER'? ( <div className='enterkey'>{props.id}</div>):props.id ==='DELETE'? ( <div className='deletekey'>{props.id}</div>): (<div className='key'>{props.id}</div>) )
}
