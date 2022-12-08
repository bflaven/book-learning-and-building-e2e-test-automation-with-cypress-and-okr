# Learning and Building E2E test automation with Cypress & OKR

## 1. Book abstract

**Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality**

Remote work, which is now definitely the norm, requires to be more cautious than ever on an application's quality management. You absolutely must build security and trust within your team and outside especially if you put into production at a high release rate e.g 1 per week, 2 per day or even 10 per day.
By the way, if you're making 10 releases a day, you're probably patching! So, there's something wrong with your quality management! Emmanuel Theysmeir said once: "There is always a lesson to be learned both from good and bad numbers! The real issue remains the interpretation."


The book's purpose is very pragmatic, I believe this is not a programming book as I don't dwell on coding or programming explanations! Even though you will see and hope learn some code. I strongly advise you to get also proper information on the official documentation on Cypress website to deepen your knowledge or search on stackoverflow.com or GitHub.com


My intent for this book was definitely to define from A to Z an applied strategy to quality management with proven concepts from a P.O point of view. So, we will go from OKRs strategy applied to Q/A to a concrete implementation with the help of Cypress.

_In the table of content, you can see that there are 27 HANDS UPs. This gimmick act like an "Andon" in the Lean methodology. If you are facing a problem, then fix it do not wait._


