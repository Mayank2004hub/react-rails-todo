class TasksController < ApplicationController
  def index
    render json: {
        items: Task.all
    }, status: :ok
  end
end