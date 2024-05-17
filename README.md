# Cypress_Demo

# Docker
docker build -t cypress-test .
docker run -it cypress-test

# Scripts run command:
test: Run all test suites.
apitest: Run API test suites located in the cypress/e2e/api-tests directory.
uitest: Run UI test suites located in the cypress/e2e/ui-tests directory.
For Example:
npm run test
npm run apitest
npm run uitest


```
UI Test Cases
```

```
Feature: Filter Functionality
Scenario: Verify the Number filter Functionality on Find Bugs Page
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I click the number to show "15" results
Then I should see 15 results displayed on the page
```

```
Feature: Sorting Functionality
Scenario: Verify Best Rating Sorting Functionality on Find Bugs Page
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I click on the Default Sorting Drop Down
Then the "Best Rating" should be displayed
When I select "Best Rating" from the Drop down
Then the Product should be sorted according to Best Rating
```

```
Feature: Product Qnatity
Scenario: Verify Product Quantity Should not be less than 1
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I select "DNK Yellow Shoes" product
Then the URL should contain "/store/dnk-yellow-shoes/"
Then the product quantity should be displayed
When I click on "-" icon
Then the product quantity should not be 0
When I click on Product Quantity input field
When I remove the data
When I enter "0" in input field
When I click on the "ADD TO CART" button
Then the URL should not contain "my-cart/"
```

```
Feature: Post Reply Functionality
Scenario: Verify User should not be able to Post Reply without Name and Email on Product details page
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I select "DNK Yellow Shoes" product
Then the URL should contain "/store/dnk-yellow-shoes/"
When I click on "Post Comment" button
Then the "Error: Please fill the required fields (name, email)." should be displayed
```

```
Feature: Add to Cart Functionality
Scenario: Verify Add to Cart functionality on Find Bugs page
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I click on "ADD TO CART"
Then the "View Cart Product successfully added to your cart." should be displayed
Then the "Cart Icon" should be displayed
Then the "CHECKOUT NOW" button should be displayed
When I click on "CHECKOUT NOW" button
Then the URL should contain "my-cart/"
Then the "SUBMIT PAYMENT" should be displayed
```

```
Feature: Verify Headers
Scenario: Verify Header on Find bugs page
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
Then the "AcademyBugs.com" should be visible
Then the "Examples of Bugs" should be visible
Then the "Types of Bugs" should be visible
Then the "Find Bugs" should be visible
Then the "Report Bugs" should be visible
Then the "Question Icon" should be visible
```

```
Feature: Header Navigation Functionality
Scenario: Verify "Examples of Bugs" header Navigation
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I Click on "Examples of Bugs"
Then the URL should contain "/"
Then the "Examples of Bugs" should be visible and active
Then the "Examples of Bugs" header should be visible
Then the "Discover some examples of real bugs and recreate them yourself." should be visible
```

```
Feature: Header Navigation Functionality
Scenario: Verify "Types of Bugs" header Navigation
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I Click on "Types of Bugs"
Then the URL should contain "/types/"
Then the "Types of Bugs" should be visible and active
Then the "Types of Bugs" header should be visible
Then the "Learn the different types of bugs that commonly occur in websites and apps." should be visible
```

```
Feature: Header Navigation Functionality
Scenario: Verify "Report Bugs" header Navigation
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I Click on "Report Bugs"
Then the URL should contain "/report-bugs/"
Then the "Report Bugs" should be visible and active
Then the "Report Bugs" header should be visible
Then the "Practice creating bug reports by selecting the five practice bugs." should be visible
```

```
Feature: Question Icon Functionality
Scenario: Verify Question Icon Functionality
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I Click on "Question Icon"
Then the "Tour Tip Content Box" should be visible
Then the "Tutorial" should be visible
Then the "Close Icon" should be visible
Then the "Click start to begin the guided site tutorial" should be visible
Then the "Start" button should be visible
When I Click on "Close Icon"
Then the "Tour Tip Content Box" should not be visible
When I Click on "Question Icon"
Then the "Start" button should be visible
When I Click on "Start" button
Then the URL should contain "/"
Then the "Example of Bigs Tour Tip Content Box" should be visible
Then the "Click here to see examples of real bugs" should be visible
```

```
Feature: Page Validation
Scenario: Verify Find Bugs Page
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
Then the "Find bugs" Title should be visible
Then the "Explore a practice test site that has 25 real bugs planted inside." should be visible
Then the "View" text should be visible
Then the "Count Filter" should be visible
Then the "Showing all" text should be visible
Then the "Default Sorting" should be visible
Then the "List of Products" should be visible
Then the "Bugs Icon" should be visible
Then the "Product Name" should be visible
Then the "Product Price" should be visible
Then the "ADD TO CART" button should be visible
Then the "Manage Consent" text should be visible
```

```
Feature: Footer Content
Scenario: Verify Footer Content
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
Then the "U Test Icon" should be visible
Then the "Terms & Conditions" text link should be visible
Then the "Privacy Policy" should be visible
```

```
Feature: Footer Content Navigation
Scenario: Verify Utest Icon footer navigation
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I click on "U Test Icon"
Then the URL should contain "/academy"
Then the "U Test Icon" should be visible
Then the "Hold up. Authorization Required." text should be visible
```

```
Feature: Footer Content Navigation
Scenario: Verify Terms & Condition footer Navigation
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I click on "Terms & Condition"
Then the URL should contain "/terms-and-conditions"
Then the "U Test Icon" should be visible
Then the "Terms of Use for uTest Testers" should be visible
Then the "Terms of Use for uTest Testers content" should be visible
```

```
Feature: Footer Content Navigation
Scenario: Verify Privacy Policy footer Navigation
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I click on "Privacy Policy"
Then the URL should contain "/privacy-policy"
Then the "U Test Icon" should be visible
Then the "Privacy Policy" should be visible
Then the "Effective as of" should be visible
Then the "Last Updated on" should be visible
Then the "Privacy Policy Content" should be visible
```

```
Feature: Footer Content Functionality
Scenario: Verify Manage consent functionality
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I click on "Manage Consent"
Then the "We use cookies to optimize our website and our service: Cookie Policy" should be visible
Then the "Functional only" button should be visible
Then the "Accept Cookies" button should be visible
```

```
Feature: Add To Cart Functionality
Scenario: Add First Available Product to cart
Given I am on "https://academybugs.com/find-bugs/"
Then the URL should contain "/find-bugs/"
When I click on "ADD TO CART"
Then the URL should contain "/store"
Then the "Shop" breadcrumbs should be visible
Then the "Product Name" should be visible
Then the "Product Price" should be visible
Then the "Model Number" should be visible
Then the "Product Quantity" should be visible
Then the "ADD TO CART" button should be visible
Then the "Manifacturer" should be visible
Then the "Social Media Icon" should be visible
Then the "" should be visible
When I click on "ADD TO CART" button
Then the URL should contain "/my-cart"
Then the "CHECKOUT DETAILS" breadcrumbs should be visible
Then the "Product, PRICE, QUANTITY TOTAL" should be visible
Then the "Remove Icon for the Product" should be visible
Then the "Product Name" should be visible
Then the "Product Price" should be visible
Then the "Increment" button should be visible
Then the "Decrement" button should be visible
Then the "Product Quantity" should be visible
Then the "Total Price" should be visible
Then the "Update" button should be visible
Then the "CART TOTALS" should be visible
Then the "Cart Subtotal" should be visible
Then the "Shipping" should be visible
Then the "Grand Total" should be visible
Then the "CHECKOUT" button should be visible
Then the "CONTINUE SHOPPING" button should be visible
```