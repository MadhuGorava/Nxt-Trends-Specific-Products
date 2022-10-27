// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const SimilarProductItem = props => {
  const {similarProductData} = props
  const {id, title, brand, imageUrl, rating, price} = similarProductData

  return (
    <Link to={`/products/${id}`} className="nav-link">
      <li className="product-item">
        <img
          src={imageUrl}
          alt={`similar product ${title}`}
          className="thumbnail"
        />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
    </Link>
  )
}
export default SimilarProductItem
