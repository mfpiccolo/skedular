class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def venmo
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    auth = request.env["omniauth.auth"]

    venmo = Venmo.new(auth.credentials.token)
    venmo_user = venmo.get_info

    # Update user and sign
    current_user.update_attributes(
      provider: auth.provider,
      uid: auth.uid,
      venmo_token: auth.credentials.token,
      venmo_id: venmo_user.id,
      venmo_about: venmo_user.about,
      venmo_display_name: venmo_user.display_name,
      venmo_first_name: venmo_user.first_name,
      venmo_last_name: venmo_user.last_name,
      venmo_profile_picture_url: venmo_user.profile_picture_url,
      venmo_username: venmo_user.username,
      venmo_balance: venmo_user.balance.to_i
    )

    if current_user.persisted?
      sign_in current_user, :event => :authentication #this will throw if @user is not activated
      redirect_to "/"
      # set_flash_message(:notice, :success, :kind => "venmo") if is_navigational_format?
    else
      session["devise.venmo_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def failure
    set_flash_message :alert, :failure, :kind => OmniAuth::Utils.camelize(failed_strategy.name), :reason => failure_message
    redirect_to after_omniauth_failure_path_for(resource_name)
  end

  protected

  def handle_unverified_request
    true
  end
end
