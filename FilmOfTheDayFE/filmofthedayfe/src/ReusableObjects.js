import React from "react";

const languages = {
    "English": "en-US",
    "Spanish": "es",
    "French": "fr",
    "Japanese": "ja",
    "German": "de",
    "Hindi": "hi",
    "Tamil": "ta",
    "Telugu": "te",
    "Kannada": "kn",
    "Malayalam": "ml",
    "Bengali": "bn",
    "Korean": "ko",
    "Chinese (Simplified)": "zh-CN",
    "Chinese (Traditional)": "zh-TW",
    "Arabic": "ar",
    "Portuguese": "pt",
    "Russian": "ru",
    "Italian": "it",
    "Dutch": "nl",
    "Turkish": "tr",
    "Vietnamese": "vi",
    "Thai": "th",
    "Filipino": "tl",
    "Swedish": "sv",
    "Norwegian": "no",
    "Danish": "da",
    "Finnish": "fi",
    "Greek": "el",
    "Hebrew": "he",
    "Hungarian": "hu"
};

const genres = {
    "Action": 28,
    "Adventure": 12,
    "Animation": 16,
    "Comedy": 35,
    "Crime": 80,
    "Documentary": 99,
    "Drama": 18,
    "Family": 10751,
    "Fantasy": 14,
    "History": 36,
    "Horror": 27,
    "Music": 10402,
    "Mystery": 9648,
    "Romance": 10749,
    "Science Fiction": 878,
    "Thriller": 53,
    "War": 10752,
    "Western": 37
};
const ratings = {
    "UA": "Parental Guidance",
    "A": "Adult",
    "U": "Universal"
};

const posters = [
    "url('/images/Oppenheimer.jpg')",
    "url('/images/Venom.jpg')",
     "url('/images/Penguin.jpg')",
     "url('/images/Mario.jpg')",
     "url('/images/Parasite.jpg')",
     "url('/images/Avatar.jpg')"
];


export { languages, genres, ratings, posters };
