import React from "react";

class CreateListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("listing[host_id]", this.state.host_id);
        formData.append("listing[title]", this.state.title);
        formData.append("listing[description]", this.state.description);
        formData.append("listing[address]", this.state.address);
        formData.append("listing[guest_limit]", this.state.guest_limit);
        formData.append("listing[price]", this.state.price);
        formData.append("listing[bedrooms]", this.state.bedrooms);
        formData.append("listing[bathrooms]", this.state.title);

        // for (let i = 0 ; i < photos.length; i++) {
        //     formData.append("listing[photos][]", photos[i])
        // }

        this.props.createListing(this.state)
        .then( (prop) => this.props.history.push(`/listings/${prop.listing.id}`))
    }

    displayErrors() {
        return (
            <div>
                {
                    this.props.errors.map((errors, i) => <ul key={`${i}`}> {errors}</ul>)
                }
            </div>
        )
    }

    render() {
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
                    <button className="session-button session-button2" id="submit1" type="submit"> Create Listing </button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateListing