/* ******************************************************************
* A  JavaScript Class to abstract UX and Labels issues for  WP backend
* navigation testing purposes in different languages. Made for Cypress 
****************************************************************** */

// import the globalValues so the variable with let so it cannot be redeclared.
import { globalValues } from './allValuesVariables';
let lang = globalValues.lang;

// Required to export the Class and name your Class that will be your object
export class UtilityWp {

        // Define the characteristics or the object properties
         language;
         navLabel;
         navCssSelector;

            // In JavaScript, the constructor() method is the special method for creating and initializing objects created within a class.
            constructor(language, navLabel, navCssSelector){
                this.language = language;
                this.navLabel = navLabel;
                this.navCssSelector = navCssSelector;
            }

        // First function of the Class using the "if ...else if...else..." method
        
        getSelectionVerifier() {
            

            if (lang == 'es_ES')
                return 'es_ES';
            else if (lang == 'it_IT')
                return 'it_IT';
            else if (lang == 'fr_FR')
                return 'fr_FR';
            else if (lang == 'es_ES')
                return 'es_ES';
            else if (lang == 'ru_RU')
                return 'ru_RU';
            else if (lang == 'zh_CN')
                return 'zh_CN';
            // Default case
            else (lang == 'en_EN')
                return 'en_EN';
      }// EOF

      // First function of the Class using the "switch" method

