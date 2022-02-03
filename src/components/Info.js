// import Logo from './images/logo.svg'
// import mainImage from './images/main-image.png'

const  Nav = () => {
    return ( 
    
        <div className="airbnb-content">
            <nav>
                <img src={`../images/logo.svg`} alt="logo"  className="logo" />
            </nav>
            <article className="airbnb--main">
                <img src={`../images/main-image.png`} alt="main-image" />
                <div className="airbnb--info">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
                </div>

            </article>
        </div>
    
    ) 
}
 
export default Nav