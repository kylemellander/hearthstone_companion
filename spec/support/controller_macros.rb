module ControllerMacros
  def login_user
    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:normal_user]
      sign_in FactoryGirl.create(:normal_user) # Using factory girl as an example
    end
  end
end
