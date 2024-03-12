import profilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile" />
            <h2 className='card-title'>Precilia</h2>
            <p className='card-text'>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 A dolore quisquam laboriosam
                </p>
        </div>
    );
}

export default Card