#Blog Entry 6.1

For this assignment I wanted to make alittle game in which a bunch of balls bounced all around the screen off eachother and off obstacles, and the player had to click them all to make them disappear. That proved to be a little too much for my level of understanding at the beginning of the projet. What I ended up is one ball that eliminated randomly generated obstacles when they came in contact. 

I started by generating my obstacles. My thoughts by starting here were to have my variables for their dimensions and then apply those to the enemies. I knew the variables of the objects that need to be interacted with were sides 'a,b,c,d' of each rectangle object. The obstacles are part of a for loop grid similar to the one we made in class. However they are set to only appear when a randomizer lands on an individual specified value: I used 16, giving bricks in the grid a 1/16 chanch to be visible and have properties. The only bricks visible are the ones the randomized assigns '0'. The constructor is located in a .js file called "obstacles," then referenced in the for loop.

Then I needed my enemies

I started by making one in another .js file called "Bouncey Ball." This contains a constructor method for a ball restricting it to bounce within the viewport. I started trying to make the ball bounce off the bricks in the constructor, then I realized I didn't have a solid grasp on how to call my constructor methods once I had them written. I put a pause on making my brick collision in the constructor to figure this out. 

I was stuck for about two days trying to figure out what I was doing wrong. Turns out, as we saw in class, I was using improper syntax for calling my bouncey ball object. Once I got that figured out, I also realized I didn't have any idea how to really work with arrays as variables. So I've built my brick-ball collision function in my sketch function. This was mainly so I could grapple with arrays as variables doing a very complex thing in a somewhat comfortable setting. I will try to move that part into one of my constructor files at a later date. 


