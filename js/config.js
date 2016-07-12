var config = {
    lang: 'en',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Carrollton, Texas',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'b95df9a4984f948292bb4aa2fb8c4c3b'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'WHERE IS TYREL?',
            'WHAT DID ELLIOT DO?!!',
            'WILL EVIL CORP RISE FROM THE ASHES'
        ],
        afternoon: [
            'YOU ARE MY SUNSHINE',
            'HOPE WORK WASNT TOO BAD!',
            'REST UP DEAR!'
        ],
        evening: [
			'GOODNIGHT BABY BOO',
			'SLEEP TIGHT',
			'YOU ARE AMAZING AND EVERYTHING I COULD ASK FOR'
		]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'calendar-plus-o', 
		//	url: 'https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M'
		},
		{
			symbol: 'soccer-ball-o',
                        url: 'https://calendar.google.com/calendar/ical/tylermonster2%40gmail.com/private-569e1779b002df0240b90361bfae3148/basic.ics',
		//	url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics',
		},
		{
                        symbol: 'calendar-plus-o',
		//	symbol: 'mars',
			url: "https://www.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics",
		},
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
      //  feed: 'http://www.dallascowboys.com/rss/article'
      //  feed: 'http://www.repeatserver.com/Users/tylermonster/news2.xml'
       // feed: 'http://www.repeatserver.com/Users/tylermonster/news.xml'  
   },
}
