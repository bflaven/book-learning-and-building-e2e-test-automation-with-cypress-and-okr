#!/bin/sh
# TO PUSH THE CHANGES
# cd /Users/brunoflaven/Documents/03_git/book-learning-and-building-e2e-test-automation-with-cypress-and-okr/
# ls -l
# sh automate_commit.sh
# CHECK THE SOURCE FILES
# TO GRAB THE NEW CONTENT
# cd /Users/brunoflaven/Documents/03_git/book-learning-and-building-e2e-test-automation-with-cypress-and-okr/
# git pull
### CONFIG ####

# REPO FOR GITHUB
REPO_NAME="/Users/brunoflaven/Documents/03_git/book-learning-and-building-e2e-test-automation-with-cypress-and-okr";

# DESCRIPTION FOR COMMIT
COMMENT="update files";

# GITHUB BRANCH NAME FOR PUSH
GITHUB_BRANCH="main";



### // CONFIG ####


echo "*** Automating Git Add, Commit and Push ***"
# pwd
# ls -l
# add a line
echo
echo "--- variables"
echo

echo $REPO_NAME
echo $COMMENT
echo $GITHUB_BRANCH


# add a line
echo
echo "--- script"
echo
echo "cd $REPO_NAME"
cd $REPO_NAME
echo

# check for status
git status

# for any change just type this command
git add .

# add a commit with a message
git commit -am "$COMMENT"

# hint: push to Github if your branch on Github is main
git push origin "$GITHUB_BRANCH"

# hint: push to Github if your branch on Github is master
# git push origin master

# you can change GitHub in project's settings the name of the branch between master or main





# cd $REPO_NAME


### ---  DONE --- ###
exit 0;