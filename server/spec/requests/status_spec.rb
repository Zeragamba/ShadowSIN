require 'rails_helper'

RSpec.describe "Statuses", type: :request do
  describe "GET /status" do
    it "returns http success" do
      get "/status/status"
      expect(response).to have_http_status(:success)
    end
  end

end
