import React from "react";
import { FaGoogle } from "react-icons/fa";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props){
        super(props)

        this.state={
            query: "",
        }
    }

    componentDidMount() {
        const searchBarForm = document.querySelector("search_bar_item")
        const autocomplete = new FaGoogle.maps.places.Autocomplete(searchBarForm)
    }

    handleUpdate(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const address = this.state.address;
        const addressToString = address.split(" ").join("+");
        const requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToString}&key=${window.googleApiKey}`
        const response = $.ajax({
            method: 'get',
            url: requestUrl
        })

        let newAddress, newLat, newLong;
        response.done(() => {
            console.log(response)
            newAddress = response.responseJSON.results[0].formatted_address
            newLat = response.responseJSON.results[0].geometry.location.lat
            newLong = response.responseJSON.results[0].geometry.location.lng
            this.setState({
                address: newAddress,
                latitude: newLat,
                longitude: newLong,
            })
        })
    }


    render() {
        return(
            <div className="navbar_search_container">
                <form className="search_form">
                    <input
                        type="text"
                        value="this.state.query"
                        onChange={this.handleUpdate("query")}
                        className="search_bar_item"
                        placeholder=" Search New York City"
                    />

                    <button
                        type="submit"
                        className="icon"
                    />

                </form>
            </div>
        )
    }





}

export default SearchBar