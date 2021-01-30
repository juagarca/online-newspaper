require 'open-uri'
require 'json'

url = 'http://newsapi.org/v2/top-headlines?'\
      'country=gb&'\
      'apiKey=a0d9fcce1a084d8c9ef11e0ac5aef47f'
response_body = open(url).read

# Parsing string to JSON
json_response = JSON.parse(response_body)

top_5_articles = json_response['articles'].first(5)
