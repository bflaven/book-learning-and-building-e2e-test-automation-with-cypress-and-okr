# Learning and Building E2E test automation with Cypress & OKR

## 1. Book abstract

**Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality**


__General Infos__

```

Title :: Learning and Building E2E test automation with Cypress & OKR
Description :: Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality
Keywords :: E2E, strategy, management, Cypress, OKR, Objectives Key Results, agile, PO, Scrum, testing
Dedication :: To Prisca Jore 

```



## 2. Table of Contents

<ul type="square">
<!-- intro -->
<li><b>A_FOREWORD</b></li>
    Foreword
<li><b>B_Why_WordPress?</b></li>
	<ul type="circle">
	    <li>Choosing WP</li>
		<li>HANDS_UP_1: What is my testing environment (WP, plugins, theme, local address, languages...)?</li>
	</ul>
<li><b>C_Guidelines_and_Conventions_used_in_this_book?</b></li>
<li><b>D_What_Can_You_Expect_to_Learn?</b></li>
<li><b>E_Why_Cypress?</b></li>
<li><b>F_Who_is_this_book_for?</b></li>

<!-- part_I -->
<li><b>Part_I_Build_a_testing_strategy_with_OKR</b></li>
	<ul type="circle">
		<li><b>A_Build_a_testing_strategy_with_OKR</b></li>
			<ul type="none">
			    <li>Think strategic</li>
			    <li>1. The importance of Testing and Quality Assurance Strategy</li>
			    <li>2. A quick definition of OKRs</li>
			    <li>3. OKRs Matrix</li>
			    	<ul type="none">
			    	<li>3.1.  OKRs Matrix: [objective]</li>
			    	<li>HANDS_UP_2: What is SMART?</li>
			    	<li>3.2. OKRs Matrix: [these key results]</li>
			    	</ul>
			</ul>
		<li><b>B_WHAT_ELSE_2_KNOW_on_OKR?</b></li>
			<ul type="none">
		    <li>4. OKRs examples for Q/A and to define a testing strategy</li>
		    <li>HANDS_UP_4: ANDY GROVE LEGACY</li>
		    <li>HANDS_UP_5: A little historical reminder</li>
		    <li>HANDS_UP_6: Committed vs. Aspirational OKRs</li>
			</ul>
		<li><b>C_Last_advices_for_OKRs</b></li>
		<li><b>D_PERSONAL_DIGRESSION_on_OKR</b></li>
			<ul type="none">
		    <li>HANDS_UP_7: KPI, KR, CSF... Management components</li>
			</ul>
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





**Directory tree for this repository**
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


## 3. Git reminder

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

# hint: push to Github if your branch on Github is master or main if it main
git push origin main

```





