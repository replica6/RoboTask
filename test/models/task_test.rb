# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  location    :string           not null
#  creator_id  :integer          not null
#  worker_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  datetime    :datetime
#  lat         :float            not null
#  lng         :float            not null
#  wage        :integer
#  is_open     :boolean          default(FALSE), not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
