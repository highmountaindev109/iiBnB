import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

const ListingsIndexItem = ({listing}) => (
    <Link to={`/listings/${listing.id}`} className="li-container">
        <img src={listing.photos[0]} alt="" className="indexphoto"/>
        <div className="right-index-item">
            <div className="listitle">
                <div className="listitlecontainer">
                    <div className="listitle1">Entire place on East Coast</div>
                    <div className="listitle2">{listing.title}</div>
                </div>
                <div>
                    <AiOutlineHeart/>
                </div>
            </div>
            <div className="lisdetails">
                <div className="lisdetails1">
                    {listing.guest_limit} guests • {listing.bedrooms} beds • {listing.bathrooms} baths
                </div>
                <div className="lisamenities">
                    Indoor fireplace • Wifi • Kitchen • Free parking • Washer
                </div>
            </div>
            <div className="lisprice">
                <div className="lisrating">
                    <div className="rstar"><AiFillStar/></div>
                    <div className="btext">4.97 {' '} </div>(200 Reviews)
                </div>
                <div className="lisprice1">
                    ${listing.price}/ night
                </div>

            </div>
        </div>
    </Link>
)

export default ListingsIndexItem