class Api::V1::WelcomesController < ApplicationController
  def index
    @data = { greeting: "HelloFromAPI" }
  end
end
