from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Replace 'your_tmdb_api_key' with your actual TMDb API Key
TMDB_API_KEY = "3cf85afb4ae911705d87b7cd938a727b"

@app.route('/test_api')
def test_api():
    base_url = f'https://api.themoviedb.org/3/discover/movie?api_key={TMDB_API_KEY}'
    language = request.args.get('language')
    genre = request.args.get('genre')
    year = request.args.get('year')
    userRatings = request.args.get('userrating')
    
    all_results = []
    page = 1

    while True:
        url = base_url
        # Build the URL with query parameters
        if language:
            url += f'&with_original_language={language}'
        if genre:
            url += f'&with_genres={genre}'
        if year:
            url += f'&primary_release_year={year}'
        if userRatings:
            userRatings = int(userRatings)
            url += f'&vote_average.gte={userRatings}'
        
        url += f'&page={page}'  # Add the page parameter to the URL
        print(url)
        try:
            response = requests.get(url)
            data = response.json()
            
            if not data['results']:
                break  # Exit the loop if there are no more results
            
            all_results.extend(data['results'])
            page += 1  # Increment the page number for the next request
        
        except Exception as e:
            return f"An error occurred: {e}"

    return jsonify(all_results)

if __name__ == '__main__':
    app.run(debug=True)
