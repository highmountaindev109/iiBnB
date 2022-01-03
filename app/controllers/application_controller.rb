class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
    skip_before_action :verify_authenticity_token ## delete before production

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    
    def ensure_logged_in
        render json: ['No user logged in'] unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @user = user
        session[:session_token] = @user.reset_session_token!
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

end
