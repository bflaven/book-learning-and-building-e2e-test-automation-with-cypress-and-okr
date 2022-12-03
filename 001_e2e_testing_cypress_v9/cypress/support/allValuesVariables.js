// ******************************************************************
// Most values used in the test made with Cypress are stored here
// ******************************************************************

const globalValues = {


/*
   * LANGUAGE 
   * Language variable sent with --env LANG="pt_PT" 
   * 
 */
lang: Cypress.env('LANG'), // '+globalValues.lang+'


/*
   * ENV VAR 
   * Variables sent with --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"
   * Just for example to simulate multiple environment variables   * 
 */
port: Cypress.env('port'), // '+globalValues.port+'
name: Cypress.env('name'), // '+globalValues.name+'
project: Cypress.env('project'), // '+globalValues.project+'

// Used to test the environment
domain: Cypress.env('LOCALHOST_MAIN_DOMAIN'), // '+globalValues.domain+' 
wpAdmin: Cypress.env('WP_BACK_SUBDIRECTORY'), // '+globalValues.wpAdmin+'
wpAdminFull: Cypress.env('WP_BACK_SUBDIRECTORY_FULL'), // '+globalValues.wpAdminFull+'
wpAdminFullLogin: Cypress.env('WP_BACK_SUBDIRECTORY_FULL_LOGIN'), // '+globalValues.wpAdminFullLogin+'

wpAdminFullProtocol: Cypress.env('WP_BACK_PROTOCOL'), // '+globalValues.wpAdminFullProtocol+'
url: Cypress.env('WP_BACK_FULL_DOMAIN'), // '+globalValues.url+'
loginPage: Cypress.env('WP_BACK_LOGIN_PAGE'), // '+globalValues.TOTEM_TEST_MAN+'

// Use only if you load the config file
LANGUAGE: Cypress.env('WP_BACK_DEFAULT_LANG'), // '+globalValues.language+'

/*
   * TIMER 
   * Timers for fun (PART_1) 
 */ 
timer: 1000, // '+globalValues.timer+'
timer_hurray: 20000, // '+globalValues.timer_hurray+'


/*
   * BASEURL 
   * The value for Cypresss
 */ 
baseURL: Cypress.config('baseUrl'), // '+globalValues.baseURL+'

/*
   * USERS 
   * manage password and username for each user
   * 
 */


username: Cypress.env('WP_BACK_LOGIN_USERNAME'), // '+globalValues.username+'
password: Cypress.env('WP_BACK_LOGIN_PASSWORD'), // '+globalValues.password+'


// superadmin
// username: Cypress.env("users").superadmin.LOGIN_USERNAME, // '+globalValues.username+'
// password: Cypress.env("users").superadmin.LOGIN_PASSWORD, // '+globalValues.password+'

// administrator
// username: Cypress.env("users").administrator.LOGIN_USERNAME, // '+globalValues.username+'
// password: Cypress.env("users").administrator.LOGIN_PASSWORD, // '+globalValues.password+'



// editor
// username: Cypress.env("users").editor.LOGIN_USERNAME, // '+globalValues.username+'
// password: Cypress.env("users").editor.LOGIN_PASSWORD, // '+globalValues.password+'


// author
// username: Cypress.env("users").author.LOGIN_USERNAME, // '+globalValues.username+'
// password: Cypress.env("users").author.LOGIN_PASSWORD, // '+globalValues.password+'

// contributor
// username: Cypress.env("users").contributor.LOGIN_USERNAME, // '+globalValues.username+'
// password: Cypress.env("users").contributor.LOGIN_PASSWORD, // '+globalValues.password+'

// subscriber
// username: Cypress.env("users").subscriber.LOGIN_USERNAME, // '+globalValues.username+'
// password: Cypress.env("users").subscriber.LOGIN_PASSWORD, // '+globalValues.password+'

/*
   * LOGIN ROLES
   * Login with differents roles
   * 
 */

// superadmin
usernameSuperadmin: Cypress.env("users").superadmin.LOGIN_USERNAME, // '+globalValues.usernameSuperadmin+'
passwordSuperadmin: Cypress.env("users").superadmin.LOGIN_PASSWORD, // '+globalValues.passwordSuperadmin+'

// administrator
usernameAdministrator: Cypress.env("users").administrator.LOGIN_USERNAME, // '+globalValues.usernameAdministrator+'
passwordAdministrator: Cypress.env("users").administrator.LOGIN_PASSWORD, // '+globalValues.passwordAdministrator+'

// editor
usernameEditor: Cypress.env("users").editor.LOGIN_USERNAME, // '+globalValues.usernameEditor+'
passwordEditor: Cypress.env("users").editor.LOGIN_PASSWORD, // '+globalValues.passwordEditor+'


// author
usernameAuthor: Cypress.env("users").author.LOGIN_USERNAME, // '+globalValues.usernameAuthor+'
passwordAuthor: Cypress.env("users").author.LOGIN_PASSWORD, // '+globalValues.passwordAuthor+'

// contributor
usernameContributor: Cypress.env("users").contributor.LOGIN_USERNAME, // '+globalValues.usernameContributor+'
passwordContributor: Cypress.env("users").contributor.LOGIN_PASSWORD, // '+globalValues.passwordContributor+'

// subscriber
usernameSubscriber: Cypress.env("users").subscriber.LOGIN_USERNAME, // '+globalValues.usernameSubscriber+'
passwordSubscriber: Cypress.env("users").subscriber.LOGIN_PASSWORD, // '+globalValues.passwordSubscriber+'

/*
   * OTHER 
   * Several useless but fun sign
   * 
 */
TOTEM_TEST_MAN:'(ʘ_ʘ) --- TESTING --- (ʘ_ʘ)', // '+globalValues.TOTEM_TEST_MAN+'
TOTEM_TEST_MAN_CYPRESS:'٩(^‿^)۶ --- DONE --- \\(^-^)/', // '+globalValues.TOTEM_TEST_MAN_CYPRESS+'
TOTEM_TEST_MAN_CYPRESS_CONSOLE:'=== (^-^) ===', // '+globalValues.TOTEM_TEST_MAN_CYPRESS_CONSOLE+'

strLength:40, //'+globalValues.strLength+'

/*
   * TIMER 
   * Timer for fun (PART_2)
   * 
 */
timer: 1000, // '+globalValues.timer+'
contentTimerDraft:1000, // '+globalValues.contentTimerDraft+'
timerNavigation: 3000, // '+globalValues.timerNavigation+'
timerDraftSaving: 10000, // '+globalValues.timerDraftSaving+'
timerLoadingList: 15000, // '+globalValues.timerLoadingList+'
timerUploading: 9000, // '+globalValues.timerUploading+'
timerSearchImage: 8000, // '+globalValues.timerSearchImage+'
contentTimerDraftSaving:20000, // '+globalValues.contentTimerDraftSaving+'
tagTimerTag:12000, // '+globalValues.tagTimerTag+'


/*
   * CONTENT 
   * variables used in content creation
   * 
 */

/* content for article and page */
RandomString: ''+(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))+'', // '+globalValues.RandomString+'
startDateString: ''+(new Date().toString())+'', // '+globalValues.startDateString+'