**The book is available for sale on Amazon: [https://www.amazon.com/dp/B0BP216HCW/](https://www.amazon.com/dp/B0BP216HCW/)**

[![Learning and Building E2E test automation with Cypress & OKR](cover_book-learning-and-building-e2e-test-automation-with-cypress-and-okr-website_400x640.png)](https://www.amazon.com/dp/B0BP216HCW/)

**General Infos**

```bash

Title :: Learning and Building E2E test automation with Cypress & OKR
Description :: Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality
Keywords :: E2E, strategy, management, Cypress, OKR, Objectives Key Results, agile, PO, Scrum, testing
Dedication :: To Prisca Jore 

```

## 2. Requirements

I am on a macOS , so  am using the macOS Terminal. Even though, all the installs required are described in the book. I have extracted it for the understanding of the coming Youtube videos,  all the command lines to reproduce exactly my development environment.


```bash
# 1. INSTALL HOMEBREW AND XCODE

# installing Xcode's Command Line Tools
xcode-select --install
# installing and Setting Up Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/
install/master/install)"


# 2. INSTALL NODE.JS 

brew doctor

# install node with homebrew
brew install nodejs

# check the install node version + NPM (Node Package Manager) version
node -v
npm -v

# should output v18.0.0 for instance depending of your version
npx -v
# 8.6.0
# should output 8.6.0 for instance depending of your version


# eventually make some updates
brew update
brew upgrade nodejs


# 3. INSTALL CYPRESS

# go to the main directory
cd /Users/brunoflaven/Documents/01_work/cypress_book/

# create your testing directory
mkdir e2e_testing_cypress_v9

# go to the testing directory
cd e2e_testing_cypress_v9
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v9/


# install generate the package.json
# generated a package.json and node_modules directory
npm init 

# fill the package.json
# description: This attempt made for E2E-CYPRESS-WP, runnings cypress tests on WP  for a testing for PO. Better generated a package.json and node_modules directory
# keywords: cypress, attempt, PO, E2E-CYPRESS-WP, e2e-cypress-wp
# author: bflaven
# git: https://github.com/bflaven/

# install old version 9.7.0
npm install --save-dev cypress@9.7.0


# launch Cypress once installed
npx cypress open

```

**Official documentation for Cypress**
For this time, the official documentation is great, and it is a particularly useful resource up to date with videos, notable examples etc...

- Cypress Guides  - [https://docs.cypress.io/guides/overview/why-cypress](https://docs.cypress.io/guides/overview/why-cypress)
- Cypress Api Documentation - [https://docs.cypress.io/api/table-of-contents](https://docs.cypress.io/api/table-of-contents) 



**WordPress, LAMP & Guinea Pig**
For the other tools used, I leverage on WordPress as I chose it as a CMS to act as a guinea pig in the Cypress testing experiment.
The WordPress  is installed locally. So, It requires a LAMP stack, I invite you also to use some tools like XAMPP (LAMP environment for WordPress) and also a text editor to enable you to edit code. You can also used MAMP.


- MAMP - [https://www.mamp.info/](https://www.mamp.info/)
- XAMPP - [https://www.apachefriends.org/](https://www.apachefriends.org/) 

**Choice for the text editor**
I could have made an entire chapter pros/cons for each text editor, but I leave it to the web! There are thousands of not-so-interesting 
comparisons. In my case, I am both using Visual Studio Code and 
Sublime Text! But feel free to choose whatever you want. As the latin 
phrase "de gustibus non est disputandum", there is no disputing about 
taste and more over for a text editor. So let's move on!

- Sublime Text - [https://www.sublimetext.com/](https://www.sublimetext.com/)
- Visual Studio Code  - [https://code.visualstudio.com/](https://code.visualstudio.com/) 



## 3. Table of Contents

<ul type="square">
<!-- intro -->
<li><b>A_FOREWORD</b></li>
	<ul type="none">
    	<li>Foreword</li>
    </ul>
<li><b>B_Why_WordPress?</b></li>	
	<ul type="none">
		<li>Choosing WP</li>
		<li>HANDS_UP_1: What is my testing environment (WP, plugins, theme, local address, languages...)?</li>
	</ul>
<li><b>C_Guidelines_and_Conventions_used_in_this_book?</b></li>
<li><b>D_What_Can_You_Expect_to_Learn?</b></li>
<li><b>E_Why_Cypress?</b></li>
<li><b>F_Who_is_this_book_for?</b></li>

<!-- part_I -->
<li><b>Part_I_Build_a_testing_strategy_with_OKR</b></li>
	<ul type="none">
		<li>A_Build_a_testing_strategy_with_OKR</li>
		<li>Think strategic</li>
		<li>1. The importance of Testing and Quality Assurance Strategy</li>
		<li>2. A quick definition of OKRs</li>
		<li>3. OKRs Matrix</li>
		<li>3.1.  OKRs Matrix: [objective]</li>
		<li>HANDS_UP_2: What is SMART?</li>
		<li>3.2. OKRs Matrix: [these key results]</li>
		<li>B_WHAT_ELSE_2_KNOW_on_OKR?</li>			
	    <li>4. OKRs examples for Q/A and to define a testing strategy</li>
	    <li>HANDS_UP_4: ANDY GROVE LEGACY</li>
	    <li>HANDS_UP_5: A little historical reminder</li>
	    <li>HANDS_UP_6: Committed vs. Aspirational OKRs</li>		
		<li>C_Last_advices_for_OKRs</li>
		<li>D_PERSONAL_DIGRESSION_on_OKR</li>
		<li>HANDS_UP_7: KPI, KR, CSF... Management components</li>
	</ul>


<!-- Part_II -->
<li><b>Part_II_requirements_for_CYPRESS</b></li>

<!-- Part_III -->
<li><b>Part_III_Install Cypress 9 e2e_testing_cypress_v9 (install_1)</b></li>
		<ul type="none">
		    <li>HANDS_UP_8: Where does the tests live?</li>
		    <li>HANDS_UP_9: What kind of names can I give to my test files?</li>
		    <li>1. Create your first test (001_wp_front_home_simple.spec.js)</li>
		    <li>HANDS_UP_10: Where do my website made with wp live locally?</li>
		    <li>HANDS_UP_11: Where do I tell Cypress to test my local website made with wp?</li>
		    <li>HANDS_UP_12: Customize Visual Studio Code (VCS) if it your favorite editor </li>
		    <li>2. Complete your first test (001_wp_front_home_simple.spec.js)</li>
		    <li>3. Add comment and log to your first test (002_wp_front_home_simple.spec.js)</li>
		    <li>4. Extend the Cypress configuration file with some general options (cypress.json)</li>
		    <li>5. Introduce the environment notion in the Cypress configuration (cypress.json)</li>
		    <li>HANDS_UP_13: Naming your variables</li>
		    <li>HANDS_UP_14: Multiple objects in your json config file</li>
		    <li>HANDS_UP_15: Remove the example testing files given by Cypress</li>
		    <li>6. The famous logging testing (006_wp_admin_login_simple.spec.js)</li>
		    <li>HANDS_UP_16: Find the css selector of the xpath selector on a webpage</li>
		    <li>7. Few guidelines for optimization and maintenance (007_wp_admin_login_advanced.spec.js)</li>
		    <li>8. More guidelines for optimization and maintenance</li>
		    HANDS_UP_17: Give an filename with for each config file --config-file</li>
		    <li>9. Reorganize your files or using node.js ability with modules</li>
		    <li>HANDS_UP_18: Briefly what are modules in Node.js? What can you do with these modules?</li>
		    <li>HANDS_UP_19: Briefly what are JavaScript functions in JavaScript?</li>
		    <li>10. Reorganize your files or using functions in support/commands.js :  use functions.</li>
		    <li>11. Extending backend testing: create post, create page...etc</li>
		    <li>HANDS_UP_20: Test description, tagging, index...etc</li>
		    <li>HANDS_UP_21: Fixing the upload issue in XAMPP</li>
		    <li>12. Order your custom commands by files grouped by typology e.g content type creation, UX, tagging, navigation....etc</li>
		    <li>HANDS_UP_22:  What are Classes?</li>
		    <li>13. Introducing a JavaScript Class in Cypress to handle more use cases with less complexity</li>
		    <li>HANDS_UP_23: How to perform conditional statements in JavaScript?</li>
		    <li>HANDS_UP_24: How to build a scraper with BeautifulSoup and Selenium to help to parse my backend or frontend ?</li>
		    <li>14. Extra stuff_i: Load fixtures with the help of MySQL in WP</li>
		    <li>15. Extra stuff_ii: Using gherkin feature in Cypress with the help of cypress-cucumber</li>
		    <li>16.  Generate HTML reports allure and mochawesome</li>
		    <li>17. Add some commands to package.json</li>
		    <li>18. Add screen captures to some of your tests</li>
		    <li>19. Managing loops in javascript</li>
		    <li>20. Filter on tags</li>
		    <li>21. API testing</li>
		    <li>22. Using Cypress Studio (required Cypress below v10)</li>
		    <li>23. Implement Page Objects in Cypress</li>
		    <li>HANDS_UP_25: Need an extra package "cypress-real-events"</li>
		    <li>24. Some other advanced usage with Fixtures (sample_testdata_usernames.json, 021_wp_create_user_with_fixtures.spec.js)</li>
		    <li>25. An extra test, multiple login for multiple role (020_wp_mutiple_login_role.spec.js)</li>
		    <li>26. Starting with TypeScript in Cypress</li>
		</ul>
<!-- Part_IV -->
<li><b>Part_IV_Installing and migrating to Cypress 10 (e2e_testing_cypress_v10)</b></li>
		<ul type="none">
		    <li>1. Install the Cypress last version</li>
		    <li>2. Configure Cypress 10</li>
		    <li>3. Quick insight on the new directory tree and config file for Cypress 10</li>
		    <li>4. Transfer your testing stuff from the previous E2E suite</li>
		    <li>5. Keep on transfering your stuff from the previous suite!!!</li>
		    <li>HANDS_UP_26: Use programming to manipulate multiple files</li>
		    <li>6. Finish the cypress.config.js configuration</li>
		    <li>7. Finish the Cypress 10's implementation</li>
		    <li>8. Change the specific config file</li>
		    <li>9. Add npm command in the file package.json</li>
		    <li>10. Few extra things:  define browser, define retries when test failed...</li>
		</ul>
<!-- Part_V -->
<li><b>Part_V_Cypress Virtualization with Docker</b></li>
		<ul type="none">
		    <li>1. What is Docker?</li>
		    <li>HAND-HANDS_UP_27: to add the localhost inside the cypress</li>
		    <li>2. Using docker :: 2 cases</li>
		</ul>
<!-- Part_VI -->
<li><b>Part_VI_Conclusion</b></li>
<!-- Part_VII -->
<li><b>Part_VII_Appendix: Appendix A. Installing new packages to extend Cypress capabilities</b></li>
<!-- Part_VIII -->
<li><b>Part_VIII_Resources</b></li>
<!-- Part_IX -->
<li><b>Part_IX_Lexicon</b></li>
<!-- Part_X -->
<li><b>Part_X_Acknowledgments</b></li>
</ul>





## 5. Directory tree for this repository


*This book comes with a bunch of code that correspond to chapter or specific editorial content such as HAND_UP extracted from the book "Learning and Building E2E test automation with Cypress & OKR".*


```bash
001_e2e_testing_cypress_v9
002_e2e_testing_cypress_v10
003_e2e_testing_cypress_typescript_v9
004_migration_files_cypress_10
005_automation_e2e_testing_cypress
006_docker_cypress
007_source_sql_wp_install_local
008_write_a_javascript_functions_and_class
009_selenium_web_scraping
010_cheat_sheet_models
```


## 6. Git reminder

**In 2022, I always forget how to push on GitHub**

```bash
# GIT 2022

# get the remote directory if needed
git clone https://github.com/bflaven/book-learning-and-building-e2e-test-automation-with-cypress-and-okr.git


# hint: go to the directory
cd /Users/brunoflaven/Documents/03_git/book-learning-and-building-e2e-test-automation-with-cypress-and-okr


# Create an empty Git repository or reinitialize an existing one
git init



# hint: know your branch
git branch


# hint: check for status
git status

# hint: for any change just type this command
git add .

# hint: add a commit with a message
git commit -am "remove repo"
git commit -am "add videos"
git commit -am "add repo"
git commit -am "add usecase"
git commit -am "add files"
git commit -am "add massive files"
git commit -am "update files"
git commit -am "update readme"
git commit -am "add repo and add readme"
git commit -am "add files and update readme"
git commit -am "add nft file examples in readme"

# hint: push to Github if your branch on Github is main
git push origin main

# hint: push to Github if your branch on Github is master
git push origin master

# you can change GitHub in project's settings the name of the branch between master or main



```





