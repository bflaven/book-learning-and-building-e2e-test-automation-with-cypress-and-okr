#!/bin/bash


# cd /Users/brunoflaven/Documents/01_work/cypress_book/automation_e2e_testing_cypress/
# sh launch_cypress_full_1.sh

# CONFIG ####
REPO_NAME="/Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v10";


# COMMAND="npx cypress open --env LANG="en_EN" --config-file "en_EN.conf.env.config.js" --config video=false,screenshotOnRunFailure=false";

# COMMAND="npx cypress run --headless --browser chrome --env LANG="en_EN" --config-file "en_EN.conf.env.config.js" --config video=false,screenshotOnRunFailure=false,chromeWebSecurity=false";

COMMAND="npm run cy:run:CONF:EN:CHROME";

echo "*** Cypress :: Automating testing ***"
# pwd
# ls -l
# add a line
echo
echo "--- variables"
echo

echo $REPO_NAME
echo $COMMAND


# add a line
echo
echo "cd $REPO_NAME"
echo "--- script"
echo
cd $REPO_NAME

# DEBUG
# ls -l
# echo $COMMAND

$COMMAND


### ---  DONE --- ###
exit 0;



