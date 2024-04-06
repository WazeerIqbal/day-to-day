import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor() {
        super();
        // console.log("Hello I am contructor")
    }

    render() {
        // As this is class based component so we get props using "this.props" as this.props is a object so we pull these two objects using "this.props"


        let { title, description, imageUrl, url, source, author, publishedAt } = this.props;
        return (

            <div className="container my-3">
                <div className="card">

                    <div className="alert alert-success" role="alert">author: {!author ? "unknown" : author}</div>
                    <img className="card-img-top" src={imageUrl ? imageUrl : "https://media.cnn.com/api/v1/images/stellar/prod/230204150801-01-balloon-shot-down.jpg?c=16x9&q=w_800,c_fill"} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>

                        <p className="card-text"><small className="text-muted">  {new Date(publishedAt).toDateString()}</small></p>

                        {/* <p className="card-text"><small className="text-muted">{publishedAt}</small></p> */}

                        <p className="card-text"><small className="text-muted">{source}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>





        )
    }
}

export default NewsItem
