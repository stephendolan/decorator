require "./spec_helper"

class User
  def initialize(@first_name = "Lucky")
  end

  def first_name
    @first_name
  end

  def last_name
    "Casts"
  end

  def website_url
    "https://luckycasts.com"
  end
end

struct UserDecorator < Decorator::Base
  decorates user : User

  def full_name
    [user.first_name, user.last_name].compact.join(" ")
  end
end

describe Decorator do
  it "delegates missing methods to the source of decoration" do
    UserDecorator.new(User.new).website_url.should eq "https://luckycasts.com"
  end

  it "successfully decorates an object" do
    UserDecorator.new(User.new).full_name.should eq "Lucky Casts"
  end

  it "successfully decorates a collection of objects" do
    decorated_users = UserDecorator.collection([
      User.new("Lucky"),
      User.new("Happy"),
      User.new("Jolly"),
    ])

    decorated_users[0].full_name.should eq "Lucky Casts"
    decorated_users[1].full_name.should eq "Happy Casts"
    decorated_users[2].full_name.should eq "Jolly Casts"
  end

  it "provides a getter for the decorated object" do
    user = User.new
    UserDecorator.new(user).user.should eq user
  end
end
