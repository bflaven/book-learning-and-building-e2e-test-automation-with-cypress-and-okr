// type definitions for Cypress object "cy"
/// <reference types="Cypress" />
/**
 * This file is part of the book package: "Learning and Building E2E test automation with Cypress & OKR. Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality"
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
/*


015_wp_fixtures_mysql.spec.js


[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v9

[LAUNCH]
- launch the runner
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config video=false,screenshotOnRunFailure=false



- launch the entire suite with default global cypress config settings
npx cypress run

- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/015_wp_fixtures_mysql.spec.js"

- launch with a custom config
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="en_EN" --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/015_wp_fixtures_mysql.spec.js"




#a combinaison of --env with a custom env file
npx cypress open --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false


npx cypress open --env name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


 */

describe('Example to Demonstrate SQL Database Testing in Cypress', () => {


/*
it.skip('1. Mysql manipulation :: step_1 :: Create the db play_wp_import_local ', function () {
        cy.task('queryDb', 'CREATE DATABASE IF NOT EXISTS play_wp_import_local CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;')
    })
*/

it.skip('2. Mysql manipulation :: step_2 :: use the db play_wp_import_local ', function () {
        cy.task('queryDb', 'USE play_wp_import_local;')
    })


it.skip('3. Mysql manipulation :: step_3 :: import the .sql into db play_wp_import_local ', function () {
            cy.task('queryDb', 'DROP TABLE IF EXISTS wp_commentmeta;')
            cy.readFile('/Users/brunoflaven/Documents/01_work/cypress_book/source_6_wp_install_local.sql', 'utf8').then(query => {
                cy.log('\n --- query')
                // cy.log(query)
                cy.task('queryDb', query)

            })        
    })

it.skip('4. Mysql manipulation :: step_4 :: insert content the .sql into db play_wp_import_local ', function () {
        
            cy.readFile('/Users/brunoflaven/Documents/01_work/cypress_book/source_7_wp_install_local.sql', 'utf8').then(query => {
                cy.log('\n --- query')
                // cy.log(query)
                cy.task('queryDb', query)
            })

        
    })

it.skip('5. Mysql manipulation :: step_4 :: insert content the .sql into db play_wp_import_local ', function () {
        
                cy.task('queryDb', 'DROP TABLE IF EXISTS wp_commentmeta;')
                cy.task('queryDb', 'CREATE TABLE wp_commentmeta ( meta_id bigint(20) UNSIGNED NOT NULL, comment_id bigint(20) UNSIGNED NOT NULL DEFAULT 0, meta_key varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL, meta_value longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;')

        
    })


it.skip('6. Mysql manipulation :: step_4 :: insert content the .sql into db play_wp_import_local ', function () {
        
                cy.task('queryDb', 'DROP TABLE IF EXISTS wp_commentmeta;')
                cy.task('queryDb', 'CREATE TABLE `wp_commentmeta` (`meta_id` bigint(20) UNSIGNED NOT NULL, `comment_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0, `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;')

        
    })


/*
it('1. Mysql manipulation :: Input Entries into the WP table', function () {
        cy.task('queryDb', `INSERT INTO wp_posts (ID, post_author, post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, ping_status, post_password, post_name, to_ping, pinged, post_modified, post_modified_gmt, post_content_filtered, post_parent, guid, menu_order, post_type, post_mime_type, comment_count) VALUES (NULL, '1', '2021-12-26 09:59:42', '2021-12-26 09:59:42', '<b>queryDb New Post Number Lorem ipsum dolor sit</b>', 'queryDb New Post Number Lorem ipsum dolor sit', '', 'publish', 'open', 'open', '', '', '', '', '2022-07-27 09:59:42', '2022-07-27 09:59:42', '', '0', '', '0', 'post', '', '0');`).then((result) => {
                expect(result.affectedRows).to.equal(1)
            })
    })

*/


/*
it('2. Mysql manipulation :: Create a Table', function () {
        
        cy.task('queryDb', "CREATE TABLE Persons (PersonID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
        
    })


it('3. Mysql manipulation :: Input Entries into the table', function () {
        
        cy.task('queryDb', `INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
        (001, "John", "House No. 01", "Helsinki"),
        (002, "Pam", "House No. 02", "Espoo"),
        (003, "Dwight", "House No. 03", "Lapland"),
        (004, "Michael", "House No. 04", "Vantaa");`).then((result) => {
                expect(result.affectedRows).to.equal(4)
            })
        
    })

it('4. Mysql manipulation :: Update an Entry into the table and verify', function () {
        cy.task('queryDb', `UPDATE Persons SET FirstName = "Kevin" WHERE City="Vantaa"`).then((result) => {
            expect(result.changedRows).to.equal(1)
        })
        cy.task('queryDb', `SELECT FirstName FROM Persons WHERE City="Vantaa"`).then((result) => {
            expect(result[0].FirstName).to.equal('Kevin')
        })
    })

    it('5. Mysql manipulation :: Verify that there is only one row where the city is Espoo', function () {
        cy.task('queryDb', `SELECT COUNT(*) as "rowCount" FROM Persons WHERE City="Espoo"`).then((result) => {

            expect(result[0].rowCount).to.equal(1)
        })
    })

    it('6. Mysql manipulation :: Delete a Table and Verify', function () {
        cy.task('queryDb', `DROP TABLE Persons`).then((result) => {
            expect(result.message).to.equal("")
        })
    })
*/

})


