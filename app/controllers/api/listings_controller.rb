class Api::ListingsController < ApplicationController

    def index
        @listings = bounds ? Listing.in_bounds(bounds) : Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.host_id = current_user.id
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        @listing = Listing.find(params[:id])
        if @listing && @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing = Listing.find_by(params[:id])
        @listing.destroy
    end
        
private

    def listing_params
        params.require(:listing).permit( :title, :description, :address, :guest_limit, :price, :bedrooms, :bathrooms, :longitude, :latitude, :host_id, photos:[]  ) 
    end

    def bounds
        params[:bounds]
    end

end
