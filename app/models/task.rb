class Task < ApplicationRecord
  validates :title,
            presence: true

  enum status: %w[pending finished]
end
