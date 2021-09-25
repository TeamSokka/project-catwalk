# Project Catwalk
![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)


<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot1]
<!-- ![Product Name Screen Shot][product-screenshot2]
![Product Name Screen Shot][product-screenshot3]
![Product Name Screen Shot][product-screenshot4] -->

The objective Front End Capstone was to deliver a fully functional e-commerce web application that meets the specifications and requirements outlined by project stakeholders.

Our team of four worked together on a single code base by dividing up the work among team members but working collaboratively to produce a single front end application. We integrated our front end with the existing API for the product, and demonstrate our working application at the end of the project timeline.

Our team operated in an Agile methodology; we conducted group reflections and followed the Feature Branch Workflow while using Pull Requests to merge all of your features.

### Built With
* [React](https://reactjs.org/)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/http://expressjs.com/)
* [Axios](https://axios-http.com/docs/intro)
* [SCSS](https://sass-lang.com/documentation)
* [Webpack](https://webpack.js.org/)

### Installation
To get a local copy up and running follow these simple example steps.

1. Fork and clone this repo, then open two terminal tabs and navigate to the root directory.
   ```sh
   git clone https://github.com/your_username_/project-catwalk.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

3. Enter your API in `config.js`
   ```JS
   module.exports = {
     TOKEN: 'ENTER YOUR GITHUB TOKEN'
   };
   ```

4. In one of the two separate terminal tabs, run the following script:
   ```
    npm start
   ```

5. In the second terminal tab run:
   ```
     npm run react-dev
   ```

6. Open localhost:3000 in the browser.


## Product Overview
The Product Overview widget displays images and a description of the product based on a provided product ID, with options to view additional images, select alternate styles, and add the item to the user's cart.
* The Image Gallery allows the user to cycle through images using arrow buttons or to select a thumbnail to view a new image. The user can also cycle through the available thumbnails using up and down arrows in the thumbnail list.
   * When hovering over the image, the cursor becomes a "zoom-in" magnifying glass. Clicking here will enlarge the image to Expanded View.
   * In Expanded View, the user can still cycle through images using arrow buttons or select a new image to view using dot icons along the side in lieu of thumbnails.
* The product information to the right shows:
   * the product's category, name, slogan, and description
   * the original and sale price, if applicable
   * the average star rating for the product
   * available styles of the product as selectable thumbnails
* The Add to Cart menu allows the user to make selections and add the item to the user's cart.
   * The size must be selected first in order to show the available quantity in the quantity selector.
   * If the user clicks the "Add to Cart" button before selecting a size, the size selector opens.
   * If the item is out of stock in a particular size or style, the drop-down menus change accordingly.
   * Clicking "Add to Cart" after selections have been made makes a POST request to the API using the SKU number for that size and style.
      (Note: Since the API only accepts the SKU number as a parameter, the selected quantity determines how many times the request is made.)

## Related Products & Outfit Creations
Related Products section displays a list of products specific to the client's current selected product. This list will change depending on the product displays in the product detail section above.
* By clicking the star icon in the top right corner, a user will be able to see the comparison of the product and the product selected using the star icon
* By clicking the information section on the card, a user will be able to change the current product details

Outfit Creation section will display a list of products a user favors to create a look personalized by themselves.
* By clicking the '+ Add to Outfits' button to add a product to the Outfit list
* Users can add endless amounts of items to their list
* When an item is added to the list, an outfit card will have an X icon at the top left corner where a user can remove that item from their list

## Questions & Answers
Questions and Answers section displays all the questions asked by the user, and the answers associated with the questions for the product currently being viewed.
* By default, there will be 4 questions displayed, with a 'More Answered Questions' button that, when clicked, will display 2 additional questions. This button will only display when there are more than 4 questions for the given product, and will disappear when all questions are displayed.
* By default, there will be 2 answers displayed for each question, with a 'Load More Answers' button that, when clicked, will display all the answers associated with the question. This button will only display when there are more than 2 answers for the given question, and will change to 'Collapse Answers'.

Helpfulness
* Each question and answer has a helpful section that shows a count of how many users believed this question or answer was helpful.
* If the user believes this question or answer was helpful, and would like to upvote, they can click the corresponding 'Yes' button, and this will increment the count by 1. This 'Yes' is limited to 1 click per session.

Add Question/Answer
* Every user has the ability to ask a question on the specific product. They can access this functionality by clicking the 'Add Question +' button on the bottom of this section, and a modal will pop up. This modal will have required fields that need to be filled in order to post a valid question on the page.
* Additionally, every user has the ability to answer any question asked for the given product. To do this, the user can click the 'Add Answer' button on the right of each question. Clicking this button will then summon a modal that will have required fields for the user to fill out.
* Once a question or answer is posted into the system, the browser will immediately render the new item onto the screen.

Search Bar
* This search bar will start filtering the questions based on the user's input after 3 characters are typed into the search.
* When the search bar is empty, or when the user clears the search field, the questions and answers list with revert back to normal.

## Ratings and Reviews
Ratings and Reviews displays dynamically rendered client reviews and their ratings metadata for the selected product according to product ID through RESTful API requests.

Star Filtration
* The star filtration functionality is designed to retrieve reviews of specific star ratings. Upon clicking each star rating breakdown, the current star filtration is displayed with a clear-all filter button.

Review List
* The review list is a scrollable list of reviews with a More Reviews button that renders two reviews at a time and will be removed from the screen when all reviews are displayed.
* Each review tile has a helpfulness Yes button which increments and a report No button which will remove the review from the displayed review list

Review Submission
* Review submission form with error validation checking for inputs and star ratings. Upon submission, a RESTful POST API request is sent to the server
* On the review submission form, the form dynamically renders characteristics retrieved from metadata specific to the product being viewed

Total Reviews Sorting
* Total reviews are dynamically updated according to the reviews displayed on the screen.
* The Review List can be sorted by Relevant, Newest, and Helpful; the sort selection will rerender the review list according to the selected sorted option

<!-- CONTACT -->
## Team Members
* Andy Fang - [https://github.com/andeezy](https://github.com/andeezy)
* Derek Samms - [https://github.com/Alfendor](https://github.com/Alfendor)
* John Fa - [https://www.linkedin.com/in/johnfa/](https://www.linkedin.com/in/johnfa/)
* Stormi Hashimoto - [https://www.linkedin.com/in/stormikph](https://www.linkedin.com/in/stormikph)

Project Link: [https://github.com/TeamSokka/project-catwalk](https://github.com/TeamSokka/project-catwalk)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot1]: image/image1.png
[product-screenshot2]: image/image2.png
[product-screenshot3]: image/image3.png
[product-screenshot4]: image/image4.png


