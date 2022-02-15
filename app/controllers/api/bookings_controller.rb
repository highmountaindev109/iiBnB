class Api::BookingsController < ApplicationController
    before_action :ensure_logged_in

    def index 
        @bookings = Booking.includes(:listing).where(guest_id: current_user.id)
    end

    def show
        @booking = Booking.find(params[:id])
    end

    def create
        @booking = Booking.new(booking_params)
        debugger
        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def update
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        if @booking
            @booking.destroy
        else
            render json: @booking.errors.full_message, status: 404
        end
    end

    private

    def booking_params
        params.require(:booking).permit(:listing_id,:guest_id,:number_of_guests,:check_in_date,:check_out_date)
    end

end