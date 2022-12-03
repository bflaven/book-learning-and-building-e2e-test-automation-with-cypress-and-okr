#!/bin/bash


# cd /Users/brunoflaven/Documents/01_work/cypress_book/automation_e2e_testing_cypress/
# sh launch_cypress_all_1.sh

# CONFIG ####
REPO_NAME="/Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v10";


# npm run cy:run:CONF:EN:CHROME
# npx cypress run --headless --browser chrome --env LANG="en_EN" --config-file "en_EN.conf.env.config.js" --config video=false,screenshotOnRunFailure=false,chromeWebSecurity=false

# npm run cy:run:CONF:EN:CHROMIUM
# npx cypress run --headless --browser chromium --env LANG="en_EN" --config-file "en_EN.conf.env.config.js" --config video=false,screenshotOnRunFailure=false

# npm run cy:run:CONF:EN:FIREFOX
# npx cypress run --headless --browser firefox --env LANG="en_EN" --config-file "en_EN.conf.env.config.js" --config video=false,screenshotOnRunFailure=false

# be sure to set the language by default in English (en_EN)
COMMANDS=("npm run cy:run:CONF:EN:CHROME" "npm run cy:run:CONF:EN:ELECTRON")

# be sure to set the language by default in Spanish (es_ES)
# COMMANDS=("npm run cy:run:CONF:ES:CHROME" "npm run cy:run:CONF:ES:ELECTRON")

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
echo "--- script"
echo "cd $REPO_NAME"
cd $REPO_NAME

# DEBUG
# ls -l
for c in "${COMMANDS[@]}"
do
    echo "\n --- $c is launched"
   	$c
done




### ---  DONE --- ###
exit 0;