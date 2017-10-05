# Website Performance Optimization portfolio project

## Steps to Run the Application

To run this application:
1. Download the repository at https://github.com/patrickjbehrens/frontend-nanodegree-mobile-portfolio.
2. Open index.html in your browser.
3. Grunt, along with the grunt-responsive-images task, were used to optimize images.
  * To install Grunt, follow the instructions at https://24ways.org/2013/grunt-is-not-weird-and-hard/.
  * To install the grunt-responsive-images task, follow the instructions at https://24ways.org/2013/grunt-is-not-weird-and-hard/.


## Optimizations Made to the project

### "index.html" File
* Placed the screen CSS inline on index.html (vs in a separate CSS file).
* Optimized images using grunt-responsive-images.
* Used webfontloader to load fonts.
* Added 'media="print"' to the print css link.
* Added async to the Google Analytics script.


### "views/js/main.js" File
* Updated the changePizzaSizes function (which controls the pizza resize slider) to remove the forced synchronous layout and unnecessary code.
* Updated the updatePositions function (which moves the background pizzas during scrolling) to remove the forced synchronous layout.
* Updated the event listener that generates background sliding pizzas (and calls the updatePositions function) to create only the number of pizzas needed (rather than a fixed 200) and to the document query out of the for loop.
* Updated the function that creates the background sliding pizzas when the page loads, moving the DOM query outside of the for loop and reducing the number of pizzas created from 100 to 32.


### "pizza.html" File
* Optimized images using grunt-responsive-images.
