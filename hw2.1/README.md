#Blog Entry - Assignment 2.1

      This week I started with an idea to make a complex photoshop-style scatter brush. My thinking here was to randomize a shape's placement relative to the mouse as well as the shape's dimensions and size themselves. However some of those concepts were beyond me.
  
    Doing this assignment I achieved a cascading array of ellipses changing color and size. They ended up appearing chaotic, yet methodical to me. The color palette helped with this a lot. I also made two flashing, slightly curved, flashing, rectanglur bars parallel to one another; they were actually 4x canvas height ellipses. I also managed to calculate proper placement for to bordering red rectangles.
  
    When designing the bordering rectangles I wanted them to fade over time. I tried calculating an opacity diminishing variable for the alpha value of these rectangles. However I realize now that redrawing the shape every loop of the draw function leads to zero visible opacity change. Once the rectangle is drawn, we're only redrawing on it with less opacity which results in an indefinitley visible shape. Solutions I tried included a boolean value: I realized this isn't really a proper usage of a boolean function. However nowi think I could have solved the problem with a background-colored, identically-sized shape written into the draw function just before my fading object. 
    
    I also tried to do some work with object variables. I had assigned object variables col.r, col.g, col.b. P5.js would never let me assign the col.r value. I believe I set it only to extreme values (0, 255) and it would never read it. I would love a review of how to work with objects. 
  
