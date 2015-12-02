class SessionsController < Devise::SessionsController
  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)

    if self.resource.email == "kylemellander@gmail.com"
      bool = true;
    else
      bool = false;
    end

    data = {
      user_token: self.resource.authentication_token,
      user_email: self.resource.email,
      admin: bool
    }
    render json: data, status: 201
  end
end
