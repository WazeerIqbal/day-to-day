import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: "general"

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }
    // program to convert first letter of a string to uppercase
    capitalizeFirstLetter = (str) => {


        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }





    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            totalResults: 0

        }
        document.title = this.capitalizeFirstLetter(this.props.category)
    }

    //This methode will run after the render methode
    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category = ${this.props.category}&apiKey=f1abbbb503c744abbbcdf219f36bc94c&page=${this.state.page}&1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        this.props.setProgress(30)
        let data = await fetch(url);

        let parseData = await data.json();
        this.props.setProgress(70)

        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100);



    }

    haandleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {


            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category = ${this.props.category}&apiKey=f1abbbb503c744abbbcdf219f36bc94c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json();


            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,

                loading: false

            })
        }

    }
    handlePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category = ${this.props.category}&apiKey=f1abbbb503c744abbbcdf219f36bc94c&page=${this.state.page - 1}&pageSize=${this.props.pageSize} `
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();


        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
            loading: false

        })

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category = ${this.props.category}&apiKey=f1abbbb503c744abbbcdf219f36bc94c&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })

        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false
        })

    }

    render() {


        return (
            <div className='container my-3'>
                <h1>Be Updated Yourself With the Latest News</h1>
                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<Spinner />}
                >
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 30) : " "} description={element.description ? element.description.slice(0, 60) : " "} imageUrl={element.urlToImage} author={element.author} publishedAt={element.publishedAt} source={element.source.name}
                                    url={element.url} />
                            </div>
                        })}

                    </div>

                </InfiniteScroll>


            </div>
        )
    }
}

export default News
