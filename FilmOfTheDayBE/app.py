from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Replace 'your_tmdb_api_key' with your actual TMDb API Key
TMDB_API_KEY = "3cf85afb4ae911705d87b7cd938a727b"
location = "C:/Users/ishum/OneDrive/Desktop/Personal_Projects/FilmOfTheDay/FilmOfTheDayBE/"

def checkNamePresent(name):
    return bool(name)

def isSheetPresent(name):
    file_path = os.path.join(location, name + ".xlsx")
    return os.path.exists(file_path)

@app.route('/generate_excel', methods=['POST'])
def generate_excel():
    fileName = request.json.get('nameOfExcelFile')
    movieName = request.json.get('movieName')
    overview = request.json.get('overview')
    releaseDate = request.json.get('releaseDate')

    # Check if filename is provided, default to "Film_of_the_Day" if not
    if not checkNamePresent(fileName):
        fileName = "Film_of_the_Day"

    file_path = os.path.join(location, fileName + ".xlsx")
    data = {"Movie Name": [movieName],"Overview":[overview],"ReleaseDate":[releaseDate]}
    
    try:
        # Check if Excel sheet already exists
        if isSheetPresent(fileName):
            # Load existing data and append new entry
            existing_df = pd.read_excel(file_path)
            new_df = pd.DataFrame(data)
            final_df = pd.concat([existing_df, new_df], ignore_index=True)
        else:
            # Create a new DataFrame
            final_df = pd.DataFrame(data)

        # Save to Excel
        final_df.to_excel(file_path, index=False)

    except Exception as e:
        return jsonify({"error": f"Failed to create/update Excel file: {str(e)}"}), 500

    return jsonify({"message": "Excel file created/updated successfully."}), 200

@app.route('/test_api', methods=['GET'])
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
        if language:
            url += f'&with_original_language={language}'
        if genre:
            url += f'&with_genres={genre}'
        if year:
            url += f'&primary_release_year={year}'
        if userRatings:
            try:
                url += f'&vote_average.gte={int(userRatings)}'
            except ValueError:
                return jsonify({"error": "Invalid user rating value"}), 400
        
        url += f'&page={page}'
        
        try:
            response = requests.get(url)
            data = response.json()
            
            if not data.get('results'):
                break
            
            all_results.extend(data['results'])
            page += 1
        
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return jsonify(all_results)

if __name__ == '__main__':
    app.run(debug=True)
