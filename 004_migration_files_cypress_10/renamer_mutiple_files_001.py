#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
/**
This file is part of the book package: "Learning and Buiding E2E test automation with Cypress & OKR. Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality"
*
* @more
* Blog :: https://flaven.fr/
* Amazon :: https://amzn.to/2WQbRpA
* Github :: https://github.com/bflaven
* Youtube :: https://bit.ly/2WPlpAU
*
*
 *
 * (c) Bruno Flaven <info@flaven.fr>
 * 
 * Intended to Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality
 *
 * @package Cypress, OKR, WordPress Testing 
 * @subpackage FRONTOFFICE & BACKOFFICE
 * @since Cypress: cypress@9.7.0, node: v18.0.0, WordPress: wordpress-6.1.1, npx: 8.6.0

 */

[env]
# Conda Environment
# NO CONDA ENV

conda create --name web_scraping_selenium python=3.9.7
conda info --envs
source activate web_scraping_selenium
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/01_work/cypress_book/migration_files_cypress_10/

[file]
python3 renamer_mutiple_files_001.py


# do not use python 2
python --version

#  use python 3
python3 --version

[required]
# install

#  do not use pip 2
pip --version

#  do not use pip 3
pip3 --version

# other module
pip3 install sys
pip3 install os
pip3 install selenium
pip3 install matplotlib
pip3 install seaborn

# update conda if needed by running
# NO CONDA ENV
conda update -n base -c defaults conda


[source]
https://fedingo.com/how-to-change-file-extension-of-multiple-files-in-python/



api-wp
e2e-bdd-wp
e2e-wp
pom-wp


"""


import os, sys

# 001_wp_front_home_simple.spec.js become 001_wp_front_home_simple.cy.js

# for e2e-wp
# folder = '/Users/brunoflaven/Documents/01_work/cypress_book/migration_files_cypress_10/integration/e2e-wp'

# for api-wp
# folder = '/Users/brunoflaven/Documents/01_work/cypress_book/migration_files_cypress_10/integration/api-wp'

# for e2e-bdd-wp
# folder = '/Users/brunoflaven/Documents/01_work/cypress_book/migration_files_cypress_10/integration/e2e-bdd-wp'


# for pom-wp
folder = '/Users/brunoflaven/Documents/01_work/cypress_book/migration_files_cypress_10/integration/pom-wp'


for filename in os.listdir(folder):
    infilename = os.path.join(folder,filename)
    if not os.path.isfile(infilename): continue
    oldbase = os.path.splitext(filename)
    newname = infilename.replace('.spec.js', '.cy.js')
    output = os.rename(infilename, newname)



print('\n--- MUTIPLE FILES RENAMING DONE ---')
print(f'- for {folder} -')

