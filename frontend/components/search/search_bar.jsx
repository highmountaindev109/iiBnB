import React from "react";
// import { FaSearch } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { FaSearch } from "react-icons/fa/index";
class SearchBar extends React.Component {
    constructor(props){
        super(props)

        this.state={
            query: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        const searchBarForm = document.querySelector(".search_bar_item")
        this.autocomplete = new google.maps.places.Autocomplete(searchBarForm);
    }

    handleUpdate(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let place = this.autocomplete.getPlace();
        let fm = place.formatted_address
        const queryToString = fm.split(" ").join("+");
        const requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${queryToString}&key=${window.googleApiKey}`
        const response = $.ajax({
            method: 'get',
            url: requestUrl
        })
        let newLat, newLong;
        response.done(() => {
            newLat = response.responseJSON.results[0].geometry.location.lat
            newLong = response.responseJSON.results[0].geometry.location.lng
            this.props.history.push(`/listings?${newLat}&${newLong}`)
        })
    }


    render() {
        return(
            <div className="navbar_search_container">
                <form className="search_form" onSubmit={this.handleSubmit}>
                    <div className="whole-search-bar">
                        <div className="search_bar_container">
                            <label id="search-label">Location </label>
                            <input
                                type="text"
                                onChange={this.handleUpdate("query")}
                                className="search_bar_item"
                                placeholder="Try New York City"
                                id="autocomplete"
                            />
                        </div>

                        <button
                            type="submit"
                            className="search-icon"
                        > <FaSearch className="fasearch" /> <div>
                            Search 
                            </div>
                            </button>

                    </div>

                </form>
            </div>
        )
    }

}

export default withRouter(SearchBar)