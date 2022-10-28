// Write your code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

class ProductItemDetails extends Component {
  state = {selectedProductList: {}, count: 1, isLoading: true}

  componentDidMount() {
    this.getResponseProducts()
  }

  getFormatData = fetchedData => ({
    id: fetchedData.id,
    imageUrl: fetchedData.image_url,
    title: fetchedData.title,
    price: fetchedData.price,
    rating: fetchedData.rating,
    description: fetchedData.description,
    brand: fetchedData.brand,
    totalReviews: fetchedData.total_reviews,
    availability: fetchedData.availability,
  })

  onGoShopping = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderFailureView = () => (
    <>
      <Header />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
          alt="error view"
          className="product-image"
        />
        <p className="details">Products Not Found</p>
        <button type="button" className="add-btn" onClick={this.onGoShopping}>
          Continue Shopping
        </button>
      </div>
    </>
  )

  getResponseProducts = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(`https://apis.ccbp.in/products/${id}`, options)
    const data = await response.json()
    console.log(data)
    const formatData = {
      productDetails: this.getFormatData(data),
      similarProductDetails: data.similar_products.map(item =>
        this.getFormatData(item),
      ),
    }
    this.setState({selectedProductList: formatData, isLoading: false})
    if (data.status_code === 404) {
      this.renderFailureView(data.error_msg)
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onDecrement = count => {
    if (count === 1) {
      this.setState({count: 1})
    }
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  renderSelectedProduct = () => {
    const {selectedProductList, count} = this.state
    const {productDetails} = selectedProductList
    const {
      id,
      imageUrl,
      title,
      price,
      rating,
      description,
      brand,
      totalReviews,
      availability,
    } = productDetails
    return (
      <div key={id} className="select-product-container">
        <img src={imageUrl} alt="product" className="product-image" />
        <div className="product-details-container">
          <h1 className="title">{title}</h1>
          <p className="price">Rs {price}/-</p>
          <div className="review-container">
            <div className="rating-container">
              <p className="rating">{rating}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="star"
              />
            </div>
            <p className="reviews">{totalReviews} Reviews</p>
          </div>
          <div className="para-card">
            <p className="description">{description}</p>
          </div>
          <p className="details">Available: {availability}</p>
          <p className="details">Brand: {brand}</p>
          <hr />
          <div className="count-container">
            <button
              type="button"
              className="btn"
              onClick={this.onDecrement}
              testid="minus"
            >
              <BsDashSquare />
            </button>
            <p className="count">{count}</p>
            <button
              type="button"
              className="btn"
              onClick={this.onIncrement}
              testid="plus"
            >
              <BsPlusSquare />
            </button>
          </div>
          <button type="button" className="add-btn">
            ADD TO CART
          </button>
        </div>
      </div>
    )
  }

  renderSimilarProducts = () => {
    const {selectedProductList} = this.state
    const {similarProductDetails} = selectedProductList
    return (
      <ul className="list-order-container">
        {similarProductDetails.map(eachPro => (
          <SimilarProductItem key={eachPro.id} similarProductData={eachPro} />
        ))}
      </ul>
    )
  }

  renderProducts = () => (
    <div className="render-container">
      <Header />
      <div>{this.renderSelectedProduct()}</div>
      <div>{this.renderSimilarProducts()}</div>
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
          </div>
        ) : (
          this.renderProducts()
        )}
      </div>
    )
  }
}

export default ProductItemDetails
