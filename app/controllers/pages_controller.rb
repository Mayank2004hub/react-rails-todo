class PagesController < ApplicationController
  def home
    render component: "App"
  end
end