import React from 'react';
import "./PageTitle.css";

export default function PageTitle({title}) {
    return (
        <>
        <div className="page-heading">
        <h1>{title}</h1>
        <div className="green-circlles">
            <div className="title-title-circle"></div>
            <div className="title-circle"></div>
            <div className="title-circle"></div> 
            <div className="title-circle"></div> 
            <div className="title-circle"></div>
        </div>
        </div>
        </>
    )
}