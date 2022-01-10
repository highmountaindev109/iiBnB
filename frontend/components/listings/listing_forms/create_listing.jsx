import React from "react";

class CreateListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleUpdate(field) {
    //     return e => this.setState({[field]: e.currentTarget.value})
    // }

    // handleSubmit(e) {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append("listing[host_id]", this.state.host_id);
    //     formData.append("listing[title]", this.state.title);
    //     formData.append("listing[description]", this.state.description);
    //     formData.append("listing[address]", this.state.address);
    //     formData.append("listing[guest_limit]", this.state.guest_limit);
    //     formData.append("listing[price]", this.state.price);
    //     formData.append("listing[bedrooms]", this.state.bedrooms);
    //     formData.append("listing[bathrooms]", this.state.title);

    //     for (let i = 0 ; i < photos.length; i++) {
    //         formData.append("listing[photos][]", photos[i])
    //     }

    //     this.props.CreateListing(this.state)
    // }

    render() {
        debugger
        return (
            // <div>
            //     <h1> {this.props.formType} </h1>

            //     <form onSubmit={this.handleSubmit}>
            //         <label> Title </label>
            //         <input
            //             type="text"
            //             value={this.state.title}
            //             onChange={this.update("title")}
            //         />
            //         <label> Address </label>
            //         <input
            //             type="text"
            //             value={this.state.address}
            //             onChange={this.update("address")}
            //         />
            //         <label> guest_limit </label>
            //         <input
            //             type="number"
            //             value={this.state.guest_limit}
            //             onChange={this.update("guest_limit")}
            //         />
            //         <label> price </label>
            //         <input
            //             type="number"
            //             value={this.state.price}
            //             onChange={this.update("price")}
            //         />
            //         <label> bedrooms </label>
            //         <input
            //             type="number"
            //             value={this.state.bedrooms}
            //             onChange={this.update("bedrooms")}
            //         />
            //         <label> bathrooms </label>
            //         <input
            //             type="number"
            //             value={this.state.bathrooms}
            //             onChange={this.update("bathrooms")}
            //         />
            //         <label> Description </label>
            //         <textarea
            //             value={this.state.description}
            //             onChange={this.update("description")}
            //         />

            //         <button type='submit'> </button>
            //     </form>
            // </div>
            <h1> Hello </h1>
        )
    }
}
export default CreateListing