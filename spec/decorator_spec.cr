require "./spec_helper"

class User
  def first_name
    "Lucky"
  end

  def last_name
    "Casts"
  end

  def website_url
    "https://luckycasts.com"
  end
end

class UserDecorator < Decorator::Base
  decorates user : User

  def full_name
    [user.first_name, user.last_name].compact.join(" ")
  end
end

describe Decorator do
  it "delegates missing methods to the source of decoration" do
    UserDecorator.new(User.new).website_url.should eq "https://luckycasts.com"
  end

  it "successfully decorates objects" do
    UserDecorator.new(User.new).full_name.should eq "Lucky Casts"
  end

  it "provides a getter for the decorated object" do
    user = User.new
    UserDecorator.new(user).user.should eq user
  end
end
