#!/usr/local/bin/python3
# -*- coding: utf-8 -*-
#


# cd /Users/brunoflaven/Documents/01_work/cypress_book/automation_e2e_testing_cypress/
# python shuffle_launch_cypress_full_1.py

import os
import sys
import random
import time


# Sleep function is using seconds so it will generate a random interval within 1 hour.
# timeDelay = random.randrange(0, 3600)
# timeDelay = random.randrange(0, 15)
# print("timeDelay :: ", timeDelay)
# To launch in between the npx command 
# time.sleep(timeDelay)


# Set the correct values for your path and script
#VALUES
my_path = '/Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v10/'



# print('\n ORIGINAL')
"""



"""

full_command_file_names = [
'npm run cy:run:CONF:EN:ELECTRON',
'npm run cy:run:CONF:EN:CHROME'
]

# print("Original list:", file_names)
# print('\n SHUFFLE')

# No random
# random.shuffle(full_command_file_names)

# sprint("List after first shuffle:", file_names)

# print('\n')
# for file_name in file_names:
#     print("python :", file_name)

#print("\n--- Basic Automation with Python ---\n")
#print("--- Python version "+sys.version+" ---\n")


os.chdir(my_path)
print(os.getcwd())



for file_name in full_command_file_names:

	 print("\n")
	 print("+ === DEBUG " + file_name +" ") 
	 # DO IT
	 os.system("" + file_name +"")
	 timeDelay = random.randrange(0, 5)
	 print("\n=== TIMEDELAY " + str(timeDelay) + " === ")
	 # To launch in between the npx command 
	 time.sleep(timeDelay)
# Sleep function is using seconds so it will generate a random interval within 1 hour.
# time.sleep(3)
# timeDelay = random.randrange(0, 3600)

