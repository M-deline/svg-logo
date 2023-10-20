# SVG Logo 

## Link to demo/video()
## Overview & Description
This was a challenge to make a SVG Logo using node and using JavaScript. The goal was to make an application in the terminal/command-line that asks users the colors and type of shape they want for a SVG logo and once the user answers everything, the new logo appears in the example folder under the logo.svg file. I used the file and folder structure from the bootcamp description and then I used the project we had just done in class to help with the module.exports to the correct files.

I first started the index.js file for the makeDesign function. I then created different files for the three shapes and then a file to hold the questions that will appear in the terminal. I have another file labeled colorChoices that holds the array for the possible color combinations the user can choose (hexidecimal or the color written out). The shapes.js is the file that tells the application what the class Shape entails and then each file has module.export that way it can be accessed to make the SVG logo. 

I struggled with usng the const inquirer at first. I was trying to use import adn was getting errors until I realized my mistake and then changed it to const inquirer= requirer. The biggest challenge was making sure I had the syntax correctly. I was referencing the websites listed below and it took a few time to make sure the tests came back and created the logo successfully without any error codes.
## Technologies Used
- Node 
- JavaScript
## Credits 
- “Color Hex Color Codes.” Color Hex Codes, www.color-hex.com/. Accessed 18 Oct. 2023.
- “CSS Colors.” W3Schools, www.w3schools.com/cssref/css_colors.php. Accessed 20 Oct. 2023.
- MozDevNet. “Super - Javascript: MDN.” JavaScript | MDN, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super. Accessed 18 Oct. 2023.
- MozDevNet. “Texts - SVG: Scalable Vector Graphics: MDN.” SVG: Scalable Vector Graphics | MDN, developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts. Accessed 10 Oct. 2023.
- “Color Hex Color Codes.” Color Hex Codes, www.color-hex.com/. Accessed 18 Oct. 2023.
- “SVG Namespace.” W3C, www.w3.org/2000/svg. Accessed 19 Oct. 2023.
- “SVG.” Wikipedia, Wikimedia Foundation, 19 Oct. 2023, en.wikipedia.org/wiki/SVG.
- “SVG Tutorial - SVG: Scalable Vector Graphics: MDN.” SVG: Scalable Vector Graphics | MDN, developer.mozilla.org/en-US/docs/Web/SVG/Tutorial. Accessed 10 Oct. 2023.
- user1104092user1104092, et al. “How Can I Create Every Combination Possible for the Contents of Two Arrays?” Stack Overflow, 20 Jan. 2012, stackoverflow.com/questions/8936610/how-can-i-create-every-combination-possible-for-the-contents-of-two-arrays.
- A big thank you to the University of Denver Bootcamp instructors and tutors!
