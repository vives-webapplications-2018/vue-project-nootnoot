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