/*
  * For article
 */
postNewCreatePath:'post-new.php', // '+globalValues.postNewCreatePath+'
contentArticleInputTitle:'ARTICLE Title Cypress New', // '+globalValues.contentArticleInputTitle+'
contentPageInputBody:'ARTICLE Body Cypress New Test Text Cypress Body Test Text Cypress Body Test Text Cypress', // '+globalValues.contentPageInputBody+'
// Tags list for article
tagsPost:['Fake news{enter}','Cypress{enter}','Automation{enter}','Beautiful Soup{enter}','Agile{enter}'], // '+globalValues.tagsPost+'
//Categories list for article
categoriesPost:[3,104,108,111,112,165], // '+globalValues.categoriesPost+'


/*
  * For page
 */
pageNewCreatePath:'post-new.php?post_type=page', // '+globalValues.pageNewCreatePath+'
contentPageInputTitle:'PAGE Title Cypress New', // '+globalValues.contentPageInputTitle+'
contentPageInputBody:'PAGE Body Cypress New Test Text Cypress Body Test Text Cypress Body Test Text Cypress', // '+globalValues.contentPageInputBody+'

/*
  * For tag
 */
postTagNewCreatePath:'edit-tags.php?taxonomy=post_tag', // '+globalValues.postTagNewCreatePath+'
postTagInputName:'Tag Name', // '+globalValues.postTagInputName+'
postTagInputDescription:'Tag Description', // '+globalValues.postTagInputDescription+'

/*
  * For category
 */
postCategoryNewCreatePath:'edit-tags.php?taxonomy=category', // '+globalValues.postCategoryNewCreatePath+'
postCategoryInputName:'Category Name', // '+globalValues.postCategoryInputName+'
postCategoryInputDescription:'Category Description', // '+globalValues.postCategoryInputDescription+'


/*
  * For user
 */
userNewCreatePath:'user-new.php', // '+globalValues.userNewCreatePath+'
// For values see in /support/allFakeUserData.js

/*
  * For media
 */
imageNewCreatePath:'media-new.php', // '+globalValues.imageNewCreatePath+'
// For the images check the directory /fixtures/pictures and the functions in /support/allUtils.js


/*--- END ---*/  

};


// do export literal as object
module.exports = { globalValues };
// module.exports = { userData };