        getMainNavMenuLinkEntries () {
                
                switch (lang) {

                  case 'pt_PT':

                    var WpMainNavLabel = ["Painel","Artigos","Multimédia","Páginas","Comentários 00 comentários em moderação","Apresentação","Plugins 1","Utilizadores","Ferramentas","Opções"];
                    var WpMainNavCssSelector = ["#adminmenuwrap > #adminmenu > #menu-dashboard > a", "#adminmenuwrap > #adminmenu > #menu-posts > a", "#adminmenuwrap > #adminmenu > #menu-media > a", "#adminmenuwrap > #adminmenu > #menu-pages > a", "#adminmenuwrap > #adminmenu > #menu-comments > a", "#adminmenuwrap > #adminmenu > #menu-appearance > a", "#adminmenuwrap > #adminmenu > #menu-plugins > a", "#adminmenuwrap > #adminmenu > #menu-users > a", "#adminmenuwrap > #adminmenu > #menu-tools > a", "#adminmenuwrap > #adminmenu > #menu-settings > a"];
                    var WpMainNavNameFiles = ["index.php", "edit.php", "upload.php", "edit.php", "edit-comments.php", "themes.php", "plugins.php", "users.php", "tools.php", "options-general.php"];


                  return {WpMainNavLabel, WpMainNavCssSelector, WpMainNavNameFiles};

                  case 'it_IT':

                    var WpMainNavLabel = ["Bacheca","Articoli","Media","Pagine","Commenti 00 commenti in moderazione","Aspetto","Plugin 1","Utenti","Strumenti","Impostazioni"];
                    var WpMainNavCssSelector = ["#adminmenuwrap > #adminmenu > #menu-dashboard > a", "#adminmenuwrap > #adminmenu > #menu-posts > a", "#adminmenuwrap > #adminmenu > #menu-media > a", "#adminmenuwrap > #adminmenu > #menu-pages > a", "#adminmenuwrap > #adminmenu > #menu-comments > a", "#adminmenuwrap > #adminmenu > #menu-appearance > a", "#adminmenuwrap > #adminmenu > #menu-plugins > a", "#adminmenuwrap > #adminmenu > #menu-users > a", "#adminmenuwrap > #adminmenu > #menu-tools > a", "#adminmenuwrap > #adminmenu > #menu-settings > a"];
                    var WpMainNavNameFiles = ["index.php", "edit.php", "upload.php", "edit.php", "edit-comments.php", "themes.php", "plugins.php", "users.php", "tools.php", "options-general.php"];

                  return {WpMainNavLabel, WpMainNavCssSelector, WpMainNavNameFiles};

                  case 'fr_FR':

                    var WpMainNavLabel = ["Tableau de bord","Articles","Médias","Pages","Commentaires 00 commentaire en modération","Apparence","Extensions 1","Comptes","Outils","Réglages"];
                    var WpMainNavCssSelector = ["#adminmenuwrap > #adminmenu > #menu-dashboard > a", "#adminmenuwrap > #adminmenu > #menu-posts > a", "#adminmenuwrap > #adminmenu > #menu-media > a", "#adminmenuwrap > #adminmenu > #menu-pages > a", "#adminmenuwrap > #adminmenu > #menu-comments > a", "#adminmenuwrap > #adminmenu > #menu-appearance > a", "#adminmenuwrap > #adminmenu > #menu-plugins > a", "#adminmenuwrap > #adminmenu > #menu-users > a", "#adminmenuwrap > #adminmenu > #menu-tools > a", "#adminmenuwrap > #adminmenu > #menu-settings > a"];
                    var WpMainNavNameFiles = ["index.php", "edit.php", "upload.php", "edit.php", "edit-comments.php", "themes.php", "plugins.php", "users.php", "tools.php", "options-general.php"];

                  return {WpMainNavLabel, WpMainNavCssSelector, WpMainNavNameFiles};

                  case 'es_ES':

                    var WpMainNavLabel = ["Escritorio","Entradas","Medios","Páginas","Comentarios 00 comentarios en moderación","Apariencia","Plugins 1","Usuarios","Herramientas","Ajustes"];
                    var WpMainNavCssSelector = ["#adminmenuwrap > #adminmenu > #menu-dashboard > a", "#adminmenuwrap > #adminmenu > #menu-posts > a", "#adminmenuwrap > #adminmenu > #menu-media > a", "#adminmenuwrap > #adminmenu > #menu-pages > a", "#adminmenuwrap > #adminmenu > #menu-comments > a", "#adminmenuwrap > #adminmenu > #menu-appearance > a", "#adminmenuwrap > #adminmenu > #menu-plugins > a", "#adminmenuwrap > #adminmenu > #menu-users > a", "#adminmenuwrap > #adminmenu > #menu-tools > a", "#adminmenuwrap > #adminmenu > #menu-settings > a"];
                    var WpMainNavNameFiles = ["index.php", "edit.php", "upload.php", "edit.php", "edit-comments.php", "themes.php", "plugins.php", "users.php", "tools.php", "options-general.php"];

                  return {WpMainNavLabel, WpMainNavCssSelector, WpMainNavNameFiles};

                  case 'ru_RU':

                    var WpMainNavLabel = ["Консоль","Записи","Медиафайлы","Страницы","Комментарии 00 комментариев ждут одобрения","Внешний вид","Плагины 1","Пользователи","Инструменты","Настройки"];
                    var WpMainNavCssSelector = ["#adminmenuwrap > #adminmenu > #menu-dashboard > a", "#adminmenuwrap > #adminmenu > #menu-posts > a", "#adminmenuwrap > #adminmenu > #menu-media > a", "#adminmenuwrap > #adminmenu > #menu-pages > a", "#adminmenuwrap > #adminmenu > #menu-comments > a", "#adminmenuwrap > #adminmenu > #menu-appearance > a", "#adminmenuwrap > #adminmenu > #menu-plugins > a", "#adminmenuwrap > #adminmenu > #menu-users > a", "#adminmenuwrap > #adminmenu > #menu-tools > a", "#adminmenuwrap > #adminmenu > #menu-settings > a"];
                    var WpMainNavNameFiles = ["index.php", "edit.php", "upload.php", "edit.php", "edit-comments.php", "themes.php", "plugins.php", "users.php", "tools.php", "options-general.php"];


                  return {WpMainNavLabel, WpMainNavCssSelector, WpMainNavNameFiles};

                  case 'zh_CN':

                    var WpMainNavLabel = ["仪表盘","文章","媒体","页面","评论00条评论待审","外观","插件1","用户","工具","设置"];
                    var WpMainNavCssSelector = ["#adminmenuwrap > #adminmenu > #menu-dashboard > a", "#adminmenuwrap > #adminmenu > #menu-posts > a", "#adminmenuwrap > #adminmenu > #menu-media > a", "#adminmenuwrap > #adminmenu > #menu-pages > a", "#adminmenuwrap > #adminmenu > #menu-comments > a", "#adminmenuwrap > #adminmenu > #menu-appearance > a", "#adminmenuwrap > #adminmenu > #menu-plugins > a", "#adminmenuwrap > #adminmenu > #menu-users > a", "#adminmenuwrap > #adminmenu > #menu-tools > a", "#adminmenuwrap > #adminmenu > #menu-settings > a"];
                    var WpMainNavNameFiles = ["index.php", "edit.php", "upload.php", "edit.php", "edit-comments.php", "themes.php", "plugins.php", "users.php", "tools.php", "options-general.php"];

                  return {WpMainNavLabel, WpMainNavCssSelector, WpMainNavNameFiles};

                  // Default en_EN
                  default: 

                    var WpMainNavLabel = ["Dashboard","Posts","Media","Pages","Comments 00 Comments in moderation","Appearance","Plugins 1","Users", "Tools", "Settings"];
                    var WpMainNavCssSelector = ["#adminmenuwrap > #adminmenu > #menu-dashboard > a", "#adminmenuwrap > #adminmenu > #menu-posts > a", "#adminmenuwrap > #adminmenu > #menu-media > a", "#adminmenuwrap > #adminmenu > #menu-pages > a", "#adminmenuwrap > #adminmenu > #menu-comments > a", "#adminmenuwrap > #adminmenu > #menu-appearance > a", "#adminmenuwrap > #adminmenu > #menu-plugins > a", "#adminmenuwrap > #adminmenu > #menu-users > a", "#adminmenuwrap > #adminmenu > #menu-tools > a", "#adminmenuwrap > #adminmenu > #menu-settings > a"];
                    var WpMainNavNameFiles = ["index.php", "edit.php", "upload.php", "edit.php", "edit-comments.php", "themes.php", "plugins.php", "users.php", "tools.php", "options-general.php"];
                  return {WpMainNavLabel, WpMainNavCssSelector, WpMainNavNameFiles};

                  }//EOS
          }// EOF
        
  } //EOC

