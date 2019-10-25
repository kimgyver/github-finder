import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url, score }}) => {
    // const { login, avatar_url, html_url } = props.user;
   return (
        <div className="card text-center">
            <img src={avatar_url} alt='' className='round-img' style={{ width: '60px'}} />
            <h3>{login}</h3>
            <h4>score: {parseFloat(score).toFixed(2)}</h4>
            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
                    More
                </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
