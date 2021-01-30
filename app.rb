require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry-byebug'
require 'better_errors'
require 'open-uri'

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = File.expand_path('..', __FILE__)
end

# Home
get '/' do
  @top_10 = fetchNewsAPI
  erb :index
end

get '/search' do
  erb :search
end

private

# Retrieves top 10 news from the Uk
def fetchNewsAPI
  url = 'http://newsapi.org/v2/top-headlines?'\
      'country=gb&'\
      'apiKey=a0d9fcce1a084d8c9ef11e0ac5aef47f'

  response_body = open(url).read

  # Parsing string to JSON
  json_response = JSON.parse(response_body)

  # Returning top 5 articles
  json_response['articles'].first(10)
end
