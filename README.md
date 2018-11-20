96*64 schermbreedte
aanmelden met facebook account of met githubaccount 
# Hoe gaan we te werk? 
## opdracht :
### Replace

#### What?

A multiplayer game about painting together on a canvas.
Every player gets to paint 1 pixel every 10 (for example) seconds.
The canvas has a low dpi value so pixel art is encouraged.

#### Why?

Almost 2 years ago, reddit had a project called "place".
The idea was similar, though the delay between filling a pixel where much longer and it only lasted for 1 month.
Here is the final form of the canvas:

From [r/place](https://www.reddit.com/r/place/):
![Final canvas](https://i.redd.it/agcbmqgjn14z.png)

#### How?

The client would receive the whole canvas on loading the document and updates only every second.
When a pixel is colored client-side, a post request is sent.

The server keeps a current state and a history of every change to the canvas.
These transactions include coordinates, color, author and date.

## original idea from place

Place was a collaborative project and social experiment hosted on the social networking site Reddit that began on April Fools' Day 2017. The experiment involved an online canvas of one million (1000x1000) pixel squares, located at a subreddit called /r/place, which registered users could edit by changing the color of a single pixel from a 16-colour palette. After each pixel was placed, a timer prevented the user from placing any pixels for a period of time varying from 5 to 20 minutes.[1]

The experiment was ended by Reddit administrators around 72 hours after its creation, on 3 April 2017.[2] Over 1 million unique users edited the canvas, placing a total of approximately 16 million tiles, and, at the time the experiment was ended, had over 90,000 users viewing or editing it.[3] The Place subreddit was archived on 19 April 2017.

our idea is the same but a bit smaller and you are able to submit your pixel to the led pixel board.

## How will we add facebook accounts?

I'll be using the information on the following link : https://www.socialmediaexaminer.com/how-to-use-facebook-login-on-your-website/
We'll have to make a facebook account for fevelopers.
The app will be sincronized to my private facebook-account because i'm the developer. We have already our app id which is : 503882900117623 .

