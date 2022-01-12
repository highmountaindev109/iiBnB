import React from "react";

class EditListingForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.state = {
            loading: true
        }
        console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId)
        .then(() => this.setState (Object.assign({},this.props.listing,{loading:false})))
        // .fail(console.log(this.state))
        // .fail(console.log(this.props))
    }

    handleUpdate(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { photos } = this.state;
        const formData = new FormData();
        // formData.append("listing[host_id]", this.state.host_id);
        formData.append("listing[title]", this.state.title);
        formData.append("listing[description]", this.state.description);
        formData.append("listing[address]", this.state.address);
        formData.append("listing[guest_limit]", this.state.guest_limit);
        formData.append("listing[price]", this.state.price);
        formData.append("listing[bedrooms]", this.state.bedrooms);
        formData.append("listing[bathrooms]", this.state.bathrooms);
        formData.append("listing[longitutude]", this.state.longitude);
        formData.append("listing[latitutude]", this.state.latitude);
        formData.append("listing[id]", this.state.id)
        // for (let i = 0; i < photos.length; i++) {
        //     formData.append("listing[photos][]", photos[i])
        // }
        // debugger
        this.props.updateListing(formData, this.state.id)
            .then((prop) => this.props.history.push(`/listings/${prop.listing.id}`))
    }


    render() {
        if (this.state.loading) {return null;}
        return (
            <div className="forms-container2">
                <form onSubmit={this.handleSubmit} className="session-form2">
                    <div className="form-type-container">
                        <div className="form-type-title"> {this.props.formType} </div>
                    </div>
                    {/* <h3 className="errorsh3"> {this.displayErrors()} </h3> */}
                    <label className="labelListing">
                        <div className="labels1">
                            Title
                        </div>
                        <input
                            id="email"
                            className="session-input2  session-input3"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleUpdate("title")}
                            required
                        />
                    </label>
                    <label className="labelListing">
                        <div className="labels1">
                            Address
                        </div>
                        <input
                            // id="fname"
                            className="session-input2 session-input3"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleUpdate("address")}
                            required
                            min={0}
                        />
                    </label>
                    <label className="labelListing">
                        <div className="labels1">
                            Guest Limits
                        </div>
                        <input
                            // id='lname'
                            className="session-input2  session-input3"
                            type="number"
                            value={this.state.guest_limit}
                            onChange={this.handleUpdate("guest_limit")}
                            required
                        />
                    </label>
                    <label className="labelListing">
                        <div className="labels1">
                            Price
                        </div>
                        <input
                            // id='lname'
                            className="session-input2 session-input3"
                            type="number"
                            value={this.state.price}
                            onChange={this.handleUpdate("price")}
                            required
                        />
                    </label>
                    <label className="labelListing">
                        <div className="labels1">
                            Bedrooms
                        </div>
                        <input
                            // id='lname'
                            className="session-input2  session-input3"
                            type="number"
                            value={this.state.bedrooms}
                            onChange={this.handleUpdate("bedrooms")}
                            required
                        />
                    </label>
                    <label className="labelListing">
                        <div className="labels1">
                            Bathrooms
                        </div>
                        <input
                            // id='lname'
                            className="session-input2  session-input3"
                            type="number"
                            value={this.state.bathrooms}
                            onChange={this.handleUpdate("bathrooms")}
                            required
                        />
                    </label>
                    <label className="labelListing">
                        <div className="labels1">
                            Longitude
                        </div>
                        <input
                            className="session-input2 session-input3"
                            type="text"
                            value={this.state.longitude}
                            onChange={this.handleUpdate("longitude")}
                            required
                        />
                    </label>
                    <label className="labelListing">
                        <div className="labels1">
                            Latitude
                        </div>
                        <input
                            className="session-input2 session-input3"
                            type="text"
                            value={this.state.latitude}
                            onChange={this.handleUpdate("latitude")}
                            required
                        />
                    </label>
                    <label className="labelListing">
                        <div className="labels1">
                            Description
                        </div>
                        <textarea
                            id="bio"
                            className="session-input2 session-input3"
                            value={this.state.description}
                            onChange={this.handleUpdate("description")}
                            required
                        />
                    </label>
                    <div className="form-button-wrapper-container">
                        <div className="form-button-wrapper">
                            <button className="session-button session-button2" id="submit1" type="submit"> Edit Listing </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}



export default EditListingForm;