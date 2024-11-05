import React from "react";

const languages = {
    "English": "en",
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
const runtimes = {
    "Short (< 30 min)": { min: 0, max: 30 },
    "Feature (30 - 60 min)": { min: 30, max: 60 },
    "Standard (60 - 90 min)": { min: 60, max: 90 },
    "Long (90 - 120 min)": { min: 90, max: 120 },
    "Epic (> 120 min)": { min: 120, max: Infinity }
};

const userRatings = {
    1: 1,   // Very Poor
    2: 2,   // Poor
    3: 3,   // Fair
    4: 4,   // Good
    5: 5,   // Average
    6: 6,   // Satisfactory
    7: 7,   // Good
    8: 8,   // Very Good
    9: 9,   // Excellent
    10: 10  // Outstanding
};

const years = {
    1970: 1970,
    1971: 1971,
    1972: 1972,
    1973: 1973,
    1974: 1974,
    1975: 1975,
    1976: 1976,
    1977: 1977,
    1978: 1978,
    1979: 1979,
    1980: 1980,
    1981: 1981,
    1982: 1982,
    1983: 1983,
    1984: 1984,
    1985: 1985,
    1986: 1986,
    1987: 1987,
    1988: 1988,
    1989: 1989,
    1990: 1990,
    1991: 1991,
    1992: 1992,
    1993: 1993,
    1994: 1994,
    1995: 1995,
    1996: 1996,
    1997: 1997,
    1998: 1998,
    1999: 1999,
    2000: 2000,
    2001: 2001,
    2002: 2002,
    2003: 2003,
    2004: 2004,
    2005: 2005,
    2006: 2006,
    2007: 2007,
    2008: 2008,
    2009: 2009,
    2010: 2010,
    2011: 2011,
    2012: 2012,
    2013: 2013,
    2014: 2014,
    2015: 2015,
    2016: 2016,
    2017: 2017,
    2018: 2018,
    2019: 2019,
    2020: 2020,
    2021: 2021,
    2022: 2022,
    2023: 2023,
    2024: 2024
};





export { languages, genres, ratings, posters, runtimes, userRatings, years };
