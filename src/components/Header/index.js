import './index.css'

const Header = () => (
  <div className="header-container">
    <h1 className="heading">
      Let`s<span className="span-ele">Innovative</span>
    </h1>
    <hr className="line-ele" />
    <p className="abstraction">
      How can you help Sunita Sharma (65+ years old) to live a healthier and
      better life?
    </p>
    <div className="header-sub-container">
      <img
        alt="Old Age caring Center"
        src="https://www.webfarmer.com.au/wp-content/uploads/2019/02/Aged-Care-in-Melbourne.jpg"
        className="image"
      />
      <div className="eg-container">
        <p className="description">
          dentify one use case for elderly care (for the age group 65+) and
          create a <span className="high-lite">working prototype</span> to
          demonstrate your idea using technology known to you.
        </p>
        <p className="efforts">Expected Efforts: 2-3 days</p>
      </div>
    </div>
  </div>
)

export default Header
