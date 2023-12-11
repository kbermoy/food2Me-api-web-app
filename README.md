# food2Me-api-web-app
food2Me is a web application that searches resturants near you, by using a public api url from rapidapi.com
- This project purpose is to apply my knoweldge on using API's on frontend projects
- Currently, the deployed product does not have the function to set a specific range of miles: this is what I'll be working on next
- The deployed website also does not have the function to search by a specific state or city: this is what I'bb be working on nect

## Technologies Used
- HTML/CSS: to set up web design and structure
- JavaScript: fetch from the api url
- Git: for version control

## What I struggled with
- During the design of the input range (the slider to change the miles range), I had a hard time stying the slider and receiving the actual value from the slider
- While dealing with the response from the request of fetching the api, I found myself having a difficult time actually accessing the data. I used async functions to await the fetch, and it was hard for me to get out of the pending state of the promise
- When I used .json() to make the response of the fetch readable to the frontend, it returned an object of the data. During this time, I found myself struggling with accessing properties from the returned Object

## What I learned 
- I learned about the --webkit property in css, which gave me the ability to change the default style of the input slider
- I learned that I was able to receive the actual value from the miles slider by just setting a min and max attribute to the input element, and accessing the value using the .value
- After multiple tries of changing the pending state of a promise to a resolved phase, I realized that my logic was correct and rather I had a few spelling incorrections
