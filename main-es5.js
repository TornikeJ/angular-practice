function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <nav>\r\n        <ul [ngStyle]=\"{'background-color':color}\">\r\n            <a *ngIf=\"activatedComponent != 'home'\" [routerLink]=\"['/home']\">\r\n                Back to Home Component\r\n            </a>\r\n            <li>\r\n                <a>{{ activatedComponent | titlecase}} Component</a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n    <div>\r\n        <div *ngIf=\"showLoadingIndicator\" [ngStyle]=\"{'border-left-color':color}\" class=\"loader\"></div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark-landing/bookmark-landing.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark-landing/bookmark-landing.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookmarkLandingBookmarkLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <nav>\r\n        <div class=\"container\">\r\n            <div class=\"logo\">\r\n                <img src=\"assets/bookmark-landing/logo-bookmark-white.svg\" *ngIf=\"showDesktop\" alt=\"\">\r\n                <img src=\"assets/bookmark-landing/logo-bookmark.svg\" *ngIf=\"!showDesktop\" alt=\"\">\r\n                <div class=\"menu\" (click)=\"menuClicked()\">\r\n                    <div *ngIf=\"!showDesktop\"></div>\r\n                    <div *ngIf=\"!showDesktop\"></div>\r\n                    <div *ngIf=\"!showDesktop\"></div>\r\n                    <img *ngIf=\"showDesktop\" src=\"assets/bookmark-landing/icon-close.svg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"desktop\" [ngStyle]=\"{'display': displayStyle}\">\r\n                <ul>\r\n                    <hr>\r\n                    <li>Features</li>\r\n                    <hr>\r\n                    <li>Pricing</li>\r\n                    <hr>\r\n                    <li>Contact</li>\r\n                    <hr>\r\n                </ul>\r\n                <div>\r\n                    <button class=\"orange\">Login</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"intro\">\r\n        <div class=\"container\">\r\n            <div class=\"text\">\r\n                <h1>A Simple Bookmark Manager</h1>\r\n                <p>A clean and simple interface to organize your favourite websites.\r\n                    Open a new browser tab and see your\r\n                    sites load instantly. Try it for free.</p>\r\n                <button class=\"blue\">Get it on Chrome</button>\r\n                <button class=\"gray\">Get it on Firefox</button>\r\n            </div>\r\n            <div class=\"illustration\">\r\n                <img src=\"assets/bookmark-landing/illustration-hero.svg\" alt=\"\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"features\">\r\n        <div class=\"container\">\r\n            <div class=\"text\">\r\n                <h2>\r\n                    Features\r\n                </h2>\r\n                <p>\r\n                    Our aim is to make it quick and easy for you to access your\r\n                    favourite websites. Your bookmarks sync\r\n                    between your devices so you can access them on the go.\r\n                </p>\r\n                <div>\r\n                    <span (click)=\"selectFeature(1)\" [ngClass]=\"{'active':selectedFeature==1}\">Simple Bookmarking</span>\r\n                    <span (click)=\"selectFeature(2)\" [ngClass]=\"{'active':selectedFeature==2}\">Speedy Searching</span>\r\n                    <span (click)=\"selectFeature(3)\" [ngClass]=\"{'active':selectedFeature==3}\">Easy Sharing</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"feature\">\r\n                <div *ngIf=\"selectedFeature==1\">\r\n                    <img src=\"assets/bookmark-landing/illustration-features-tab-1.svg\" alt=\"\">\r\n                    <div>\r\n                        <h2>Bookmark in one click</h2>\r\n                        <p>\r\n                            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you\r\n                            complete control over how you manage your favourite sites.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"selectedFeature==2\">\r\n                    <img src=\"assets/bookmark-landing/illustration-features-tab-2.svg\" alt=\"\">\r\n                    <div>\r\n                        <h2> Intelligent search</h2>\r\n                        <p>\r\n                            Our powerful search feature will help you find saved sites in no time at all. No need to\r\n                            trawl through all of your bookmarks.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"selectedFeature==3\">\r\n                    <img src=\"assets/bookmark-landing/illustration-features-tab-3.svg\" alt=\"\">\r\n                    <div>\r\n                        <h2>Share your bookmarks</h2>\r\n                        <p>\r\n                            Easily share your bookmarks and collections with others. Create a shareable link that you\r\n                            can send at the click of a button.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"extensions\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"chrome\">\r\n                <img src=\"assets/bookmark-landing/logo-chrome.svg\" alt=\"\">\r\n                <h3>\r\n                    Add to Chrome\r\n                </h3>\r\n                <p>\r\n                    Minimum version 62\r\n                </p>\r\n                <img src=\"assets/bookmark-landing/bg-dots.svg\" alt=\"\">\r\n                <button class=\"blue\">Add & Install Extension</button>\r\n            </div>\r\n            <div class=\"firefox\">\r\n                <img src=\"assets/bookmark-landing/logo-firefox.svg\" alt=\"\">\r\n                <h3>\r\n                    Add to Firework\r\n                </h3>\r\n                <p>\r\n                    Minimum version 55\r\n                </p>\r\n                <img src=\"assets/bookmark-landing/bg-dots.svg\" alt=\"\">\r\n                <button class=\"blue\">Add & Install Extension</button>\r\n            </div>\r\n            <div class=\"opera\">\r\n                <img src=\"assets/bookmark-landing/logo-opera.svg\" alt=\"\">\r\n                <h3>\r\n                    Add to Opera\r\n                </h3>\r\n                <p>\r\n                    Minimum version 46\r\n                </p>\r\n                <img src=\"assets/bookmark-landing/bg-dots.svg\" alt=\"\">\r\n                <button class=\"blue\">Add & Install Extension</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"faq\">\r\n        <div class=\"container\">\r\n            <h2>\r\n                Frequently Asked Questions\r\n            </h2>\r\n            <p>\r\n                Here are some of our FAQs. If you have any other\r\n                questions you’d like answered please feel free to email us.\r\n            </p>\r\n            <div>\r\n                <h4 (click)=\"showAnswer(1)\">What is Bookmark?\r\n                    <img *ngIf=\"!selectAnswer[1]\" src=\"assets/bookmark-landing/icon-arrow.svg\" alt=\"\">\r\n                    <img *ngIf=\"selectAnswer[1]\" src=\"assets/bookmark-landing/icon-arrow-close.svg\"\r\n                        style=\"transform: rotate(180deg);\" alt=\"\">\r\n                </h4>\r\n                <p *ngIf=\"selectAnswer[1]\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies\r\n                    fringilla.\r\n                    Phasellus blandit ipsum quis quam ornare mattis.\r\n                </p>\r\n                <h4 (click)=\"showAnswer(2)\">How can I request a new browser?\r\n                    <img *ngIf=\"!selectAnswer[2]\" src=\"assets/bookmark-landing/icon-arrow.svg\" alt=\"\">\r\n                    <img *ngIf=\"selectAnswer[2]\" src=\"assets/bookmark-landing/icon-arrow-close.svg\"\r\n                        style=\"transform: rotate(180deg);\" alt=\"\">\r\n                </h4>\r\n                <p *ngIf=\"selectAnswer[2]\">\r\n                    Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.\r\n                    Suspendisse\r\n                    imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non\r\n                    ligula.\r\n                    Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies\r\n                    non\r\n                    ligula. Suspendisse imperdiet.\r\n                </p>\r\n                <h4 (click)=\"showAnswer(3)\">Is there a mobile app?\r\n                    <img *ngIf=\"!selectAnswer[3]\" src=\"assets/bookmark-landing/icon-arrow.svg\" alt=\"\">\r\n                    <img *ngIf=\"selectAnswer[3]\" src=\"assets/bookmark-landing/icon-arrow-close.svg\"\r\n                        style=\"transform: rotate(180deg);\" alt=\"\">\r\n                </h4>\r\n                <p *ngIf=\"selectAnswer[3]\">\r\n                    Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum\r\n                    urna\r\n                    vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex\r\n                    et\r\n                    ultricies bibendum.\r\n                </p>\r\n                <h4 (click)=\"showAnswer(4)\">What about other Chromium browsers?\r\n                    <img *ngIf=\"!selectAnswer[4]\" src=\"assets/bookmark-landing/icon-arrow.svg\" alt=\"\">\r\n                    <img *ngIf=\"selectAnswer[4]\" src=\"assets/bookmark-landing/icon-arrow-close.svg\"\r\n                        style=\"transform: rotate(180deg);\" alt=\"\">\r\n                </h4>\r\n                <p *ngIf=\"selectAnswer[4]\">\r\n                    Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam\r\n                    vitae\r\n                    neque\r\n                    eget nisl gravida pellentesque non ut velit.\r\n                </p>\r\n            </div>\r\n            <button class=\"blue\">More Info</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"contact\">\r\n        <div class=\"container\">\r\n            <h4>35,000+ already joined</h4>\r\n            <h1>Stay up-to-date with what we’re doing</h1>\r\n            <div>\r\n                <div>\r\n                    <input (input)=\"checkEmail=false\" email ngModel type=\"email\" required #email=\"ngModel\" [ngClass]=\"{'error': checkEmail && email.dirty && email.invalid,\r\n                    'success':checkEmail && email.valid}\">\r\n                    <span *ngIf=\"checkEmail && email.invalid && email.dirty\">\r\n                        Whoops, make sure it's an email</span>\r\n                    <span *ngIf=\"checkEmail && email.valid && email.dirty\">\r\n                        Thanks for contacting us</span>\r\n                </div>\r\n                <button class=\"orange\" (click)=\"checkEmail=true\">Contact Us</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"logo\">\r\n                <img src=\"assets/bookmark-landing/logo-bookmark-white.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"desktop\">\r\n                <ul>\r\n                    <li>Features</li>\r\n                    <li>Pricing</li>\r\n                    <li>Contact</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"social\">\r\n                <img src=\"assets/bookmark-landing/icon-facebook.svg\" alt=\"\">\r\n                <img src=\"assets/bookmark-landing/icon-twitter.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/book-details/book-details.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/book-details/book-details.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksAssignmentBookListBookDetailsBookDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <article class=\"book\" *ngIf=\"book\">\r\n        <div class=\"row-1\">\r\n            <div class=\"col-1\">\r\n                <img [src]=\"book?.imageLinks?.thumbnail\" alt=\"book thumbnail\">\r\n                <i class=\"fa fa-star mobile\" title=\"{{ isInFavorites ? 'Remove from favorites' : 'Add to favorites'}}\"\r\n                    [ngClass]=\"{'infavorites':isInFavorites}\" (click)=\"chooseAction(isInFavorites,book)\"></i>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <div>\r\n                    <h3>{{book.title}}</h3>\r\n                    <i class=\"fa fa-star desktop\"\r\n                        title=\"{{ isInFavorites ? 'Remove from favorites' : 'Add to favorites'}}\"\r\n                        [ngClass]=\"{'infavorites':isInFavorites}\" (click)=\"chooseAction(isInFavorites,book)\"></i>\r\n                </div>\r\n                <p><span>{{book.authors.length > 1? 'Authors: ': 'Author: '}}</span>{{book.authors}}</p>\r\n                <p><span>Publish date: </span>{{book.publishedDate}}</p>\r\n                <p><span>Categories: </span>{{book.categories}}</p>\r\n                <p><span>Pages: </span>{{book.pageCount}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row-2\">\r\n            <p [innerHtml]=\"book.description\"></p>\r\n        </div>\r\n    </article>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/book-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/book-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksAssignmentBookListBookListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <article class=\"book\" *ngFor=\"let book of books; let i=index\">\r\n        <div class=\"col-1\">\r\n            <img [src]=\"book.imageLinks.smallThumbnail\" alt=\"book thumbnail\">\r\n            <i class=\"fa fa-star mobile\" title=\"{{ isInFavorites[i] ? 'Remove from favorites' : 'Add to favorites'}}\"\r\n                [ngClass]=\"{'infavorites':isInFavorites[i]}\" (click)=\"chooseAction(isInFavorites[i],book)\"></i>\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <div>\r\n                <h3>{{book.title}}</h3>\r\n                <i class=\"fa fa-star desktop\"\r\n                    title=\"{{ isInFavorites[i] ? 'Remove from favorites' : 'Add to favorites'}}\"\r\n                    [ngClass]=\"{'infavorites':isInFavorites[i]}\" (click)=\"chooseAction(isInFavorites[i],book)\"></i>\r\n            </div>\r\n            <p>{{book.description | descriptionLimit}} </p>\r\n            <button [routerLink]=\"['/books',book.id]\">Read more</button>\r\n        </div>\r\n    </article>\r\n    <button class=\"load\" #load (click)=\"loadMore(); load.blur()\">Load more</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/favorites/favorites.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/favorites/favorites.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksAssignmentBookListFavoritesFavoritesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <article class=\"book\" *ngFor=\"let book of books;\">\r\n        <div class=\"col-1\">\r\n            <img [src]=\"book.imageLinks.smallThumbnail\" alt=\"book thumbnail\">\r\n            <i class=\"fa fa-star mobile\" title=\"Remove from favorites\" [ngClass]=\"{'infavorites':1}\"\r\n                (click)=\"RemoveFromFavorites(book.id)\"></i>\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <div>\r\n                <h3>{{book.title}}</h3>\r\n                <i class=\"fa fa-star desktop\" title=\"Remove from favorites\" [ngClass]=\"{'infavorites':1}\"\r\n                    (click)=\"RemoveFromFavorites(book.id)\"></i>\r\n            </div>\r\n            <p>{{book.description | descriptionLimit}}</p>\r\n            <button [routerLink]=\"['/books',book.id]\">Read more</button>\r\n        </div>\r\n    </article>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/books.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/books.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksAssignmentBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <header>\r\n      <app-books-header></app-books-header>\r\n    </header>\r\n    <section>\r\n      <router-outlet></router-outlet>\r\n    </section>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/header/header.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/header/header.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksAssignmentHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\r\n    <div class=\"container\">\r\n        <div class=\"logo\">\r\n            <img [routerLink]=\"['/books']\" #logo (click)=\"logo.blur()\" src=\"assets/books/book-icon.png\" alt=\"Books logo\">\r\n        </div>\r\n        <div class=\"desktop\">\r\n            <ul>\r\n                <li routerLinkActive=\"active\" #home (click)=\"home.blur()\" [routerLinkActiveOptions]=\"{exact:\r\n                    true}\" [routerLink]=\"['/books']\">Home</li>\r\n                <li routerLinkActive=\"active\" #favorite (click)=\"favorite.blur()\" [routerLinkActiveOptions]=\"{exact:\r\n                    true}\" [routerLink]=\"['favorites']\">Favorites</li>\r\n            </ul>\r\n        </div>  \r\n    </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clipboard/clipboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clipboard/clipboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClipboardClipboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\"  [ngStyle]=\"{'background-image': 'url(\\'assets/clipboard/bg-header-desktop.png\\')'}\">\r\n    <div class=\"container\">\r\n        <div class=\"download-content\">\r\n            <img src=\"assets/clipboard/logo.svg\"  alt=\"Clipboard logo\">\r\n            <h1>A history of everything you copy</h1>\r\n            <p>Clipboard allows you to track and organize everything you copy. Instanlty access your clipboard on all\r\n                your\r\n                devices</p>\r\n            <div>\r\n                <button type=\"button\" class=\"ios\">Download for iOS</button>\r\n                <button type=\"button\" class=\"mac\">Download for Mac</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"desktop\">\r\n            <div>\r\n                <h2>Keep track of your snippets</h2>\r\n                <p>\r\n                    Clipboard instantly stores any item you copy in the cloud,\r\n                    meaning you can access your snippets immediately on all your\r\n                    devices. Our Mac and iOS apps will help you organize everything.\r\n                </p>\r\n            </div>\r\n            <div class=\"features\">\r\n                <img src=\"assets/clipboard/image-computer.png\" alt=\"Compute image\">\r\n                <div>\r\n                    <h3>\r\n                        Quick Search\r\n                        <p>\r\n                            Easily search your snippets by content, category, web address, application, and more.\r\n                        </p>\r\n                    </h3>\r\n                    <h3>\r\n                        iCloud Sync\r\n                        <p>\r\n                            Instantly saves and syncs snippets across all your devices.\r\n                        </p>\r\n                    </h3>\r\n                    <h3>\r\n                        Complete History\r\n                        <p>\r\n                            Retrieve any snippets from the first moment you started using the app.\r\n                        </p>\r\n                    </h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"devices\">\r\n            <h2>Access Clipboard anywhere</h2>\r\n            <p>\r\n                Whether you’re on the go, or at your computer, you can access all your Clipboard\r\n                snippets in a few simple clicks.\r\n            </p>\r\n            <img src=\"assets/clipboard/image-devices.png\" alt=\"Devices image\">\r\n        </div>\r\n\r\n        <div class=\"features\">\r\n            <div>\r\n                <h2>\r\n                    Supercharge your workflow\r\n                </h2>\r\n                <p>\r\n                    We’ve got the tools to boost your productivity.\r\n                </p>\r\n            </div>\r\n            <div class=\"feature\">\r\n                <div>\r\n                    <img src=\"assets/clipboard/icon-blacklist.svg\" alt=\"Blacklist icon\">\r\n                    <h3>\r\n                        Create blacklists\r\n                    </h3>\r\n                    <p>\r\n                        Ensure sensitive information never makes its way to your clipboard by excluding certain sources.\r\n                    </p>\r\n                </div>\r\n                <div>\r\n                    <img src=\"assets/clipboard/icon-text.svg\" alt=\"Text icon\">\r\n                    <h3>Plain text snippets</h3>\r\n                    <p>\r\n                        Remove unwanted formatting from copied text for a consistent look.\r\n                    </p>\r\n                </div>\r\n                <div>\r\n                    <img src=\"assets/clipboard/icon-preview.svg\" alt=\"Preview icon\">\r\n                    <h3>Sneak preview</h3>\r\n                    <p>\r\n                        Quick preview of all snippets on your Clipboard for easy access.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"vendors\">\r\n            <img src=\"assets/clipboard/logo-google.png\" alt=\"Google logo\">\r\n            <img src=\"assets/clipboard/logo-ibm.png\" alt=\"IBM logo\">\r\n            <img src=\"assets/clipboard/logo-microsoft.png\" alt=\"Microsoft logo\">\r\n            <img src=\"assets/clipboard/logo-hp.png\" alt=\"Hp logo\">\r\n            <img src=\"assets/clipboard/logo-vector-graphics.png\" alt=\"VG logo\">\r\n        </div>\r\n\r\n        <div class=\"download-content\">\r\n            <h2>Clipboard for iOS and Mac OS</h2>\r\n            <p>\r\n                Available for free on the App Store. Download for Mac or iOS, sync with iCloud\r\n                and you’re ready to start adding to your clipboard.\r\n            </p>\r\n            <div>\r\n                <button type=\"button\" class=\"ios\">Download for iOS</button>\r\n                <button type=\"button\" class=\"mac\">Download for Mac</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer>\r\n        <div class=\"container\">\r\n            <img src=\"assets/clipboard/logo.svg\" alt=\"Clipboard logo\" class=\"clipboard\">\r\n            <div class=\"nav\">\r\n                <div>\r\n                    <a href=\"\">FAQs</a>\r\n                    <a href=\"\">Contact Us</a>\r\n                </div>\r\n                <div>\r\n                    <a href=\"\">Privacy Policy</a>\r\n                    <a href=\"\">Press Kit</a>\r\n                </div>\r\n                <div>\r\n                    <a href=\"\">Install Guide</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"social\">\r\n                <a href=\"\"><img src=\"assets/clipboard/icon-facebook.svg\" alt=\"facebook logo\"></a>\r\n                <a href=\"\"><img src=\"assets/clipboard/icon-twitter.svg\" alt=\"twitter logo\"></a>\r\n                <a href=\"\"><img src=\"assets/clipboard/icon-instagram.svg\" alt=\"instagram logo\"></a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-home/conference-home.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-home/conference-home.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConferenceConferenceHomeConferenceHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"wrapper\">\r\n\r\n    <section class=\"hero container\">\r\n        <h2>Dedicated to the Craft of Building Websites</h2>\r\n        <p>Every year the brightest web designers and front-end developers descend on Chicago to discuss the latest\r\n            technologies. Join us this August!</p>\r\n        <a class=\"btn btn-alt\" [routerLink]=\"['/conference/register']\">Register Now</a>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n        <div class=\"grid\">\r\n\r\n            <section class=\"teaser col-1-3\">\r\n                <h5>Speakers</h5>\r\n                <a [routerLink]=\"['/conference/speakers']\">\r\n                    <img src=\"assets/conference/images/home/speakers.jpg\" alt=\"Professional Speaker\">\r\n                    <h3>World-Class Speakers</h3>\r\n                </a>\r\n                <p>Joining us from all around the world are over twenty fantastic speakers, here to share their stories.\r\n                </p>\r\n            </section>\r\n\r\n            <section class=\"teaser col-1-3\">\r\n                <h5>Schedule</h5>\r\n                <a [routerLink]=\"['/conference/schedule']\">\r\n                    <img src=\"assets/conference/images/home/schedule.jpg\" alt=\"Professional Speaker\">\r\n                    <h3>Three Inspiring Days</h3>\r\n                </a>\r\n                <p>Enjoy three inspiring and action-packed days of talks, gatherings, and all-around good times.</p>\r\n            </section>\r\n            <section class=\"teaser col-1-3\">\r\n                <h5>Venue</h5>\r\n                <a [routerLink]=\"['/conference/venue']\">\r\n                    <img src=\"assets/conference/images/home/venue.jpg\" alt=\"Professional Speaker\">\r\n                    <h3>The Chicago Theatre</h3>\r\n                </a>\r\n                <p>Within the heart of downtown Chicago, The Chicago Theatre will provide a beautiful conference venue.\r\n                </p>\r\n            </section>\r\n        </div>\r\n    </section>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-register/conference-register.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-register/conference-register.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConferenceConferenceRegisterConferenceRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <section class=\"row-alt\">\r\n        <div class=\"lead container\">\r\n            <h1>Register</h1>\r\n            <p>Every year we aim to have an unbelievable time, and this year we’d love it for you to join us. Conference\r\n                passes only cost $99, one of the best values you’ll find.</p>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n        <div class=\"grid\">\r\n            <section class=\"col-2-3\">\r\n                <h2>Purchase a Conference Pass</h2>\r\n                <h5>$99 per Pass</h5>\r\n\r\n                <p>Purchase your Styles Conference pass using the form to the right. Multiple passes may be purchased\r\n                    within the same order, so feel free to bring a friend or two along. Once your order is finished\r\n                    we&#8217;ll follow up and provide a receipt for your purchase. See you soon!</p>\r\n\r\n                <h4>Why Attend?</h4>\r\n\r\n                <ul class=\"why-attend\">\r\n                    <li>Over twenty world-class speakers</li>\r\n                    <li>One full day of workshops and two full days of presentations</li>\r\n                    <li>Hosted at The Chicago Theatre, a historical landmark</li>\r\n                    <li>August in Chicago is simply amazing</li>\r\n                </ul>\r\n            </section>\r\n            <!--\r\n          \r\n              -->\r\n            <form class=\"col-1-3\" action=\"#\" method=\"post\">\r\n                <fieldset class=\"register-group\">\r\n\r\n                    <label>\r\n                        Name\r\n                        <input type=\"text\" name=\"name\" placeholder=\"Full name\" required>\r\n                    </label>\r\n\r\n                    <label>\r\n                        Email\r\n                        <input type=\"email\" name=\"email\" placeholder=\"Email address\" required>\r\n                    </label>\r\n\r\n                    <label>\r\n                        Number of Passes\r\n                        <select name=\"quantity\" required>\r\n                            <option value=\"1\" selected>1</option>\r\n                            <option value=\"2\">2</option>\r\n                            <option value=\"3\">3</option>\r\n                            <option value=\"4\">4</option>\r\n                            <option value=\"5\">5</option>\r\n                        </select>\r\n                    </label>\r\n\r\n                    <label>\r\n                        Comments\r\n                        <textarea name=\"comments\"></textarea>\r\n                    </label>\r\n\r\n                </fieldset>\r\n\r\n                <input class=\"btn btn-default\" type=\"submit\" name=\"submit\" value=\"Purchase\">\r\n\r\n            </form>\r\n        </div>\r\n    </section>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-schedule/conference-schedule.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-schedule/conference-schedule.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConferenceConferenceScheduleConferenceScheduleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <section class=\"row-alt\">\r\n        <div class=\"lead container\">\r\n            <h1>Schedule</h1>\r\n            <p>The conference opens with amazing workshops and continues with two days of incredible talks and keynotes,\r\n                all of which are facilitated by industry-leading experts.</p>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n        <div class=\"container\">\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            Workshops\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            August 24th\r\n                        </td>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"08:30:00\">8:30 AM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Registration\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"09:00:00\">9:00 AM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"adam-connor\">\r\n                                <h4>Adam Connor</h4>\r\n                                Lights! Camera! Interaction! Design Inspiration from Filmmakers\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"jennifer-jones\">\r\n                                <h4>Jennifer Jones</h4>\r\n                                What Designers Can Learn from Parenting\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"12:30:00\">12:30 PM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Lunch\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"14:00\">2:00 PM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"tessa-harmon\">\r\n                                <h4>Tessa Harmon</h4>\r\n                                Crafty Coding: Generating Knitting Patterns\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"russ-unger\">\r\n                                <h4>Russ Unger</h4>\r\n                                From Muppets to Mastery: Core UX Principles from Mr. Jim Henson\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            Conference\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            August 25th\r\n                        </td>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"08:30:00\">8:30 AM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Registration\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"09:00:00\">9:00 AM</time>\r\n                        </th>\r\n                        <td colspan=\"2\">\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"vitaly-friedman\">\r\n                                <h4>Vitaly Friedman</h4>\r\n                                Responsive Web Design: Clever Tips and Techniques\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"10:00:00\">10:00 AM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Morning Break\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"10:30:00\">10:30 AM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"shay-howe\">\r\n                                <h4>Shay Howe</h4>\r\n                                Less is More: How Constraints Cultivate Growth\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"jenn-downs\">\r\n                                <h4>Jenn Downs</h4>\r\n                                What&#8217;s Stopping You?\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"11:30:00\">11:30 AM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"carolyn-chandler\">\r\n                                <h4>Carolyn Chandler</h4>\r\n                                The Business of Play\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"chris-mills\">\r\n                                <h4>Chris Mills</h4>\r\n                                Heavy Metal Coding\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"12:30:00\">12:30 PM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Lunch\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"14:00\">2:00 PM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"zoe-mickley-gillenwater\">\r\n                                <h4>Zoe Mickley Gillenwater</h4>\r\n                                Leveling Up with Flexbox\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"darby-frey\">\r\n                                <h4>Darby Frey</h4>\r\n                                Building a Mobile Layout\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"15:00:00\">3:00 PM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"brad-smith\">\r\n                                <h4>Brad Smith</h4>\r\n                                What Designers and Strategists Can Learn from Dick Fosbury\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"erica-decker\">\r\n                                <h4>Erica Decker</h4>\r\n                                What Disney Can Teach You about User Experience Design\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"16:00:00\">4:00 PM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Afternoon Break\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"16:30:00\">4:30 PM</time>\r\n                        </th>\r\n                        <td colspan=\"2\">\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"estelle-weyl\">\r\n                                <h4>Estelle Weyl</h4>\r\n                                Select This!\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            Conference\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            August 26th\r\n                        </td>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"08:30:00\">8:30 AM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Registration\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"09:00:00\">9:00 AM</time>\r\n                        </th>\r\n                        <td colspan=\"2\">\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"aaron-irizarry\">\r\n                                <h4>Aaron Irizarry</h4>\r\n                                Designing a Culture of Design\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"10:00:00\">10:00 AM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Morning Break\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"10:30:00\">10:30 AM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"jen-myers\">\r\n                                <h4>Jen Myers</h4>\r\n                                Teaching Our CSS to Play Nice\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"aj-self\">\r\n                                <h4>AJ Self</h4>\r\n                                (You Should Be) Testing Your JavaScript\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"11:30:00\">11:30 AM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"dan-denney\">\r\n                                <h4>Dan Denney</h4>\r\n                                Creating HTML Emails Can Be Fun\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"maya-bruck\">\r\n                                <h4>Maya Bruck</h4>\r\n                                So You Want to Be a Unicorn\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"12:30:00\">12:30 PM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Lunch\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"14:00\">2:00 PM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"victoria-pater\">\r\n                                <h4>Victoria Pater</h4>\r\n                                Excellent Tacos Are Not Created in a Vacuum\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"arman-ghosh\">\r\n                                <h4>Arman Ghosh</h4>\r\n                                Designing Deals: How Good Design Drives Sales\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"15:00:00\">3:00 PM</time>\r\n                        </th>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"bermon-painter\">\r\n                                <h4>Bermon Painter</h4>\r\n                                Death to Wireframes: Long Live Rapid Prototyping\r\n                            </a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"candi-lemoine\">\r\n                                <h4>Candi Lemoine</h4>\r\n                                Making Remote Development Work\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"16:00:00\">4:00 PM</time>\r\n                        </th>\r\n                        <td class=\"schedule-offset\" colspan=\"2\">\r\n                            Afternoon Break\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">\r\n                            <time datetime=\"16:30:00\">4:30 PM</time>\r\n                        </th>\r\n                        <td colspan=\"2\">\r\n                            <a [routerLink]=\"['/conference/speakers']\" fragment=\"leslie-jensen-inman\">\r\n                                <h4>Dr. Leslie Jensen-Inman</h4>\r\n                                Designing to Learn\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </section>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-speakers/conference-speakers.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-speakers/conference-speakers.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConferenceConferenceSpeakersConferenceSpeakersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <section class=\"row-alt\">\r\n        <div class=\"lead container\">\r\n            <h1>Speakers</h1>\r\n            <p>We&#8217;re happy to welcome over twenty speakers to present on the industry&#8217;s latest technologies.\r\n                Prepare for an inspiration extravaganza.</p>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n        <div class=\"grid\">\r\n\r\n            <section class=\"speaker\" id=\"bermon-painter\">\r\n                <div class=\"col-2-3\">\r\n                    <h2>Bermon Painter</h2>\r\n                    <h5>Death to Wireframes: Long Live Rapid Prototyping</h5>\r\n                    <p>Static wireframes are a drag on the whole design process. Prototyping makes things a little\r\n                        better by allowing you to stitch together static wireframes or mockups while adding basic\r\n                        interactions. Rapid prototyping with HTML, CSS, and JavaScript is even better and faster; it\r\n                        increases collaboration and improves the iteration process. Kill your wireframes. Long live\r\n                        rapid prototyping.</p>\r\n                    <h5>About Bermon</h5>\r\n                    <p>Bermon is the organizer of various community groups for user experience designers and front-end\r\n                        developers, and the organizer of Blend Conference, a three-day, multi-track event for user\r\n                        experience strategists, designers and developers. He also leads the user experience team for\r\n                        Cardinal Solutions&#8217; Charlotte office, where he consults with large enterprise clients on\r\n                        interesting problems across user experience, design and front-end development.</p>\r\n                </div>\r\n                <aside class=\"col-1-3\">\r\n                    <div class=\"speaker-info\">\r\n                        <img src=\"assets/conference/images/speakers/bermon-painter.jpg\" alt=\"Bermon Painter\">\r\n                        <ul>\r\n                            <li><a target=\"_blank\" href=\"https://twitter.com/bermonpainter\">@bermonpainter</a></li>\r\n                            <li><a target=\"_blank\" href=\"http://bermonpainter.com/\">bermonpainter.com</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </aside>\r\n            </section>\r\n\r\n            <section class=\"speaker\" id=\"brad-smith\">\r\n                <div class=\"col-2-3\">\r\n                    <h2>Brad Smith</h2>\r\n                    <h5>What Designers and Strategists Can Learn from Dick Fosbury</h5>\r\n                    <p>Dick Fosbury is an American track and field athlete who challenged the conventional approach to\r\n                        the high jump with an unorthodox &#8220;back first&#8221; technique that became known as the\r\n                        Fosbury Flop. His innovative approach to a sport that seemed to have reached its limits was\r\n                        ridiculed at first, with sportswriters labeling him &#8220;the world&#8217;s laziest high\r\n                        jumper&#8221; &#8212; but today variations of the Fosbury Flop are used by almost every high\r\n                        jumper.</p>\r\n                    <p>We need to challenge conventions, too. Many of the design conventions used in web, mobile and\r\n                        device interfaces have evolved from systems and processes that no longer connect with our\r\n                        audiences&#8217; realities: a floppy disk as a metaphor to &#8220;save&#8221; information, push\r\n                        buttons as control devices and typography standards derived from mechanical typesetting.</p>\r\n                    <p>As designers and strategists, we need to think like Dick Fosbury, to deconstruct analogues, and\r\n                        to free ourselves from outdated ideas so that we can develop the new interfaces and interactions\r\n                        of the future.</p>\r\n                    <h5>About Brad</h5>\r\n                    <p>Brad Smith is executive director for WebVisions, a conference that explores the future of the\r\n                        web. Most recently he launched &#8220;The Institute for Social Good,&#8221; an organization that\r\n                        connects non-profits with volunteers willing to spend a day building awesome web and mobile apps\r\n                        to change the world for the better.</p>\r\n                </div>\r\n                <aside class=\"col-1-3\">\r\n                    <div class=\"speaker-info\">\r\n                        <img src=\"assets/conference/images/speakers/brad-smith.jpg\" alt=\"Brad Smith\">\r\n                        <ul>\r\n                            <li><a target=\"_blank\" href=\"http://www.webvisionsevent.com/\">webvisionsevent.com</a></li>\r\n                            <li><a target=\"_blank\"\r\n                                    href=\"http://www.instituteforsocialgood.org/\">instituteforsocialgood.org</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </aside>\r\n            </section>\r\n\r\n            <section class=\"speaker\" id=\"candi-lemoine\">\r\n                <div class=\"col-2-3\">\r\n                    <h2>Candi Lemoine</h2>\r\n                    <h5>Making Remote Development Work</h5>\r\n                    <p>It&#8217;s not uncommon for developers and designers to work from home. There are also a few\r\n                        companies that have multiple offices. Working for a business that spans three different time\r\n                        zones, Candi Lemoine will show how you make cross-office collaboration work. She will suggest\r\n                        various helpful tools because constant communication is key.</p>\r\n                    <h5>About Candi</h5>\r\n                    <p>Candi Lemoine is a User Interface Developer at Dominion Marine Media as well as a Customer\r\n                        Advocate at A Book Apart. Aside from researching about user experience and design patterns, she\r\n                        also loves mentoring college students about the front-end side of the web. She also enjoys\r\n                        participating in hackathons with other co-workers and students.</p>\r\n                </div>\r\n                <aside class=\"col-1-3\">\r\n                    <div class=\"speaker-info\">\r\n                        <img src=\"assets/conference/images/speakers/candi-lemoine.jpg\" alt=\"Candi Lemoine\">\r\n                        <ul>\r\n                            <li><a target=\"_blank\" href=\"https://twitter.com/candicodeit\">@candicodeit</a></li>\r\n                            <li><a target=\"_blank\" href=\"http://candicode.it/\">candicode.it</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </aside>\r\n            </section>\r\n\r\n        </div>\r\n    </section>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-venue/conference-venue.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-venue/conference-venue.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConferenceConferenceVenueConferenceVenueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n\r\n    <section class=\"row-alt\">\r\n        <div class=\"lead container\">\r\n            <h1>Venue</h1>\r\n            <p>The conference is held at The Chicago Theatre, a beautiful historical landmark.\r\n                The conference hotel, Hotel Chicago, is a short walk away down State Street.</p>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n        <div class=\"grid\">\r\n            <section class=\"venue-theatre\">\r\n\r\n                <div class=\"col-1-3\">\r\n                    <h2>Chicago Theatre</h2>\r\n                    <p>175 N State St <br> Chicago, IL 60601</p>\r\n                    <p><a target=\"_blank\" href=\"http://www.thechicagotheatre.com/\">thechicagotheatre.com</a> <br> (312)\r\n                        462-6300</p>\r\n                </div>\r\n                <!--\r\n                --><iframe class=\"venue-map col-2-3\"\r\n                    src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5940.715157609794!2d-87.63073934687405!3d41.885166376910625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4700ddf60fcbfad6!2sThe%20Chicago%20Theatre!5e0!3m2!1sen!2sus!4v1590609522688!5m2!1sen!2sus\"></iframe>\r\n            </section>\r\n\r\n            <section class=\"venue-hotel\">\r\n                <div class=\"col-1-3\">\r\n                    <h2>Hotel Chicago</h2>\r\n                    <p>333 N Dearborn St <br> Chicago, IL 60654</p>\r\n                    <p><a target=\"_blank\" href=\"http://thehotelchicago.com/\">thehotelchicago.com</a> <br> (312) 245-0333\r\n                    </p>\r\n                </div>\r\n                <!--\r\n                --><iframe class=\"venue-map col-2-3\" src=\"https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!\r\n                1s0x880e2cb1da049173%3A0xa5c91d255a775f0b!2sHotel+Sax+Chicago%2C+North+Dearborn+Street%2C+Ch\r\n                icago%2C+IL!5e0!3m2!1sen!2sus!4v1388702493978\"></iframe>\r\n            </section>\r\n        </div>\r\n    </section>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConferenceConferenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n\r\n  <header class=\"primary-header container group\">\r\n    <h1 class=\"logo\">\r\n      <a [routerLink]=\"['home']\">Styles <br> Conference</a>\r\n      <div class=\"menu\" (click)=\"menuClicked()\">\r\n        <div *ngIf=\"!showDesktop\"></div>\r\n        <div *ngIf=\"!showDesktop\"></div>\r\n        <div *ngIf=\"!showDesktop\"></div>\r\n        <img *ngIf=\"showDesktop\" src=\"assets/bookmark-landing/icon-close.svg\" alt=\"\">\r\n      </div>\r\n    </h1>\r\n    <h3 class=\"tagline\">August 24&ndash;26th &mdash; Chicago, IL</h3>\r\n    <nav (click)=\"showDesktop && menuClicked()\" class=\"desktop nav primary-nav\" [ngStyle]=\"{'display': displayStyle}\">\r\n      <ul>\r\n        <li><a [routerLink]=\"['home']\">Home</a></li>\r\n        <!--\r\n              -->\r\n        <li><a [routerLink]=\"['speakers']\">Speakers</a></li>\r\n        <!--\r\n              -->\r\n        <li><a [routerLink]=\"['schedule']\">Schedule</a></li>\r\n        <!--\r\n            -->\r\n        <li><a [routerLink]=\"['venue']\">Venue</a></li>\r\n        <!--\r\n            -->\r\n        <li><a [routerLink]=\"['register']\">Register</a></li>\r\n      </ul>\r\n      <small *ngIf=\"showDesktop\">&copy; Styles Conference</small>\r\n    </nav>\r\n  </header>\r\n\r\n  <section class=\"wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </section>\r\n\r\n  <footer class=\"primary-footer container group\">\r\n    <small>&copy; Styles Conference</small>\r\n    <nav class=\"nav\">\r\n      <ul>\r\n        <li><a [routerLink]=\"['home']\">Home</a></li>\r\n        <!--\r\n              -->\r\n        <li><a [routerLink]=\"['speakers']\">Speakers</a></li>\r\n        <!--\r\n              -->\r\n        <li><a [routerLink]=\"['schedule']\">Schedule</a></li>\r\n        <!--\r\n              -->\r\n        <li><a [routerLink]=\"['venue']\">Venue</a></li>\r\n        <!--\r\n              -->\r\n        <li><a [routerLink]=\"['register']\">Register</a></li>\r\n      </ul>\r\n    </nav>\r\n  </footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries-list/countries-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries-list/countries-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCountriesCountriesListCountriesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"search\">\r\n    <div class=\"container\">\r\n        <input type=\"text\" [(ngModel)]=\"searchCountry\" placeholder=\"Search for a country...\"\r\n            [ngStyle]=\"{'background-color': backgroundElementColor, 'color': backgroundTextColor}\">\r\n        <i class=\"fa fa-search\"></i>\r\n        <div class=\"filter\">\r\n            <div #regionEl (click)=\"showRegions == 'none'? showRegions='block' : showRegions='none'\"\r\n                [ngStyle]=\"{'background-color': backgroundElementColor}\">\r\n                <p>\r\n                    {{regionSelected}}\r\n                </p>\r\n                <i class=\"fa fa-angle-down\"></i>\r\n            </div>\r\n            <ul [ngStyle]=\"{'display': showRegions, 'background-color':backgroundElementColor}\">\r\n                <li *ngFor=\"let region of regions\" [routerLink]=\"[]\" [queryParams]=\"{ region: region}\"\r\n                    (click)=\"regionChanged(region)\">{{region}}</li>\r\n                <li *ngIf=\"regionSelected !== 'Filter by Region'\"  (click)=\"regionChanged('Filter by Region')\">Reset\r\n                    Filter\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"countries\" #countriesWidth>\r\n    <div class=\"container\">\r\n        <div [routerLink]=\"['/countries',country.name.toLowerCase()]\" queryParamsHandling='merge'\r\n            [queryParams]=\"{ search: searchCountry? searchCountry : null}\" class=\"country\" *ngFor=\"let country of filteredCountries\"\r\n            [ngStyle]=\"{'background-color': backgroundElementColor}\">\r\n            <div class=\"flag\" #countryWidth>\r\n                <img [src]=\"country.flag\" alt=\"\">\r\n            </div>\r\n            <div class=\"info\">\r\n                <h3>{{country.name}}</h3>\r\n                <p><span>Population: </span>{{country.population | number : '1.0'}}</p>\r\n                <p><span>Region: </span>{{country.region}}</p>\r\n                <p><span>Capital: </span>{{country.capital}}</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"difference > 0\" [ngStyle]=\"{'width': countryWidth+'px', 'height': '100%'}\"></div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries-list/country-detail/country-detail.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries-list/country-detail/country-detail.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCountriesCountriesListCountryDetailCountryDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button [ngStyle]=\"{'color': backgroundTextColor, 'background':backgroundElementColor}\"  queryParamsHandling='preserve' [routerLink]=\"['/countries']\"\r\n    type=\"button\">\r\n    <i class=\"fa fa-long-arrow-left\"></i>\r\n    <span>\r\n        Back\r\n    </span>\r\n</button>\r\n<div class=\"country\">\r\n    <div *ngIf=\"country\" class=\"container\">\r\n        <img [src]=\"country.flag\" alt=\"\">\r\n        <div>\r\n            <h2>\r\n                {{country.name}}\r\n            </h2>\r\n            <div class=\"info\">\r\n                <div>\r\n                    <h4>\r\n                        Native Name:\r\n                        <span>\r\n                            {{country.nativeName}}\r\n                        </span>\r\n                    </h4>\r\n                    <h4>\r\n                        Population:\r\n                        <span>\r\n                            {{country.population | number : '1.0'}}\r\n                        </span>\r\n                    </h4>\r\n                    <h4>\r\n                        Region:\r\n                        <span>\r\n                            {{country.region}}\r\n                        </span>\r\n                    </h4>\r\n                    <h4>\r\n                        Sub Region:\r\n                        <span>\r\n                            {{country.subregion}}\r\n                        </span>\r\n                    </h4>\r\n                    <h4>\r\n                        Capital:\r\n                        <span>\r\n                            {{country.capital}}\r\n                        </span>\r\n                    </h4>\r\n                </div>\r\n\r\n                <div>\r\n                    <h4>\r\n                        Top Level Doamin:\r\n                        <span>\r\n                            {{ country.topLevelDomain.toString()}}\r\n                        </span>\r\n                    </h4>\r\n                    <h4>\r\n                        Currencies:\r\n                        <span>\r\n                            {{ currencies.join(', ') }}\r\n                        </span>\r\n                    </h4>\r\n                    <h4>\r\n                        Languages\r\n                        <span>\r\n                            {{languages.join(', ')}}\r\n                        </span>\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n            <h4>\r\n                Border Countries:\r\n                <div>\r\n                    <span [routerLink]=\"['/countries',borderCountry]\"   queryParamsHandling='preserve' *ngFor=\"let borderCountry of borderCountries\"\r\n                        class=\"border\">\r\n                        {{borderCountry}}\r\n                    </span>\r\n                </div>\r\n            </h4>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCountriesCountriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\" [ngStyle]=\"{'background-color': backgroundColor, 'color':backgroundTextColor}\">\r\n    <div class=\"header\" [ngStyle]=\"{'background-color': backgroundElementColor}\">\r\n        <div class=\"container\">\r\n            <h1>\r\n                Where in the world?\r\n            </h1>\r\n            <h4 (click)=\"changeBackgroundColor()\">\r\n                <i class=\"fa fa-moon-o\"></i>\r\n                Dark Mode\r\n            </h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"container\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <h3>\r\n    Click on the webpage you want to see.\r\n  </h3>\r\n</header>\r\n<div class=\"components\">\r\n  <div class=\"row\">\r\n\r\n    <div (click)=\"navigate('myhalyk')\" (mouseover)=\"updateNavbarColor('myhalyk')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/myhalyk/myhalyk.png\"\r\n           alt=\"Halyk Bank component design\">\r\n      <a>Halyk Bank</a>\r\n    </div>\r\n\r\n    <div [routerLink]=\"['/conference']\" (mouseover)=\"updateNavbarColor('conference')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/conference/images/home/desktop-preview.jpg\"\r\n           alt=\"Conference component design\">\r\n      <a>Conference Component</a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div [routerLink]=\"['/sign']\" (mouseover)=\"updateNavbarColor('sign')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/sign/desktop-preview.jpg\"\r\n           alt=\"Signing component design\">\r\n      <a>Signing Component (sign up, sign in, update)</a>\r\n    </div>\r\n\r\n    <div [routerLink]=\"['/books']\" (mouseover)=\"updateNavbarColor('books')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/books/desktop-preview.jpg\"\r\n           alt=\"Books component design\">\r\n      <a>Books Component</a>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div [routerLink]=\"['/countries']\" (mouseover)=\"updateNavbarColor('countries')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/countries/desktop-preview.jpg\"\r\n           alt=\"Countries component design\">\r\n      <a>Countries Component</a>\r\n    </div>\r\n\r\n    <div (click)=\"navigate('admission')\" (mouseover)=\"updateNavbarColor('admission')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/admission/admission.png\"\r\n           alt=\"Admission component design\">\r\n      <a>Admission</a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div [routerLink]=\"['/rpsgame']\" (mouseover)=\"updateNavbarColor('rpsgame')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/rpsgame/desktop-preview.jpg\"\r\n           alt=\"RPS game component design\">\r\n      <a>RPS game Component</a>\r\n    </div>\r\n\r\n    <div [routerLink]=\"['/managelanding']\" (mouseover)=\"updateNavbarColor('managelanding')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/manage-landing/desktop-preview.jpg\"\r\n           alt=\"Manage landing component design\">\r\n      <a>Manage landing</a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div [routerLink]=\"['/bookmarklanding']\" (mouseover)=\"updateNavbarColor('bookmarklanding')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/bookmark-landing/desktop-preview.jpg\"\r\n           alt=\"Bookmark landing component design\">\r\n      <a>Bookmark landing component</a>\r\n    </div>\r\n\r\n    <div [routerLink]=\"['/urlshortening']\" (mouseover)=\"updateNavbarColor('urlshortening')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/url-shortening/desktop-preview.jpg\"\r\n           alt=\"Url-shortening component design\">\r\n      <a>Url-shortening Component</a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div [routerLink]=\"['/huddle']\" (mouseover)=\"updateNavbarColor('huddle')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/huddle/desktop-preview.jpg\"\r\n           alt=\"Huddle component design\">\r\n      <a>Huddle Component</a>\r\n    </div>\r\n\r\n    <div [routerLink]=\"['/clipboard']\" (mouseover)=\"updateNavbarColor('clipboard')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/clipboard/desktop-preview.jpg\"\r\n           alt=\"Clipboard component design\">\r\n      <a>Clipboard Component</a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div [routerLink]=\"['/pricing']\" (mouseover)=\"updateNavbarColor('pricing')\">\r\n      <img [ngStyle]=\"{'border-color': color }\" src=\"assets/pricing/desktop-design-monthly.jpg\"\r\n           alt=\"Pricing component design\">\r\n      <a>Pricing Component</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/huddle/huddle.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/huddle/huddle.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHuddleHuddleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\r\n    <div class=\"container\">\r\n        <img src=\"assets/huddle/logo.svg\" alt=\"\">\r\n        <button type=\"button\">Try it Free</button>\r\n    </div>\r\n</div>\r\n<div class=\"achievments\">\r\n    <div class=\"container\">\r\n        <div class=\"top\">\r\n            <h1>\r\n                Build The Community Your Fans Will Love\r\n            </h1>\r\n            <p>\r\n                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create\r\n                connections\r\n                with your users as you engage in genuine discussion.\r\n            </p>\r\n            <button type=\"button\">\r\n                Get Started For Free\r\n            </button>\r\n        </div>\r\n        <img src=\"assets/huddle/screen-mockups.svg\" alt=\"\">\r\n        <div class=\"bottom\">\r\n            <div>\r\n                <img src=\"assets/huddle/icon-communities.svg\" alt=\"\">\r\n                <h2>1.4k+</h2>\r\n                <p>Communities Formed</p>\r\n            </div>\r\n            <div>\r\n                <img src=\"assets/huddle/icon-messages.svg\" alt=\"\">\r\n                <h2>2.7m+</h2>\r\n                <p>Messages Sent</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"offer\">\r\n    <div class=\"sectionTop\">\r\n        <img src=\"assets/huddle/bg-section-top-desktop-1.svg\">\r\n        <div class=\"middle\">\r\n            <div class=\"container\">\r\n                <div>\r\n                    <h1>\r\n                        Grow Together\r\n                    </h1>\r\n                    <p>\r\n                        Generate meaningful discussions with your audience and build a strong, loyal community. Think of\r\n                        the\r\n                        insightful conversations you miss out on with a feedback form.\r\n                    </p>\r\n                </div>\r\n                <img src=\"assets/huddle/illustration-grow-together.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n        <img src=\"assets/huddle/bg-section-bottom-desktop-1.svg\">\r\n    </div>\r\n    <div class=\"sectionMiddle\">\r\n        <div class=\"container\">\r\n            <img src=\"assets/huddle/illustration-flowing-conversation.svg\" alt=\"\">\r\n            <div>\r\n                <h1>\r\n                    Flowing Conversations\r\n                </h1>\r\n                <p>\r\n                    You wouldn't paginate a conversation in real life, so why do it online? Our threads have\r\n                    just-in-time\r\n                    loading for a more natural flow.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"sectionBottom\">\r\n        <img src=\"assets/huddle/bg-section-top-desktop-2.svg\">\r\n        <div class=\"middle\">\r\n            <div class=\"container\">\r\n                <div>\r\n                    <h1>\r\n                        Your Users\r\n                    </h1>\r\n                    <p>\r\n                        It takes no time at all to integrate Huddle with your app's authentication solution. This means,\r\n                        once\r\n                        signed\r\n                        in to your app, your users can start chatting immediately.\r\n                    </p>\r\n                </div>\r\n                <img src=\"assets/huddle/illustration-your-users.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n        <img src=\"assets/huddle/bg-section-bottom-desktop-2.svg\">\r\n    </div>\r\n</div>\r\n<div class=\"join\">\r\n    <div class=\"container\">\r\n        <h1>\r\n            Ready To Build Your Community?\r\n        </h1>\r\n        <button type=\"button\">\r\n            Get Started For Free\r\n        </button>\r\n    </div>\r\n</div>\r\n<footer>\r\n    <img src=\"assets/huddle/bg-footer-top-desktop.svg\">\r\n    <div class=\"bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"contact\">\r\n                <img src=\"assets/huddle/logo-white.svg\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia\r\n                    vestibulum a, ultrices quis sem.\r\n                </p>\r\n                <div>\r\n                    <img src=\"assets/huddle/icon-phone.svg\" alt=\"\">\r\n                    <p>Phone: +1-543-123-4567</p>\r\n                </div>\r\n                <div>\r\n                    <img src=\"assets/huddle/icon-email.svg\" alt=\"\">\r\n                    <p>example@huddle.com</p>\r\n                </div>\r\n                <div class=\"social\">\r\n                    <img src=\"assets/huddle/icon-facebook.svg\" alt=\"\">\r\n                    <img src=\"assets/huddle/icon-instagram.svg\" alt=\"\">\r\n                    <img src=\"assets/huddle/icon-twitter.svg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"subscribe\">\r\n                <h2>\r\n                    Newsletter\r\n                </h2>\r\n                <p>\r\n                    To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send\r\n                    you spam or pass on your email address\r\n                </p>\r\n                <div>\r\n                    <input type=\"text\">\r\n                    <button type=\"button\">Subscribe</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-landing/manage-landing.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-landing/manage-landing.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageLandingManageLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\" [ngStyle]=\"{'background-image':  backgroundStyle}\">\r\n    <nav>\r\n        <div class=\"container\">\r\n            <div class=\"logo\">\r\n                <img src=\"assets/manage-landing/logo.svg\" alt=\"\">\r\n                <div class=\"menu\" (click)=\"menuClicked()\">\r\n                    <div *ngIf=\"!showDesktop\"></div>\r\n                    <div *ngIf=\"!showDesktop\"></div>\r\n                    <div *ngIf=\"!showDesktop\"></div>\r\n                    <img *ngIf=\"showDesktop\" src=\"assets/manage-landing/icon-close.svg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"desktop\" [ngStyle]=\"{'display': displayStyle}\">\r\n                <ul>\r\n                    <li>Pricing</li>\r\n                    <li>Product</li>\r\n                    <li>About us</li>\r\n                    <li>Careers</li>\r\n                    <li>Community</li>\r\n                </ul>\r\n                <div>\r\n                    <button *ngIf=\"!showDesktop\">Get Started</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"intro\">\r\n        <div class=\"container\">\r\n            <div class=\"text\">\r\n                <h1>Bring everyone together to build better products.</h1>\r\n                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team\r\n                    goals in view.</p>\r\n                <button>Get Started</button>\r\n            </div>\r\n            <div class=\"illustration\">\r\n                <img src=\"assets/manage-landing/illustration-intro.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"features\">\r\n        <div class=\"container\">\r\n            <div class=\"text\">\r\n                <h2>\r\n                    What’s different about Manage?\r\n                </h2>\r\n                <p>\r\n                    Manage provides all the functionality your team needs, without the complexity. Our software is\r\n                    tailor-made for modern digital product teams.\r\n                </p>\r\n            </div>\r\n            <div class=\"feature\">\r\n                <div>\r\n                    <span>01</span>\r\n                    <div>\r\n                        <h4><span>01</span>Track company-wide progress</h4>\r\n                        <p>\r\n                            See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the\r\n                            milestone level all the way done to the smallest of details. Never lose sight of the bigger\r\n                            picture again.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <span>02</span>\r\n                    <div>\r\n                        <h4><span>02</span>Advanced built-in reports</h4>\r\n                        <p>\r\n                            Set internal delivery estimates and track progress toward company goals. Our customisable\r\n                            dashboard helps you build out the reports you need to keep key stakeholders informed.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <span>03</span>\r\n                    <div>\r\n                        <h4><span>03</span>Everything you need in one place</h4>\r\n                        <p>\r\n                            Stop jumping from one service to another to communicate, store files, track tasks and share\r\n                            documents. Manage offers an all-in-one team productivity solution.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"feedback\">\r\n        <h2>\r\n            What they’ve said\r\n        </h2>\r\n        <div class=\"feedbacks\" #feedbacks [ngStyle]=\"{'transform':'translateX('+scrollArea+'px)'}\"\r\n            (mouseenter)=\"setEvent()\" (mouseleave)=\"startTimer()\">\r\n            <div class=\"column\" [ngStyle]=\"{'transform':'translateX('+scrollX[0]+'px)','display':displayElement[0]}\">\r\n                <div class=\"review\">\r\n                    <img src=\"assets/manage-landing/avatar-anisha.png\" alt=\"\">\r\n                    <h5>\r\n                        Anisha Li\r\n                    </h5>\r\n                    <p>\r\n                        “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger\r\n                        milestones at all times keeps everyone motivated.”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\">\r\n                    <img src=\"assets/manage-landing/avatar-ali.png\" alt=\"\">\r\n                    <h5>\r\n                        Ali Bravo\r\n                    </h5>\r\n                    <p>\r\n                        “We have been able to cancel so many other subscriptions since using Manage. There is no more\r\n                        cross-channel confusion and everyone is much more focused.”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\">\r\n                    <img src=\"assets/manage-landing/avatar-richard.png\" alt=\"\">\r\n                    <h5>\r\n                        Richard Watts\r\n                    </h5>\r\n                    <p>\r\n                        “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t\r\n                        stop\r\n                        recommending them to everyone I talk to!”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\">\r\n                    <img src=\"assets/manage-landing/avatar-shanai.png\" alt=\"\">\r\n                    <h5>\r\n                        Shanai Gough\r\n                    </h5>\r\n                    <p>\r\n                        “Their software allows us to track, manage and collaborate on our projects from anywhere. It\r\n                        keeps\r\n                        the whole team in-sync without being intrusive.”\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" [ngStyle]=\"{'transform':'translateX('+scrollX[1]+'px)','display':displayElement[1]}\">\r\n                <div class=\"review\" *ngIf=\"!selectMode || selectedReview == 1\">\r\n                    <img src=\"assets/manage-landing/avatar-anisha.png\" alt=\"\">\r\n                    <h5>\r\n                        Anisha Li\r\n                    </h5>\r\n                    <p>\r\n                        “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger\r\n                        milestones at all times keeps everyone motivated.”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\" *ngIf=\"!selectMode || selectedReview == 2\">\r\n                    <img src=\"assets/manage-landing/avatar-ali.png\" alt=\"\">\r\n                    <h5>\r\n                        Ali Bravo\r\n                    </h5>\r\n                    <p>\r\n                        “We have been able to cancel so many other subscriptions since using Manage. There is no more\r\n                        cross-channel confusion and everyone is much more focused.”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\" *ngIf=\"!selectMode || selectedReview == 3\">\r\n                    <img src=\"assets/manage-landing/avatar-richard.png\" alt=\"\">\r\n                    <h5>\r\n                        Richard Watts\r\n                    </h5>\r\n                    <p>\r\n                        “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t\r\n                        stop\r\n                        recommending them to everyone I talk to!”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\" *ngIf=\"!selectMode || selectedReview == 4\">\r\n                    <img src=\"assets/manage-landing/avatar-shanai.png\" alt=\"\">\r\n                    <h5>\r\n                        Shanai Gough\r\n                    </h5>\r\n                    <p>\r\n                        “Their software allows us to track, manage and collaborate on our projects from anywhere. It\r\n                        keeps\r\n                        the whole team in-sync without being intrusive.”\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" [ngStyle]=\"{'transform':'translateX('+scrollX[2]+'px)','display':displayElement[2]}\">\r\n                <div class=\"review\">\r\n                    <img src=\"assets/manage-landing/avatar-anisha.png\" alt=\"\">\r\n                    <h5>\r\n                        Anisha Li\r\n                    </h5>\r\n                    <p>\r\n                        “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger\r\n                        milestones at all times keeps everyone motivated.”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\">\r\n                    <img src=\"assets/manage-landing/avatar-ali.png\" alt=\"\">\r\n                    <h5>\r\n                        Ali Bravo\r\n                    </h5>\r\n                    <p>\r\n                        “We have been able to cancel so many other subscriptions since using Manage. There is no more\r\n                        cross-channel confusion and everyone is much more focused.”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\">\r\n                    <img src=\"assets/manage-landing/avatar-richard.png\" alt=\"\">\r\n                    <h5>\r\n                        Richard Watts\r\n                    </h5>\r\n                    <p>\r\n                        “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t\r\n                        stop\r\n                        recommending them to everyone I talk to!”\r\n                    </p>\r\n                </div>\r\n                <div class=\"review\">\r\n                    <img src=\"assets/manage-landing/avatar-shanai.png\" alt=\"\">\r\n                    <h5>\r\n                        Shanai Gough\r\n                    </h5>\r\n                    <p>\r\n                        “Their software allows us to track, manage and collaborate on our projects from anywhere. It\r\n                        keeps\r\n                        the whole team in-sync without being intrusive.”\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"select\">\r\n            <div (click)=\"selectReview(1)\" [ngStyle]=\"selectedReview==1 && {'background-color':'#f94b1d'}\"></div>\r\n            <div (click)=\"selectReview(2)\" [ngStyle]=\"selectedReview==2 && {'background-color':'#f94b1d'}\"></div>\r\n            <div (click)=\"selectReview(3)\" [ngStyle]=\"selectedReview==3 && {'background-color':'#f94b1d'}\"></div>\r\n            <div (click)=\"selectReview(4)\" [ngStyle]=\"selectedReview==4 && {'background-color':'#f94b1d'}\"></div>\r\n        </div>\r\n        <button>Get Started</button>\r\n    </div>\r\n\r\n    <div class=\"contact\"\r\n        [ngStyle]=\"{'background-image': 'url(\\'assets/manage-landing/bg-simplify-section-desktop.svg\\')'}\">\r\n        <div class=\"container\">\r\n            <h1>Simplify how your team works today.</h1>\r\n            <button>Get Started</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"logo\">\r\n                <img src=\"assets/manage-landing/logo-white.svg\" alt=\"\">\r\n                <div class=\"social\">\r\n                    <img src=\"assets/manage-landing/icon-facebook.svg\" alt=\"\">\r\n                    <img src=\"assets/manage-landing/icon-youtube.svg\" alt=\"\">\r\n                    <img src=\"assets/manage-landing/icon-twitter.svg\" alt=\"\">\r\n                    <img src=\"assets/manage-landing/icon-pinterest.svg\" alt=\"\">\r\n                    <img src=\"assets/manage-landing/icon-instagram.svg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"navigation\">\r\n                <ul>\r\n                    <li>Home</li>\r\n                    <li>Pricing</li>\r\n                    <li>Products</li>\r\n                    <li>About us</li>\r\n                </ul>\r\n                <ul>\r\n                    <li>Careers</li>\r\n                    <li>Community</li>\r\n                    <li>Privacy Policy</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"subscribe\">\r\n                <input type=\"text\">\r\n                <button type=\"button\">Go</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPricingPricingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-wrapper\" [ngStyle]=\"{'background-image':  backgroundStyle}\">\r\n  <div class=\"main-content\">\r\n    <header>\r\n      <h1>Our Pricing</h1>\r\n      <div class=\"toggle\">\r\n        <span>Annually</span>\r\n        <label class=\"switch\">\r\n          <input type=\"checkbox\" [(ngModel)]=\"checkBox\" (click)=\"changePackage()\">\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n        <span>Monthly</span>\r\n      </div>\r\n    </header>\r\n    <main>\r\n      <div class=\"cards\">\r\n        <div class=\"card\" *ngFor=\"let package of packages\">\r\n          <h3>{{package.title}}</h3>\r\n          <h1><span>$ </span>{{package.price}}</h1>\r\n          <hr>\r\n          <p>{{package.storage}} Storage</p>\r\n          <hr>\r\n          <p>{{package.users}} Users allowed</p>\r\n          <hr>\r\n          <p>Send up to {{package.data}} GB</p>\r\n          <hr>\r\n          <button type=\"button\">Learn More</button>\r\n        </div>\r\n      </div>\r\n    </main>\r\n    <footer>\r\n      <div class=\"attribution\">\r\n        Challenge by <a href=\"https://www.frontendmentor.io?ref=challenge\" target=\"_blank\">Frontend Mentor</a>.\r\n        Coded by <a href=\"#\">Tornike Janashia</a>.\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/rpsgame.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/rpsgame.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRpsgameRpsgameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <div class=\"scoreboard\">\r\n        <div class=\"container\">\r\n            <div>\r\n                <img src=\"assets/rpsgame/logo.svg\" alt=\"\">\r\n                <div>\r\n                    <h5>Score</h5>\r\n                    <p>\r\n                        {{ score }}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"game\" *ngIf=\"!usersChoice\">\r\n        <div class=\"container\">\r\n            <div class=\"triangle\">\r\n                <img src=\"assets/rpsgame/bg-triangle.svg\" alt=\"\">\r\n                <div (click)=\"usersChoice='paper'\" class=\"icon paper\">\r\n                    <img src=\"assets/rpsgame/icon-paper.svg\" alt=\"\">\r\n                </div>\r\n                <div (click)=\"usersChoice='rock'\" class=\"icon rock\">\r\n                    <img src=\"assets/rpsgame/icon-rock.svg\" alt=\"\">\r\n                </div>\r\n                <div (click)=\"usersChoice='scissors'\" class=\"icon scissors\">\r\n                    <img src=\"assets/rpsgame/icon-scissors.svg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"versus\" *ngIf=\"usersChoice\">\r\n        <app-versus [userPicked]=\"usersChoice\" (restart)=\"updateScore($event)\"></app-versus>\r\n    </div>\r\n\r\n    <div class=\"rules\" *ngIf=showRules>\r\n        <app-rules (closed)=\"showRules=!showRules\"></app-rules>\r\n    </div>\r\n\r\n    <button type=\"button\" (click)=\"showRules=!showRules\">Rules</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/rules/rules.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/rules/rules.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRpsgameRulesRulesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"background\">\r\n    <div class=\"box\">\r\n        <div>\r\n            <h3>Rules</h3>\r\n            <img (click)=\"onClose()\" src=\"assets/rpsgame/icon-close.svg\" alt=\"\">\r\n        </div>\r\n        <img src=\"assets/rpsgame/image-rules.svg\" alt=\"\">\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/versus/versus.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/versus/versus.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRpsgameVersusVersusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"versus\">\r\n    <h3 *ngIf=\"time>0\" [ngStyle]=\"{'color':timerColorStyle, 'animation-play-state': timerAnimationStyle}\">{{time}}</h3>\r\n    <div class=\"container\" [ngSwitch]=\"userPicked\">\r\n        <div>\r\n            <h3>You picked</h3>\r\n            <div *ngSwitchCase=\"'paper'\" class=\"icon paper\" [ngClass]=\"{winner : winner=='player'}\">\r\n                <img src=\"assets/rpsgame/icon-paper.svg\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"'rock'\" class=\"icon rock\" [ngClass]=\"{'winner': winner=='player'}\">\r\n                <img src=\"assets/rpsgame/icon-rock.svg\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"'scissors'\" class=\"icon scissors\" [ngClass]=\"{'winner': winner=='player'}\">\r\n                <img src=\"assets/rpsgame/icon-scissors.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <h3>The house picked</h3>\r\n            <div *ngIf=\"time>0\" class=\"icon blank\"></div>\r\n            <div *ngIf=\"time==0\" [ngSwitch]=\"housePicked\">\r\n                <div *ngSwitchCase=\"'paper'\" class=\"icon paper\" [ngClass]=\"{'winner': winner=='house'}\">\r\n                    <img src=\"assets/rpsgame/icon-paper.svg\" alt=\"\">\r\n                </div>\r\n                <div *ngSwitchCase=\"'rock'\" class=\"icon rock\" [ngClass]=\"{'winner': winner=='house'}\">\r\n                    <img src=\"assets/rpsgame/icon-rock.svg\" alt=\"\">\r\n                </div>\r\n                <div *ngSwitchCase=\"'scissors'\" class=\"icon scissors\" [ngClass]=\"{'winner': winner=='house'}\">\r\n                    <img src=\"assets/rpsgame/icon-scissors.svg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"result\" *ngIf=\"result\">\r\n    <h3>\r\n        {{ result == 'Draw' ? '' : 'You'}} {{result}}\r\n    </h3>\r\n    <button type=\"button\" (click)=\"restartGame()\">Play again</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/header.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/header.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isAuthenticated\">\r\n    <div class=\"container\">\r\n        <div class=\"user\">\r\n            <img [src]=\"avatarSrc\" alt=\"\">\r\n            <div class=\"menu\" (click)=\"menuClicked=!menuClicked\">\r\n                <div></div>\r\n                <div></div>\r\n                <div></div>\r\n            </div>\r\n            <button *ngIf=\"menuClicked\" (click)=\"logout()\">Log Out</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignSignComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\" [ngStyle]=\"{'background-image': 'url(\\'assets/sign/bg-intro-desktop.png\\')'}\">\r\n    <app-header *ngIf=\"fetchedInput['gender']\" [isAuthenticated]=\" isAuthenticated\" [gender]=\"fetchedInput['gender']\">\r\n    </app-header>\r\n    <div class=\"container\" [ngClass]=\"{'authenticated': isAuthenticated}\">\r\n        <div class=\"text\">\r\n            <h1>\r\n                Learn to code by watching others\r\n            </h1>\r\n            <p>\r\n                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but\r\n                understanding how developers think is invaluable.\r\n            </p>\r\n        </div>\r\n        <div class=\"form-wrapper\">\r\n            <div *ngIf=\"!isLoginMode\" class=\"steps\">\r\n                <div (click)=\"isAuthenticated && step=0; loginMode.next(false);\"\r\n                    [ngClass]=\"{'active':step==0,'authenticated': isAuthenticated}\">\r\n                    {{isAuthenticated ? 'General information' : 'Step 1'}}</div>\r\n                <div (click)=\"isAuthenticated && step=1\"\r\n                    [ngClass]=\"{'active':step==1,'authenticated': isAuthenticated}\">\r\n                    {{isAuthenticated ? 'Account infromation' : 'Step 2'}}</div>\r\n                <div (click)=\"isAuthenticated && step=2\"\r\n                    [ngClass]=\"{'active':step==2,'authenticated': isAuthenticated}\">\r\n                    {{isAuthenticated ? 'About' : 'Step 3'}}</div>\r\n            </div>\r\n            <div *ngIf=\"isLoginMode\" class=\"steps\">\r\n                <div class=\"active\">Welcome</div>\r\n            </div>\r\n            <div *ngIf=\"isLoginMode\" class=\"form login\">\r\n                <div *ngIf=\"errorMessage\" class=\"error\">\r\n                    <p>{{errorMessage}}</p>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Email</label>\r\n                    <div>\r\n                        <input type=\"email\" class=\"form-control\" name=\"emailInput\" id=\"email\" ngModel #email=\"ngModel\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group password\">\r\n                    <label for=\"password\">Password</label>\r\n                    <div>\r\n                        <input  type=\"password\" class=\"form-control\" name=\"passwordInput\" id=\"password\" ngModel\r\n                            #password=\"ngModel\">\r\n                    </div>\r\n                    <!-- <p>\r\n                        Forgot password? <a href=\"#\" [routerLink]=\"[]\" (click)=\"forgotPassword=true;\">click here</a> to reset password.\r\n                    </p> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-primary\" type=\"button\" style=\"margin-bottom: 0.5rem;\"\r\n                        (click)=\"login(email.value,password.value)\">Log In</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"loginMode.next(!isLoginMode); step=0;\" type=\"button\">Switch\r\n                        to\r\n                        {{ isLoginMode? 'Sign Up' : 'Login' }} </button>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"isLoading\" class=\"loader\"></div>\r\n            <form *ngIf=\"!isLoginMode && userInput\" #registrationForm=\"ngForm\" (input)=\"onChanges()\" class=\"form\">\r\n                <div class=\"step-1\" *ngIf=\"step==0\">\r\n                    <div class=\"form-group\"\r\n                        [ngClass]=\"{'invalid': name.errors?.required && (name?.touched || name?.dirty), 'valid': name.valid && name.touched}\">\r\n                        <label for=\"name\">First Name</label>\r\n                        <div>\r\n                            <input type=\"text\" class=\"form-control\" name=\"firstName\" id=\"name\" ngModel required\r\n                                [(ngModel)]=\"userInput.firstName\" #name=\"ngModel\">\r\n                            <div class=\"validation\" *ngIf=\"name.errors?.required && (name?.touched || name?.dirty)\">\r\n                                First name is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                        [ngClass]=\"{'invalid': surname.errors?.required && (surname?.touched || surname?.dirty), 'valid': surname.valid && surname.touched }\">\r\n                        <label for=\"surname\">Last Name</label>\r\n                        <div>\r\n                            <input type=\"text\" class=\"form-control\" name=\"lastName\" id=\"surname\" ngModel required\r\n                                [(ngModel)]=\"userInput.lastName\" #surname=\"ngModel\">\r\n                            <div class=\"validation\"\r\n                                *ngIf=\"surname.errors?.required && (surname?.touched || surname?.dirty)\">\r\n                                Last name is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                        [ngClass]=\"{'invalid': gender.errors?.required && (gender?.touched || gender?.dirty), 'valid': gender.valid && gender.touched }\">\r\n                        <label for=\"gender\">Gender</label>\r\n                        <div>\r\n                            <div class=\"gender\" id=\"gender\">\r\n                                <input #genderInput #gender=\"ngModel\" autocomplete=\"off\" type=\"radio\"\r\n                                    class=\"form-control gender\" id=\"male\" value=\"male\" name=\"gender\"\r\n                                    [(ngModel)]=\"userInput.gender\" ngModel required (change)=\"onChanges()\">\r\n                                <label for=\"male\">Male</label>\r\n                                <input #genderInput #gender=\"ngModel\" autocomplete=\"off\" type=\"radio\"\r\n                                    class=\"form-control gender\" id=\"female\" value=\"female\" name=\"gender\"\r\n                                    [(ngModel)]=\"userInput.gender\" ngModel required (change)=\"onChanges()\">\r\n                                <label for=\"female\">Female</label>\r\n                            </div>\r\n                            <div class=\"validation\"\r\n                                *ngIf=\"gender.errors?.required && (gender?.touched || gender?.dirty)\">\r\n                                Gender is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"birthday\" [ngClass]=\"{'invalid': (month.errors?.isInList || month.errors?.required)  && month.touched && showMonth == 'none'|| \r\n                        (day.errors?.isInList || day.errors?.required) && day.touched && showDay == 'none'|| \r\n                        (year.errors?.isInList || year.errors?.required) && year.touched && showYear == 'none', \r\n                            'valid': birthdayGroup.valid && birthdayGroup?.touched }\">Birthday</label>\r\n                        <div ngModelGroup=\"birthdayGroup\" class=\"birthday\" id=\"birthday\" #birthdayGroup=\"ngModelGroup\">\r\n                            <div\r\n                                [ngClass]=\"{'invalid': (month.errors?.isInList || month.errors?.required) && (month?.touched || month?.dirty) && showMonth == 'none', 'valid': month.valid && month.touched && showMonth == 'none' }\">\r\n                                <label for=\"month\">Month</label>\r\n                                <div class=\"filter\" (keyup.tab)=\"showMonth='block'\"\r\n                                    (keydown.tab)=\"onKey($event); showMonth='none'\" (keyup.arrowdown)=\"onKey($event);\"\r\n                                    (keyup.arrowup)=\"onKey($event)\" (keydown.enter)=\"onKey($event); showMonth='none'\"\r\n                                    (keydown.backspace)=\"onKey($event)\" (focusout)=\"arrowkeyLocation=0\">\r\n                                    <div class=\"month\">\r\n                                        <input IsInListValidator validateList=\"month\"\r\n                                            [IsInListMonthValidator]=\"date.months\" #monthInput #month=\"ngModel\"\r\n                                            autocomplete=\"off\" type=\"text\" class=\"form-control month\" id=\"month\"\r\n                                            name=\"month\" [(ngModel)]=\"userInput.birthdayMonth\"\r\n                                            (click)=\"showMonth == 'none'? showMonth='block' : showMonth='none'\"\r\n                                            (input)=\"showMonth='block'; onKey($event)\" ngModel required>\r\n                                        <i class=\"fa fa-angle-down\" *ngIf=\"showMonth == 'none'\"\r\n                                            (click)=\"dayInput.focus()\"></i>\r\n                                        <i class=\"fa fa-angle-up\" *ngIf=\"showMonth == 'block'\"\r\n                                            (click)=\"dayInput.focus()\"></i>\r\n                                    </div>\r\n                                    <ul #monthList [ngStyle]=\"{'display': showMonth}\">\r\n                                        <li *ngFor=\"let month of date.months | filter : userInput.birthdayMonth let i =index\"\r\n                                            (click)=\"userInput.birthdayMonth=month; showMonth == 'none'? showMonth='block' : showMonth='none' \"\r\n                                            [ngClass]=\"{'active': i==arrowkeyLocation}\">\r\n                                            {{month}}\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"validation\"\r\n                                        *ngIf=\"month.errors?.required && (month?.touched || month?.dirty) && showMonth == 'none'\">\r\n                                        Month is required\r\n                                    </div>\r\n                                    <div class=\"validation\"\r\n                                        *ngIf=\"!month.errors?.required && month.errors?.isInList && (month?.touched || month?.dirty) && showMonth == 'none'\">\r\n                                        Invalid month\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div\r\n                                [ngClass]=\"{'invalid': (day.errors?.isInList || day.errors?.required) && (day?.touched || day?.dirty) && showDay == 'none', 'valid': day.valid && day.touched && showDay == 'none' }\">\r\n                                <label for=\"day\">Day</label>\r\n                                <div class=\"filter\" (keyup.tab)=\"showDay='block'\"\r\n                                    (keydown.tab)=\"onKey($event); showDay='none'\" (keyup.arrowdown)=\"onKey($event);\"\r\n                                    (keyup.arrowup)=\"onKey($event)\" (keydown.enter)=\"onKey($event); showDay='none'\"\r\n                                    (keydown.backspace)=\"onKey($event)\" (focusout)=\"arrowkeyLocation=0\">\r\n                                    <div class=\"day\">\r\n                                        <input IsInListValidator validateList=\"day\" [IsInListDayValidator]=\"date.days\"\r\n                                            #dayInput #day=\"ngModel\" autocomplete=\"off\" type=\"text\"\r\n                                            class=\"form-control day\" id=\"day\" name=\"day\"\r\n                                            [(ngModel)]=\"userInput.birthdayDay\"\r\n                                            (click)=\"showDay == 'none'? showDay='block' : showDay='none'\"\r\n                                            (input)=\"showDay='block'; onKey($event)\" ngModel required>\r\n                                        <i class=\"fa fa-angle-down\" *ngIf=\"showDay == 'none'\"\r\n                                            (click)=\"dayInput.focus()\"></i>\r\n                                        <i class=\"fa fa-angle-up\" *ngIf=\"showDay == 'block'\"\r\n                                            (click)=\"dayInput.focus()\"></i>\r\n                                    </div>\r\n                                    <ul #dayList [ngStyle]=\"{'display': showDay}\">\r\n                                        <li *ngFor=\"let day of date.days | filter : userInput.birthdayDay?.toString() let i =index\"\r\n                                            (click)=\"userInput.birthdayDay=day; showDay == 'none'? showDay='block' : showDay='none' \"\r\n                                            [ngClass]=\"{'active': i==arrowkeyLocation}\">\r\n                                            {{day}}\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"validation\"\r\n                                        *ngIf=\"day.errors?.required && (day?.touched || day?.dirty) && showDay == 'none'\">\r\n                                        Day is required\r\n                                    </div>\r\n                                    <div class=\"validation\"\r\n                                        *ngIf=\"!day.errors?.required && day.errors?.isInList && (day?.touched || day?.dirty) && showDay == 'none'\">\r\n                                        Invalid day\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div\r\n                                [ngClass]=\"{'invalid': (year.errors?.isInList || year.errors?.required) && (year?.touched || year?.dirty) && showYear == 'none', 'valid': year.valid && year.touched && showYear == 'none' }\">\r\n                                <label for=\"year\">Year</label>\r\n                                <div class=\"filter\" (keyup.tab)=\"showYear='block'\"\r\n                                    (keydown.tab)=\"onKey($event); showYear='none'\" (keyup.arrowdown)=\"onKey($event);\"\r\n                                    (keyup.arrowup)=\"onKey($event)\" (keydown.enter)=\"onKey($event); showYear='none'\"\r\n                                    (keydown.backspace)=\"onKey($event)\" (focusout)=\"arrowkeyLocation=0\">\r\n                                    <div class=\"year\">\r\n                                        <input IsInListValidator validateList=\"year\"\r\n                                            [IsInListYearValidator]=\"date.years\" #yearInput #year=\"ngModel\"\r\n                                            autocomplete=\"off\" type=\"text\" class=\"form-control year\" id=\"year\"\r\n                                            name=\"year\" [(ngModel)]=\"userInput.birthdayYear\"\r\n                                            (click)=\"showYear == 'none'? showYear='block' : showYear='none'\" ngModel\r\n                                            (input)=\"showYear='block'; onKey($event)\" required>\r\n                                        <i class=\"fa fa-angle-down\" *ngIf=\"showYear == 'none'\"\r\n                                            (click)=\"dayInput.focus()\"></i>\r\n                                        <i class=\"fa fa-angle-up\" *ngIf=\"showYear == 'block'\"\r\n                                            (click)=\"dayInput.focus()\"></i>\r\n                                    </div>\r\n                                    <ul #yearList [ngStyle]=\"{'display': showYear}\">\r\n                                        <li *ngFor=\"let year of date.years | filter : userInput.birthdayYear?.toString() let i =index\"\r\n                                            (click)=\"userInput.birthdayYear=year; showYear == 'none'? showYear='block' : showYear='none';\"\r\n                                            [ngClass]=\"{'active': i==arrowkeyLocation}\">\r\n                                            {{year}}\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"validation\"\r\n                                        *ngIf=\"year.errors?.required && (year?.touched || year?.dirty) && showYear == 'none'\">\r\n                                        Year is required\r\n                                    </div>\r\n                                    <div class=\"validation\"\r\n                                        *ngIf=\"!year.errors?.required && year.errors?.isInList && (year?.touched || year?.dirty) && showYear == 'none'\">\r\n                                        Invalid year\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"validation\"\r\n                                *ngIf=\"birthdayGroup.errors?.required && (birthdayGroup?.touched || birthdayGroup?.dirty)\">\r\n                                Birthday is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'invalid': (country.errors?.required || country.errors?.isInList) \r\n                        && (country?.touched || country?.dirty) && showCountry == 'none', \r\n                        'valid': country.valid && country.touched && showCountry == 'none' }\">\r\n                        <label for=\"country\">Country</label>\r\n                        <div class=\"filter\" (keyup.tab)=\"showCountry='block'\"\r\n                            (keydown.tab)=\"onKey($event); showCountry='none'\" (keyup.arrowdown)=\"onKey($event);\"\r\n                            (keyup.arrowup)=\"onKey($event)\" (keydown.enter)=\"onKey($event); showCountry='none'\"\r\n                            (keydown.backspace)=\"onKey($event)\" (focusout)=\"arrowkeyLocation=0;\">\r\n                            <div class=\"country\">\r\n                                <input IsInListValidator validateList=\"country\" [IsInListCountryValidator]=\"countries\"\r\n                                    #countryInput #country=\"ngModel\" autocomplete=\"off\" type=\"text\"\r\n                                    class=\"form-control country\" id=\"country\" name=\"country\"\r\n                                    [(ngModel)]=\"userInput.country\"\r\n                                    (click)=\"showCountry == 'none'? showCountry='block' : showCountry='none'\" ngModel\r\n                                    (input)=\"showCountry='block'; onKey($event);\" required>\r\n                                <i class=\"fa fa-angle-down\" *ngIf=\"showCountry == 'none'\"\r\n                                    (click)=\"dayInput.focus()\"></i>\r\n                                <i class=\"fa fa-angle-up\" *ngIf=\"showCountry == 'block'\" (click)=\"dayInput.focus()\"></i>\r\n                            </div>\r\n                            <ul #countryList class=\"country\" [ngStyle]=\"{'display': showCountry}\">\r\n                                <li *ngFor=\"let country of countries | filter : userInput.country let i =index\"\r\n                                    (click)=\"userInput.country=country; showCountry == 'none'? showCountry='block' : showCountry='none';\"\r\n                                    [ngClass]=\"{'active': i==arrowkeyLocation}\">\r\n                                    {{country}}\r\n                                </li>\r\n                            </ul>\r\n                            <div class=\"validation\"\r\n                                *ngIf=\"country.errors?.required && (country?.touched || country?.dirty) && showCountry == 'none'\">\r\n                                Country is required\r\n                            </div>\r\n                            <div class=\"validation\"\r\n                                *ngIf=\"country.errors?.isInList && (country?.touched || country?.dirty) && showCountry == 'none'\">\r\n                                Invalid Country\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"step-2\" *ngIf=\"step==1\">\r\n                    <div class=\"form-group\"\r\n                        [ngClass]=\"{'invalid': displayName.errors?.required && (displayName?.touched || displayName?.dirty), 'valid': displayName.valid && displayName.touched}\">\r\n                        <label for=\"displayName\">Username</label>\r\n                        <div>\r\n                            <input type=\"text\" class=\"form-control\" name=\"displayName\" id=\"displayName\" ngModel required\r\n                                [(ngModel)]=\"userInput.displayName\" #displayName=\"ngModel\">\r\n                            <div class=\"validation\"\r\n                                *ngIf=\"displayName.errors?.required && (displayName?.touched || displayName?.dirty)\">\r\n                                Username is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div ngModelGroup=\"emailGroup\" appConfrimEqualValidator #emailGroup=\"ngModelGroup\">\r\n                        <div class=\" form-group\" [ngClass]=\"{'invalid': email.errors?.required && (email?.touched || email?.dirty) || email && email?.invalid && email?.touched || emailErrorMessage, \r\n                            'valid': email.valid && email?.touched && !emailErrorMessage}\">\r\n                            <label for=\"email\">Email</label>\r\n                            <div>\r\n                                <input [disabled]=\"isAuthenticated && !editMode\" type=\"email\"\r\n                                    (input)=\"emailErrorMessage=null\" class=\"form-control\" name=\"emailInput\" id=\"email\"\r\n                                    ngModel required [(ngModel)]=\"userInput.email\" email #email=\"ngModel\">\r\n                                <div class=\"validation\"\r\n                                    *ngIf=\"email && email?.invalid && email?.touched && !email.errors?.required\">\r\n                                    Whoops, make sure it's an email</div>\r\n                                <div class=\"validation\"\r\n                                    *ngIf=\"email.errors?.required && (email?.touched || email?.dirty)\">\r\n                                    Email is required\r\n                                </div>\r\n                                <div class=\"validation\" *ngIf=\"emailErrorMessage\">\r\n                                    {{emailErrorMessage}}\r\n                                </div>\r\n                                <div *ngIf=\"isAuthenticated\" class=\"verification\">\r\n                                    <div [ngClass]=\"{'error':!emailVerified, 'success':emailVerified}\">\r\n                                        Email is {{emailVerified? '': 'not'}} Verified\r\n                                    </div>\r\n                                    <button [disabled]=\"email.invalid\" (click)=\"editMode=!editMode;\r\n                                    changeEmail()\">\r\n                                        {{editMode? 'Save' : 'Edit'}} email\r\n                                    </button>\r\n                                    <button (click)=\"verifyEmail(); clicked=true\" [disabled]=\"clicked\"\r\n                                        *ngIf=\"!emailVerified\">\r\n                                        Send email verification\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!isAuthenticated\" class=\"form-group\"\r\n                            [ngClass]=\"{'invalid': emailConfirm.errors?.required && (emailConfirm?.touched || emailConfirm?.dirty) ||\r\n                            emailGroup.errors?.EqualValidation && (!emailConfirm.errors?.required && emailConfirm?.touched), \r\n                            'valid': !emailGroup.errors?.EqualValidation && emailConfirm.valid && emailConfirm?.touched }\">\r\n                            <label for=\"email\">Confirm Email</label>\r\n                            <div>\r\n                                <input type=\"text\" class=\"form-control\" autocomplete=\"off\" name=\"confirmEmailInput\"\r\n                                    ngModel required #emailConfirm=\"ngModel\">\r\n                                <div class=\"validation\"\r\n                                    *ngIf=\"emailConfirm.errors?.required && (emailConfirm?.touched || emailConfirm?.dirty)\">\r\n                                    Email confirmation is required\r\n                                </div>\r\n                                <div class=\"validation\"\r\n                                    *ngIf=\"emailGroup.errors?.EqualValidation && (!emailConfirm.errors?.required && emailConfirm?.touched)\">\r\n                                    Entered Emails don't match\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div ngModelGroup=\"passwordGroup\" appConfrimEqualValidator #passwordGroup=\"ngModelGroup\">\r\n                        <div class=\"form-group\"\r\n                            [ngClass]=\"{'invalid': password.errors?.required && (password?.touched || password?.dirty) \r\n                            || password && password?.invalid && password?.touched, 'valid': password.valid && password?.touched }\">\r\n                            <label for=\"password\">Password</label>\r\n                            <div>\r\n                                <input [disabled]=\"isAuthenticated\" type=\"password\" class=\"form-control\"\r\n                                    name=\"passwordInput\" id=\"password\" ngModel [(ngModel)]=\"userInput.password\" required\r\n                                    minlength=\"8\" autocomplete=\"new-password\"\r\n                                    pattern=\"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$\"\r\n                                    #password=\"ngModel\">\r\n                                <div class=\"validation\" *ngIf=\"password.errors?.minlength && (password?.touched)\">\r\n                                    Password must be at least 8 characters long.\r\n                                </div>\r\n                                <div class=\"validation\"\r\n                                    *ngIf=\"password.errors?.pattern && (password?.touched)  && !password.errors?.minlength\">\r\n                                    Password must have at least one upper and lower case\r\n                                    characters and at least one digit.\r\n                                </div>\r\n                                <div class=\"validation\"\r\n                                    *ngIf=\"password.errors?.required && (password?.touched || password?.dirty)\">\r\n                                    Password is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!isAuthenticated\" class=\"form-group\"\r\n                            [ngClass]=\"{'invalid': passwordConfirm.errors?.required && (passwordConfirm?.touched || passwordConfirm?.dirty) ||\r\n                            passwordGroup.errors?.EqualValidation && (!passwordConfirm.errors?.required && passwordConfirm?.touched), \r\n                            'valid': !passwordGroup.errors?.EqualValidation && passwordConfirm.valid && passwordConfirm?.touched }\">\r\n                            <label for=\"password\">Confirm Password</label>\r\n                            <div>\r\n                                <input type=\"password\" class=\"form-control\" autocomplete=\"new-password\"\r\n                                    name=\"confirmPasswordInput\" ngModel required #passwordConfirm=\"ngModel\">\r\n                                <div class=\"validation\"\r\n                                    *ngIf=\"passwordConfirm.errors?.required && (passwordConfirm?.touched || passwordConfirm?.dirty)\">\r\n                                    Password confirmation is required\r\n                                </div>\r\n                                <div class=\"validation\"\r\n                                    *ngIf=\"passwordGroup.errors?.EqualValidation && (!passwordConfirm.errors?.required && passwordConfirm?.touched)\">\r\n                                    Entered Passwords don't match\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"step-3\" *ngIf=\"step==2\">\r\n                    <div class=\"form-group\">\r\n                        <p>Hello {{userInput.firstName}}, on the last step we would like to read short describing of\r\n                            yourself.</p>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"aboutMe\">\r\n                            About me\r\n                            <p>(Optional)</p>\r\n                        </label>\r\n                        <div>\r\n                            <textarea name=\"aboutMe\" id=\"aboutMe\" cols=\"30\" rows=\"10\"\r\n                                [(ngModel)]=\"userInput.aboutMe\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group buttons\" [ngClass]=\"{'authenticated':isAuthenticated}\">\r\n                    <button *ngIf=\"step==0 && !isAuthenticated\" (click)=\"loginMode.next(!isLoginMode); step=0\"\r\n                        type=\"button\">Switch to\r\n                        {{ isLoginMode? 'Sign Up' : 'Login' }} </button>\r\n                    <button *ngIf=\"step>0 && !isAuthenticated\" (click)=\"previousStep()\" type=\"button\">Back</button>\r\n                    <button *ngIf=\"!isAuthenticated\" [disabled]=\"registrationForm.invalid\"\r\n                        (click)=\"nextStep(registrationForm)\">{{step == 2 ?  'Finalize' : 'Next'}} </button>\r\n                    <button *ngIf=\"isAuthenticated\"\r\n                        [disabled]=\"updateForm || emailErrorMessage || errorMessage || editMode || registrationForm.invalid\"\r\n                        (click)=\"updateUser()\">Update</button>\r\n                    <button *ngIf=\"isAuthenticated\" [disabled]=\"updateForm\" (click)=\"resetFields()\">Reset</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/url-shortening/url-shortening.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/url-shortening/url-shortening.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUrlShorteningUrlShorteningComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <div class=\"container\">\r\n        <nav>\r\n            <div class=\"logo\">\r\n                <img src=\"assets/url-shortening/logo.svg\" alt=\"\">\r\n                <div class=\"menu\" (click)=\"menuClicked()\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"desktop\" [ngStyle]=\"{'display': displayStyle}\">\r\n                <ul>\r\n                    <li>Features</li>\r\n                    <li>Pricing</li>\r\n                    <li>Resources</li>\r\n                </ul>\r\n                <hr>\r\n                <div>\r\n                    <button>Login</button>\r\n                    <button class=\"primary\">Sign Up</button>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n        <div class=\"intro\">\r\n            <div>\r\n                <h2>\r\n                    More than just shorter links\r\n                </h2>\r\n                <p>\r\n                    Build your brand’s recognition and get detailed insights on how your links are performing.\r\n                </p>\r\n                <button class=\"primary\">Get Started</button>\r\n            </div>\r\n            <img src=\"assets/url-shortening/illustration-working.svg\" class=\"working\" alt=\"\">\r\n        </div>\r\n    </div>\r\n    <div class=\"offers\">\r\n        <div class=\"feature\" [ngStyle]=\"{'background-image': 'url(\\'assets/url-shortening/bg-shorten-desktop.svg\\')'}\">\r\n            <div [ngClass]=\"{'invalid':linkInput.invalid && linkInput.touched}\">\r\n                <input type=\"text\" placeholder=\"Shorten a link here...\" required (input)=\"errorMessage=''\" [(ngModel)]=\"link\"\r\n                    #linkInput=\"ngModel\">\r\n                <button class=\"primary\" [disabled]=\"linkInput.invalid\" (click)=\"shortenLink(link)\">Shorten It!</button>\r\n            </div>\r\n            <span class=\"invalid\" *ngIf=\"linkInput.invalid && linkInput.touched\">\r\n                Please add a link\r\n            </span>\r\n            <span class=\"invalid\" *ngIf=\"errorMessage && !(linkInput.invalid && linkInput.touched)\">\r\n                {{errorMessage}}\r\n            </span>\r\n        </div>\r\n        <div class=\"container\">\r\n\r\n            <div class=\"links\" *ngFor=\"let shortenedLink of linkStorage\">\r\n                <div class=\"row\">\r\n                    <span>\r\n                        {{shortenedLink.originalUrl | truncate}}\r\n                    </span>\r\n                    <span>\r\n                        {{shortenedLink.shortendUrl}}\r\n                    </span>\r\n                    <button type=\"button\" class=\"primary\" [ngClass]=\"{'coppied': shortenedLink.shortendUrl === textCoppied }\" (click)=\"copyText(shortenedLink.shortendUrl)\">\r\n                        {{shortenedLink.shortendUrl === textCoppied ? 'Coppied!' : 'Copy' }}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <h1>Advanced Statistics</h1>\r\n            <p>\r\n                Track how your links are performing across the web with our advanced statistics dashboard.\r\n            </p>\r\n            <div class=\"images\">\r\n                <hr class=\"line\">\r\n                <div class=\"image image-brand\">\r\n                    <div>\r\n                        <img src=\"assets/url-shortening/icon-detailed-records.svg\" alt=\"\">\r\n                    </div>\r\n                    <h4>Brand Recognition</h4>\r\n                    <p>\r\n                        Boost your brand recognition with each click. Generic links don’t mean a thing. Branded\r\n                        links\r\n                        help\r\n                        instil confidence in your content.\r\n                    </p>\r\n                </div>\r\n                <div class=\"image image-records\">\r\n                    <div>\r\n                        <img src=\"assets/url-shortening/icon-detailed-records.svg\" alt=\"\">\r\n                    </div>\r\n                    <h4>\r\n                        Detailed Records\r\n                    </h4>\r\n                    <p>\r\n                        Gain insights into who is clicking your links. Knowing when and where people engage with\r\n                        your\r\n                        content\r\n                        helps inform better decisions.\r\n                    </p>\r\n                </div>\r\n                <div class=\"image image-customizable\">\r\n                    <div>\r\n                        <img src=\"assets/url-shortening/icon-fully-customizable.svg\" alt=\"\">\r\n                    </div>\r\n                    <h4>Fully Customizable</h4>\r\n                    <p>\r\n                        Improve brand awareness and content discoverability through customizable links,\r\n                        supercharging\r\n                        audience\r\n                        engagement.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"boost\" [ngStyle]=\"{'background-image': 'url(\\'assets/url-shortening/bg-boost-desktop.svg\\')'}\">\r\n        <h1>Boost your links today</h1>\r\n        <button class=\"primary\">Get Started</button>\r\n    </div>\r\n    <footer>\r\n        <div class=\"container\">\r\n            <div class=\"logo\">\r\n                <img src=\"assets/url-shortening/logowhite.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"info\">\r\n                <div>\r\n                    <p>Features</p>\r\n                    <ul>\r\n                        <li>Link Shortening</li>\r\n                        <li>Branded links</li>\r\n                        <li>Analytics</li>\r\n                    </ul>\r\n                </div>\r\n                <div>\r\n                    <p>Resources</p>\r\n                    <ul>\r\n                        <li>Blog</li>\r\n                        <li>Developers</li>\r\n                        <li>Support</li>\r\n                    </ul>\r\n                </div>\r\n                <div>\r\n                    <p>Company</p>\r\n                    <ul>\r\n                        <li>About</li>\r\n                        <li> Our Team</li>\r\n                        <li>Careers</li>\r\n                        <li>Contact</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"social\">\r\n                <img src=\"assets/url-shortening/icon-facebook.svg\" alt=\"\">\r\n                <img src=\"assets/url-shortening/icon-twitter.svg\" alt=\"\">\r\n                <img src=\"assets/url-shortening/icon-pinterest.svg\" alt=\"\">\r\n                <img src=\"assets/url-shortening/icon-instagram.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/pricing/pricing.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clipboard/clipboard.component */
    "./src/app/clipboard/clipboard.component.ts");
    /* harmony import */


    var _url_shortening_url_shortening_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./url-shortening/url-shortening.component */
    "./src/app/url-shortening/url-shortening.component.ts");
    /* harmony import */


    var _huddle_huddle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./huddle/huddle.component */
    "./src/app/huddle/huddle.component.ts");
    /* harmony import */


    var _rpsgame_rpsgame_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./rpsgame/rpsgame.component */
    "./src/app/rpsgame/rpsgame.component.ts");
    /* harmony import */


    var _countries_countries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./countries/countries.component */
    "./src/app/countries/countries.component.ts");
    /* harmony import */


    var _countries_countries_list_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./countries/countries-list/country-detail/country-detail.component */
    "./src/app/countries/countries-list/country-detail/country-detail.component.ts");
    /* harmony import */


    var _countries_countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./countries/countries-list/countries-list.component */
    "./src/app/countries/countries-list/countries-list.component.ts");
    /* harmony import */


    var _countries_countries_list_countries_list_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./countries/countries-list/countries-list.resolver.service */
    "./src/app/countries/countries-list/countries-list.resolver.service.ts");
    /* harmony import */


    var _bookmark_landing_bookmark_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./bookmark-landing/bookmark-landing.component */
    "./src/app/bookmark-landing/bookmark-landing.component.ts");
    /* harmony import */


    var _manage_landing_manage_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./manage-landing/manage-landing.component */
    "./src/app/manage-landing/manage-landing.component.ts");
    /* harmony import */


    var _sign_sign_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./sign/sign.component */
    "./src/app/sign/sign.component.ts");
    /* harmony import */


    var _books_assignment_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./books-assignment/book-list/book-list.component */
    "./src/app/books-assignment/book-list/book-list.component.ts");
    /* harmony import */


    var _books_assignment_book_list_book_list_resolver_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./books-assignment/book-list/book-list.resolver.service */
    "./src/app/books-assignment/book-list/book-list.resolver.service.ts");
    /* harmony import */


    var _books_assignment_book_list_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./books-assignment/book-list/book-details/book-details.component */
    "./src/app/books-assignment/book-list/book-details/book-details.component.ts");
    /* harmony import */


    var _books_assignment_book_list_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./books-assignment/book-list/favorites/favorites.component */
    "./src/app/books-assignment/book-list/favorites/favorites.component.ts");
    /* harmony import */


    var _books_assignment_books_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./books-assignment/books.component */
    "./src/app/books-assignment/books.component.ts");
    /* harmony import */


    var _conference_conference_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./conference/conference.component */
    "./src/app/conference/conference.component.ts");
    /* harmony import */


    var _conference_conference_home_conference_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./conference/conference-home/conference-home.component */
    "./src/app/conference/conference-home/conference-home.component.ts");
    /* harmony import */


    var _conference_conference_speakers_conference_speakers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./conference/conference-speakers/conference-speakers.component */
    "./src/app/conference/conference-speakers/conference-speakers.component.ts");
    /* harmony import */


    var _conference_conference_schedule_conference_schedule_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./conference/conference-schedule/conference-schedule.component */
    "./src/app/conference/conference-schedule/conference-schedule.component.ts");
    /* harmony import */


    var _conference_conference_venue_conference_venue_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./conference/conference-venue/conference-venue.component */
    "./src/app/conference/conference-venue/conference-venue.component.ts");
    /* harmony import */


    var _conference_conference_register_conference_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./conference/conference-register/conference-register.component */
    "./src/app/conference/conference-register/conference-register.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'sign',
      component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_15__["SignComponent"]
    }, {
      path: 'user',
      component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_15__["SignComponent"]
    }, {
      path: 'pricing',
      component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__["PricingComponent"]
    }, {
      path: 'clipboard',
      component: _clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_5__["ClipboardComponent"]
    }, {
      path: 'urlshortening',
      component: _url_shortening_url_shortening_component__WEBPACK_IMPORTED_MODULE_6__["UrlShorteningComponent"]
    }, {
      path: 'huddle',
      component: _huddle_huddle_component__WEBPACK_IMPORTED_MODULE_7__["HuddleComponent"]
    }, {
      path: 'rpsgame',
      component: _rpsgame_rpsgame_component__WEBPACK_IMPORTED_MODULE_8__["RpsgameComponent"]
    }, {
      path: 'countries',
      component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_9__["CountriesComponent"],
      children: [{
        path: '',
        component: _countries_countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_11__["CountriesListComponent"],
        resolve: {
          countriesList: _countries_countries_list_countries_list_resolver_service__WEBPACK_IMPORTED_MODULE_12__["CountriesListResolver"]
        }
      }, {
        path: ':countryName',
        component: _countries_countries_list_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_10__["CountryDetailComponent"]
      }]
    }, {
      path: 'bookmarklanding',
      component: _bookmark_landing_bookmark_landing_component__WEBPACK_IMPORTED_MODULE_13__["BookmarkLandingComponent"]
    }, {
      path: 'managelanding',
      component: _manage_landing_manage_landing_component__WEBPACK_IMPORTED_MODULE_14__["ManageLandingComponent"]
    }, {
      path: 'books',
      component: _books_assignment_books_component__WEBPACK_IMPORTED_MODULE_20__["BooksComponent"],
      children: [{
        path: '',
        component: _books_assignment_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_16__["BookListComponent"],
        resolve: {
          bookList: _books_assignment_book_list_book_list_resolver_service__WEBPACK_IMPORTED_MODULE_17__["BookListResolver"]
        }
      }, {
        path: 'favorites',
        component: _books_assignment_book_list_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_19__["FavoritesComponent"]
      }, {
        path: ':bookId',
        component: _books_assignment_book_list_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_18__["BookDetailsComponent"]
      }]
    }, {
      path: 'conference',
      component: _conference_conference_component__WEBPACK_IMPORTED_MODULE_21__["ConferenceComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }, {
        path: 'home',
        component: _conference_conference_home_conference_home_component__WEBPACK_IMPORTED_MODULE_22__["ConferenceHomeComponent"]
      }, {
        path: 'speakers',
        component: _conference_conference_speakers_conference_speakers_component__WEBPACK_IMPORTED_MODULE_23__["ConferenceSpeakersComponent"]
      }, {
        path: 'schedule',
        component: _conference_conference_schedule_conference_schedule_component__WEBPACK_IMPORTED_MODULE_24__["ConferenceScheduleComponent"]
      }, {
        path: 'venue',
        component: _conference_conference_venue_conference_venue_component__WEBPACK_IMPORTED_MODULE_25__["ConferenceVenueComponent"]
      }, {
        path: 'register',
        component: _conference_conference_register_conference_register_component__WEBPACK_IMPORTED_MODULE_26__["ConferenceRegisterComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  font-family: \"Montserrat\", sans-serif;\n}\n.wrapper nav ul {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  list-style: none;\n  padding: 0;\n  height: 2rem;\n  margin: 0;\n  background-color: #ed6491;\n}\n.wrapper nav a {\n  color: #ffffff;\n  text-decoration: none;\n}\n@media (max-width: 445px) {\n  nav {\n    font-size: 0.75rem;\n  }\n}\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n  top: 50%;\n  left: calc(50% - 10em/2);\n  position: fixed;\n}\n.loader {\n  font-size: 10px;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-right: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-bottom: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-left: 1.1em solid #F44336;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx0amFuYVxcRGVza3RvcFxcYW5ndWxhci1wcmFjdGljZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQ0FBQTtBQ0ZGO0FES0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQWRHO0FDV1Q7QURLSTtFQUNFLGNBbEJHO0VBbUJILHFCQUFBO0FDSE47QURRQTtFQUNFO0lBQ0Usa0JBQUE7RUNMRjtBQUNGO0FEUUE7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNORjtBRFFBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQ0FBQTtBQ0xGO0FET0E7RUFDRTtJQUNFLCtCQUFBO0lBQ0EsdUJBQUE7RUNKRjtFRE1BO0lBQ0UsaUNBQUE7SUFDQSx5QkFBQTtFQ0pGO0FBQ0Y7QURNQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSx1QkFBQTtFQ0pGO0VETUE7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjE6ICNmZmZmZmY7XHJcbiRjb2xvcjI6ICNlZDY0OTE7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG5cclxuICBuYXYge1xyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NDVweCkge1xyXG4gIG5hdiB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGVyLFxyXG4ubG9hZGVyOmFmdGVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEwZW07XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTBlbS8yKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMjM5LCAxNzEsIDE3MSwgMC4yKTtcclxuICBib3JkZXItcmlnaHQ6IDEuMWVtIHNvbGlkIHJnYmEoMjM5LCAxNzEsIDE3MSwgMC4yKTtcclxuICBib3JkZXItYm90dG9tOiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XHJcbiAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICNGNDQzMzY7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkOCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuLndyYXBwZXIgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMnJlbTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2NDkxO1xufVxuLndyYXBwZXIgbmF2IGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDQ1cHgpIHtcbiAgbmF2IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5sb2FkZXIsXG4ubG9hZGVyOmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMGVtLzIpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5sb2FkZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XG4gIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgyMzksIDE3MSwgMTcxLCAwLjIpO1xuICBib3JkZXItYm90dG9tOiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XG4gIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCAjRjQ0MzM2O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, cdRef) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.cdRef = cdRef;
        this.color = '#ed6491';
        this.showLoadingIndicator = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this.showLoadingIndicator = true;
            }

            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this.activatedComponent = routerEvent.url.slice(1).split('/')[0];
              _this.activatedComponent = _this.activatedComponent.slice(0).split('?')[0] || 'home';

              _this.updateNavbarColor(_this.activatedComponent);

              _this.showLoadingIndicator = false;
            }
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          try {} catch (e) {} finally {
            this.cdRef.detectChanges();
          }
        }
      }, {
        key: "updateNavbarColor",
        value: function updateNavbarColor(component) {
          switch (component) {
            case 'home':
              this.color = '#ed6491';
              break;

            case 'pricing':
              this.color = '#ce9dff';
              break;

            case 'books':
              this.color = '#5862cf';
              break;

            case 'conference':
              this.color = '#648880';
              break;

            case 'clipboard':
              this.color = '#22ceb4';
              break;

            case 'urlshortening':
              this.color = '#2acfcf';
              break;

            case 'huddle':
              this.color = '#ff52bf';
              break;

            case 'rpsgame':
              this.color = '#1f3756';
              break;

            case 'countries':
              this.color = '#202c37';
              break;

            case 'bookmarklanding':
              this.color = '#5368df';
              break;

            case 'managelanding':
              this.color = '#f94b1d';
              break;

            case 'sign':
              this.color = '#38cc8c';
              break;

            default:
              this.color = '#ed6491';
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/pricing/pricing.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./clipboard/clipboard.component */
    "./src/app/clipboard/clipboard.component.ts");
    /* harmony import */


    var _url_shortening_url_shortening_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./url-shortening/url-shortening.component */
    "./src/app/url-shortening/url-shortening.component.ts");
    /* harmony import */


    var _url_shortening_url_shortening_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./url-shortening/url-shortening.service */
    "./src/app/url-shortening/url-shortening.service.ts");
    /* harmony import */


    var _shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/truncate.pipe */
    "./src/app/shared/truncate.pipe.ts");
    /* harmony import */


    var _huddle_huddle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./huddle/huddle.component */
    "./src/app/huddle/huddle.component.ts");
    /* harmony import */


    var _rpsgame_rpsgame_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./rpsgame/rpsgame.component */
    "./src/app/rpsgame/rpsgame.component.ts");
    /* harmony import */


    var _rpsgame_rules_rules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./rpsgame/rules/rules.component */
    "./src/app/rpsgame/rules/rules.component.ts");
    /* harmony import */


    var _rpsgame_versus_versus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./rpsgame/versus/versus.component */
    "./src/app/rpsgame/versus/versus.component.ts");
    /* harmony import */


    var _countries_countries_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./countries/countries.component */
    "./src/app/countries/countries.component.ts");
    /* harmony import */


    var _countries_countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./countries/countries-list/countries-list.component */
    "./src/app/countries/countries-list/countries-list.component.ts");
    /* harmony import */


    var _countries_countries_list_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./countries/countries-list/country-detail/country-detail.component */
    "./src/app/countries/countries-list/country-detail/country-detail.component.ts");
    /* harmony import */


    var _bookmark_landing_bookmark_landing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./bookmark-landing/bookmark-landing.component */
    "./src/app/bookmark-landing/bookmark-landing.component.ts");
    /* harmony import */


    var _manage_landing_manage_landing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./manage-landing/manage-landing.component */
    "./src/app/manage-landing/manage-landing.component.ts");
    /* harmony import */


    var _sign_sign_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./sign/sign.component */
    "./src/app/sign/sign.component.ts");
    /* harmony import */


    var _sign_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./sign/confirm-equal-validator.directive */
    "./src/app/sign/confirm-equal-validator.directive.ts");
    /* harmony import */


    var _sign_filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./sign/filter.pipe */
    "./src/app/sign/filter.pipe.ts");
    /* harmony import */


    var _sign_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./sign/header.component */
    "./src/app/sign/header.component.ts");
    /* harmony import */


    var _books_assignment_header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./books-assignment/header/header.component */
    "./src/app/books-assignment/header/header.component.ts");
    /* harmony import */


    var _sign_is_in_list_validator_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./sign/is-in-list-validator.directive */
    "./src/app/sign/is-in-list-validator.directive.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _books_assignment_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./books-assignment/book-list/book-list.component */
    "./src/app/books-assignment/book-list/book-list.component.ts");
    /* harmony import */


    var _books_assignment_book_list_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./books-assignment/book-list/book-details/book-details.component */
    "./src/app/books-assignment/book-list/book-details/book-details.component.ts");
    /* harmony import */


    var _books_assignment_store_app_reducer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./books-assignment/store/app.reducer */
    "./src/app/books-assignment/store/app.reducer.ts");
    /* harmony import */


    var _books_assignment_book_list_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./books-assignment/book-list/favorites/favorites.component */
    "./src/app/books-assignment/book-list/favorites/favorites.component.ts");
    /* harmony import */


    var _books_assignment_pipes_description_limit_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./books-assignment/pipes/description-limit.pipe */
    "./src/app/books-assignment/pipes/description-limit.pipe.ts");
    /* harmony import */


    var _books_assignment_books_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./books-assignment/books.component */
    "./src/app/books-assignment/books.component.ts");
    /* harmony import */


    var _conference_conference_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./conference/conference.component */
    "./src/app/conference/conference.component.ts");
    /* harmony import */


    var _conference_conference_home_conference_home_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./conference/conference-home/conference-home.component */
    "./src/app/conference/conference-home/conference-home.component.ts");
    /* harmony import */


    var _conference_conference_speakers_conference_speakers_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./conference/conference-speakers/conference-speakers.component */
    "./src/app/conference/conference-speakers/conference-speakers.component.ts");
    /* harmony import */


    var _conference_conference_schedule_conference_schedule_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./conference/conference-schedule/conference-schedule.component */
    "./src/app/conference/conference-schedule/conference-schedule.component.ts");
    /* harmony import */


    var _conference_conference_venue_conference_venue_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./conference/conference-venue/conference-venue.component */
    "./src/app/conference/conference-venue/conference-venue.component.ts");
    /* harmony import */


    var _conference_conference_register_conference_register_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./conference/conference-register/conference-register.component */
    "./src/app/conference/conference-register/conference-register.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_9__["ClipboardComponent"], _url_shortening_url_shortening_component__WEBPACK_IMPORTED_MODULE_10__["UrlShorteningComponent"], _shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_12__["TruncatePipe"], _huddle_huddle_component__WEBPACK_IMPORTED_MODULE_13__["HuddleComponent"], _rpsgame_rpsgame_component__WEBPACK_IMPORTED_MODULE_14__["RpsgameComponent"], _rpsgame_rules_rules_component__WEBPACK_IMPORTED_MODULE_15__["RulesComponent"], _rpsgame_versus_versus_component__WEBPACK_IMPORTED_MODULE_16__["VersusComponent"], _countries_countries_component__WEBPACK_IMPORTED_MODULE_17__["CountriesComponent"], _countries_countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_18__["CountriesListComponent"], _countries_countries_list_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_19__["CountryDetailComponent"], _bookmark_landing_bookmark_landing_component__WEBPACK_IMPORTED_MODULE_20__["BookmarkLandingComponent"], _manage_landing_manage_landing_component__WEBPACK_IMPORTED_MODULE_21__["ManageLandingComponent"], _sign_sign_component__WEBPACK_IMPORTED_MODULE_22__["SignComponent"], _sign_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_23__["ConfrimEqualValidatorDirective"], _sign_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterPipe"], _sign_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"], _sign_is_in_list_validator_directive__WEBPACK_IMPORTED_MODULE_27__["IsInListValidatorDirective"], _books_assignment_header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"], _books_assignment_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_29__["BookListComponent"], _books_assignment_book_list_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_30__["BookDetailsComponent"], _books_assignment_book_list_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_32__["FavoritesComponent"], _books_assignment_pipes_description_limit_pipe__WEBPACK_IMPORTED_MODULE_33__["DescriptionLimitPipe"], _books_assignment_books_component__WEBPACK_IMPORTED_MODULE_34__["BooksComponent"], _conference_conference_component__WEBPACK_IMPORTED_MODULE_35__["ConferenceComponent"], _conference_conference_home_conference_home_component__WEBPACK_IMPORTED_MODULE_36__["ConferenceHomeComponent"], _conference_conference_speakers_conference_speakers_component__WEBPACK_IMPORTED_MODULE_37__["ConferenceSpeakersComponent"], _conference_conference_schedule_conference_schedule_component__WEBPACK_IMPORTED_MODULE_38__["ConferenceScheduleComponent"], _conference_conference_venue_conference_venue_component__WEBPACK_IMPORTED_MODULE_39__["ConferenceVenueComponent"], _conference_conference_register_conference_register_component__WEBPACK_IMPORTED_MODULE_40__["ConferenceRegisterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_28__["StoreModule"].forRoot(_books_assignment_store_app_reducer__WEBPACK_IMPORTED_MODULE_31__["appReducer"])],
      providers: [_url_shortening_url_shortening_service__WEBPACK_IMPORTED_MODULE_11__["UrlShorteningService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/bookmark-landing/bookmark-landing.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/bookmark-landing/bookmark-landing.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookmarkLandingBookmarkLandingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background-color: #f5f5f5;\n  min-height: 100vh;\n  overflow: hidden;\n  font-family: \"Rubik\", sans-serif;\n}\n\n.container {\n  padding: 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.footer,\nnav {\n  margin-bottom: 2rem;\n}\n\n.footer .container,\nnav .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.footer .desktop,\nnav .desktop {\n  display: -webkit-box;\n  display: flex;\n  text-transform: uppercase;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.footer .desktop ul,\nnav .desktop ul {\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n}\n\n.footer .desktop ul li,\nnav .desktop ul li {\n  cursor: pointer;\n  margin-right: 1rem;\n  letter-spacing: 1px;\n}\n\n.footer .desktop ul li:hover,\nnav .desktop ul li:hover {\n  color: #f94b1d;\n}\n\n.footer .desktop hr,\nnav .desktop hr {\n  display: none;\n}\n\n.footer button,\nnav button {\n  margin-right: 1rem;\n}\n\n.footer button.orange,\nnav button.orange {\n  text-transform: uppercase;\n  margin-right: 0;\n}\n\n.intro .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.intro .container .text {\n  width: 33%;\n}\n\n.intro .container .text button.blue {\n  margin-right: 2rem;\n}\n\n.intro .container .illustration {\n  position: relative;\n  -webkit-transform: translateX(17%);\n          transform: translateX(17%);\n  z-index: 0;\n}\n\n.intro .container .illustration img {\n  width: 95%;\n}\n\n.intro .container .illustration:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 75%;\n  z-index: -1;\n  background-color: #5368df;\n  left: 27%;\n  top: 29%;\n  border-bottom-left-radius: 30%;\n}\n\n.features {\n  margin-bottom: 10rem;\n  position: relative;\n  z-index: 0;\n}\n\n.features:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  z-index: -1;\n  background-color: #5368df;\n  right: 61%;\n  top: 57%;\n  border-bottom-right-radius: 43%;\n}\n\n.features .text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.features .text p {\n  width: 40%;\n}\n\n.features .text span {\n  padding: 1rem;\n  line-height: 2rem;\n  color: #000000c7;\n  border-bottom: 1px solid #0000003d;\n  cursor: pointer;\n}\n\n.features .text span:hover {\n  color: #f94b1d;\n}\n\n.features .text span.active {\n  color: black;\n  font-weight: bold;\n  border-bottom: 1px solid #f94b1d;\n  border-width: thick;\n  -webkit-animation: dropdown 2s forwards;\n          animation: dropdown 2s forwards;\n}\n\n.features .feature > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  min-height: 30rem;\n  -webkit-animation: scroll 2s forwards;\n          animation: scroll 2s forwards;\n}\n\n.features .feature > div > div {\n  width: 40%;\n}\n\n@-webkit-keyframes scroll {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10%);\n            transform: translateX(-10%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes scroll {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10%);\n            transform: translateX(-10%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.extensions {\n  margin-bottom: 10rem;\n}\n\n.extensions .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.extensions .container > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 1px 7px 6px 0px #8080809e;\n  border-radius: 20px;\n  padding-top: 5rem;\n  padding-bottom: 1.5rem;\n}\n\n.extensions .container > div img {\n  margin-bottom: 1rem;\n}\n\n.extensions .container > div.firefox {\n  -webkit-transform: translateY(4rem);\n          transform: translateY(4rem);\n}\n\n.extensions .container > div.opera {\n  -webkit-transform: translateY(8rem);\n          transform: translateY(8rem);\n}\n\n.faq .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 30%;\n  min-height: 35rem;\n}\n\n.faq .container > p {\n  text-align: center;\n}\n\n.faq .container h4 {\n  align-self: flex-start;\n  border-top: 1px solid #80808066;\n  line-height: 3rem;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-right: 1.5rem;\n  cursor: pointer;\n}\n\n.faq .container > div {\n  width: 100%;\n  border-bottom: 1px solid #80808066;\n  margin-bottom: 3rem;\n}\n\n.faq .container > div p {\n  -webkit-animation: dropdown 0.5s forwards;\n          animation: dropdown 0.5s forwards;\n}\n\n@-webkit-keyframes dropdown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20%);\n            transform: translateY(-20%);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes dropdown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20%);\n            transform: translateY(-20%);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.contact {\n  background: #5368df;\n  color: white;\n  padding: 5rem;\n}\n\n.contact .container {\n  text-align: center;\n  width: 40%;\n  min-height: 14rem;\n}\n\n.contact .container h1,\n.contact .container h4 {\n  margin-bottom: 2rem;\n}\n\n.contact .container h4 {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-family: \"Rubik\", sans-serif;\n  margin-bottom: 3rem;\n  margin-top: 0;\n}\n\n.contact .container > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.contact .container > div > div {\n  -webkit-box-flex: 0.3;\n          flex-grow: 0.3;\n  position: relative;\n}\n\n.contact .container > div input {\n  border: 2px solid transparent;\n  border-radius: 5px;\n  padding: 1rem;\n  width: 100%;\n}\n\n.contact .container > div input.error {\n  border-color: #f94b1d;\n  border-bottom-width: 2rem;\n}\n\n.contact .container > div input.success {\n  border-color: #44d044;\n  border-bottom-width: 2rem;\n}\n\n.contact .container > div span {\n  display: block;\n  position: absolute;\n  margin: 0;\n  padding: 0.2rem;\n  bottom: 4%;\n  left: 4%;\n  font-style: italic;\n  font-size: 0.9rem;\n}\n\n.contact .container > div button {\n  letter-spacing: 0;\n}\n\n.footer {\n  background-color: #252b46;\n  margin-bottom: 0;\n  color: white;\n}\n\n.footer .desktop {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  margin-right: auto;\n}\n\n.footer .container {\n  -webkit-box-pack: initial;\n          justify-content: initial;\n}\n\n.footer .social img:first-child {\n  margin-right: 2rem;\n}\n\n.footer .social img:hover {\n  cursor: pointer;\n  -webkit-filter: invert(0.4) sepia(1) saturate(55) hue-rotate(351deg) brightness(0.87);\n          filter: invert(0.4) sepia(1) saturate(55) hue-rotate(351deg) brightness(0.87);\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  padding: 1rem 1.5rem;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n\nbutton.orange {\n  background-color: #f94b1d;\n  letter-spacing: 2px;\n}\n\nbutton.orange:hover {\n  background-color: white;\n  color: #f94b1d;\n  border: 1px solid #f94b1d;\n}\n\nbutton.gray {\n  background-color: #8080801a;\n  color: #000000c7;\n  box-shadow: 0px 3px 3px 0px #80808054;\n}\n\nbutton.gray:hover {\n  background-color: white;\n  color: #252b46;\n  border: 1px solid #252b46;\n}\n\nbutton.blue {\n  background-color: #5368df;\n}\n\nbutton.blue:hover {\n  background-color: white;\n  color: #5368df;\n  border: 1px solid #5368df;\n}\n\np {\n  color: #808080c9;\n}\n\n.menu {\n  display: none;\n}\n\n.menu div {\n  background-color: #252b46;\n  width: 28px;\n  height: 4px;\n  margin-bottom: 6px;\n}\n\n@media only screen and (max-width: 1500px) {\n  .intro .container .illustration img {\n    width: 90%;\n  }\n}\n\n@media only screen and (max-width: 1430px) {\n  .contact .container > div {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n  .contact .container > div input.error {\n    border-bottom-width: 3rem;\n  }\n}\n\n@media only screen and (max-width: 1120px) {\n  .intro .container .text {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .intro .container .text button.blue {\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n\n  .contact .container > div {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: initial;\n            align-items: initial;\n  }\n  .contact .container > div input {\n    width: 100%;\n    box-sizing: border-box;\n    margin-bottom: 1rem;\n  }\n  .contact .container > div input.error {\n    border-bottom-width: 3rem;\n  }\n  .contact .container > div span {\n    bottom: 20%;\n    left: 1%;\n  }\n}\n\n@media only screen and (max-width: 930px) {\n  .extensions .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n\n  .features {\n    margin-bottom: 0;\n  }\n  .features .text span {\n    -webkit-animation: burgerMenu 2s forwards !important;\n            animation: burgerMenu 2s forwards !important;\n  }\n  .features .feature > div {\n    min-height: 50rem;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .features .feature > div img {\n    margin-bottom: 11rem;\n  }\n  .features .feature > div > div {\n    width: 55%;\n    text-align: center;\n  }\n  .features:before {\n    top: 33%;\n    right: 35%;\n    height: 46%;\n  }\n\n  .faq .container {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  nav {\n    padding: 2rem;\n    position: relative;\n  }\n  nav .container {\n    padding: 0;\n  }\n  nav .container .logo {\n    z-index: 3;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative;\n    width: 100%;\n  }\n  nav .container .desktop {\n    -webkit-animation: burgerMenu 0.5s forwards;\n            animation: burgerMenu 0.5s forwards;\n    display: none;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative;\n    background-color: #252b46eb;\n    padding: 1rem;\n    align-self: baseline;\n    z-index: 2;\n    position: absolute;\n    width: -webkit-fill-available;\n    top: 0;\n    left: 0;\n    color: white;\n    height: 100vh;\n  }\n  @-webkit-keyframes burgerMenu {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes burgerMenu {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  nav .container .desktop ul {\n    padding: 0;\n    padding-top: 4rem;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    text-align: center;\n    margin-bottom: 2rem;\n    width: -webkit-fill-available;\n  }\n  nav .container .desktop ul li {\n    margin-right: 0;\n    line-height: 2.5rem;\n    padding: 1rem;\n  }\n  nav .container .desktop ul li:hover {\n    color: white;\n  }\n  nav .container .desktop hr {\n    display: initial;\n    width: 100%;\n    background-color: #747784;\n    border: none;\n    height: 1px;\n  }\n  nav .container .desktop > div {\n    width: 100%;\n  }\n  nav .container .desktop button {\n    background-color: transparent;\n    border-color: #747784;\n    width: 100%;\n    color: white;\n  }\n  nav .container .desktop button:hover {\n    background-color: white;\n    color: #252b46;\n  }\n\n  .intro .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .intro .container .text {\n    width: 60%;\n    text-align: center;\n  }\n  .intro .container .illustration {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    margin-bottom: 3rem;\n  }\n  .intro .container .illustration img {\n    width: 100%;\n  }\n\n  .contact {\n    padding: 3rem;\n  }\n  .contact .container {\n    box-sizing: border-box;\n    width: 60%;\n  }\n\n  .menu {\n    display: initial;\n    position: absolute;\n    right: 0;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .contact {\n    padding: 2rem 0;\n  }\n  .contact .container {\n    width: 80%;\n  }\n\n  .faq .container {\n    width: 90%;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  .features {\n    margin-bottom: 0;\n  }\n  .features .container .text > div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .features .feature > div img {\n    width: 100%;\n  }\n  .features:before {\n    top: 44%;\n    height: 29%;\n  }\n\n  .footer .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .footer .container .logo {\n    margin-bottom: 2.5rem;\n  }\n  .footer .container .desktop {\n    margin-right: 0;\n  }\n  .footer .container .desktop ul {\n    padding: 0;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .footer .container .desktop ul li {\n    margin-right: 0;\n    margin-bottom: 2rem;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .intro .container .text {\n    width: 100%;\n  }\n\n  .contact {\n    padding: 2rem 0;\n  }\n  .contact .container {\n    width: 80%;\n  }\n\n  .faq .container {\n    width: 100%;\n  }\n  .faq .container h4 {\n    padding-right: 0;\n  }\n\n  .features .feature > div img {\n    width: 100%;\n  }\n  .features .feature > div > div {\n    width: 100%;\n  }\n  .features .text p {\n    width: 100%;\n  }\n  .features:before {\n    top: 47%;\n    height: 18%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmstbGFuZGluZy9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxib29rbWFyay1sYW5kaW5nXFxib29rbWFyay1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29rbWFyay1sYW5kaW5nL2Jvb2ttYXJrLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTs7RUFFRSxtQkFBQTtBQ0pGOztBRE1FOztFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSEo7O0FETUU7O0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSEo7O0FES0k7O0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxTQUFBO0FDRk47O0FESU07O0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURHUTs7RUFDRSxjQTFDRDtBQzBDVDs7QURLSTs7RUFDRSxhQUFBO0FDRk47O0FETUU7O0VBQ0Usa0JBQUE7QUNISjs7QURLSTs7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNGTjs7QURRRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNMSjs7QURPSTtFQUNFLFVBQUE7QUNMTjs7QURRUTtFQUNFLGtCQUFBO0FDTlY7O0FEV0k7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FDVE47O0FEV007RUFDRSxVQUFBO0FDVFI7O0FEWU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBL0ZDO0VBZ0dELFNBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7QUNWUjs7QURnQkE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2JGOztBRGVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXBISztFQXFITCxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FDYko7O0FEZ0JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNkSjs7QURnQkk7RUFDRSxVQUFBO0FDZE47O0FEaUJJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBdklHO0VBd0lILGtDQUFBO0VBQ0EsZUFBQTtBQ2ZOOztBRGlCTTtFQUNFLGNBM0lDO0FDNEhUOztBRGtCTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0FDaEJSOztBRHNCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDcEJOOztBRHNCTTtFQUNFLFVBQUE7QUNwQlI7O0FEdUJNO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ3JCUjtFRHdCTTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VDdEJSO0FBQ0Y7O0FEYU07RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDckJSO0VEd0JNO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUN0QlI7QUFDRjs7QUQ0QkE7RUFDRSxvQkFBQTtBQ3pCRjs7QUQyQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0FDekJKOztBRDJCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ3pCTjs7QUQyQk07RUFDRSxtQkFBQTtBQ3pCUjs7QUQ0Qk07RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FDMUJSOztBRDZCTTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUMzQlI7O0FEa0NFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQy9CSjs7QURpQ0k7RUFDRSxrQkFBQTtBQy9CTjs7QURrQ0k7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNoQ047O0FEbUNJO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNqQ047O0FEbUNNO0VBQ0UseUNBQUE7VUFBQSxpQ0FBQTtBQ2pDUjs7QURvQ007RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDbENSO0VEcUNNO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUNuQ1I7QUFDRjs7QUQwQk07RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDbENSO0VEcUNNO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUNuQ1I7QUFDRjs7QUR5Q0E7RUFDRSxtQkFyUU87RUFzUVAsWUFBQTtFQUNBLGFBQUE7QUN0Q0Y7O0FEd0NFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUN0Q0o7O0FEd0NJOztFQUVFLG1CQUFBO0FDdENOOztBRHlDSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ3ZDTjs7QUQwQ0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3hDTjs7QUQwQ007RUFDRSxxQkFBQTtVQUFBLGNBQUE7RUFDQSxrQkFBQTtBQ3hDUjs7QUQyQ007RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUN6Q1I7O0FEMkNRO0VBQ0UscUJBMVNEO0VBMlNDLHlCQUFBO0FDekNWOztBRDRDUTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUMxQ1Y7O0FEOENNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUM1Q1I7O0FEK0NNO0VBQ0UsaUJBQUE7QUM3Q1I7O0FEbURBO0VBQ0UseUJBdFVPO0VBdVVQLGdCQUFBO0VBQ0EsWUFBQTtBQ2hERjs7QURrREU7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxrQkFBQTtBQ2hESjs7QURtREU7RUFDRSx5QkFBQTtVQUFBLHdCQUFBO0FDakRKOztBRHNETTtFQUNFLGtCQUFBO0FDcERSOztBRHVETTtFQUNFLGVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FDckRSOztBRDJEQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDeERGOztBRDBERTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUN4REo7O0FEMERJO0VBQ0UsdUJBQUE7RUFDQSxjQWpYRztFQWtYSCx5QkFBQTtBQ3hETjs7QUQ0REU7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUMxREo7O0FENERJO0VBQ0UsdUJBQUE7RUFDQSxjQTVYRztFQTZYSCx5QkFBQTtBQzFETjs7QUQ2REU7RUFDRSx5QkFwWUs7QUN5VVQ7O0FENkRJO0VBQ0UsdUJBQUE7RUFDQSxjQXhZRztFQXlZSCx5QkFBQTtBQzNETjs7QURnRUE7RUFDRSxnQkFBQTtBQzdERjs7QURnRUE7RUFDRSxhQUFBO0FDN0RGOztBRCtERTtFQUNFLHlCQW5aSztFQW9aTCxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDN0RKOztBRGlFQTtFQUlRO0lBQ0UsVUFBQTtFQ2pFUjtBQUNGOztBRHVFQTtFQUdNO0lBQ0UseUJBQUE7WUFBQSw4QkFBQTtFQ3ZFTjtFRDBFUTtJQUNFLHlCQUFBO0VDeEVWO0FBQ0Y7O0FEK0VBO0VBR007SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDL0VOO0VEa0ZRO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDaEZWOztFRHdGSTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLDBCQUFBO1lBQUEsb0JBQUE7RUNyRk47RUR1Rk07SUFDRSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ3JGUjtFRHVGUTtJQUNFLHlCQUFBO0VDckZWO0VEeUZNO0lBQ0UsV0FBQTtJQUNBLFFBQUE7RUN2RlI7QUFDRjs7QUQ2RkE7RUFFSTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUM1Rko7O0VEZ0dBO0lBQ0UsZ0JBQUE7RUM3RkY7RUQrRkk7SUFDRSxvREFBQTtZQUFBLDRDQUFBO0VDN0ZOO0VEaUdJO0lBQ0UsaUJBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUMvRk47RURpR007SUFDRSxvQkFBQTtFQy9GUjtFRGtHTTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFQ2hHUjtFRHFHRTtJQUNFLFFBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQ25HSjs7RUR3R0U7SUFDRSxVQUFBO0VDckdKO0FBQ0Y7O0FEeUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUN2R0Y7RUR5R0U7SUFDRSxVQUFBO0VDdkdKO0VEeUdJO0lBQ0UsVUFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUN2R047RUQwR0k7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0lBQ0EsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLDJCQUFBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsNkJBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDeEdOO0VEMEdNO0lBQ0U7TUFDRSxVQUFBO0lDeEdSO0lEMkdNO01BQ0UsVUFBQTtJQ3pHUjtFQUNGO0VEa0dNO0lBQ0U7TUFDRSxVQUFBO0lDeEdSO0lEMkdNO01BQ0UsVUFBQTtJQ3pHUjtFQUNGO0VENEdNO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VDMUdSO0VENEdRO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFQzFHVjtFRDRHVTtJQUNFLFlBQUE7RUMxR1o7RUQrR007SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDN0dSO0VEZ0hNO0lBQ0UsV0FBQTtFQzlHUjtFRGlITTtJQUNFLDZCQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQy9HUjtFRGlIUTtJQUNFLHVCQUFBO0lBQ0EsY0EvbEJIO0VDZ2ZQOztFRHdIRTtJQUNFLDRCQUFBO0lBQUEsOEJBQUE7WUFBQSw4QkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUNySEo7RUR1SEk7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUNySE47RUR3SEk7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsbUJBQUE7RUN0SE47RUR3SE07SUFDRSxXQUFBO0VDdEhSOztFRDRIQTtJQUNFLGFBQUE7RUN6SEY7RUQwSEU7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUN4SEo7O0VENEhBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUN6SEY7QUFDRjs7QUQ0SEE7RUFDRTtJQUNFLGVBQUE7RUMxSEY7RUQ0SEU7SUFDRSxVQUFBO0VDMUhKOztFRCtIRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtFQzVISjtBQUNGOztBRGdJQTtFQUNFO0lBQ0UsZ0JBQUE7RUM5SEY7RURrSU07SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNoSVI7RUR1SU07SUFDRSxXQUFBO0VDcklSO0VEMElFO0lBQ0UsUUFBQTtJQUNBLFdBQUE7RUN4SUo7O0VENklFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQzFJSjtFRDRJSTtJQUNFLHFCQUFBO0VDMUlOO0VENklJO0lBQ0UsZUFBQTtFQzNJTjtFRDZJTTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDM0lSO0VENklRO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDM0lWO0FBQ0Y7O0FEa0pBO0VBR007SUFDRSxXQUFBO0VDbEpOOztFRHVKQTtJQUNFLGVBQUE7RUNwSkY7RURzSkU7SUFDRSxVQUFBO0VDcEpKOztFRHlKRTtJQUNFLFdBQUE7RUN0Sko7RUR3Skk7SUFDRSxnQkFBQTtFQ3RKTjs7RUQ4Sk07SUFDRSxXQUFBO0VDM0pSO0VEOEpNO0lBQ0UsV0FBQTtFQzVKUjtFRGtLSTtJQUNFLFdBQUE7RUNoS047RURvS0U7SUFDRSxRQUFBO0lBQ0EsV0FBQTtFQ2xLSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYm9va21hcmstbGFuZGluZy9ib29rbWFyay1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogIzUzNjhkZjtcclxuJGNvbG9yMjogIzAwMDAwMGM3O1xyXG4kY29sb3IzOiAjZjk0YjFkO1xyXG4kY29sb3I0OiBoc2woMjI5LCAzMSUsIDIxJSk7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZvb3RlcixcclxubmF2IHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRlc2t0b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBociB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxuICAgICYub3JhbmdlIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmludHJvIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICAmLmJsdWUge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbGx1c3RyYXRpb24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNyUpO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICBsZWZ0OiAyNyU7XHJcbiAgICAgICAgdG9wOiAyOSU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmVhdHVyZXMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAwO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgcmlnaHQ6IDYxJTtcclxuICAgIHRvcDogNTclO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQzJTtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICBjb2xvcjogJGNvbG9yMjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAzZDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvcjM7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiB0aGljaztcclxuICAgICAgICBhbmltYXRpb246IGRyb3Bkb3duIDJzIGZvcndhcmRzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZSB7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMHJlbTtcclxuICAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMnMgZm9yd2FyZHM7XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzY3JvbGwge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXh0ZW5zaW9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDdweCA2cHggMHB4ICM4MDgwODA5ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZmlyZWZveCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm9wZXJhIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHJlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mYXEge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1cmVtO1xyXG5cclxuICAgID4gcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODA4MDgwNjY7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA2NjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGFuaW1hdGlvbjogZHJvcGRvd24gMC41cyBmb3J3YXJkcztcclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBkcm9wZG93biB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3IxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cmVtO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxNHJlbTtcclxuXHJcbiAgICBoMSxcclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgZmxleC1ncm93OiAwLjM7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICYuZXJyb3Ige1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3IzO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc3VjY2VzcyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM0NGQwNDQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgYm90dG9tOiA0JTtcclxuICAgICAgICBsZWZ0OiA0JTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIC5kZXNrdG9wIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbCB7XHJcbiAgICBpbWcge1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmaWx0ZXI6IGludmVydCgwLjQpIHNlcGlhKDEpIHNhdHVyYXRlKDU1KSBodWUtcm90YXRlKDM1MWRlZykgYnJpZ2h0bmVzcygwLjg3KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHJcbiAgJi5vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NGIxZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogJGNvbG9yMztcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yMztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZ3JheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwMWE7XHJcbiAgICBjb2xvcjogIzAwMDAwMGM3O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM4MDgwODA1NDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAkY29sb3I0O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3I0O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3IxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxucCB7XHJcbiAgY29sb3I6ICM4MDgwODBjOTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I0O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgLmludHJvIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAuaWxsdXN0cmF0aW9uIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XHJcbiAgLmNvbnRhY3Qge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgJi5lcnJvcntcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XHJcbiAgLmludHJvIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAmLmJsdWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWN0IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgICAmLmVycm9yIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgYm90dG9tOiAyMCU7XHJcbiAgICAgICAgICBsZWZ0OiAxJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMwcHgpIHtcclxuICAuZXh0ZW5zaW9ucyB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mZWF0dXJlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLnRleHQge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1cmdlck1lbnUgMnMgZm9yd2FyZHMgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZlYXR1cmUge1xyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTByZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRvcDogMzMlO1xyXG4gICAgICByaWdodDogMzUlO1xyXG4gICAgICBoZWlnaHQ6IDQ2JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mYXEge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgbmF2IHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVza3RvcCB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBidXJnZXJNZW51IDAuNXMgZm9yd2FyZHM7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJiNDZlYjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGJ1cmdlck1lbnUge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc0Nzc4NDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM3NDc3ODQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3I0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnRybyB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWxsdXN0cmF0aW9uIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3Qge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250YWN0IHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mYXEge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLmZlYXR1cmVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmVhdHVyZSB7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0b3A6IDQ0JTtcclxuICAgICAgaGVpZ2h0OiAyOSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlc2t0b3Age1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIC5pbnRybyB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFjdCB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmFxIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZXMge1xyXG4gICAgLmZlYXR1cmUge1xyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdG9wOiA0NyU7XHJcbiAgICAgIGhlaWdodDogMTglO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb290ZXIsXG5uYXYge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmZvb3RlciAuY29udGFpbmVyLFxubmF2IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyIC5kZXNrdG9wLFxubmF2IC5kZXNrdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXIgLmRlc2t0b3AgdWwsXG5uYXYgLmRlc2t0b3AgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDA7XG59XG4uZm9vdGVyIC5kZXNrdG9wIHVsIGxpLFxubmF2IC5kZXNrdG9wIHVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uZm9vdGVyIC5kZXNrdG9wIHVsIGxpOmhvdmVyLFxubmF2IC5kZXNrdG9wIHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICNmOTRiMWQ7XG59XG4uZm9vdGVyIC5kZXNrdG9wIGhyLFxubmF2IC5kZXNrdG9wIGhyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mb290ZXIgYnV0dG9uLFxubmF2IGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5mb290ZXIgYnV0dG9uLm9yYW5nZSxcbm5hdiBidXR0b24ub3JhbmdlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uaW50cm8gLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5pbnRybyAuY29udGFpbmVyIC50ZXh0IHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5pbnRybyAuY29udGFpbmVyIC50ZXh0IGJ1dHRvbi5ibHVlIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLmludHJvIC5jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3JSk7XG4gIHotaW5kZXg6IDA7XG59XG4uaW50cm8gLmNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIGltZyB7XG4gIHdpZHRoOiA5NSU7XG59XG4uaW50cm8gLmNvbnRhaW5lciAuaWxsdXN0cmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1JTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzY4ZGY7XG4gIGxlZnQ6IDI3JTtcbiAgdG9wOiAyOSU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwJTtcbn1cblxuLmZlYXR1cmVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbn1cbi5mZWF0dXJlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2OGRmO1xuICByaWdodDogNjElO1xuICB0b3A6IDU3JTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQzJTtcbn1cbi5mZWF0dXJlcyAudGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5mZWF0dXJlcyAudGV4dCBwIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5mZWF0dXJlcyAudGV4dCBzcGFuIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiAjMDAwMDAwYzc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwM2Q7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mZWF0dXJlcyAudGV4dCBzcGFuOmhvdmVyIHtcbiAgY29sb3I6ICNmOTRiMWQ7XG59XG4uZmVhdHVyZXMgLnRleHQgc3Bhbi5hY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5NGIxZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGljaztcbiAgYW5pbWF0aW9uOiBkcm9wZG93biAycyBmb3J3YXJkcztcbn1cbi5mZWF0dXJlcyAuZmVhdHVyZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgYW5pbWF0aW9uOiBzY3JvbGwgMnMgZm9yd2FyZHM7XG59XG4uZmVhdHVyZXMgLmZlYXR1cmUgPiBkaXYgPiBkaXYge1xuICB3aWR0aDogNDAlO1xufVxuQGtleWZyYW1lcyBzY3JvbGwge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmV4dGVuc2lvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbn1cbi5leHRlbnNpb25zIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5leHRlbnNpb25zIC5jb250YWluZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAxcHggN3B4IDZweCAwcHggIzgwODA4MDllO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cbi5leHRlbnNpb25zIC5jb250YWluZXIgPiBkaXYgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5leHRlbnNpb25zIC5jb250YWluZXIgPiBkaXYuZmlyZWZveCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cmVtKTtcbn1cbi5leHRlbnNpb25zIC5jb250YWluZXIgPiBkaXYub3BlcmEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHJlbSk7XG59XG5cbi5mYXEgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG4gIG1pbi1oZWlnaHQ6IDM1cmVtO1xufVxuLmZhcSAuY29udGFpbmVyID4gcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mYXEgLmNvbnRhaW5lciBoNCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODA4MDgwNjY7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmFxIC5jb250YWluZXIgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA2NjtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbi5mYXEgLmNvbnRhaW5lciA+IGRpdiBwIHtcbiAgYW5pbWF0aW9uOiBkcm9wZG93biAwLjVzIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBkcm9wZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uY29udGFjdCB7XG4gIGJhY2tncm91bmQ6ICM1MzY4ZGY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXJlbTtcbn1cbi5jb250YWN0IC5jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0MCU7XG4gIG1pbi1oZWlnaHQ6IDE0cmVtO1xufVxuLmNvbnRhY3QgLmNvbnRhaW5lciBoMSxcbi5jb250YWN0IC5jb250YWluZXIgaDQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbnRhY3QgLmNvbnRhaW5lciBoNCB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY29udGFjdCAuY29udGFpbmVyID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmNvbnRhY3QgLmNvbnRhaW5lciA+IGRpdiA+IGRpdiB7XG4gIGZsZXgtZ3JvdzogMC4zO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFjdCAuY29udGFpbmVyID4gZGl2IGlucHV0IHtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdCAuY29udGFpbmVyID4gZGl2IGlucHV0LmVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjk0YjFkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycmVtO1xufVxuLmNvbnRhY3QgLmNvbnRhaW5lciA+IGRpdiBpbnB1dC5zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDRkMDQ0O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycmVtO1xufVxuLmNvbnRhY3QgLmNvbnRhaW5lciA+IGRpdiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJvdHRvbTogNCU7XG4gIGxlZnQ6IDQlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmNvbnRhY3QgLmNvbnRhaW5lciA+IGRpdiBidXR0b24ge1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTJiNDY7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb290ZXIgLmRlc2t0b3Age1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mb290ZXIgLmNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcbn1cbi5mb290ZXIgLnNvY2lhbCBpbWc6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4uZm9vdGVyIC5zb2NpYWwgaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWx0ZXI6IGludmVydCgwLjQpIHNlcGlhKDEpIHNhdHVyYXRlKDU1KSBodWUtcm90YXRlKDM1MWRlZykgYnJpZ2h0bmVzcygwLjg3KTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5idXR0b24ub3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NGIxZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbmJ1dHRvbi5vcmFuZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICNmOTRiMWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOTRiMWQ7XG59XG5idXR0b24uZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODAxYTtcbiAgY29sb3I6ICMwMDAwMDBjNztcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM4MDgwODA1NDtcbn1cbmJ1dHRvbi5ncmF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMjUyYjQ2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjUyYjQ2O1xufVxuYnV0dG9uLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2OGRmO1xufVxuYnV0dG9uLmJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM1MzY4ZGY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MzY4ZGY7XG59XG5cbnAge1xuICBjb2xvcjogIzgwODA4MGM5O1xufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWVudSBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyYjQ2O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLmludHJvIC5jb250YWluZXIgLmlsbHVzdHJhdGlvbiBpbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XG4gIC5jb250YWN0IC5jb250YWluZXIgPiBkaXYge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuY29udGFjdCAuY29udGFpbmVyID4gZGl2IGlucHV0LmVycm9yIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xuICAuaW50cm8gLmNvbnRhaW5lciAudGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmludHJvIC5jb250YWluZXIgLnRleHQgYnV0dG9uLmJsdWUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbnRhY3QgLmNvbnRhaW5lciA+IGRpdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgfVxuICAuY29udGFjdCAuY29udGFpbmVyID4gZGl2IGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmNvbnRhY3QgLmNvbnRhaW5lciA+IGRpdiBpbnB1dC5lcnJvciB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3JlbTtcbiAgfVxuICAuY29udGFjdCAuY29udGFpbmVyID4gZGl2IHNwYW4ge1xuICAgIGJvdHRvbTogMjAlO1xuICAgIGxlZnQ6IDElO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gIC5leHRlbnNpb25zIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5mZWF0dXJlcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAuZmVhdHVyZXMgLnRleHQgc3BhbiB7XG4gICAgYW5pbWF0aW9uOiBidXJnZXJNZW51IDJzIGZvcndhcmRzICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZlYXR1cmVzIC5mZWF0dXJlID4gZGl2IHtcbiAgICBtaW4taGVpZ2h0OiA1MHJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5mZWF0dXJlcyAuZmVhdHVyZSA+IGRpdiBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDExcmVtO1xuICB9XG4gIC5mZWF0dXJlcyAuZmVhdHVyZSA+IGRpdiA+IGRpdiB7XG4gICAgd2lkdGg6IDU1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZlYXR1cmVzOmJlZm9yZSB7XG4gICAgdG9wOiAzMyU7XG4gICAgcmlnaHQ6IDM1JTtcbiAgICBoZWlnaHQ6IDQ2JTtcbiAgfVxuXG4gIC5mYXEgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICBuYXYge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5sb2dvIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbmF2IC5jb250YWluZXIgLmRlc2t0b3Age1xuICAgIGFuaW1hdGlvbjogYnVyZ2VyTWVudSAwLjVzIGZvcndhcmRzO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyYjQ2ZWI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBAa2V5ZnJhbWVzIGJ1cmdlck1lbnUge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgbmF2IC5jb250YWluZXIgLmRlc2t0b3AgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgfVxuICBuYXYgLmNvbnRhaW5lciAuZGVza3RvcCB1bCBsaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICBuYXYgLmNvbnRhaW5lciAuZGVza3RvcCB1bCBsaTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5kZXNrdG9wIGhyIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDc3ODQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMXB4O1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5kZXNrdG9wID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBuYXYgLmNvbnRhaW5lciAuZGVza3RvcCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogIzc0Nzc4NDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgbmF2IC5jb250YWluZXIgLmRlc2t0b3AgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzI1MmI0NjtcbiAgfVxuXG4gIC5pbnRybyAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaW50cm8gLmNvbnRhaW5lciAudGV4dCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmludHJvIC5jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbiAgLmludHJvIC5jb250YWluZXIgLmlsbHVzdHJhdGlvbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbiAgLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWN0IHtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gIH1cbiAgLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5mYXEgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5mZWF0dXJlcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAuZmVhdHVyZXMgLmNvbnRhaW5lciAudGV4dCA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5mZWF0dXJlcyAuZmVhdHVyZSA+IGRpdiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mZWF0dXJlczpiZWZvcmUge1xuICAgIHRvcDogNDQlO1xuICAgIGhlaWdodDogMjklO1xuICB9XG5cbiAgLmZvb3RlciAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmZvb3RlciAuY29udGFpbmVyIC5sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbiAgLmZvb3RlciAuY29udGFpbmVyIC5kZXNrdG9wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmZvb3RlciAuY29udGFpbmVyIC5kZXNrdG9wIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZm9vdGVyIC5jb250YWluZXIgLmRlc2t0b3AgdWwgbGkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5pbnRybyAuY29udGFpbmVyIC50ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gIH1cbiAgLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5mYXEgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZhcSAuY29udGFpbmVyIGg0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmZlYXR1cmVzIC5mZWF0dXJlID4gZGl2IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZlYXR1cmVzIC5mZWF0dXJlID4gZGl2ID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZmVhdHVyZXMgLnRleHQgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZlYXR1cmVzOmJlZm9yZSB7XG4gICAgdG9wOiA0NyU7XG4gICAgaGVpZ2h0OiAxOCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/bookmark-landing/bookmark-landing.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/bookmark-landing/bookmark-landing.component.ts ***!
    \****************************************************************/

  /*! exports provided: BookmarkLandingComponent */

  /***/
  function srcAppBookmarkLandingBookmarkLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkLandingComponent", function () {
      return BookmarkLandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/observable/timer */
    "./node_modules/rxjs/internal/observable/timer.js");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BookmarkLandingComponent =
    /*#__PURE__*/
    function () {
      function BookmarkLandingComponent() {
        _classCallCheck(this, BookmarkLandingComponent);

        this.showDesktop = false;
        this.selectedFeature = 1;
        this.selectAnswer = [];
        this.checkEmail = false;
        this.reset = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(BookmarkLandingComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;
          this.checkWidth();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.innerWidth = window.innerWidth;
          this.checkWidth();
          this.subscription = this.reset.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000, 5000);
          })).subscribe(function () {
            _this2.selectedFeature++;

            if (_this2.selectedFeature == 4) {
              _this2.selectedFeature = 1;
            }
          });
        }
      }, {
        key: "selectFeature",
        value: function selectFeature(number) {
          this.selectedFeature = number;
          this.reset.next();
        }
      }, {
        key: "checkWidth",
        value: function checkWidth() {
          if (this.innerWidth > 750) {
            this.displayStyle = 'flex';
          } else {
            this.showDesktop = false;
            this.displayStyle = 'none';
          }
        }
      }, {
        key: "menuClicked",
        value: function menuClicked() {
          this.showDesktop = !this.showDesktop;

          if (this.showDesktop) {
            this.displayStyle = this.showDesktop && 'flex';
          } else {
            this.displayStyle = 'none';
          }
        }
      }, {
        key: "showAnswer",
        value: function showAnswer(number) {
          if (this.selectAnswer[number] === true) {
            this.selectAnswer[number] = false;
          } else {
            this.selectAnswer[number] = true;
          }
        }
      }]);

      return BookmarkLandingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], BookmarkLandingComponent.prototype, "onResize", null);
    BookmarkLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookmark-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookmark-landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark-landing/bookmark-landing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookmark-landing.component.scss */
      "./src/app/bookmark-landing/bookmark-landing.component.scss"))["default"]]
    })], BookmarkLandingComponent);
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/book-details/book-details.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/books-assignment/book-list/book-details/book-details.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksAssignmentBookListBookDetailsBookDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 2rem 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.container .book {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: #ffffff;\n  padding: 4rem 10rem;\n  border: transparent solid 1px;\n  border-radius: 10px;\n  box-shadow: 2px 8px 10px #a8a8a81a;\n}\n.container .book .row-1 {\n  display: -webkit-box;\n  display: flex;\n}\n.container .book .row-1 .col {\n  margin-bottom: 1rem;\n}\n.container .book .row-1 .col-1 {\n  margin-right: 3rem;\n}\n.container .book .row-1 .col-1 img {\n  width: 177px;\n}\n.container .book .row-1 .col-2 > div {\n  display: -webkit-box;\n  display: flex;\n}\n.container .book .row-1 .col-2 > div h3 {\n  margin-right: 2rem;\n}\n.container .book .row-2 p {\n  color: initial;\n  font-size: 16px;\n}\n.container .book i {\n  font-size: 25px;\n  color: #cccccc;\n  cursor: pointer;\n}\n.container .book i.infavorites {\n  color: #f5c978;\n}\n.container .book i.mobile {\n  display: none;\n}\n.container .book h3 {\n  margin: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  line-height: 22px;\n  color: #212121;\n}\n.container .book p {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  margin-bottom: auto;\n  color: #989898;\n  word-spacing: 1.3px;\n  letter-spacing: 0.2px;\n  line-height: 24px;\n}\n.container .book button {\n  align-self: flex-end;\n}\n.container .book span {\n  color: initial;\n  font-weight: 600;\n}\n@media only screen and (max-width: 980px) {\n  .container .book {\n    padding: 4rem 4rem;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .container .book {\n    padding: 4rem 2rem;\n  }\n}\n@media only screen and (max-width: 530px) {\n  .container .book .row-1 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .container .book .row-1 .col-1 {\n    display: -webkit-box;\n    display: flex;\n    position: relative;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  .container .book .row-1 .col-2 {\n    text-align: center;\n  }\n  .container .book .row-1 .col-2 > div {\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n  .container .book .row-2 {\n    text-align: center;\n  }\n  .container .book i.mobile {\n    display: initial !important;\n    position: absolute;\n    right: 0;\n  }\n  .container .book i.desktop {\n    display: none;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .container {\n    padding: 2rem 1rem;\n  }\n  .container .book {\n    padding: 4rem 1rem;\n  }\n  .container .book .row-1 .col-1 img {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MtYXNzaWdubWVudC9ib29rLWxpc3QvYm9vay1kZXRhaWxzL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGJvb2tzLWFzc2lnbm1lbnRcXGJvb2stbGlzdFxcYm9vay1kZXRhaWxzXFxib29rLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2tzLWFzc2lnbm1lbnQvYm9vay1saXN0L2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEU0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFWSztFQVdMLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDUEo7QURVTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ1JSO0FEVVE7RUFrQkUsbUJBQUE7QUN6QlY7QURRVTtFQUNFLGtCQUFBO0FDTlo7QURRWTtFQUNFLFlBQUE7QUNOZDtBRFdZO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDVGQ7QURXYztFQUNFLGtCQUFBO0FDVGhCO0FEa0JRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNoQlY7QURxQkk7RUFDRSxlQUFBO0VBQ0EsY0F4REc7RUF5REgsZUFBQTtBQ25CTjtBRHFCTTtFQUNFLGNBOURDO0FDMkNUO0FEc0JNO0VBQ0UsYUFBQTtBQ3BCUjtBRHdCSTtFQUNFLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBdEVHO0FDZ0RUO0FEeUJJO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQS9FRztFQWdGSCxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUN2Qk47QUQwQkk7RUFDRSxvQkFBQTtBQ3hCTjtBRDJCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ3pCTjtBRDhCQTtFQUVJO0lBQ0Usa0JBQUE7RUM1Qko7QUFDRjtBRGdDQTtFQUVJO0lBQ0Usa0JBQUE7RUMvQko7QUFDRjtBRG1DQTtFQUlRO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDcENSO0VEdUNVO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDckNaO0VEd0NVO0lBQ0Usa0JBQUE7RUN0Q1o7RUR3Q1k7SUFDRSx3QkFBQTtZQUFBLHVCQUFBO0VDdENkO0VENENNO0lBQ0Usa0JBQUE7RUMxQ1I7RUQrQ007SUFDRSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQzdDUjtFRCtDTTtJQUNFLGFBQUE7RUM3Q1I7QUFDRjtBRG1EQTtFQUNFO0lBQ0Usa0JBQUE7RUNqREY7RURtREU7SUFDRSxrQkFBQTtFQ2pESjtFRHNEVTtJQUNFLGVBQUE7RUNwRFo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzLWFzc2lnbm1lbnQvYm9vay1saXN0L2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3IxOiAjZjVjOTc4O1xyXG4kY29sb3IyOiAjNTg2MmNmO1xyXG4kY29sb3IzOiAjY2NjY2NjO1xyXG4kY29sb3I0OiAjOTg5ODk4O1xyXG4kY29sb3I1OiAjYThhOGE4MWE7XHJcbiRjb2xvcjY6ICMyMTIxMjE7XHJcbiRjb2xvcjc6ICNmZmZmZmY7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIC5ib29rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yNztcclxuICAgIHBhZGRpbmc6IDRyZW0gMTByZW07XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50IHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggOHB4IDEwcHggJGNvbG9yNTtcclxuXHJcbiAgICAucm93IHtcclxuICAgICAgJi0xIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAuY29sIHtcclxuICAgICAgICAgICYtMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE3N3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi0yIHtcclxuICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLTIge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IGluaXRpYWw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICYuaW5mYXZvcml0ZXMge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgY29sb3I6ICRjb2xvcjY7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgIGNvbG9yOiAkY29sb3I0O1xyXG4gICAgICB3b3JkLXNwYWNpbmc6IDEuM3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogaW5pdGlhbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5ib29rIHtcclxuICAgICAgcGFkZGluZzogNHJlbSA0cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmJvb2sge1xyXG4gICAgICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAuYm9vayB7XHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgICYtMSB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgIC5jb2wge1xyXG4gICAgICAgICAgICAmLTEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLTIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLTIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgJi5tb2JpbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZGVza3RvcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG5cclxuICAgIC5ib29rIHtcclxuICAgICAgcGFkZGluZzogNHJlbSAxcmVtO1xyXG5cclxuICAgICAgLnJvdy0xIHtcclxuICAgICAgICAuY29sIHtcclxuICAgICAgICAgICYtMSB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWluZXIgLmJvb2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA0cmVtIDEwcmVtO1xuICBib3JkZXI6IHRyYW5zcGFyZW50IHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDhweCAxMHB4ICNhOGE4YTgxYTtcbn1cbi5jb250YWluZXIgLmJvb2sgLnJvdy0xIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgLmJvb2sgLnJvdy0xIC5jb2wge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNvbnRhaW5lciAuYm9vayAucm93LTEgLmNvbC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuLmNvbnRhaW5lciAuYm9vayAucm93LTEgLmNvbC0xIGltZyB7XG4gIHdpZHRoOiAxNzdweDtcbn1cbi5jb250YWluZXIgLmJvb2sgLnJvdy0xIC5jb2wtMiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5ib29rIC5yb3ctMSAuY29sLTIgPiBkaXYgaDMge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4uY29udGFpbmVyIC5ib29rIC5yb3ctMiBwIHtcbiAgY29sb3I6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIgLmJvb2sgaSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmJvb2sgaS5pbmZhdm9yaXRlcyB7XG4gIGNvbG9yOiAjZjVjOTc4O1xufVxuLmNvbnRhaW5lciAuYm9vayBpLm1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGFpbmVyIC5ib29rIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG4uY29udGFpbmVyIC5ib29rIHAge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBjb2xvcjogIzk4OTg5ODtcbiAgd29yZC1zcGFjaW5nOiAxLjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5jb250YWluZXIgLmJvb2sgYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uY29udGFpbmVyIC5ib29rIHNwYW4ge1xuICBjb2xvcjogaW5pdGlhbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuICAuY29udGFpbmVyIC5ib29rIHtcbiAgICBwYWRkaW5nOiA0cmVtIDRyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmNvbnRhaW5lciAuYm9vayB7XG4gICAgcGFkZGluZzogNHJlbSAycmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XG4gIC5jb250YWluZXIgLmJvb2sgLnJvdy0xIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb250YWluZXIgLmJvb2sgLnJvdy0xIC5jb2wtMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmNvbnRhaW5lciAuYm9vayAucm93LTEgLmNvbC0yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciAuYm9vayAucm93LTEgLmNvbC0yID4gZGl2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC5ib29rIC5yb3ctMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmJvb2sgaS5tb2JpbGUge1xuICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmNvbnRhaW5lciAuYm9vayBpLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICB9XG4gIC5jb250YWluZXIgLmJvb2sge1xuICAgIHBhZGRpbmc6IDRyZW0gMXJlbTtcbiAgfVxuICAuY29udGFpbmVyIC5ib29rIC5yb3ctMSAuY29sLTEgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/book-details/book-details.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/books-assignment/book-list/book-details/book-details.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: BookDetailsComponent */

  /***/
  function srcAppBooksAssignmentBookListBookDetailsBookDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function () {
      return BookDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/books-assignment/book-list/book.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_book_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../store/book.actions */
    "./src/app/books-assignment/book-list/store/book.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BookDetailsComponent =
    /*#__PURE__*/
    function () {
      function BookDetailsComponent(bookService, route, store) {
        _classCallCheck(this, BookDetailsComponent);

        this.bookService = bookService;
        this.route = route;
        this.store = store;
        this.book = null;
        this.isInFavorites = false;
      }

      _createClass(BookDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.params.subscribe(function (param) {
            _this3.id = param['bookId'];

            _this3.bookService.getVolume(_this3.id).subscribe(function (response) {
              var volumeInfo = response['volumeInfo'];
              _this3.book = {
                id: response['id'],
                title: volumeInfo['title'],
                description: volumeInfo['description'],
                authors: volumeInfo['authors'],
                publishedDate: volumeInfo['publishedDate'],
                categories: volumeInfo['categories'],
                imageLinks: volumeInfo['imageLinks'],
                pageCount: volumeInfo['pageCount']
              };
            });
          });
          this.subscription = this.store.select('books').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (booksState) {
            return booksState.books;
          })).subscribe(function (favoriteBooks) {
            _this3.isInFavorites = !!favoriteBooks.find(function (book) {
              return book.id === _this3.id;
            });
          });
        }
      }, {
        key: "chooseAction",
        value: function chooseAction(isInFavorites, book) {
          if (isInFavorites) {
            this.RemoveFromFavorites(book.id);
          } else {
            this.AddToFavorites(book);
          }
        }
      }, {
        key: "AddToFavorites",
        value: function AddToFavorites(book) {
          this.store.dispatch(new _store_book_actions__WEBPACK_IMPORTED_MODULE_5__["AddToFavorite"](book));
        }
      }, {
        key: "RemoveFromFavorites",
        value: function RemoveFromFavorites(id) {
          this.store.dispatch(new _store_book_actions__WEBPACK_IMPORTED_MODULE_5__["RemoveFromFavorite"](id));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return BookDetailsComponent;
    }();

    BookDetailsComponent.ctorParameters = function () {
      return [{
        type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    BookDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/book-details/book-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-details.component.scss */
      "./src/app/books-assignment/book-list/book-details/book-details.component.scss"))["default"]]
    })], BookDetailsComponent);
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/book-list.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/books-assignment/book-list/book-list.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksAssignmentBookListBookListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 2rem 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 80px;\n  grid-row-gap: 60px;\n}\n.container .book {\n  display: -webkit-box;\n  display: flex;\n  background: #ffffff;\n  padding: 17px 25px 19px 18px;\n  border: transparent solid 1px;\n  border-radius: 10px;\n  box-shadow: 2px 8px 10px #a8a8a81a;\n}\n.container .book .col-1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  margin-right: 1.5rem;\n}\n.container .book .col-1 img {\n  width: 130px;\n  height: 178px;\n}\n.container .book .col-2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.container .book .col-2 > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.container .book .col-2 > div:first-child {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container .book i {\n  font-size: 25px;\n  color: #cccccc;\n  cursor: pointer;\n}\n.container .book i.infavorites {\n  color: #f5c978;\n}\n.container .book i.mobile {\n  display: none;\n}\n.container .book h3 {\n  margin: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  line-height: 22px;\n  color: #212121;\n}\n.container .book p {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  margin-bottom: auto;\n  color: #989898;\n  word-spacing: 1.3px;\n  letter-spacing: 0.2px;\n  line-height: 24px;\n}\n.container .book button {\n  align-self: flex-end;\n}\n.container .book span {\n  color: initial;\n  font-weight: 600;\n}\nbutton {\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-weight: bold;\n  background: #a8a8a81a;\n  color: #5862cf;\n  width: 100px;\n  height: 35px;\n  border-radius: 18px;\n}\nbutton.load {\n  grid-column: 1/span 2;\n  justify-self: center;\n}\nbutton:hover {\n  color: #ffffff;\n  background: #5862cf;\n}\n@media only screen and (max-width: 865px) {\n  .container {\n    grid-column-gap: 30px;\n  }\n  .container .book {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding-left: 25px;\n  }\n  .container .book .col-1 {\n    position: relative;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-bottom: 1rem;\n    margin-right: 0;\n  }\n  .container .book .col-2 {\n    height: 100%;\n    text-align: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .container .book .col-2 p {\n    margin-bottom: 1.5rem;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n  }\n  .container .book .col-2 button {\n    align-self: center;\n  }\n  .container i.mobile {\n    display: initial !important;\n    position: absolute;\n    right: 0;\n  }\n  .container i.desktop {\n    display: none;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .container {\n    grid-template-columns: auto;\n  }\n  .container button.load {\n    grid-column: initial;\n    justify-self: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MtYXNzaWdubWVudC9ib29rLWxpc3QvQzpcXFVzZXJzXFx0amFuYVxcRGVza3RvcFxcYW5ndWxhci1wcmFjdGljZS9zcmNcXGFwcFxcYm9va3MtYXNzaWdubWVudFxcYm9vay1saXN0XFxib29rLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2tzLWFzc2lnbm1lbnQvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEU0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFiSztFQWNMLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDUEo7QURVTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtBQ1JSO0FEVVE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ1JWO0FEWU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNWUjtBRFlRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ1ZWO0FEWVU7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0FDVlo7QURnQkk7RUFDRSxlQUFBO0VBQ0EsY0FwREc7RUFxREgsZUFBQTtBQ2ROO0FEZ0JNO0VBQ0UsY0ExREM7QUM0Q1Q7QURpQk07RUFDRSxhQUFBO0FDZlI7QURtQkk7RUFDRSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQW5FRztBQ2tEVDtBRG9CSTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0EzRUc7RUE0RUgsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDbEJOO0FEcUJJO0VBQ0Usb0JBQUE7QUNuQk47QURzQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNwQk47QUR5QkE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQTlGTztFQStGUCxjQW5HTztFQW9HUCxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEd0JFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQ3RCSjtBRHlCRTtFQUNFLGNBekdLO0VBMEdMLG1CQS9HSztBQ3dGVDtBRDJCQTtFQUNFO0lBQ0UscUJBQUE7RUN4QkY7RUQwQkU7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxrQkFBQTtFQ3hCSjtFRDJCTTtJQUNFLGtCQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQ3pCUjtFRDRCTTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUMxQlI7RUQ0QlE7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO1lBQUEsWUFBQTtFQzFCVjtFRDZCUTtJQUNFLGtCQUFBO0VDM0JWO0VEa0NJO0lBQ0UsMkJBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUNoQ047RURtQ0k7SUFDRSxhQUFBO0VDakNOO0FBQ0Y7QURzQ0E7RUFDRTtJQUNFLDJCQUFBO0VDcENGO0VEdUNJO0lBQ0Usb0JBQUE7SUFDQSxvQkFBQTtFQ3JDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYm9va3MtYXNzaWdubWVudC9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogI2Y1Yzk3ODtcclxuJGNvbG9yMjogIzU4NjJjZjtcclxuJGNvbG9yMzogI2NjY2NjYztcclxuJGNvbG9yNDogIzk4OTg5ODtcclxuJGNvbG9yNTogIzIxMjEyMTtcclxuJGNvbG9yNjogI2E4YThhODFhO1xyXG4kY29sb3I3OiAjZmZmZmZmO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogODBweDtcclxuICBncmlkLXJvdy1nYXA6IDYwcHg7XHJcblxyXG4gIC5ib29rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I3O1xyXG4gICAgcGFkZGluZzogMTdweCAyNXB4IDE5cHggMThweDtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA4cHggMTBweCAkY29sb3I2O1xyXG5cclxuICAgIC5jb2wge1xyXG4gICAgICAmLTEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE3OHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi0yIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICYuaW5mYXZvcml0ZXMge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgY29sb3I6ICRjb2xvcjU7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgIGNvbG9yOiAkY29sb3I0O1xyXG4gICAgICB3b3JkLXNwYWNpbmc6IDEuM3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogaW5pdGlhbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjY7XHJcbiAgY29sb3I6ICRjb2xvcjI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cclxuICAmLmxvYWQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRjb2xvcjc7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjVweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAzMHB4O1xyXG5cclxuICAgIC5ib29rIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5cclxuICAgICAgLmNvbCB7XHJcbiAgICAgICAgJi0xIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtMiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICYubW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmRlc2t0b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAmLmxvYWQge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDgwcHg7XG4gIGdyaWQtcm93LWdhcDogNjBweDtcbn1cbi5jb250YWluZXIgLmJvb2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxN3B4IDI1cHggMTlweCAxOHB4O1xuICBib3JkZXI6IHRyYW5zcGFyZW50IHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDhweCAxMHB4ICNhOGE4YTgxYTtcbn1cbi5jb250YWluZXIgLmJvb2sgLmNvbC0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuLmNvbnRhaW5lciAuYm9vayAuY29sLTEgaW1nIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDE3OHB4O1xufVxuLmNvbnRhaW5lciAuYm9vayAuY29sLTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhaW5lciAuYm9vayAuY29sLTIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNvbnRhaW5lciAuYm9vayAuY29sLTIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyIC5ib29rIGkge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5ib29rIGkuaW5mYXZvcml0ZXMge1xuICBjb2xvcjogI2Y1Yzk3ODtcbn1cbi5jb250YWluZXIgLmJvb2sgaS5tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciAuYm9vayBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuLmNvbnRhaW5lciAuYm9vayBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgY29sb3I6ICM5ODk4OTg7XG4gIHdvcmQtc3BhY2luZzogMS4zcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4uY29udGFpbmVyIC5ib29rIGJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLmNvbnRhaW5lciAuYm9vayBzcGFuIHtcbiAgY29sb3I6IGluaXRpYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjYThhOGE4MWE7XG4gIGNvbG9yOiAjNTg2MmNmO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cbmJ1dHRvbi5sb2FkIHtcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNTg2MmNmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uLWdhcDogMzBweDtcbiAgfVxuICAuY29udGFpbmVyIC5ib29rIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxuICAuY29udGFpbmVyIC5ib29rIC5jb2wtMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5jb250YWluZXIgLmJvb2sgLmNvbC0yIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciAuYm9vayAuY29sLTIgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuY29udGFpbmVyIC5ib29rIC5jb2wtMiBidXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIGkubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5jb250YWluZXIgaS5kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgfVxuICAuY29udGFpbmVyIGJ1dHRvbi5sb2FkIHtcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/book-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/books-assignment/book-list/book-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BookListComponent */

  /***/
  function srcAppBooksAssignmentBookListBookListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookListComponent", function () {
      return BookListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store_book_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store/book.actions */
    "./src/app/books-assignment/book-list/store/book.actions.ts");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./book.service */
    "./src/app/books-assignment/book-list/book.service.ts");
    /* harmony import */


    var _book_list_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./book-list.resolver.service */
    "./src/app/books-assignment/book-list/book-list.resolver.service.ts");

    var BookListComponent =
    /*#__PURE__*/
    function () {
      function BookListComponent(bookListResolver, bookService, route, store, router) {
        _classCallCheck(this, BookListComponent);

        this.bookListResolver = bookListResolver;
        this.bookService = bookService;
        this.route = route;
        this.store = store;
        this.router = router;
        this.books = [];
        this.isInFavorites = [];
        this.booksOnPage = 0;
      }

      _createClass(BookListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.snapshot.data['bookList'].items.forEach(function (response) {
            _this4.handleBooks(response);
          });
          this.subscription = this.store.select('books').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (booksState) {
            return booksState.books;
          })).subscribe(function (favoriteBooks) {
            if (favoriteBooks.length < 1) {
              _this4.isInFavorites = _this4.isInFavorites.map(function (book) {
                return book = false;
              });
            } else {
              _this4.isInFavorites = _this4.isInFavorites.map(function (book) {
                return book = false;
              });
              favoriteBooks.forEach(function (favoriteBook) {
                var index = _this4.books.findIndex(function (book) {
                  return book.id === favoriteBook.id;
                });

                _this4.isInFavorites[index] = true;
              });
            }
          });
        }
      }, {
        key: "chooseAction",
        value: function chooseAction(isInFavorites, book) {
          if (isInFavorites) {
            this.RemoveFromFavorites(book.id);
          } else {
            this.AddToFavorites(book);
          }
        }
      }, {
        key: "AddToFavorites",
        value: function AddToFavorites(book) {
          this.store.dispatch(new _store_book_actions__WEBPACK_IMPORTED_MODULE_5__["AddToFavorite"](book));
        }
      }, {
        key: "RemoveFromFavorites",
        value: function RemoveFromFavorites(id) {
          this.store.dispatch(new _store_book_actions__WEBPACK_IMPORTED_MODULE_5__["RemoveFromFavorite"](id));
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          var _this5 = this;

          this.booksOnPage += 10;
          this.bookService.getBooks(this.booksOnPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (response) {
            var items = response['items'];
            items.forEach(function (response) {
              _this5.handleBooks(response);
            });

            _this5.store.dispatch(new _store_book_actions__WEBPACK_IMPORTED_MODULE_5__["ReloadState"]());
          });
        }
      }, {
        key: "handleBooks",
        value: function handleBooks(response) {
          var volumeInfo = response['volumeInfo'];
          var book = {
            id: response['id'],
            title: volumeInfo['title'],
            description: volumeInfo['description'],
            authors: volumeInfo['authors'],
            publishedDate: volumeInfo['publishedDate'],
            categories: volumeInfo['categories'],
            imageLinks: volumeInfo['imageLinks'],
            pageCount: volumeInfo['pageCount']
          };
          this.books.push(book);
          this.isInFavorites.push(false);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return BookListComponent;
    }();

    BookListComponent.ctorParameters = function () {
      return [{
        type: _book_list_resolver_service__WEBPACK_IMPORTED_MODULE_7__["BookListResolver"]
      }, {
        type: _book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/book-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-list.component.scss */
      "./src/app/books-assignment/book-list/book-list.component.scss"))["default"]]
    })], BookListComponent);
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/book-list.resolver.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/books-assignment/book-list/book-list.resolver.service.ts ***!
    \**************************************************************************/

  /*! exports provided: BookListResolver */

  /***/
  function srcAppBooksAssignmentBookListBookListResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookListResolver", function () {
      return BookListResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./book.service */
    "./src/app/books-assignment/book-list/book.service.ts");

    var BookListResolver =
    /*#__PURE__*/
    function () {
      function BookListResolver(booksService) {
        _classCallCheck(this, BookListResolver);

        this.booksService = booksService;
      }

      _createClass(BookListResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.booksService.getBooks();
        }
      }]);

      return BookListResolver;
    }();

    BookListResolver.ctorParameters = function () {
      return [{
        type: _book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]
      }];
    };

    BookListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BookListResolver);
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/book.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/books-assignment/book-list/book.service.ts ***!
    \************************************************************/

  /*! exports provided: BookService */

  /***/
  function srcAppBooksAssignmentBookListBookServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookService", function () {
      return BookService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var BookService =
    /*#__PURE__*/
    function () {
      function BookService(httpClient) {
        _classCallCheck(this, BookService);

        this.httpClient = httpClient;
      }

      _createClass(BookService, [{
        key: "getBooks",
        value: function getBooks() {
          var startIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=subject:&startIndex=' + startIndex);
        }
      }, {
        key: "getVolume",
        value: function getVolume(id) {
          return this.httpClient.get("https://www.googleapis.com/books/v1/volumes/".concat(id));
        }
      }]);

      return BookService;
    }();

    BookService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BookService);
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/favorites/favorites.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/books-assignment/book-list/favorites/favorites.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksAssignmentBookListFavoritesFavoritesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzLWFzc2lnbm1lbnQvYm9vay1saXN0L2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/favorites/favorites.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/books-assignment/book-list/favorites/favorites.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppBooksAssignmentBookListFavoritesFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/books-assignment/book-list/book.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_book_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../store/book.actions */
    "./src/app/books-assignment/book-list/store/book.actions.ts");

    var FavoritesComponent =
    /*#__PURE__*/
    function () {
      function FavoritesComponent(bookService, store) {
        _classCallCheck(this, FavoritesComponent);

        this.bookService = bookService;
        this.store = store;
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.subscription = this.store.select('books').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (booksState) {
            return booksState.books;
          })).subscribe(function (books) {
            _this6.books = books;
          });
        }
      }, {
        key: "RemoveFromFavorites",
        value: function RemoveFromFavorites(id) {
          this.store.dispatch(new _store_book_actions__WEBPACK_IMPORTED_MODULE_5__["RemoveFromFavorite"](id));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent.ctorParameters = function () {
      return [{
        type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/book-list/favorites/favorites.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.component.scss */
      "./src/app/books-assignment/book-list/favorites/favorites.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../book-list.component.scss */
      "./src/app/books-assignment/book-list/book-list.component.scss"))["default"]]
    })], FavoritesComponent);
    /***/
  },

  /***/
  "./src/app/books-assignment/book-list/store/book.actions.ts":
  /*!******************************************************************!*\
    !*** ./src/app/books-assignment/book-list/store/book.actions.ts ***!
    \******************************************************************/

  /*! exports provided: ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, RELOAD_STATE, AddToFavorite, RemoveFromFavorite, ReloadState */

  /***/
  function srcAppBooksAssignmentBookListStoreBookActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_TO_FAVORITE", function () {
      return ADD_TO_FAVORITE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_FAVORITE", function () {
      return REMOVE_FROM_FAVORITE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RELOAD_STATE", function () {
      return RELOAD_STATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToFavorite", function () {
      return AddToFavorite;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveFromFavorite", function () {
      return RemoveFromFavorite;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReloadState", function () {
      return ReloadState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
    var REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
    var RELOAD_STATE = 'RELOAD_STATE';

    var AddToFavorite = function AddToFavorite(payload) {
      _classCallCheck(this, AddToFavorite);

      this.payload = payload;
      this.type = ADD_TO_FAVORITE;
    };

    var RemoveFromFavorite = function RemoveFromFavorite(payload) {
      _classCallCheck(this, RemoveFromFavorite);

      this.payload = payload;
      this.type = REMOVE_FROM_FAVORITE;
    };

    var ReloadState = function ReloadState() {
      _classCallCheck(this, ReloadState);

      this.type = RELOAD_STATE;
    };
    /***/

  },

  /***/
  "./src/app/books-assignment/book-list/store/book.reducers.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/books-assignment/book-list/store/book.reducers.ts ***!
    \*******************************************************************/

  /*! exports provided: bookReducer */

  /***/
  function srcAppBooksAssignmentBookListStoreBookReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bookReducer", function () {
      return bookReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _book_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./book.actions */
    "./src/app/books-assignment/book-list/store/book.actions.ts");

    var storage = JSON.parse(localStorage.getItem('favoriteBooks'));
    var favoriteBooks;

    if (storage) {
      favoriteBooks = storage['books'];
    } else {
      favoriteBooks = [];
    }

    var initialState = {
      books: _toConsumableArray(favoriteBooks)
    };

    function bookReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _book_actions__WEBPACK_IMPORTED_MODULE_1__["RELOAD_STATE"]:
          return {
            books: _toConsumableArray(state.books)
          };

        case _book_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_FAVORITE"]:
          localStorage.setItem('favoriteBooks', JSON.stringify({
            books: [].concat(_toConsumableArray(state.books), [action.payload])
          }));
          return {
            books: [].concat(_toConsumableArray(state.books), [action.payload])
          };

        case _book_actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_FAVORITE"]:
          var booksUpdated = _toConsumableArray(state.books.filter(function (books) {
            return books.id !== action.payload;
          }));

          localStorage.setItem('favoriteBooks', JSON.stringify({
            books: booksUpdated
          }));
          return {
            books: booksUpdated
          };

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/books-assignment/books.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/books-assignment/books.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksAssignmentBooksComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  font-family: \"Rubik\", sans-serif;\n}\n\n@media (max-width: 445px) {\n  nav {\n    font-size: 0.75rem;\n  }\n}\n\nsection {\n  background-color: #f1f1f1;\n  min-height: 100vh;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MtYXNzaWdubWVudC9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxib29rcy1hc3NpZ25tZW50XFxib29rcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYm9va3MtYXNzaWdubWVudC9ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdDQUFBO0FDRkY7O0FES0E7RUFDRTtJQUNFLGtCQUFBO0VDRkY7QUFDRjs7QURLQTtFQUNFLHlCQWRPO0VBZVAsaUJBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9ib29rcy1hc3NpZ25tZW50L2Jvb2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogI2YxZjFmMTtcclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0NXB4KSB7XHJcbiAgbmF2IHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4iLCIud3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NDVweCkge1xuICBuYXYge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/books-assignment/books.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/books-assignment/books.component.ts ***!
    \*****************************************************/

  /*! exports provided: BooksComponent */

  /***/
  function srcAppBooksAssignmentBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BooksComponent =
    /*#__PURE__*/
    function () {
      function BooksComponent() {
        _classCallCheck(this, BooksComponent);
      }

      _createClass(BooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BooksComponent;
    }();

    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-books',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/books.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books.component.scss */
      "./src/app/books-assignment/books.component.scss"))["default"]]
    })], BooksComponent);
    /***/
  },

  /***/
  "./src/app/books-assignment/header/header.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/books-assignment/header/header.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksAssignmentHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  background-color: #ffffff;\n  color: #2c359b;\n}\nnav .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0.5rem 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\nnav .container .logo img {\n  width: 100px;\n  cursor: pointer;\n}\nnav .container .desktop {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\nnav .container .desktop ul {\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 22px;\n  margin: 0;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\nnav .container .desktop ul li {\n  padding: 0rem 1rem;\n  position: relative;\n  cursor: pointer;\n}\nnav .container .desktop ul li:hover, nav .container .desktop ul li.active {\n  font-weight: bold;\n}\nnav .container .desktop ul li:hover:before, nav .container .desktop ul li.active:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background-color: #5862cf;\n  bottom: -100%;\n  left: 0;\n}\nnav .container .desktop ul li:first-child {\n  margin-right: 1rem;\n}\n@media only screen and (max-width: 400px) {\n  nav .container {\n    padding: 0.5rem 1rem;\n  }\n  nav .container .desktop ul {\n    padding-left: 10px;\n  }\n  nav .container .desktop ul li:first-child {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MtYXNzaWdubWVudC9oZWFkZXIvQzpcXFVzZXJzXFx0amFuYVxcRGVza3RvcFxcYW5ndWxhci1wcmFjdGljZS9zcmNcXGFwcFxcYm9va3MtYXNzaWdubWVudFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2tzLWFzc2lnbm1lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHlCQUxPO0VBTVAsY0FMTztBQ0VUO0FES0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0hKO0FETU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0pSO0FEUUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FDTk47QURRTTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNOUjtBRFFRO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNOVjtBRFFVO0VBRUUsaUJBQUE7QUNQWjtBRFNZO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQXBETDtFQXFESyxhQUFBO0VBQ0EsT0FBQTtBQ1BkO0FEV1U7RUFDRSxrQkFBQTtBQ1RaO0FEaUJBO0VBRUk7SUFDRSxvQkFBQTtFQ2ZKO0VEa0JNO0lBQ0Usa0JBQUE7RUNoQlI7RURtQlU7SUFDRSxlQUFBO0VDakJaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib29rcy1hc3NpZ25tZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3IxOiAjZmZmZmZmO1xyXG4kY29sb3IyOiAjMmMzNTliO1xyXG4kY29sb3IzOiAjNTg2MmNmO1xyXG5cclxubmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gIGNvbG9yOiAkY29sb3IyO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtMTAwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICBuYXYge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG5cclxuICAgICAgLmRlc2t0b3Age1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzJjMzU5Yjtcbn1cbm5hdiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbm5hdiAuY29udGFpbmVyIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IC5jb250YWluZXIgLmRlc2t0b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbm5hdiAuY29udGFpbmVyIC5kZXNrdG9wIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbjogMDtcbiAgZmxleC1ncm93OiAxO1xufVxubmF2IC5jb250YWluZXIgLmRlc2t0b3AgdWwgbGkge1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IC5jb250YWluZXIgLmRlc2t0b3AgdWwgbGk6aG92ZXIsIG5hdiAuY29udGFpbmVyIC5kZXNrdG9wIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxubmF2IC5jb250YWluZXIgLmRlc2t0b3AgdWwgbGk6aG92ZXI6YmVmb3JlLCBuYXYgLmNvbnRhaW5lciAuZGVza3RvcCB1bCBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjJjZjtcbiAgYm90dG9tOiAtMTAwJTtcbiAgbGVmdDogMDtcbn1cbm5hdiAuY29udGFpbmVyIC5kZXNrdG9wIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIG5hdiAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgfVxuICBuYXYgLmNvbnRhaW5lciAuZGVza3RvcCB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5kZXNrdG9wIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/books-assignment/header/header.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/books-assignment/header/header.component.ts ***!
    \*************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppBooksAssignmentHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-books-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books-assignment/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/books-assignment/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/books-assignment/pipes/description-limit.pipe.ts":
  /*!******************************************************************!*\
    !*** ./src/app/books-assignment/pipes/description-limit.pipe.ts ***!
    \******************************************************************/

  /*! exports provided: DescriptionLimitPipe */

  /***/
  function srcAppBooksAssignmentPipesDescriptionLimitPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescriptionLimitPipe", function () {
      return DescriptionLimitPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DescriptionLimitPipe =
    /*#__PURE__*/
    function () {
      function DescriptionLimitPipe() {
        _classCallCheck(this, DescriptionLimitPipe);
      }

      _createClass(DescriptionLimitPipe, [{
        key: "transform",
        value: function transform(value) {
          var limit = 20;

          if (!value) {
            return 'TBD';
          }

          var wordCount = value.split(' ');

          if (wordCount.length > limit) {
            return wordCount.slice(0, limit).join(' ') + '...';
          }

          return value;
        }
      }]);

      return DescriptionLimitPipe;
    }();

    DescriptionLimitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'descriptionLimit'
    })], DescriptionLimitPipe);
    /***/
  },

  /***/
  "./src/app/books-assignment/store/app.reducer.ts":
  /*!*******************************************************!*\
    !*** ./src/app/books-assignment/store/app.reducer.ts ***!
    \*******************************************************/

  /*! exports provided: appReducer */

  /***/
  function srcAppBooksAssignmentStoreAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducer", function () {
      return appReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _book_list_store_book_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../book-list/store/book.reducers */
    "./src/app/books-assignment/book-list/store/book.reducers.ts");

    var appReducer = {
      books: _book_list_store_book_reducers__WEBPACK_IMPORTED_MODULE_1__["bookReducer"]
    };
    /***/
  },

  /***/
  "./src/app/clipboard/clipboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/clipboard/clipboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClipboardClipboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: top;\n}\n\n.container {\n  padding: 1.2rem;\n  max-width: 1400px;\n  font-family: \"Bai Jamjuree\", sans-serif;\n  margin: auto;\n}\n\n.download-content {\n  text-align: center;\n  text-align: -webkit-center;\n  margin-bottom: 5rem;\n}\n\n.download-content h1,\n.download-content p {\n  width: 35rem;\n  word-spacing: -1.9px;\n  letter-spacing: 0.1px;\n}\n\n.download-content button {\n  border-width: 0;\n  border-radius: 2rem;\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  padding-top: 1.2rem;\n  padding-bottom: 1.2rem;\n  font-size: 1rem;\n  letter-spacing: 1.1px;\n  color: white;\n}\n\n.download-content button.ios {\n  background-color: #26baa4;\n  margin-right: 1rem;\n}\n\n.download-content button.mac {\n  background-color: #6173ff;\n}\n\n.download-content button:hover {\n  cursor: pointer;\n}\n\n.download-content button:hover.ios {\n  background-color: #26baa4;\n  box-shadow: 0px 2px 20px rgba(39, 170, 151, 0.5);\n}\n\n.download-content button:hover.mac {\n  background-color: #6173ff;\n  box-shadow: 0px 2px 20px rgba(87, 102, 219, 0.5);\n}\n\n.desktop > div:first-child {\n  text-align: center;\n  text-align: -webkit-center;\n  margin-bottom: 4rem;\n}\n\n.desktop > div:first-child > h2,\n.desktop > div:first-child p {\n  width: 35rem;\n  word-spacing: -1.9px;\n  letter-spacing: 0.1px;\n}\n\n.desktop .features {\n  display: -webkit-box;\n  display: flex;\n}\n\n.desktop .features h3:last-child p {\n  margin-bottom: 0;\n}\n\n.desktop .features p {\n  color: gray;\n  font-size: 15px;\n  margin-bottom: 3rem;\n}\n\n.desktop img {\n  margin-right: 6rem;\n  -webkit-transform: translate(-21px, 0px);\n          transform: translate(-21px, 0px);\n}\n\n.devices {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.features {\n  margin-bottom: 5rem;\n}\n\n.features > div:first-child {\n  text-align: center;\n  text-align: -webkit-center;\n  margin-bottom: 4rem;\n}\n\n.features > div:first-child h2,\n.features > div:first-child p {\n  width: 35rem;\n  word-spacing: -1.9px;\n  letter-spacing: 0.1px;\n}\n\n.features div.feature {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.features div.feature > div {\n  text-align: center;\n  width: 22rem;\n}\n\n.features div.feature img {\n  height: 3rem;\n}\n\n.vendors {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 6rem;\n  padding-right: 5rem;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  margin-bottom: 5rem;\n}\n\nfooter {\n  background-color: whitesmoke;\n}\n\nfooter .container {\n  display: -webkit-box;\n  display: flex;\n  box-sizing: border-box;\n  padding-left: 9.5rem;\n  padding-right: 9.5rem;\n}\n\nfooter .container .nav {\n  display: -webkit-box;\n  display: flex;\n  margin-right: auto;\n}\n\nfooter .container .nav > div {\n  margin-right: 7.5rem;\n}\n\nfooter .container .nav > div:last-child {\n  margin-right: 0;\n}\n\nfooter .container .nav a:first-child {\n  display: block;\n  margin-bottom: 1rem;\n}\n\nfooter .container img.clipboard {\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-right: 8rem;\n}\n\nfooter .container .social {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nfooter .container a {\n  text-decoration: none;\n  cursor: pointer;\n  margin-right: 1.4rem;\n}\n\nfooter .container a:last-child {\n  margin-right: 0;\n}\n\n@media only screen and (max-width: 965px) {\n  .desktop .features img {\n    margin-right: 0;\n  }\n}\n\n@media only screen and (max-width: 885px) {\n  .download-content > div:last-of-type {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .download-content > div button {\n    margin-right: 0;\n  }\n  .download-content > div button.ios {\n    margin-bottom: 1rem;\n  }\n\n  .desktop .features {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .desktop img {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n    width: 35rem;\n    margin-right: 0;\n  }\n\n  .features div.feature {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .devices img {\n    width: 39rem;\n  }\n\n  .vendors {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .vendors img {\n    margin-bottom: 3rem;\n  }\n\n  footer .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  footer .container img.clipboard {\n    margin-right: 0;\n    margin-bottom: 2rem;\n  }\n  footer .container .nav {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    margin-right: 0;\n    text-align: center;\n    margin-bottom: 1rem;\n  }\n  footer .container .nav > div {\n    margin-right: 0;\n  }\n  footer .container a {\n    display: block;\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  footer .container .social {\n    width: 11rem;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n  }\n}\n\n@media only screen and (max-width: 630px) {\n  .download-content > div:last-of-type {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .download-content > div button {\n    margin-right: 0;\n  }\n  .download-content > div button.ios {\n    margin-bottom: 1rem;\n  }\n  .download-content h1,\n.download-content p {\n    width: 100%;\n  }\n\n  .desktop .features {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .desktop img {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n    width: 100%;\n    margin-right: 0;\n  }\n  .desktop > div:first-child h2,\n.desktop > div:first-child p {\n    width: 100%;\n  }\n\n  .features div {\n    text-align: center;\n    width: 100% !important;\n  }\n  .features div.feature {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .features > div:first-child h2,\n.features > div:first-child p {\n    width: 100%;\n  }\n\n  .devices {\n    text-align: center;\n  }\n  .devices img {\n    width: 100%;\n  }\n\n  .vendors {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .vendors img {\n    margin-bottom: 3rem;\n  }\n\n  footer .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  footer .container img.clipboard {\n    margin-right: 0;\n    margin-bottom: 2rem;\n  }\n  footer .container .nav {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    margin-right: 0;\n    text-align: center;\n    margin-bottom: 1rem;\n  }\n  footer .container .nav > div {\n    margin-right: 0;\n  }\n  footer .container a {\n    display: block;\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  footer .container .social {\n    width: 11rem;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpcGJvYXJkL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGNsaXBib2FyZFxcY2xpcGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGlwYm9hcmQvY2xpcGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7O0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0FOOztBREVJO0VBQ0UseUJBQUE7QUNBTjs7QURHSTtFQUNFLGVBQUE7QUNETjs7QURHTTtFQUNFLHlCQUFBO0VBRUEsZ0RBQUE7QUNEUjs7QURJTTtFQUNFLHlCQUFBO0VBRUEsZ0RBQUE7QUNGUjs7QURVSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ1BOOztBRFNNOztFQUVFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDUFI7O0FEWUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNWSjs7QURjUTtFQUNFLGdCQUFBO0FDWlY7O0FEaUJJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2ZOOztBRG1CRTtFQUNFLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ2pCSjs7QURxQkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDbEJGOztBRHFCQTtFQUNFLG1CQUFBO0FDbEJGOztBRHFCSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ25CTjs7QURxQk07O0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNuQlI7O0FEeUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3ZCTjs7QUR5Qk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUN2QlI7O0FEMEJNO0VBQ0UsWUFBQTtBQ3hCUjs7QUQ4QkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtFQUNBLG1CQUFBO0FDM0JGOztBRDhCQTtFQUNFLDRCQUFBO0FDM0JGOztBRDZCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQzNCSjs7QUQ2Qkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtBQzNCTjs7QUQ2Qk07RUFDRSxvQkFBQTtBQzNCUjs7QUQ2QlE7RUFDRSxlQUFBO0FDM0JWOztBRGdDUTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQzlCVjs7QURvQ007RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbENSOztBRHNDSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNwQ047O0FEc0NJO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNwQ047O0FEc0NNO0VBQ0UsZUFBQTtBQ3BDUjs7QUQwQ0E7RUFHTTtJQUNFLGVBQUE7RUN6Q047QUFDRjs7QUQ4Q0E7RUFHTTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUM5Q047RURnREk7SUFDRSxlQUFBO0VDOUNOO0VEZ0RNO0lBQ0UsbUJBQUE7RUM5Q1I7O0VEcURFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQ2xESjtFRHFERTtJQUNFLHNDQUFBO1lBQUEsOEJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ25ESjs7RUR5REk7SUFDRSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDdEROOztFRDRERTtJQUNFLFlBQUE7RUN6REo7O0VENERBO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQ3pERjtFRDJERTtJQUNFLG1CQUFBO0VDekRKOztFRDhERTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUMzREo7RUQ4RE07SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUM1RFI7RURnRUk7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUM5RE47RURnRU07SUFDRSxlQUFBO0VDOURSO0VEaUVJO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQy9ETjtFRGtFSTtJQUNFLFlBQUE7SUFDQSw4QkFBQTtZQUFBLDZCQUFBO0VDaEVOO0FBQ0Y7O0FEcUVBO0VBR007SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDckVOO0VEdUVJO0lBQ0UsZUFBQTtFQ3JFTjtFRHVFTTtJQUNFLG1CQUFBO0VDckVSO0VEMEVFOztJQUVFLFdBQUE7RUN4RUo7O0VENkVFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQzFFSjtFRDZFRTtJQUNFLHNDQUFBO1lBQUEsOEJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQzNFSjtFRGdGTTs7SUFFRSxXQUFBO0VDOUVSOztFRHFGRTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7RUNsRko7RURvRkk7SUFDRSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDbEZOO0VEd0ZNOztJQUVFLFdBQUE7RUN0RlI7O0VENEZBO0lBQ0Usa0JBQUE7RUN6RkY7RUQyRkU7SUFDRSxXQUFBO0VDekZKOztFRDRGQTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUN6RkY7RUQyRkU7SUFDRSxtQkFBQTtFQ3pGSjs7RUQ4RkU7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDM0ZKO0VEOEZNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDNUZSO0VEZ0dJO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDOUZOO0VEZ0dNO0lBQ0UsZUFBQTtFQzlGUjtFRGlHSTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUMvRk47RURrR0k7SUFDRSxZQUFBO0lBQ0EsOEJBQUE7WUFBQSw2QkFBQTtFQ2hHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2xpcGJvYXJkL2NsaXBib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IHRvcDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMS4ycmVtO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJhaSBKYW1qdXJlZVwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmRvd25sb2FkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG5cclxuICBoMSxcclxuICBwIHtcclxuICAgIHdpZHRoOiAzNXJlbTtcclxuICAgIHdvcmQtc3BhY2luZzogLTEuOXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICYuaW9zIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE3MSwgNjYlLCA0NCUpO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICAmLm1hYyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzMsIDEwMCUsIDY5JSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICYuaW9zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiYWE0O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IHJnYmEoMzksIDE3MCwgMTUxLCAwLjUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMjBweCByZ2JhKDM5LCAxNzAsIDE1MSwgMC41KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5tYWMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTczZmY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDIwcHggcmdiYSg4NywgMTAyLCAyMTksIDAuNSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IHJnYmEoODcsIDEwMiwgMjE5LCAwLjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGVza3RvcCB7XHJcbiAgPiBkaXYge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcblxyXG4gICAgICA+IGgyLFxyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMzVyZW07XHJcbiAgICAgICAgd29yZC1zcGFjaW5nOiAtMS45cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogNnJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMXB4LCAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmRldmljZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmVhdHVyZXMge1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcblxyXG4gID4gZGl2IHtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG5cclxuICAgICAgaDIsXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAzNXJlbTtcclxuICAgICAgICB3b3JkLXNwYWNpbmc6IC0xLjlweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICAmLmZlYXR1cmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDIycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnZlbmRvcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OiA2cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5LjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5LjVyZW07XHJcblxyXG4gICAgLm5hdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcuNXJlbTtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICYuY2xpcGJvYXJkIHtcclxuICAgICAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuNHJlbTtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2NXB4KSB7XHJcbiAgLmRlc2t0b3Age1xyXG4gICAgLmZlYXR1cmVzIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODg1cHgpIHtcclxuICAuZG93bmxvYWQtY29udGVudCB7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgJi5pb3Mge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNrdG9wIHtcclxuICAgIC5mZWF0dXJlcyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xyXG4gICAgICB3aWR0aDogMzVyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mZWF0dXJlcyB7XHJcbiAgICBkaXYge1xyXG4gICAgICAmLmZlYXR1cmUge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRldmljZXMge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDM5cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAudmVuZG9ycyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICAmLmNsaXBib2FyZCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNvY2lhbCB7XHJcbiAgICAgICAgd2lkdGg6IDExcmVtO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbiAgLmRvd25sb2FkLWNvbnRlbnQge1xyXG4gICAgPiBkaXYge1xyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICYuaW9zIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDEsXHJcbiAgICBwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVza3RvcCB7XHJcbiAgICAuZmVhdHVyZXMge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZXMge1xyXG4gICAgZGl2IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgJi5mZWF0dXJlIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGV2aWNlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52ZW5kb3JzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgJi5jbGlwYm9hcmQge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXYge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgIHdpZHRoOiAxMXJlbTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogdG9wO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMS4ycmVtO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFpIEphbWp1cmVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmRvd25sb2FkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLmRvd25sb2FkLWNvbnRlbnQgaDEsXG4uZG93bmxvYWQtY29udGVudCBwIHtcbiAgd2lkdGg6IDM1cmVtO1xuICB3b3JkLXNwYWNpbmc6IC0xLjlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xufVxuLmRvd25sb2FkLWNvbnRlbnQgYnV0dG9uIHtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMi41cmVtO1xuICBwYWRkaW5nLXRvcDogMS4ycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRvd25sb2FkLWNvbnRlbnQgYnV0dG9uLmlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJhYTQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5kb3dubG9hZC1jb250ZW50IGJ1dHRvbi5tYWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE3M2ZmO1xufVxuLmRvd25sb2FkLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRvd25sb2FkLWNvbnRlbnQgYnV0dG9uOmhvdmVyLmlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJhYTQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IHJnYmEoMzksIDE3MCwgMTUxLCAwLjUpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDIwcHggcmdiYSgzOSwgMTcwLCAxNTEsIDAuNSk7XG59XG4uZG93bmxvYWQtY29udGVudCBidXR0b246aG92ZXIubWFjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxNzNmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDIwcHggcmdiYSg4NywgMTAyLCAyMTksIDAuNSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMjBweCByZ2JhKDg3LCAxMDIsIDIxOSwgMC41KTtcbn1cblxuLmRlc2t0b3AgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuLmRlc2t0b3AgPiBkaXY6Zmlyc3QtY2hpbGQgPiBoMixcbi5kZXNrdG9wID4gZGl2OmZpcnN0LWNoaWxkIHAge1xuICB3aWR0aDogMzVyZW07XG4gIHdvcmQtc3BhY2luZzogLTEuOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG59XG4uZGVza3RvcCAuZmVhdHVyZXMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRlc2t0b3AgLmZlYXR1cmVzIGgzOmxhc3QtY2hpbGQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZGVza3RvcCAuZmVhdHVyZXMgcCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uZGVza3RvcCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDZyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMXB4LCAwcHgpO1xufVxuXG4uZGV2aWNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mZWF0dXJlcyB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4uZmVhdHVyZXMgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuLmZlYXR1cmVzID4gZGl2OmZpcnN0LWNoaWxkIGgyLFxuLmZlYXR1cmVzID4gZGl2OmZpcnN0LWNoaWxkIHAge1xuICB3aWR0aDogMzVyZW07XG4gIHdvcmQtc3BhY2luZzogLTEuOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG59XG4uZmVhdHVyZXMgZGl2LmZlYXR1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mZWF0dXJlcyBkaXYuZmVhdHVyZSA+IGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIycmVtO1xufVxuLmZlYXR1cmVzIGRpdi5mZWF0dXJlIGltZyB7XG4gIGhlaWdodDogM3JlbTtcbn1cblxuLnZlbmRvcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDZyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuZm9vdGVyIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLWxlZnQ6IDkuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogOS41cmVtO1xufVxuZm9vdGVyIC5jb250YWluZXIgLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmZvb3RlciAuY29udGFpbmVyIC5uYXYgPiBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDcuNXJlbTtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5uYXYgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5uYXYgYTpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuZm9vdGVyIC5jb250YWluZXIgaW1nLmNsaXBib2FyZCB7XG4gIHdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDhyZW07XG59XG5mb290ZXIgLmNvbnRhaW5lciAuc29jaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvb3RlciAuY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxLjRyZW07XG59XG5mb290ZXIgLmNvbnRhaW5lciBhOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTY1cHgpIHtcbiAgLmRlc2t0b3AgLmZlYXR1cmVzIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4NXB4KSB7XG4gIC5kb3dubG9hZC1jb250ZW50ID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmRvd25sb2FkLWNvbnRlbnQgPiBkaXYgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmRvd25sb2FkLWNvbnRlbnQgPiBkaXYgYnV0dG9uLmlvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5kZXNrdG9wIC5mZWF0dXJlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5kZXNrdG9wIGltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuZmVhdHVyZXMgZGl2LmZlYXR1cmUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5kZXZpY2VzIGltZyB7XG4gICAgd2lkdGg6IDM5cmVtO1xuICB9XG5cbiAgLnZlbmRvcnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAudmVuZG9ycyBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cblxuICBmb290ZXIgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIGltZy5jbGlwYm9hcmQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIC5uYXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgZm9vdGVyIC5jb250YWluZXIgLm5hdiA+IGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIC5zb2NpYWwge1xuICAgIHdpZHRoOiAxMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xuICAuZG93bmxvYWQtY29udGVudCA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5kb3dubG9hZC1jb250ZW50ID4gZGl2IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5kb3dubG9hZC1jb250ZW50ID4gZGl2IGJ1dHRvbi5pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmRvd25sb2FkLWNvbnRlbnQgaDEsXG4uZG93bmxvYWQtY29udGVudCBwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kZXNrdG9wIC5mZWF0dXJlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5kZXNrdG9wIGltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuZGVza3RvcCA+IGRpdjpmaXJzdC1jaGlsZCBoMixcbi5kZXNrdG9wID4gZGl2OmZpcnN0LWNoaWxkIHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmZlYXR1cmVzIGRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZlYXR1cmVzIGRpdi5mZWF0dXJlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZlYXR1cmVzID4gZGl2OmZpcnN0LWNoaWxkIGgyLFxuLmZlYXR1cmVzID4gZGl2OmZpcnN0LWNoaWxkIHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldmljZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZGV2aWNlcyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnZlbmRvcnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAudmVuZG9ycyBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cblxuICBmb290ZXIgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIGltZy5jbGlwYm9hcmQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIC5uYXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgZm9vdGVyIC5jb250YWluZXIgLm5hdiA+IGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIC5zb2NpYWwge1xuICAgIHdpZHRoOiAxMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/clipboard/clipboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/clipboard/clipboard.component.ts ***!
    \**************************************************/

  /*! exports provided: ClipboardComponent */

  /***/
  function srcAppClipboardClipboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardComponent", function () {
      return ClipboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClipboardComponent =
    /*#__PURE__*/
    function () {
      function ClipboardComponent() {
        _classCallCheck(this, ClipboardComponent);

        this.innerWidth = 1200;
        this.backgroundStyle = 'url(\'assets/clipboard/bg-header-desktop.png\')';
        this.isLoading = false;
      }

      _createClass(ClipboardComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          this.checkWidth();
        }
      }, {
        key: "checkWidth",
        value: function checkWidth() {
          if (this.innerWidth > 880) {
            this.backgroundStyle = 'url(\'assets/clipboard/bg-header-desktop.png\')';
          } else {
            this.backgroundStyle = 'url(\'assets/clipboard/bg-header-mobile.png\')';
          }
        }
      }]);

      return ClipboardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], ClipboardComponent.prototype, "onResize", null);
    ClipboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clipboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clipboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clipboard/clipboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clipboard.component.scss */
      "./src/app/clipboard/clipboard.component.scss"))["default"]]
    })], ClipboardComponent);
    /***/
  },

  /***/
  "./src/app/conference/conference-home/conference-home.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/conference/conference-home/conference-home.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConferenceConferenceHomeConferenceHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper .teaser img {\n  border-radius: 5px;\n  display: block;\n  margin-bottom: 22px;\n  max-width: 100%;\n}\n.wrapper .teaser a:hover h3 {\n  color: #a9b2b9;\n}\n@media only screen and (max-width: 500px) {\n  .wrapper .row .grid {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .wrapper .row .grid .col-1-3 {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .wrapper .hero {\n    padding-left: 30px !important;\n    padding-right: 30px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmVyZW5jZS9jb25mZXJlbmNlLWhvbWUvQzpcXFVzZXJzXFx0amFuYVxcRGVza3RvcFxcYW5ndWxhci1wcmFjdGljZS9zcmNcXGFwcFxcY29uZmVyZW5jZVxcY29uZmVyZW5jZS1ob21lXFxjb25mZXJlbmNlLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbmZlcmVuY2UvY29uZmVyZW5jZS1ob21lL2NvbmZlcmVuY2UtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ROO0FESUk7RUFDRSxjQUFBO0FDRk47QURPQTtFQUdNO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQ05OO0VEUU07SUFDRSxXQUFBO0VDTlI7QUFDRjtBRFdBO0VBRUk7SUFDRSw2QkFBQTtJQUNBLDhCQUFBO0VDVko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmZlcmVuY2UvY29uZmVyZW5jZS1ob21lL2NvbmZlcmVuY2UtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAudGVhc2VyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBhOmhvdmVyIGgzIHtcclxuICAgICAgY29sb3I6ICNhOWIyYjk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDo1MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIC5yb3cge1xyXG4gICAgICAuZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5jb2wtMS0zIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDo0MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIC5oZXJvIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLndyYXBwZXIgLnRlYXNlciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ud3JhcHBlciAudGVhc2VyIGE6aG92ZXIgaDMge1xuICBjb2xvcjogI2E5YjJiOTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAud3JhcHBlciAucm93IC5ncmlkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAud3JhcHBlciAucm93IC5ncmlkIC5jb2wtMS0zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAud3JhcHBlciAuaGVybyB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/conference/conference-home/conference-home.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/conference/conference-home/conference-home.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ConferenceHomeComponent */

  /***/
  function srcAppConferenceConferenceHomeConferenceHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceHomeComponent", function () {
      return ConferenceHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConferenceHomeComponent =
    /*#__PURE__*/
    function () {
      function ConferenceHomeComponent() {
        _classCallCheck(this, ConferenceHomeComponent);
      }

      _createClass(ConferenceHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConferenceHomeComponent;
    }();

    ConferenceHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conference-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conference-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-home/conference-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conference-home.component.scss */
      "./src/app/conference/conference-home/conference-home.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../conference.component.scss */
      "./src/app/conference/conference.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../assets/conference/stylesheets/reset.scss */
      "./src/assets/conference/stylesheets/reset.scss"))["default"]]
    })], ConferenceHomeComponent);
    /***/
  },

  /***/
  "./src/app/conference/conference-register/conference-register.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/conference/conference-register/conference-register.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConferenceConferenceRegisterConferenceRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper .why-attend {\n  list-style: square;\n  margin: 0 0 22px 30px;\n}\n.wrapper form {\n  margin-bottom: 22px;\n}\n.wrapper input,\n.wrapper select,\n.wrapper textarea {\n  font: 300 16px/22px \"Lato\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.wrapper .register-group label {\n  color: #648880;\n  cursor: pointer;\n  font-weight: 400;\n}\n.wrapper .register-group input,\n.wrapper .register-group select,\n.wrapper .register-group textarea {\n  border: 1px solid #c6c9cc;\n  border-radius: 5px;\n  color: #888;\n  display: block;\n  margin: 5px 0 27px 0;\n  padding: 5px 8px;\n}\n.wrapper .register-group input,\n.wrapper .register-group textarea {\n  width: 100%;\n}\n.wrapper .register-group select {\n  height: 34px;\n  width: 60px;\n}\n.wrapper .register-group textarea {\n  height: 78px;\n}\n.wrapper .btn-default {\n  border: 0;\n  background: #648880;\n  padding: 11px 30px;\n  font-size: 14px;\n}\n.wrapper .btn-default:hover {\n  background: #77a198;\n}\n@media only screen and (max-width: 500px) {\n  .wrapper .grid {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .wrapper .grid .col-2-3,\n.wrapper .grid .col-1-3 {\n    width: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmVyZW5jZS9jb25mZXJlbmNlLXJlZ2lzdGVyL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGNvbmZlcmVuY2VcXGNvbmZlcmVuY2UtcmVnaXN0ZXJcXGNvbmZlcmVuY2UtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbmZlcmVuY2UvY29uZmVyZW5jZS1yZWdpc3Rlci9jb25mZXJlbmNlLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtBQ0RKO0FER0U7OztFQUdFLHVGQUFBO0FDREo7QURLRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjtBREtFOzs7RUFHRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURLRTs7RUFFRSxXQUFBO0FDSEo7QURLRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDSEo7QURLRTtFQUNFLFlBQUE7QUNISjtBRE1FO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSko7QURNRTtFQUNFLG1CQUFBO0FDSko7QURRQTtFQUVJO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDTko7RURRSTs7SUFFRSxjQUFBO0VDTk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmZlcmVuY2UvY29uZmVyZW5jZS1yZWdpc3Rlci9jb25mZXJlbmNlLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIC53aHktYXR0ZW5kIHtcclxuICAgIGxpc3Qtc3R5bGU6IHNxdWFyZTtcclxuICAgIG1hcmdpbjogMCAwIDIycHggMzBweDtcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICB9XHJcbiAgaW5wdXQsXHJcbiAgc2VsZWN0LFxyXG4gIHRleHRhcmVhIHtcclxuICAgIGZvbnQ6IDMwMCAxNnB4LzIycHggXCJMYXRvXCIsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAgICAgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1ncm91cCBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzY0ODg4MDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1ncm91cCBpbnB1dCxcclxuICAucmVnaXN0ZXItZ3JvdXAgc2VsZWN0LFxyXG4gIC5yZWdpc3Rlci1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzZjOWNjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNXB4IDAgMjdweCAwO1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLWdyb3VwIGlucHV0LFxyXG4gIC5yZWdpc3Rlci1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLWdyb3VwIHNlbGVjdCB7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLWdyb3VwIHRleHRhcmVhIHtcclxuICAgIGhlaWdodDogNzhweDtcclxuICB9XHJcblxyXG4gIC5idG4tZGVmYXVsdCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjQ4ODgwO1xyXG4gICAgcGFkZGluZzogMTFweCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzc3YTE5ODtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICAuZ3JpZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuY29sLTItMyxcclxuICAgICAgLmNvbC0xLTMge1xyXG4gICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIC53aHktYXR0ZW5kIHtcbiAgbGlzdC1zdHlsZTogc3F1YXJlO1xuICBtYXJnaW46IDAgMCAyMnB4IDMwcHg7XG59XG4ud3JhcHBlciBmb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cbi53cmFwcGVyIGlucHV0LFxuLndyYXBwZXIgc2VsZWN0LFxuLndyYXBwZXIgdGV4dGFyZWEge1xuICBmb250OiAzMDAgMTZweC8yMnB4IFwiTGF0b1wiLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4ud3JhcHBlciAucmVnaXN0ZXItZ3JvdXAgbGFiZWwge1xuICBjb2xvcjogIzY0ODg4MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLndyYXBwZXIgLnJlZ2lzdGVyLWdyb3VwIGlucHV0LFxuLndyYXBwZXIgLnJlZ2lzdGVyLWdyb3VwIHNlbGVjdCxcbi53cmFwcGVyIC5yZWdpc3Rlci1ncm91cCB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNmM5Y2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM4ODg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweCAwIDI3cHggMDtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cbi53cmFwcGVyIC5yZWdpc3Rlci1ncm91cCBpbnB1dCxcbi53cmFwcGVyIC5yZWdpc3Rlci1ncm91cCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXBwZXIgLnJlZ2lzdGVyLWdyb3VwIHNlbGVjdCB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDYwcHg7XG59XG4ud3JhcHBlciAucmVnaXN0ZXItZ3JvdXAgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDc4cHg7XG59XG4ud3JhcHBlciAuYnRuLWRlZmF1bHQge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICM2NDg4ODA7XG4gIHBhZGRpbmc6IDExcHggMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLndyYXBwZXIgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3YTE5ODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAud3JhcHBlciAuZ3JpZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC53cmFwcGVyIC5ncmlkIC5jb2wtMi0zLFxuLndyYXBwZXIgLmdyaWQgLmNvbC0xLTMge1xuICAgIHdpZHRoOiBpbml0aWFsO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/conference/conference-register/conference-register.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/conference/conference-register/conference-register.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ConferenceRegisterComponent */

  /***/
  function srcAppConferenceConferenceRegisterConferenceRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceRegisterComponent", function () {
      return ConferenceRegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConferenceRegisterComponent =
    /*#__PURE__*/
    function () {
      function ConferenceRegisterComponent() {
        _classCallCheck(this, ConferenceRegisterComponent);
      }

      _createClass(ConferenceRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConferenceRegisterComponent;
    }();

    ConferenceRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conference-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conference-register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-register/conference-register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conference-register.component.scss */
      "./src/app/conference/conference-register/conference-register.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../conference.component.scss */
      "./src/app/conference/conference.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../assets/conference/stylesheets/reset.scss */
      "./src/assets/conference/stylesheets/reset.scss"))["default"]]
    })], ConferenceRegisterComponent);
    /***/
  },

  /***/
  "./src/app/conference/conference-schedule/conference-schedule.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/conference/conference-schedule/conference-schedule.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConferenceConferenceScheduleConferenceScheduleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper table {\n  margin-bottom: 44px;\n  width: 100%;\n}\n.wrapper table:last-child {\n  margin-bottom: 0;\n}\n.wrapper th,\n.wrapper td {\n  padding-bottom: 22px;\n  vertical-align: top;\n}\n.wrapper th {\n  padding-right: 45px;\n  text-align: right;\n  width: 20%;\n}\n.wrapper td {\n  width: 40%;\n}\n.wrapper thead {\n  line-height: 44px;\n}\n.wrapper thead th {\n  color: #648880;\n  font-size: 24px;\n}\n.wrapper tbody th {\n  color: #a9b2b9;\n  font-size: 14px;\n  font-weight: 400;\n  padding-top: 22px;\n  text-transform: uppercase;\n}\n.wrapper tbody td {\n  border-top: 1px solid #dfe2e5;\n  padding-top: 21px;\n}\n.wrapper tbody td:first-of-type {\n  padding-right: 15px;\n}\n.wrapper tbody td:last-of-type {\n  padding-left: 15px;\n  padding-right: 10px;\n}\n.wrapper tbody td:only-of-type {\n  padding-left: 0;\n  padding-right: 0;\n}\n.wrapper table a {\n  color: #888;\n}\n.wrapper table h4 {\n  margin-bottom: 0;\n}\n.wrapper .schedule-offset {\n  color: #a9b2b9;\n}\n@media only screen and (max-width: 400px) {\n  .wrapper table thead {\n    text-align: center;\n  }\n  .wrapper table thead tr th {\n    font-size: 15px;\n    padding-right: 0;\n    padding-left: 15px;\n  }\n  .wrapper table tbody tr th {\n    padding-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmVyZW5jZS9jb25mZXJlbmNlLXNjaGVkdWxlL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGNvbmZlcmVuY2VcXGNvbmZlcmVuY2Utc2NoZWR1bGVcXGNvbmZlcmVuY2Utc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbmZlcmVuY2UvY29uZmVyZW5jZS1zY2hlZHVsZS9jb25mZXJlbmNlLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDQUo7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURHRTs7RUFFRSxvQkFBQTtFQUNBLG1CQUFBO0FDREo7QURHRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDREo7QURHRTtFQUNFLFVBQUE7QUNESjtBRElFO0VBQ0UsaUJBQUE7QUNGSjtBRElFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNGSjtBREtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNISjtBRE1FO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBQ0pKO0FETUU7RUFDRSxtQkFBQTtBQ0pKO0FETUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDSko7QURNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0pKO0FET0U7RUFDRSxXQUFBO0FDTEo7QURPRTtFQUNFLGdCQUFBO0FDTEo7QURRRTtFQUNFLGNBQUE7QUNOSjtBRFVBO0VBR007SUFDRSxrQkFBQTtFQ1ROO0VEV1E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ1RWO0VEZVE7SUFDRSxtQkFBQTtFQ2JWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb25mZXJlbmNlL2NvbmZlcmVuY2Utc2NoZWR1bGUvY29uZmVyZW5jZS1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICB0YWJsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHRhYmxlOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiAgdGgge1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgdGQge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIHRoZWFkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuICB0aGVhZCB0aCB7XHJcbiAgICBjb2xvcjogIzY0ODg4MDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIHRib2R5IHRoIHtcclxuICAgIGNvbG9yOiAjYTliMmI5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIHRib2R5IHRkIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGZlMmU1O1xyXG4gICAgcGFkZGluZy10b3A6IDIxcHg7XHJcbiAgfVxyXG4gIHRib2R5IHRkOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgdGJvZHkgdGQ6bGFzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7O1xyXG4gIH1cclxuICB0Ym9keSB0ZDpvbmx5LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIHRhYmxlIGEge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgfVxyXG4gIHRhYmxlIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuc2NoZWR1bGUtb2Zmc2V0IHtcclxuICAgIGNvbG9yOiAjYTliMmI5O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6NDAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHRoZWFkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0Ym9keSB7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB0YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXBwZXIgdGFibGU6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ud3JhcHBlciB0aCxcbi53cmFwcGVyIHRkIHtcbiAgcGFkZGluZy1ib3R0b206IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ud3JhcHBlciB0aCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMjAlO1xufVxuLndyYXBwZXIgdGQge1xuICB3aWR0aDogNDAlO1xufVxuLndyYXBwZXIgdGhlYWQge1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbi53cmFwcGVyIHRoZWFkIHRoIHtcbiAgY29sb3I6ICM2NDg4ODA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi53cmFwcGVyIHRib2R5IHRoIHtcbiAgY29sb3I6ICNhOWIyYjk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ud3JhcHBlciB0Ym9keSB0ZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGZlMmU1O1xuICBwYWRkaW5nLXRvcDogMjFweDtcbn1cbi53cmFwcGVyIHRib2R5IHRkOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLndyYXBwZXIgdGJvZHkgdGQ6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLndyYXBwZXIgdGJvZHkgdGQ6b25seS1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLndyYXBwZXIgdGFibGUgYSB7XG4gIGNvbG9yOiAjODg4O1xufVxuLndyYXBwZXIgdGFibGUgaDQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLndyYXBwZXIgLnNjaGVkdWxlLW9mZnNldCB7XG4gIGNvbG9yOiAjYTliMmI5O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC53cmFwcGVyIHRhYmxlIHRoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLndyYXBwZXIgdGFibGUgdGhlYWQgdHIgdGgge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfVxuICAud3JhcHBlciB0YWJsZSB0Ym9keSB0ciB0aCB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/conference/conference-schedule/conference-schedule.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/conference/conference-schedule/conference-schedule.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ConferenceScheduleComponent */

  /***/
  function srcAppConferenceConferenceScheduleConferenceScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceScheduleComponent", function () {
      return ConferenceScheduleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConferenceScheduleComponent =
    /*#__PURE__*/
    function () {
      function ConferenceScheduleComponent() {
        _classCallCheck(this, ConferenceScheduleComponent);
      }

      _createClass(ConferenceScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConferenceScheduleComponent;
    }();

    ConferenceScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conference-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conference-schedule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-schedule/conference-schedule.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conference-schedule.component.scss */
      "./src/app/conference/conference-schedule/conference-schedule.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../conference.component.scss */
      "./src/app/conference/conference.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../assets/conference/stylesheets/reset.scss */
      "./src/assets/conference/stylesheets/reset.scss"))["default"]]
    })], ConferenceScheduleComponent);
    /***/
  },

  /***/
  "./src/app/conference/conference-speakers/conference-speakers.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/conference/conference-speakers/conference-speakers.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConferenceConferenceSpeakersConferenceSpeakersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper .speaker {\n  margin-bottom: 44px;\n}\n.wrapper .speaker-info {\n  border: 1px solid #dfe2e5;\n  border-radius: 5px;\n  margin-top: 88px;\n  padding-bottom: 22px;\n  text-align: center;\n}\n.wrapper .speaker-info img {\n  border-radius: 50%;\n  height: 130px;\n  margin: -66px 0 22px 0;\n  vertical-align: top;\n}\n.wrapper .speaker ul {\n  word-break: break-all;\n  padding: 0 5px;\n}\n@media only screen and (max-width: 700px) {\n  .wrapper .col-1-3 {\n    padding: 0 !important;\n  }\n}\n@media only screen and (max-width: 510px) {\n  .wrapper .speaker {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n  }\n  .wrapper .col-1-3 {\n    width: 80% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmVyZW5jZS9jb25mZXJlbmNlLXNwZWFrZXJzL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGNvbmZlcmVuY2VcXGNvbmZlcmVuY2Utc3BlYWtlcnNcXGNvbmZlcmVuY2Utc3BlYWtlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbmZlcmVuY2UvY29uZmVyZW5jZS1zcGVha2Vycy9jb25mZXJlbmNlLXNwZWFrZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7QUNBSjtBREVJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0FOO0FERU07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURJSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FET0E7RUFHTTtJQUNFLHFCQUFBO0VDTk47QUFDRjtBRFdBO0VBRUk7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDhCQUFBO1lBQUEsOEJBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0Esa0JBQUE7RUNWSjtFRGNJO0lBQ0UscUJBQUE7RUNaTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29uZmVyZW5jZS9jb25mZXJlbmNlLXNwZWFrZXJzL2NvbmZlcmVuY2Utc3BlYWtlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgLnNwZWFrZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDRweDtcclxuXHJcbiAgICAmLWluZm8ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDg4cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogLTY2cHggMCAyMnB4IDA7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVse1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIHBhZGRpbmc6MCA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDo3MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIC5jb2wge1xyXG4gICAgICAmLTEtMyB7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDo1MTBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIC5zcGVha2VyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbCB7XHJcbiAgICAgICYtMS0zIHtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLndyYXBwZXIgLnNwZWFrZXIge1xuICBtYXJnaW4tYm90dG9tOiA0NHB4O1xufVxuLndyYXBwZXIgLnNwZWFrZXItaW5mbyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmUyZTU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogODhweDtcbiAgcGFkZGluZy1ib3R0b206IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5zcGVha2VyLWluZm8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW46IC02NnB4IDAgMjJweCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLndyYXBwZXIgLnNwZWFrZXIgdWwge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC53cmFwcGVyIC5jb2wtMS0zIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcbiAgLndyYXBwZXIgLnNwZWFrZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC53cmFwcGVyIC5jb2wtMS0zIHtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/conference/conference-speakers/conference-speakers.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/conference/conference-speakers/conference-speakers.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ConferenceSpeakersComponent */

  /***/
  function srcAppConferenceConferenceSpeakersConferenceSpeakersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceSpeakersComponent", function () {
      return ConferenceSpeakersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConferenceSpeakersComponent =
    /*#__PURE__*/
    function () {
      function ConferenceSpeakersComponent() {
        _classCallCheck(this, ConferenceSpeakersComponent);
      }

      _createClass(ConferenceSpeakersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConferenceSpeakersComponent;
    }();

    ConferenceSpeakersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conference-speakers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conference-speakers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-speakers/conference-speakers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conference-speakers.component.scss */
      "./src/app/conference/conference-speakers/conference-speakers.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../conference.component.scss */
      "./src/app/conference/conference.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../assets/conference/stylesheets/reset.scss */
      "./src/assets/conference/stylesheets/reset.scss"))["default"]]
    })], ConferenceSpeakersComponent);
    /***/
  },

  /***/
  "./src/app/conference/conference-venue/conference-venue.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/conference/conference-venue/conference-venue.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConferenceConferenceVenueConferenceVenueComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper .venue-theatre {\n  margin-bottom: 66px;\n}\n.wrapper .venue-hotel {\n  margin-bottom: 22px;\n}\n.wrapper .venue-map {\n  height: 264px;\n}\n@media only screen and (max-width: 600px) {\n  .wrapper .col-2-3, .wrapper .col-1-3 {\n    width: initial !important;\n  }\n  .wrapper .row .grid section {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .wrapper .col-2-3 {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmVyZW5jZS9jb25mZXJlbmNlLXZlbnVlL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGNvbmZlcmVuY2VcXGNvbmZlcmVuY2UtdmVudWVcXGNvbmZlcmVuY2UtdmVudWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbmZlcmVuY2UvY29uZmVyZW5jZS12ZW51ZS9jb25mZXJlbmNlLXZlbnVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7QUNBSjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FES0E7RUFHTTtJQUVFLHlCQUFBO0VDTE47RURVTTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUNSUjtBQUNGO0FEY0E7RUFFSTtJQUNFLHFCQUFBO0VDYko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmZlcmVuY2UvY29uZmVyZW5jZS12ZW51ZS9jb25mZXJlbmNlLXZlbnVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIC52ZW51ZS10aGVhdHJlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDY2cHg7XHJcbiAgfVxyXG4gIC52ZW51ZS1ob3RlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLnZlbnVlLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDI2NHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICAuY29sIHtcclxuICAgICAgJi0yLTMsXHJcbiAgICAgICYtMS0zIHtcclxuICAgICAgICB3aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgLmdyaWQge1xyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6NDAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICAuY29sLTItMyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLndyYXBwZXIgLnZlbnVlLXRoZWF0cmUge1xuICBtYXJnaW4tYm90dG9tOiA2NnB4O1xufVxuLndyYXBwZXIgLnZlbnVlLWhvdGVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cbi53cmFwcGVyIC52ZW51ZS1tYXAge1xuICBoZWlnaHQ6IDI2NHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC53cmFwcGVyIC5jb2wtMi0zLCAud3JhcHBlciAuY29sLTEtMyB7XG4gICAgd2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgfVxuICAud3JhcHBlciAucm93IC5ncmlkIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC53cmFwcGVyIC5jb2wtMi0zIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/conference/conference-venue/conference-venue.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/conference/conference-venue/conference-venue.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ConferenceVenueComponent */

  /***/
  function srcAppConferenceConferenceVenueConferenceVenueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceVenueComponent", function () {
      return ConferenceVenueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConferenceVenueComponent =
    /*#__PURE__*/
    function () {
      function ConferenceVenueComponent() {
        _classCallCheck(this, ConferenceVenueComponent);
      }

      _createClass(ConferenceVenueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConferenceVenueComponent;
    }();

    ConferenceVenueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conference-venue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conference-venue.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference-venue/conference-venue.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conference-venue.component.scss */
      "./src/app/conference/conference-venue/conference-venue.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../conference.component.scss */
      "./src/app/conference/conference.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../assets/conference/stylesheets/reset.scss */
      "./src/assets/conference/stylesheets/reset.scss"))["default"]]
    })], ConferenceVenueComponent);
    /***/
  },

  /***/
  "./src/app/conference/conference.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/conference/conference.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConferenceConferenceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background: #293f50;\n  color: #888;\n  font: 300 16px/22px \"Lato\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1;\n}\n.wrapper *,\n.wrapper *:before,\n.wrapper *:after {\n  box-sizing: border-box;\n}\n.wrapper h1,\n.wrapper h3,\n.wrapper h4,\n.wrapper h5,\n.wrapper p {\n  margin-bottom: 22px;\n}\n.wrapper .container,\n.wrapper .grid {\n  margin: 0 auto;\n  max-width: 960px;\n}\n.wrapper .container {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.wrapper .col-1-3 {\n  width: 33%;\n}\n.wrapper .col-2-3 {\n  width: 66.66%;\n}\n.wrapper .col-1-3,\n.wrapper .col-2-3 {\n  display: inline-block;\n  vertical-align: top;\n  margin: 0;\n}\n.wrapper .grid,\n.wrapper .col-1-3,\n.wrapper .col-2-3 {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.wrapper .row {\n  background: #fff;\n  padding: 66px 0 44px 0;\n}\n.wrapper .row {\n  background: #fff;\n  padding: 66px 0 44px 0;\n}\n.wrapper .row-alt {\n  background: #cbe2c1;\n  background: -webkit-gradient(linear, left top, right top, from(#a1d3b0), to(#f6f1d3));\n  background: linear-gradient(to right, #a1d3b0, #f6f1d3);\n  padding: 44px 0 22px 0;\n}\n.wrapper .lead {\n  text-align: center;\n}\n.wrapper .lead p {\n  font-size: 21px;\n  line-height: 33px;\n}\n.wrapper .btn {\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.wrapper .btn-alt {\n  border: 1px solid #fff;\n  padding: 10px 30px;\n}\n.wrapper .btn-alt:hover {\n  background: #fff;\n  color: #648880;\n}\n.wrapper .hero {\n  color: #fff;\n  line-height: 44px;\n  padding: 22px 80px 66px 80px;\n  text-align: center;\n}\n.wrapper .hero h2 {\n  font-size: 36px;\n}\n.wrapper .hero p {\n  font-size: 24px;\n  font-weight: 100;\n}\n.wrapper footer {\n  clear: both;\n}\n.wrapper .group:before,\n.wrapper .group:after {\n  content: \"\";\n  display: table;\n}\n.wrapper .group:after {\n  clear: both;\n}\n.wrapper .group {\n  clear: both;\n  *zoom: 1;\n}\n.wrapper .logo {\n  border-top: 4px solid #648880;\n  float: left;\n  font-size: 48px;\n  font-weight: 100;\n  letter-spacing: 0.5px;\n  line-height: 44px;\n  padding: 40px 0 22px 0;\n  text-transform: uppercase;\n}\n.wrapper .primary-header a,\n.wrapper .primary-footer a {\n  color: #fff;\n}\n.wrapper .primary-header a:hover,\n.wrapper .primary-footer a:hover {\n  color: #648880;\n}\n.wrapper .primary-footer {\n  color: #648880;\n  font-size: 14px;\n  padding-bottom: 44px;\n  padding-top: 44px;\n}\n.wrapper .primary-footer small {\n  float: left;\n  font-weight: 400;\n}\n.wrapper h1,\n.wrapper h2,\n.wrapper h3,\n.wrapper h4 {\n  color: #648880;\n}\n.wrapper .tagline {\n  margin: 66px 0 22px 0;\n  text-align: right;\n}\n.wrapper .nav {\n  text-align: right;\n}\n.wrapper .nav li {\n  display: inline-block;\n  margin-right: 10px;\n  vertical-align: top;\n}\n.wrapper .nav li:last-child {\n  margin-right: 0;\n}\n.wrapper .menu {\n  display: none;\n}\n.wrapper .menu div {\n  background-color: white;\n  width: 28px;\n  height: 4px;\n  margin-bottom: 6px;\n}\n.wrapper .primary-nav {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.wrapper h1 {\n  font-size: 36px;\n  line-height: 44px;\n}\n.wrapper h2 {\n  font-size: 24px;\n  line-height: 44px;\n}\n.wrapper h3 {\n  font-size: 21px;\n}\n.wrapper h4 {\n  font-size: 18px;\n}\n.wrapper h5 {\n  color: #a9b2b9;\n  font-size: 14px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.wrapper strong {\n  font-weight: 400;\n}\n.wrapper cite,\n.wrapper em {\n  font-style: italic;\n}\n.wrapper a {\n  color: #648880;\n  text-decoration: none;\n}\n.wrapper a:hover {\n  color: #a9b2b9;\n}\n.wrapper p a {\n  border-bottom: 1px solid #dfe2e5;\n}\n@media only screen and (max-width: 800px) {\n  .wrapper header h1 {\n    margin-bottom: 0;\n  }\n  .wrapper header .logo {\n    padding-bottom: 0;\n  }\n  .wrapper header nav {\n    -moz-text-align-last: center;\n         text-align-last: center;\n    padding: 1rem 0;\n  }\n  .wrapper header .tagline {\n    margin-bottom: 65px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .wrapper header {\n    text-align: center;\n  }\n  .wrapper header .logo {\n    float: initial;\n  }\n  .wrapper header h3 {\n    margin: 30px 0;\n    text-align: unset;\n  }\n}\n@media only screen and (max-width: 600px) {\n  footer {\n    display: -webkit-box !important;\n    display: flex !important;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  footer nav {\n    margin-bottom: 1rem;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .wrapper h1 {\n    position: relative;\n  }\n  .wrapper .menu {\n    z-index: 5;\n    display: initial;\n    position: absolute;\n    right: 0;\n    top: 15%;\n    font: menu;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n  .wrapper .desktop {\n    -webkit-animation: burgerMenu 0.5s forwards;\n            animation: burgerMenu 0.5s forwards;\n    display: none;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative;\n    background-color: #252b46eb;\n    padding: 1rem;\n    align-self: baseline;\n    z-index: 2;\n    position: absolute;\n    width: -webkit-fill-available;\n    top: 0;\n    left: 0;\n    color: white;\n    height: 100vh;\n  }\n  @-webkit-keyframes burgerMenu {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes burgerMenu {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .wrapper .desktop ul {\n    font-size: 28px;\n    display: -webkit-box;\n    display: flex;\n    padding: 0;\n    padding-top: 4rem;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    text-align: center;\n    margin-bottom: 2rem;\n    width: -webkit-fill-available;\n  }\n  .wrapper .desktop ul li {\n    display: initial;\n    margin-right: 0;\n    line-height: 2.5rem;\n    padding: 1rem;\n  }\n  .wrapper .desktop ul li:hover {\n    color: white;\n  }\n  .wrapper .desktop small {\n    position: absolute;\n    bottom: 5%;\n  }\n  .wrapper .desktop > div {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .wrapper .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .wrapper header .logo {\n    font-size: 30px;\n  }\n  .wrapper header .tagline {\n    margin-bottom: 15px;\n  }\n  .wrapper .menu {\n    right: 4%;\n  }\n  .wrapper .row-alt {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmVyZW5jZS9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxjb25mZXJlbmNlXFxjb25mZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25mZXJlbmNlL2NvbmZlcmVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1RkFBQTtFQUVBLGNBQUE7QUNBRjtBREVFOzs7RUFLRSxzQkFBQTtBQ0FKO0FER0U7Ozs7O0VBS0UsbUJBQUE7QUNESjtBRElFOztFQUVFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRko7QURLRTtFQUNFLFVBQUE7QUNISjtBREtFO0VBQ0UsYUFBQTtBQ0hKO0FETUU7O0VBRUUscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNKSjtBRE9FOzs7RUFHRSxrQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURRRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUNOSjtBRFNFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQ1BKO0FEU0k7RUFDRSxtQkFBQTtFQUdBLHFGQUFBO0VBQUEsdURBQUE7RUFDQSxzQkFBQTtBQ1BOO0FEVUU7RUFDRSxrQkFBQTtBQ1JKO0FEVUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNSTjtBRFdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ1RKO0FEV0k7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FDVE47QURZSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1ZOO0FEY0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDWko7QURjSTtFQUNFLGVBQUE7QUNaTjtBRGVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDYk47QURpQkU7RUFDRSxXQUFBO0FDZko7QURrQkU7O0VBRUUsV0FBQTtFQUNBLGNBQUE7QUNoQko7QURrQkU7RUFDRSxXQUFBO0FDaEJKO0FEa0JFO0VBQ0UsV0FBQTtHQUNBLE9BQUE7QUNoQko7QURtQkU7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ2pCSjtBRG9CRTs7RUFFRSxXQUFBO0FDbEJKO0FEb0JFOztFQUVFLGNBQUE7QUNsQko7QURxQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNuQko7QURxQkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNuQk47QUR1QkU7Ozs7RUFJRSxjQUFBO0FDckJKO0FEd0JFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ3RCSjtBRHlCRTtFQUNFLGlCQUFBO0FDdkJKO0FEeUJJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdkJOO0FEeUJNO0VBQ0UsZUFBQTtBQ3ZCUjtBRDRCRTtFQUNFLGFBQUE7QUMxQko7QUQ0Qkk7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUMxQk47QUQ4QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDNUJKO0FEK0JFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDN0JKO0FEK0JFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDN0JKO0FEK0JFO0VBQ0UsZUFBQTtBQzdCSjtBRCtCRTtFQUNFLGVBQUE7QUM3Qko7QURnQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUM5Qko7QURpQ0U7RUFDRSxnQkFBQTtBQy9CSjtBRGlDRTs7RUFFRSxrQkFBQTtBQy9CSjtBRGtDRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ2hDSjtBRGtDSTtFQUNFLGNBQUE7QUNoQ047QURvQ0U7RUFDRSxnQ0FBQTtBQ2xDSjtBRHNDQTtFQUdNO0lBQ0UsZ0JBQUE7RUNyQ047RUR3Q0k7SUFDRSxpQkFBQTtFQ3RDTjtFRHlDSTtJQUNFLDRCQUFBO1NBQUEsdUJBQUE7SUFDQSxlQUFBO0VDdkNOO0VEMENJO0lBQ0UsbUJBQUE7RUN4Q047QUFDRjtBRDZDQTtFQUVJO0lBQ0Usa0JBQUE7RUM1Q0o7RUQ4Q0k7SUFDRSxjQUFBO0VDNUNOO0VEK0NJO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0VDN0NOO0FBQ0Y7QURrREE7RUFDRTtJQUNFLCtCQUFBO0lBQUEsd0JBQUE7SUFDQSw0QkFBQTtJQUFBLDhCQUFBO1lBQUEsOEJBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDaERGO0VEa0RFO0lBQ0UsbUJBQUE7RUNoREo7QUFDRjtBRG1EQTtFQUVJO0lBQ0Usa0JBQUE7RUNsREo7RURvREU7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7RUNsREo7RURxREU7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0lBQ0EsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLDJCQUFBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsNkJBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDbkRKO0VEcURJO0lBQ0U7TUFDRSxVQUFBO0lDbkROO0lEc0RJO01BQ0UsVUFBQTtJQ3BETjtFQUNGO0VENkNJO0lBQ0U7TUFDRSxVQUFBO0lDbkROO0lEc0RJO01BQ0UsVUFBQTtJQ3BETjtFQUNGO0VEdURJO0lBQ0UsZUFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQ3JETjtFRHVETTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFQ3JEUjtFRHVEUTtJQUNFLFlBQUE7RUNyRFY7RUQwREk7SUFDRSxrQkFBQTtJQUNBLFVBQUE7RUN4RE47RUQyREk7SUFDRSxXQUFBO0VDekROO0FBQ0Y7QUQ4REE7RUFFSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzdESjtFRGlFSTtJQUNFLGVBQUE7RUMvRE47RURrRUk7SUFDRSxtQkFBQTtFQ2hFTjtFRG9FRTtJQUNFLFNBQUE7RUNsRUo7RURzRUk7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDcEVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb25mZXJlbmNlL2NvbmZlcmVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogIzI5M2Y1MDtcclxuICBjb2xvcjogIzg4ODtcclxuICBmb250OiAzMDAgMTZweC8yMnB4IFwiTGF0b1wiLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgICBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICAqLFxyXG4gICo6YmVmb3JlLFxyXG4gICo6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIsXHJcbiAgLmdyaWQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuY29sLTEtMyB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gIH1cclxuICAuY29sLTItMyB7XHJcbiAgICB3aWR0aDogNjYuNjYlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC0xLTMsXHJcbiAgLmNvbC0yLTMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5ncmlkLFxyXG4gIC5jb2wtMS0zLFxyXG4gIC5jb2wtMi0zIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA2NnB4IDAgNDRweCAwO1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNjZweCAwIDQ0cHggMDtcclxuXHJcbiAgICAmLWFsdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjYmUyYzE7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTFkM2IwLCAjZjZmMWQzKTtcclxuICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhMWQzYjAsICNmNmYxZDMpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhMWQzYjAsICNmNmYxZDMpO1xyXG4gICAgICBwYWRkaW5nOiA0NHB4IDAgMjJweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGVhZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAmLWFsdCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWFsdDpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjNjQ4ODgwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlcm8ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIHBhZGRpbmc6IDIycHggODBweCA2NnB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5ncm91cDpiZWZvcmUsXHJcbiAgLmdyb3VwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgLmdyb3VwOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAuZ3JvdXAge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICAqem9vbTogMTtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjNjQ4ODgwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDAgMjJweCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIC5wcmltYXJ5LWhlYWRlciBhLFxyXG4gIC5wcmltYXJ5LWZvb3RlciBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAucHJpbWFyeS1oZWFkZXIgYTpob3ZlcixcclxuICAucHJpbWFyeS1mb290ZXIgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY0ODg4MDtcclxuICB9XHJcblxyXG4gIC5wcmltYXJ5LWZvb3RlciB7XHJcbiAgICBjb2xvcjogIzY0ODg4MDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQ0cHg7XHJcblxyXG4gICAgc21hbGwge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0IHtcclxuICAgIGNvbG9yOiAjNjQ4ODgwO1xyXG4gIH1cclxuXHJcbiAgLnRhZ2xpbmUge1xyXG4gICAgbWFyZ2luOiA2NnB4IDAgMjJweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAubmF2IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1uYXYge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgY29sb3I6ICNhOWIyYjk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBjaXRlLFxyXG4gIGVtIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM2NDg4ODA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjYTliMmI5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCBhIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlMmU1O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5hdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFnbGluZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBmbG9hdDogaW5pdGlhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGgxIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLm1lbnUge1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDE1JTtcclxuICAgICAgZm9udDogbWVudTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgYW5pbWF0aW9uOiBidXJnZXJNZW51IDAuNXMgZm9yd2FyZHM7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MmI0NmViO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIGJ1cmdlck1lbnUge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNtYWxsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFnbGluZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgcmlnaHQ6IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3cge1xyXG4gICAgICAmLWFsdCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjMjkzZjUwO1xuICBjb2xvcjogIzg4ODtcbiAgZm9udDogMzAwIDE2cHgvMjJweCBcIkxhdG9cIiwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi53cmFwcGVyICosXG4ud3JhcHBlciAqOmJlZm9yZSxcbi53cmFwcGVyICo6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi53cmFwcGVyIGgxLFxuLndyYXBwZXIgaDMsXG4ud3JhcHBlciBoNCxcbi53cmFwcGVyIGg1LFxuLndyYXBwZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG4ud3JhcHBlciAuY29udGFpbmVyLFxuLndyYXBwZXIgLmdyaWQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA5NjBweDtcbn1cbi53cmFwcGVyIC5jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4ud3JhcHBlciAuY29sLTEtMyB7XG4gIHdpZHRoOiAzMyU7XG59XG4ud3JhcHBlciAuY29sLTItMyB7XG4gIHdpZHRoOiA2Ni42NiU7XG59XG4ud3JhcHBlciAuY29sLTEtMyxcbi53cmFwcGVyIC5jb2wtMi0zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW46IDA7XG59XG4ud3JhcHBlciAuZ3JpZCxcbi53cmFwcGVyIC5jb2wtMS0zLFxuLndyYXBwZXIgLmNvbC0yLTMge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4ud3JhcHBlciAucm93IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNjZweCAwIDQ0cHggMDtcbn1cbi53cmFwcGVyIC5yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA2NnB4IDAgNDRweCAwO1xufVxuLndyYXBwZXIgLnJvdy1hbHQge1xuICBiYWNrZ3JvdW5kOiAjY2JlMmMxO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ExZDNiMCwgI2Y2ZjFkMyk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTFkM2IwLCAjZjZmMWQzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTFkM2IwLCAjZjZmMWQzKTtcbiAgcGFkZGluZzogNDRweCAwIDIycHggMDtcbn1cbi53cmFwcGVyIC5sZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXBwZXIgLmxlYWQgcCB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG4ud3JhcHBlciAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLndyYXBwZXIgLmJ0bi1hbHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG4ud3JhcHBlciAuYnRuLWFsdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNjQ4ODgwO1xufVxuLndyYXBwZXIgLmhlcm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDIycHggODBweCA2NnB4IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5oZXJvIGgyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLndyYXBwZXIgLmhlcm8gcCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi53cmFwcGVyIGZvb3RlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuLndyYXBwZXIgLmdyb3VwOmJlZm9yZSxcbi53cmFwcGVyIC5ncm91cDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLndyYXBwZXIgLmdyb3VwOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4ud3JhcHBlciAuZ3JvdXAge1xuICBjbGVhcjogYm90aDtcbiAgKnpvb206IDE7XG59XG4ud3JhcHBlciAubG9nbyB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjNjQ4ODgwO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiA0MHB4IDAgMjJweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLndyYXBwZXIgLnByaW1hcnktaGVhZGVyIGEsXG4ud3JhcHBlciAucHJpbWFyeS1mb290ZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndyYXBwZXIgLnByaW1hcnktaGVhZGVyIGE6aG92ZXIsXG4ud3JhcHBlciAucHJpbWFyeS1mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjQ4ODgwO1xufVxuLndyYXBwZXIgLnByaW1hcnktZm9vdGVyIHtcbiAgY29sb3I6ICM2NDg4ODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDQ0cHg7XG4gIHBhZGRpbmctdG9wOiA0NHB4O1xufVxuLndyYXBwZXIgLnByaW1hcnktZm9vdGVyIHNtYWxsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ud3JhcHBlciBoMSxcbi53cmFwcGVyIGgyLFxuLndyYXBwZXIgaDMsXG4ud3JhcHBlciBoNCB7XG4gIGNvbG9yOiAjNjQ4ODgwO1xufVxuLndyYXBwZXIgLnRhZ2xpbmUge1xuICBtYXJnaW46IDY2cHggMCAyMnB4IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndyYXBwZXIgLm5hdiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndyYXBwZXIgLm5hdiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLndyYXBwZXIgLm5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLndyYXBwZXIgLm1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndyYXBwZXIgLm1lbnUgZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLndyYXBwZXIgLnByaW1hcnktbmF2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ud3JhcHBlciBoMSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4ud3JhcHBlciBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4ud3JhcHBlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbi53cmFwcGVyIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLndyYXBwZXIgaDUge1xuICBjb2xvcjogI2E5YjJiOTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLndyYXBwZXIgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi53cmFwcGVyIGNpdGUsXG4ud3JhcHBlciBlbSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi53cmFwcGVyIGEge1xuICBjb2xvcjogIzY0ODg4MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLndyYXBwZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjYTliMmI5O1xufVxuLndyYXBwZXIgcCBhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmUyZTU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLndyYXBwZXIgaGVhZGVyIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC53cmFwcGVyIGhlYWRlciAubG9nbyB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbiAgLndyYXBwZXIgaGVhZGVyIG5hdiB7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG4gIC53cmFwcGVyIGhlYWRlciAudGFnbGluZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAud3JhcHBlciBoZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAud3JhcHBlciBoZWFkZXIgLmxvZ28ge1xuICAgIGZsb2F0OiBpbml0aWFsO1xuICB9XG4gIC53cmFwcGVyIGhlYWRlciBoMyB7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgZm9vdGVyIG5hdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAud3JhcHBlciBoMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC53cmFwcGVyIC5tZW51IHtcbiAgICB6LWluZGV4OiA1O1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTUlO1xuICAgIGZvbnQ6IG1lbnU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG4gIC53cmFwcGVyIC5kZXNrdG9wIHtcbiAgICBhbmltYXRpb246IGJ1cmdlck1lbnUgMC41cyBmb3J3YXJkcztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MmI0NmViO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgQGtleWZyYW1lcyBidXJnZXJNZW51IHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIC53cmFwcGVyIC5kZXNrdG9wIHVsIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIH1cbiAgLndyYXBwZXIgLmRlc2t0b3AgdWwgbGkge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAud3JhcHBlciAuZGVza3RvcCB1bCBsaTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC53cmFwcGVyIC5kZXNrdG9wIHNtYWxsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1JTtcbiAgfVxuICAud3JhcHBlciAuZGVza3RvcCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLndyYXBwZXIgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbiAgLndyYXBwZXIgaGVhZGVyIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLndyYXBwZXIgaGVhZGVyIC50YWdsaW5lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC53cmFwcGVyIC5tZW51IHtcbiAgICByaWdodDogNCU7XG4gIH1cbiAgLndyYXBwZXIgLnJvdy1hbHQge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/conference/conference.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/conference/conference.component.ts ***!
    \****************************************************/

  /*! exports provided: ConferenceComponent */

  /***/
  function srcAppConferenceConferenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceComponent", function () {
      return ConferenceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConferenceComponent =
    /*#__PURE__*/
    function () {
      function ConferenceComponent() {
        _classCallCheck(this, ConferenceComponent);

        this.showDesktop = false;
      }

      _createClass(ConferenceComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;
          this.checkWidth();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          this.checkWidth();
        }
      }, {
        key: "checkWidth",
        value: function checkWidth() {
          if (this.innerWidth > 510) {
            this.displayStyle = 'block';
          } else {
            this.showDesktop = false;
            this.displayStyle = 'none';
          }
        }
      }, {
        key: "menuClicked",
        value: function menuClicked() {
          this.showDesktop = !this.showDesktop;

          if (this.showDesktop) {
            this.displayStyle = this.showDesktop && 'flex';
          } else {
            this.displayStyle = 'none';
          }
        }
      }]);

      return ConferenceComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], ConferenceComponent.prototype, "onResize", null);
    ConferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conference',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conference.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conference/conference.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conference.component.scss */
      "./src/app/conference/conference.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../assets/conference/stylesheets/reset.scss */
      "./src/assets/conference/stylesheets/reset.scss"))["default"]]
    })], ConferenceComponent);
    /***/
  },

  /***/
  "./src/app/countries/countries-list/countries-list.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/countries/countries-list/countries-list.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCountriesCountriesListCountriesListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search {\n  margin-bottom: 3rem;\n}\n.search .container {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.search .container input {\n  border-radius: 5px;\n  -webkit-box-flex: 0.2;\n          flex-grow: 0.2;\n  border: 0;\n  padding-left: 4rem;\n}\n.search .container > i {\n  position: absolute;\n  top: 1rem;\n  left: 2rem;\n}\n.search .container .filter {\n  position: relative;\n}\n.search .container .filter div,\n.search .container .filter ul {\n  background-color: #ffffff;\n  padding: 1rem;\n  border-radius: 5px;\n}\n.search .container .filter div {\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n}\n.search .container .filter p {\n  display: inline-block;\n  margin: 0;\n  margin-right: 2rem;\n}\n.search .container .filter ul {\n  position: absolute;\n  width: -webkit-fill-available;\n  list-style: none;\n  display: block;\n  -webkit-animation: dropdown 0.8s forwards;\n          animation: dropdown 0.8s forwards;\n}\n.search .container .filter ul li {\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n}\n.search .container .filter ul li:hover {\n  background-color: #c39e9e24;\n}\n@-webkit-keyframes dropdown {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes dropdown {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.countries .container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.countries .container .country {\n  background-color: #ffffff;\n  border-radius: 10px;\n  margin-bottom: 2rem;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n}\n.countries .container .country .flag {\n  height: 45%;\n  display: -webkit-box;\n  display: flex;\n}\n.countries .container .country .flag img {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  width: 20rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.countries .container .country .info {\n  padding: 1rem 1rem 4rem 2rem;\n}\n.countries .container .country .info span {\n  font-weight: bold;\n}\n@media only screen and (max-width: 710px) {\n  .countries .container {\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n}\n@media only screen and (max-width: 510px) {\n  .search .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .search .container input {\n    width: -webkit-fill-available;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    margin-bottom: 1rem;\n  }\n  .search .container .filter {\n    align-self: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy1saXN0L0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGNvdW50cmllc1xcY291bnRyaWVzLWxpc3RcXGNvdW50cmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3VudHJpZXMvY291bnRyaWVzLWxpc3QvY291bnRyaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBQTtBQ0ZGO0FESUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNGSjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtVQUFBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNGTjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hOO0FETUk7RUFDRSxrQkFBQTtBQ0pOO0FETU07O0VBRUUseUJBN0JDO0VBOEJELGFBQUE7RUFDQSxrQkFBQTtBQ0pSO0FET007RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDTFI7QURRTTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDTlI7QURTTTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDUFI7QURTUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ1BWO0FEUVU7RUFDRSwyQkF2REg7QUNpRFQ7QURXTTtFQUNFO0lBQ0UsVUFBQTtFQ1RSO0VEWU07SUFDRSxVQUFBO0VDVlI7QUFDRjtBREdNO0VBQ0U7SUFDRSxVQUFBO0VDVFI7RURZTTtJQUNFLFVBQUE7RUNWUjtBQUNGO0FEaUJFO0VBTUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNuQko7QURxQkk7RUFDRSx5QkF0Rkc7RUF1RkgsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNuQk47QURxQk07RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDbkJSO0FEcUJRO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDbkJWO0FEdUJNO0VBS0UsNEJBQUE7QUN6QlI7QURxQlE7RUFDRSxpQkFBQTtBQ25CVjtBRDRCQTtFQUVJO0lBQ0Usd0JBQUE7WUFBQSx1QkFBQTtFQzFCSjtBQUNGO0FEOEJBO0VBRUk7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDN0JKO0VEK0JJO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7RUM3Qk47RURnQ0k7SUFDRSxzQkFBQTtFQzlCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy1saXN0L2NvdW50cmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogI2ZmZmZmZjtcclxuJGNvbG9yMjogI2MzOWU5ZTI0O1xyXG5cclxuLnNlYXJjaCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBmbGV4LWdyb3c6IDAuMjtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgPiBpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDFyZW07XHJcbiAgICAgIGxlZnQ6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIGRpdixcclxuICAgICAgdWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBkcm9wZG93biAwLjhzIGZvcndhcmRzO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgZHJvcGRvd24ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY291bnRyaWVzIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC8vIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gcm93LWdhcDogM3JlbTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5jb3VudHJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xyXG5cclxuICAgICAgLmZsYWcge1xyXG4gICAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbmZvIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDRyZW0gMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTBweCkge1xyXG4gIC5jb3VudHJpZXMge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xyXG4gIC5zZWFyY2gge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpbHRlciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2VhcmNoIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbi5zZWFyY2ggLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNlYXJjaCAuY29udGFpbmVyIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4LWdyb3c6IDAuMjtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDRyZW07XG59XG4uc2VhcmNoIC5jb250YWluZXIgPiBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIGxlZnQ6IDJyZW07XG59XG4uc2VhcmNoIC5jb250YWluZXIgLmZpbHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWFyY2ggLmNvbnRhaW5lciAuZmlsdGVyIGRpdixcbi5zZWFyY2ggLmNvbnRhaW5lciAuZmlsdGVyIHVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNlYXJjaCAuY29udGFpbmVyIC5maWx0ZXIgZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlYXJjaCAuY29udGFpbmVyIC5maWx0ZXIgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4uc2VhcmNoIC5jb250YWluZXIgLmZpbHRlciB1bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb246IGRyb3Bkb3duIDAuOHMgZm9yd2FyZHM7XG59XG4uc2VhcmNoIC5jb250YWluZXIgLmZpbHRlciB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlYXJjaCAuY29udGFpbmVyIC5maWx0ZXIgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM5ZTllMjQ7XG59XG5Aa2V5ZnJhbWVzIGRyb3Bkb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uY291bnRyaWVzIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb3VudHJpZXMgLmNvbnRhaW5lciAuY291bnRyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbn1cbi5jb3VudHJpZXMgLmNvbnRhaW5lciAuY291bnRyeSAuZmxhZyB7XG4gIGhlaWdodDogNDUlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvdW50cmllcyAuY29udGFpbmVyIC5jb3VudHJ5IC5mbGFnIGltZyB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMjByZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNvdW50cmllcyAuY29udGFpbmVyIC5jb3VudHJ5IC5pbmZvIHtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDRyZW0gMnJlbTtcbn1cbi5jb3VudHJpZXMgLmNvbnRhaW5lciAuY291bnRyeSAuaW5mbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcbiAgLmNvdW50cmllcyAuY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xuICAuc2VhcmNoIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc2VhcmNoIC5jb250YWluZXIgaW5wdXQge1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLnNlYXJjaCAuY29udGFpbmVyIC5maWx0ZXIge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/countries/countries-list/countries-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/countries/countries-list/countries-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CountriesListComponent */

  /***/
  function srcAppCountriesCountriesListCountriesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesListComponent", function () {
      return CountriesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../countries.service */
    "./src/app/countries/countries.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CountriesListComponent =
    /*#__PURE__*/
    function () {
      function CountriesListComponent(countriesService, renderer, cdRef, _route, router) {
        _classCallCheck(this, CountriesListComponent);

        this.countriesService = countriesService;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this._route = _route;
        this.router = router;
        this.countries = [];
        this.filteredCountries = [];
        this.regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
        this.multiplyHeight = 1;
        this._searchCountry = '';
      }

      _createClass(CountriesListComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.checkWindowSize();
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          if (document.body.offsetWidth < 450) {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
              this.multiplyHeight++;
              this.filteredCountries = this.filterCountries(this.searchCountry);
            }
          } else {
            if (window.innerHeight + window.scrollY >= 2 * document.body.offsetHeight * this.multiplyHeight) {
              this.multiplyHeight++;
              this.filteredCountries = this.filterCountries(this.searchCountry);
            }
          }
        }
      }, {
        key: "filterCountries",
        value: function filterCountries(value) {
          var _this7 = this;

          return this.countries.filter(function (arr) {
            return arr['name'].toLowerCase().indexOf(value.toLowerCase()) !== -1 && (_this7.regionSelected !== 'Filter by Region' ? arr['region'] === _this7.regionSelected : true);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.showRegions = 'none';
          this.regionSelected = 'Filter by Region';
          this.renderer.listen('window', 'click', function (e) {
            if (!_this8.regionElement.nativeElement.contains(e.target)) {
              _this8.showRegions = 'none';
            }
          });
          this.countries = _toConsumableArray(this._route.snapshot.data['countriesList']);
          this.filteredCountries = this.countries;

          this._route.queryParams.subscribe(function (params) {
            if (params['region']) {
              _this8.regionChanged(params['region']);
            }

            if (params['search']) {
              _this8.searchCountry = params['search'];
            }
          });

          this.countriesService.switchMode.subscribe(function (style) {
            _this8.backgroundColor = style.backgroundColor;
            _this8.backgroundElementColor = style.backgroundElementColor;
            _this8.backgroundTextColor = style.backgroundTextColor;
          });
        }
      }, {
        key: "regionChanged",
        value: function regionChanged(region) {
          var _this9 = this;

          this.regionSelected = region;
          this.multiplyHeight = 1;

          if (this.regionSelected === 'Filter by Region') {
            this.countriesService.getAllCountries().subscribe(function (countries) {
              _this9.countries = _toConsumableArray(countries);
              _this9.filteredCountries = _this9.countries;
              _this9.searchCountry = _this9.searchCountry;

              _this9.router.navigate(['/countries'], {
                queryParams: {
                  region: null
                }
              });
            });
          } else {
            this.countriesService.getCountriesByRegion(this.regionSelected).subscribe(function (countries) {
              _this9.filteredCountries = countries;
              _this9.searchCountry = _this9.searchCountry;
            });
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          try {
            this.checkWindowSize();
          } catch (e) {} finally {
            this.cdRef.detectChanges();
          }
        }
      }, {
        key: "checkWindowSize",
        value: function checkWindowSize() {
          var _this10 = this;

          var containerWidth = this.countriesElement.nativeElement.offsetWidth;
          this.countryWidth = this.countriesElement.nativeElement.children[0].children[0].offsetWidth;
          var rowLength = Math.floor(containerWidth / this.countryWidth);
          var lastRowLength = this.filteredCountries.length % rowLength;
          var rowGapLength = (containerWidth - this.countryWidth * rowLength) / (rowLength - 1);
          this.countryHeight = this.countriesElement.nativeElement.children[0].children[0].offsetHeight;
          var viewHeight = 2 * document.body.offsetHeight;
          var countriesAmount = viewHeight / this.countryHeight * rowLength;

          if (!countriesAmount) {
            countriesAmount = 16;
          }

          this.filteredCountries = this.filteredCountries.filter(function (arr, index) {
            return index < countriesAmount * _this10.multiplyHeight - 1;
          });

          if (lastRowLength === 0) {
            this.difference = 0;
          } else {
            this.difference = rowLength - lastRowLength;

            if (this.difference === 1) {
              this.countryWidth = this.difference * this.countryWidth;
            } else {
              this.countryWidth = this.difference * this.countryWidth + rowGapLength;
            }
          }
        }
      }, {
        key: "searchCountry",
        set: function set(value) {
          this.multiplyHeight = 1;
          this._searchCountry = value;
          this.filteredCountries = this.filterCountries(value);
        },
        get: function get() {
          return this._searchCountry;
        }
      }]);

      return CountriesListComponent;
    }();

    CountriesListComponent.ctorParameters = function () {
      return [{
        type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('regionEl', {
      "static": true
    })], CountriesListComponent.prototype, "regionElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('countriesWidth', {
      "static": true
    })], CountriesListComponent.prototype, "countriesElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], CountriesListComponent.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])], CountriesListComponent.prototype, "onScroll", null);
    CountriesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-countries-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./countries-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries-list/countries-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./countries-list.component.scss */
      "./src/app/countries/countries-list/countries-list.component.scss"))["default"]]
    })], CountriesListComponent);
    /***/
  },

  /***/
  "./src/app/countries/countries-list/countries-list.resolver.service.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/countries/countries-list/countries-list.resolver.service.ts ***!
    \*****************************************************************************/

  /*! exports provided: CountriesListResolver */

  /***/
  function srcAppCountriesCountriesListCountriesListResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesListResolver", function () {
      return CountriesListResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../countries.service */
    "./src/app/countries/countries.service.ts");

    var CountriesListResolver =
    /*#__PURE__*/
    function () {
      function CountriesListResolver(_countriesService) {
        _classCallCheck(this, CountriesListResolver);

        this._countriesService = _countriesService;
      }

      _createClass(CountriesListResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this._countriesService.getAllCountries();
        }
      }]);

      return CountriesListResolver;
    }();

    CountriesListResolver.ctorParameters = function () {
      return [{
        type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]
      }];
    };

    CountriesListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CountriesListResolver);
    /***/
  },

  /***/
  "./src/app/countries/countries-list/country-detail/country-detail.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/countries/countries-list/country-detail/country-detail.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCountriesCountriesListCountryDetailCountryDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\n  font-weight: normal;\n}\n\nbutton {\n  border: none;\n  box-shadow: 0px 0px 3px 1px #8481813b;\n  padding: 0.5rem 1.5rem;\n  border-radius: 6px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\nbutton i {\n  margin-right: 0.5rem;\n}\n\n.country {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  max-width: 1400px;\n  height: 50%;\n  margin: 0 auto;\n}\n\n.container img {\n  -webkit-box-flex: 0.1;\n          flex-grow: 0.1;\n  margin-right: auto;\n  max-height: 100%;\n  align-self: center;\n  width: 30vw;\n}\n\n.container > div {\n  -webkit-box-flex: 0.7;\n          flex-grow: 0.7;\n  align-self: center;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\n\n.container > div > h2 {\n  display: inline-block;\n}\n\n.container > div > h4 > div {\n  display: initial;\n}\n\n.container > div > h4 .border {\n  border: 2px solid transparent;\n  border-radius: 8px;\n  box-shadow: 1px 1px 4px 1px #020202b8;\n  padding: 0.5rem;\n  margin-right: 0.5rem;\n  line-height: 3rem;\n  cursor: pointer;\n}\n\n.container > div > h4 .border:hover {\n  border-color: aqua;\n}\n\n.info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n@media only screen and (max-width: 860px) {\n  .country {\n    padding-top: 2rem;\n    -webkit-box-align: start;\n            align-items: flex-start;\n    height: 100%;\n  }\n  .country .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .country .container img {\n    margin-right: 0;\n    margin-bottom: 2rem;\n    width: 100%;\n  }\n  .country .container > div {\n    width: initial;\n  }\n  .country .container > div .info {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .country .container > div > h4 > div {\n    display: block;\n    padding-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy1saXN0L2NvdW50cnktZGV0YWlsL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGNvdW50cmllc1xcY291bnRyaWVzLWxpc3RcXGNvdW50cnktZGV0YWlsXFxjb3VudHJ5LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy1saXN0L2NvdW50cnktZGV0YWlsL2NvdW50cnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0hGOztBREtFO0VBQ0Usb0JBQUE7QUNISjs7QURPQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSkY7O0FETUU7RUFDRSxxQkFBQTtVQUFBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSko7O0FET0U7RUFDRSxxQkFBQTtVQUFBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0xKOztBRE9JO0VBQ0UscUJBQUE7QUNMTjs7QURTTTtFQUNFLGdCQUFBO0FDUFI7O0FEVU07RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNSUjs7QURVUTtFQUNFLGtCQWhFRDtBQ3dEVDs7QURlQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNaRjs7QURlQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsWUFBQTtFQ1pGO0VEY0U7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNaSjtFRGNJO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQ1pOO0VEZUk7SUFDRSxjQUFBO0VDYk47RURlTTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ2JSO0VEaUJRO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0VDZlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cmllcy9jb3VudHJpZXMtbGlzdC9jb3VudHJ5LWRldGFpbC9jb3VudHJ5LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjE6ICM4NDgxODEzYjtcclxuJGNvbG9yMjogIzAyMDIwMmI4O1xyXG4kY29sb3IzOiBhcXVhO1xyXG5cclxuc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4ICRjb2xvcjE7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5jb3VudHJ5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGltZyB7XHJcbiAgICBmbGV4LWdyb3c6IDAuMTtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICB9XHJcblxyXG4gID4gZGl2IHtcclxuICAgIGZsZXgtZ3JvdzogMC43O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG5cclxuICAgID4gaDIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgPiBoNCB7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm9yZGVyIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4ICRjb2xvcjI7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAuY291bnRyeSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBoNCB7XHJcbiAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwic3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4ICM4NDgxODEzYjtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5jb3VudHJ5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIGhlaWdodDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWluZXIgaW1nIHtcbiAgZmxleC1ncm93OiAwLjE7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMzB2dztcbn1cbi5jb250YWluZXIgPiBkaXYge1xuICBmbGV4LWdyb3c6IDAuNztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG4uY29udGFpbmVyID4gZGl2ID4gaDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29udGFpbmVyID4gZGl2ID4gaDQgPiBkaXYge1xuICBkaXNwbGF5OiBpbml0aWFsO1xufVxuLmNvbnRhaW5lciA+IGRpdiA+IGg0IC5ib3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggIzAyMDIwMmI4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciA+IGRpdiA+IGg0IC5ib3JkZXI6aG92ZXIge1xuICBib3JkZXItY29sb3I6IGFxdWE7XG59XG5cbi5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gIC5jb3VudHJ5IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvdW50cnkgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY291bnRyeSAuY29udGFpbmVyIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvdW50cnkgLmNvbnRhaW5lciA+IGRpdiB7XG4gICAgd2lkdGg6IGluaXRpYWw7XG4gIH1cbiAgLmNvdW50cnkgLmNvbnRhaW5lciA+IGRpdiAuaW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY291bnRyeSAuY29udGFpbmVyID4gZGl2ID4gaDQgPiBkaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/countries/countries-list/country-detail/country-detail.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/countries/countries-list/country-detail/country-detail.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CountryDetailComponent */

  /***/
  function srcAppCountriesCountriesListCountryDetailCountryDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryDetailComponent", function () {
      return CountryDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../countries.service */
    "./src/app/countries/countries.service.ts");

    var CountryDetailComponent =
    /*#__PURE__*/
    function () {
      function CountryDetailComponent(route, countriesService) {
        _classCallCheck(this, CountryDetailComponent);

        this.route = route;
        this.countriesService = countriesService;
        this.currencies = [];
        this.languages = [];
        this.borderCountries = [];
      }

      _createClass(CountryDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.paramMap.subscribe(function (route) {
            var name = route.get('countryName');

            _this11.countriesService.getCountry(name).subscribe(function (country) {
              _this11.country = country[0];
              _this11.languages = [];
              _this11.currencies = [];
              _this11.borderCountries = [];

              _this11.country.languages.forEach(function (obj) {
                var language = obj['name'];

                _this11.languages.push(language);
              });

              _this11.country.currencies.forEach(function (obj) {
                var currency = obj['name'];

                _this11.currencies.push(currency);
              });

              _this11.country.borders.forEach(function (countryCode) {
                _this11.countriesService.getCountryByCode(countryCode).subscribe(function (country) {
                  _this11.borderCountries.push(country['name']);
                });
              });
            });

            _this11.countriesService.switchMode.subscribe(function (style) {
              _this11.backgroundColor = style.backgroundColor;
              _this11.backgroundElementColor = style.backgroundElementColor;
              _this11.backgroundTextColor = style.backgroundTextColor;
            });
          });
        }
      }]);

      return CountryDetailComponent;
    }();

    CountryDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]
      }];
    };

    CountryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-country-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./country-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries-list/country-detail/country-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./country-detail.component.scss */
      "./src/app/countries/countries-list/country-detail/country-detail.component.scss"))["default"]]
    })], CountryDetailComponent);
    /***/
  },

  /***/
  "./src/app/countries/countries.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/countries/countries.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCountriesCountriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background-color: #f5f5f5;\n  min-height: 100vh;\n}\n\n.container {\n  padding: 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.header {\n  background-color: #ffffff;\n}\n\n.header .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.header .container h4 {\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 510px) {\n  h1 {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyaWVzL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGNvdW50cmllc1xcY291bnRyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UseUJBSk87RUFLUCxpQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUNFLHlCQWRPO0FDWVQ7O0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDREo7O0FER0k7RUFDRSxlQUFBO0FDRE47O0FETUE7RUFDRTtJQUNFLGlCQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3IxOiAjZjVmNWY1O1xyXG4kY29sb3IyOiAjZmZmZmZmO1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uaGVhZGVyIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyIC5jb250YWluZXIgaDQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/countries/countries.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/countries/countries.component.ts ***!
    \**************************************************/

  /*! exports provided: CountriesComponent */

  /***/
  function srcAppCountriesCountriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesComponent", function () {
      return CountriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./countries.service */
    "./src/app/countries/countries.service.ts");

    var CountriesComponent =
    /*#__PURE__*/
    function () {
      function CountriesComponent(countriesService) {
        _classCallCheck(this, CountriesComponent);

        this.countriesService = countriesService;
        this.darkStyle = {
          backgroundColor: '#202c37',
          backgroundElementColor: '#2b3945',
          backgroundTextColor: '#FFFFFF'
        };
        this.lightStyle = {
          backgroundColor: '#f5f5f5',
          backgroundElementColor: '#ffffff',
          backgroundTextColor: '#000000'
        };
      }

      _createClass(CountriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.darkMode = false;
          this.backgroundColor = this.lightStyle.backgroundColor;
          this.backgroundElementColor = this.lightStyle.backgroundElementColor;
          this.backgroundTextColor = this.lightStyle.backgroundTextColor;
          this.countriesService.switchMode.next(this.lightStyle);
        }
      }, {
        key: "changeBackgroundColor",
        value: function changeBackgroundColor() {
          this.darkMode = !this.darkMode;

          if (this.darkMode) {
            this.backgroundColor = this.darkStyle.backgroundColor;
            this.backgroundElementColor = this.darkStyle.backgroundElementColor;
            this.backgroundTextColor = this.darkStyle.backgroundTextColor;
            this.countriesService.switchMode.next(this.darkStyle);
          } else {
            this.backgroundColor = this.lightStyle.backgroundColor;
            this.backgroundElementColor = this.lightStyle.backgroundElementColor;
            this.backgroundTextColor = this.lightStyle.backgroundTextColor;
            this.countriesService.switchMode.next(this.lightStyle);
          }
        }
      }]);

      return CountriesComponent;
    }();

    CountriesComponent.ctorParameters = function () {
      return [{
        type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]
      }];
    };

    CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-countries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./countries.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./countries.component.scss */
      "./src/app/countries/countries.component.scss"))["default"]]
    })], CountriesComponent);
    /***/
  },

  /***/
  "./src/app/countries/countries.service.ts":
  /*!************************************************!*\
    !*** ./src/app/countries/countries.service.ts ***!
    \************************************************/

  /*! exports provided: CountriesService */

  /***/
  function srcAppCountriesCountriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesService", function () {
      return CountriesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CountriesService =
    /*#__PURE__*/
    function () {
      function CountriesService(htppClient) {
        _classCallCheck(this, CountriesService);

        this.htppClient = htppClient;
        this.switchMode = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
      }

      _createClass(CountriesService, [{
        key: "getAllCountries",
        value: function getAllCountries() {
          return this.htppClient.get('https://restcountries.com/v2/all');
        }
      }, {
        key: "getCountriesByRegion",
        value: function getCountriesByRegion(region) {
          return this.htppClient.get("https://restcountries.com/v2/region/".concat(region));
        }
      }, {
        key: "getCountry",
        value: function getCountry(name) {
          return this.htppClient.get("https://restcountries.com/v2/name/".concat(name));
        }
      }, {
        key: "getCountryByCode",
        value: function getCountryByCode(code) {
          return this.htppClient.get("https://restcountries.com/v2/alpha/".concat(code));
        }
      }]);

      return CountriesService;
    }();

    CountriesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CountriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CountriesService);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  text-align: center;\n}\n\n.components {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.components .row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 3rem;\n}\n\n.components .row div {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  cursor: pointer;\n}\n\n.components .row div img {\n  display: block;\n  width: 35rem;\n  height: 22rem;\n  margin-bottom: 0.5rem;\n}\n\n.components .row div a {\n  text-decoration: none;\n}\n\n.components .row div:hover img {\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-color: #ed6491;\n  border-width: 3px;\n  border-style: groove;\n  border-radius: 0.3rem;\n  box-sizing: border-box;\n}\n\n.components .row div:focus {\n  outline: none;\n}\n\n.components .row:last-child {\n  margin-bottom: 0;\n}\n\n@media (max-width: 1200px) {\n  .components {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .components div {\n    margin-bottom: 3rem;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n\n@media (max-width: 560px) {\n  .components .row div img {\n    width: 100%;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFSTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FOOztBREVNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNBUjs7QURHTTtFQUNFLHFCQUFBO0FDRFI7O0FES1E7RUFDRSx5QkFBQTtFQUFBLGlCQUFBO0VBQ0EscUJBakNEO0VBa0NDLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDSFY7O0FET007RUFDRSxhQUFBO0FDTFI7O0FEU0k7RUFDRSxnQkFBQTtBQ1BOOztBRFlBO0VBQ0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDVEY7RURXRTtJQUNFLG1CQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDVEo7QUFDRjs7QURhQTtFQUlRO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNkUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogI2VkNjQ5MTtcclxuXHJcbmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb21wb25lbnRzIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMzVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAyMnJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICAgICAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29tcG9uZW50cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xyXG4gIC5jb21wb25lbnRzIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29tcG9uZW50cyB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb21wb25lbnRzIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uY29tcG9uZW50cyAucm93IGRpdiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29tcG9uZW50cyAucm93IGRpdiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM1cmVtO1xuICBoZWlnaHQ6IDIycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uY29tcG9uZW50cyAucm93IGRpdiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbXBvbmVudHMgLnJvdyBkaXY6aG92ZXIgaW1nIHtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG4gIGJvcmRlci1jb2xvcjogI2VkNjQ5MTtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29tcG9uZW50cyAucm93IGRpdjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY29tcG9uZW50cyAucm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb21wb25lbnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY29tcG9uZW50cyBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5jb21wb25lbnRzIC5yb3cgZGl2IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "navigate",
        value: function navigate(address) {
          window.location.href = address === 'myhalyk' ? 'https://myhalyk.ge' : 'https://admission.ge';
        }
      }, {
        key: "updateNavbarColor",
        value: function updateNavbarColor(component) {
          switch (component) {
            case 'home':
              this.color = '#ed6491';
              break;

            case 'myhalyk':
              this.color = '#09b188';
              break;

            case 'admission':
              this.color = '#0085ca';
              break;

            case 'pricing':
              this.color = '#ce9dff';
              break;

            case 'books':
              this.color = '#5862cf';
              break;

            case 'conference':
              this.color = '#648880';
              break;

            case 'clipboard':
              this.color = '#22ceb4';
              break;

            case 'urlshortening':
              this.color = '#2acfcf';
              break;

            case 'huddle':
              this.color = '#ff52bf';
              break;

            case 'rpsgame':
              this.color = '#1f3756';
              break;

            case 'countries':
              this.color = '#202c37';
              break;

            case 'bookmarklanding':
              this.color = '#5368df';
              break;

            case 'managelanding':
              this.color = '#f94b1d';
              break;

            case 'sign':
              this.color = '#38cc8c';
              break;

            default:
              this.color = '#ed6491';
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/huddle/huddle.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/huddle/huddle.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHuddleHuddleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1rem 2rem 1rem 2rem;\n}\n\n.header {\n  padding-top: 1rem;\n}\n\n.header .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.header .container button {\n  background-color: transparent;\n  color: #ff52bf;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-radius: 3rem;\n  border: solid 1px #ff52bf;\n  box-shadow: none;\n}\n\n.header .container button:hover {\n  background-color: #ff52bf;\n  color: white;\n}\n\n.achievments .container {\n  padding: 3rem 9rem 2rem 9rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  box-sizing: border-box;\n}\n\n.achievments .container .top {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 6rem;\n}\n\n.achievments .container .top h1 {\n  font-size: 3rem;\n  letter-spacing: -2.4px;\n}\n\n.achievments .container .top p {\n  width: 60%;\n}\n\n.achievments .container > img {\n  width: 100%;\n  margin-bottom: 6rem;\n}\n\n.achievments .container .bottom {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.achievments .container .bottom h2 {\n  font-size: 4rem;\n  margin: 0;\n  letter-spacing: 3.4px;\n}\n\n.achievments .container .bottom p {\n  margin: 0;\n  letter-spacing: -0.8px;\n}\n\n.offer .sectionTop,\n.offer .sectionBottom {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.offer .sectionTop > img,\n.offer .sectionBottom > img {\n  width: 100%;\n}\n\n.offer .sectionTop .middle,\n.offer .sectionBottom .middle {\n  background-color: #f6fbff;\n}\n\n.offer .sectionTop .middle .container,\n.offer .sectionBottom .middle .container {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.offer .sectionTop .middle .container img,\n.offer .sectionBottom .middle .container img {\n  width: 50%;\n}\n\n.offer .sectionTop .middle .container p,\n.offer .sectionBottom .middle .container p {\n  width: 81%;\n  letter-spacing: -1px;\n}\n\n.offer .sectionMiddle {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n.offer .sectionMiddle .container {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.offer .sectionMiddle .container img {\n  width: 50%;\n  margin-right: 6rem;\n}\n\n.offer .sectionMiddle .container > div h1 {\n  margin: 0;\n}\n\n.offer .sectionMiddle .container > div p {\n  letter-spacing: -1px;\n}\n\n.offer .container {\n  display: -webkit-box;\n  display: flex;\n}\n\n.join {\n  padding-top: 4rem;\n  padding-bottom: 9rem;\n}\n\n.join .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n.join .container h1 {\n  margin-bottom: 3rem;\n}\n\nfooter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nfooter > img {\n  width: 100%;\n}\n\nfooter .bottom {\n  background-color: #00252e;\n  color: white;\n  padding-bottom: 3rem;\n}\n\nfooter .bottom .container {\n  display: -webkit-box;\n  display: flex;\n}\n\nfooter .bottom .container .contact > p {\n  width: 70%;\n  margin-bottom: 2rem;\n}\n\nfooter .bottom .container .contact > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 1rem;\n}\n\nfooter .bottom .container .contact > div img {\n  margin-right: 2rem;\n}\n\nfooter .bottom .container .contact > div p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nfooter .bottom .container .contact > div.social {\n  margin-top: 4rem;\n  margin-bottom: 0;\n}\n\nfooter .bottom .container .contact > div.social img {\n  cursor: pointer;\n}\n\nfooter .bottom .container .contact > div.social img:hover {\n  -webkit-filter: invert(0.4) sepia(1) saturate(20) hue-rotate(273.6deg) brightness(1);\n          filter: invert(0.4) sepia(1) saturate(20) hue-rotate(273.6deg) brightness(1);\n}\n\nfooter .bottom .container .subscribe h2 {\n  margin-top: 0;\n  text-transform: uppercase;\n}\n\nfooter .bottom .container .subscribe p {\n  width: 63%;\n  margin-bottom: 4rem;\n}\n\nfooter .bottom .container .subscribe > div {\n  display: -webkit-box;\n  display: flex;\n}\n\nfooter .bottom .container .subscribe > div input {\n  padding: 1rem 1rem 1rem 1rem;\n  border-radius: 5px;\n  -webkit-box-flex: 0.7;\n          flex-grow: 0.7;\n  border: none;\n  margin-right: 2rem;\n}\n\nfooter .bottom .container .subscribe > div button {\n  padding-left: 2rem;\n  padding-right: 2rem;\n  border-radius: 6px;\n  padding-top: 0;\n  padding-bottom: 0;\n  box-shadow: none;\n}\n\nbutton {\n  background-color: #ff52bf;\n  border: none;\n  color: white;\n  padding-top: 1.3rem;\n  padding-bottom: 1.3rem;\n  padding-left: 6rem;\n  padding-right: 6rem;\n  border-radius: 3rem;\n  font-size: 0.9rem;\n  box-shadow: 0px 3px 5px 0px #a7a7a7;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #ff74cc;\n}\n\nbutton:focus {\n  background-color: #ff52bf;\n}\n\n@media only screen and (max-width: 860px) {\n  .offer .sectionMiddle .container img {\n    margin-right: 3rem;\n  }\n\n  footer .bottom .container .subscribe {\n    margin-bottom: 4rem;\n  }\n  footer .bottom .container .subscribe > div {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  footer .bottom .container .subscribe > div input {\n    margin-right: 0;\n    margin-bottom: 2rem;\n  }\n  footer .bottom .container .subscribe > div button {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 0;\n    align-self: flex-end;\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 715px) {\n  .achievments .container .bottom {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .achievments .container .bottom > div:first-child {\n    margin-bottom: 5rem;\n  }\n\n  footer .bottom .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n  }\n  footer .bottom .container .contact > img {\n    width: 80%;\n  }\n  footer .bottom .container .subscribe > div button {\n    width: 50%;\n  }\n}\n\n@media only screen and (max-width: 565px) {\n  .header .container img {\n    width: 40%;\n  }\n\n  .achievments .container {\n    padding: 3rem 5rem 2rem 5rem;\n  }\n  .achievments .container .top h1 {\n    font-size: 2rem;\n    letter-spacing: -1.4px;\n  }\n  .achievments .container .top p {\n    width: 95%;\n    margin-bottom: 3rem;\n  }\n  .achievments .container .top button {\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .offer .sectionTop .middle .container,\n.offer .sectionBottom .middle .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n  }\n  .offer .sectionTop .middle .container img,\n.offer .sectionBottom .middle .container img {\n    margin-bottom: 2rem;\n  }\n  .offer .sectionTop .middle .container > div,\n.offer .sectionBottom .middle .container > div {\n    width: 71%;\n  }\n  .offer .sectionTop .middle .container > div p,\n.offer .sectionBottom .middle .container > div p {\n    width: 100%;\n  }\n  .offer .sectionMiddle .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n  }\n  .offer .sectionMiddle .container img {\n    margin-right: 0;\n    margin-bottom: 2rem;\n  }\n  .offer .sectionMiddle .container > div {\n    width: 71%;\n  }\n  .offer .sectionMiddle .container > div p {\n    width: 100%;\n  }\n\n  .join .container {\n    padding: 1rem 5rem 1rem 5rem;\n  }\n  .join .container button {\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHVkZGxlL0M6XFxVc2Vyc1xcdGphbmFcXERlc2t0b3BcXGFuZ3VsYXItcHJhY3RpY2Uvc3JjXFxhcHBcXGh1ZGRsZVxcaHVkZGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9odWRkbGUvaHVkZGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDREo7O0FER0k7RUFDRSw2QkFBQTtFQUNBLGNBakJHO0VBa0JILGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNETjs7QURHTTtFQUNFLHlCQTNCQztFQTRCRCxZQUFBO0FDRFI7O0FEUUU7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtBQ0xKOztBRE9JO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNMTjs7QURPTTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0xSOztBRFFNO0VBQ0UsVUFBQTtBQ05SOztBRFVJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDUk47O0FEV0k7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ1ROOztBRFdNO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQ1RSOztBRFlNO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0FDVlI7O0FEaUJFOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ2RKOztBRGdCSTs7RUFDRSxXQUFBO0FDYk47O0FEZ0JJOztFQUNFLHlCQUFBO0FDYk47O0FEZU07O0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBQ1pSOztBRGNROztFQUNFLFVBQUE7QUNYVjs7QURjUTs7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUNYVjs7QURpQkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDZko7O0FEaUJJO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBQ2ZOOztBRGlCTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ2ZSOztBRG1CUTtFQUNFLFNBQUE7QUNqQlY7O0FEb0JRO0VBQ0Usb0JBQUE7QUNsQlY7O0FEd0JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDdEJKOztBRDBCQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUN2QkY7O0FEeUJFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDdkJKOztBRHlCSTtFQUNFLG1CQUFBO0FDdkJOOztBRDRCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ3pCRjs7QUQyQkU7RUFDRSxXQUFBO0FDekJKOztBRDJCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDekJKOztBRDJCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ3pCTjs7QUQ0QlE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUMxQlY7O0FENkJRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDM0JWOztBRDZCVTtFQUNFLGtCQUFBO0FDM0JaOztBRDhCVTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQzVCWjs7QUQrQlU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDN0JaOztBRCtCWTtFQUNFLGVBQUE7QUM3QmQ7O0FEK0JjO0VBQ0Usb0ZBQUE7VUFBQSw0RUFBQTtBQzdCaEI7O0FEcUNRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDbkNWOztBRHNDUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ3BDVjs7QUR1Q1E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNyQ1Y7O0FEdUNVO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO1VBQUEsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3JDWjs7QUR3Q1U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3RDWjs7QUQ4Q0E7RUFDRSx5QkFuUE87RUFvUFAsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUMzQ0Y7O0FENkNFO0VBQ0UseUJBQUE7QUMzQ0o7O0FEOENFO0VBQ0UseUJBcFFLO0FDd05UOztBRGdEQTtFQUlRO0lBQ0Usa0JBQUE7RUNoRFI7O0VEeURNO0lBQ0UsbUJBQUE7RUN0RFI7RUR3RFE7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUN0RFY7RUR3RFU7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUN0RFo7RUR5RFU7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxXQUFBO0VDdkRaO0FBQ0Y7O0FEK0RBO0VBR007SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDL0ROO0VEa0VRO0lBQ0UsbUJBQUE7RUNoRVY7O0VEd0VJO0lBQ0UsNEJBQUE7SUFBQSw4QkFBQTtZQUFBLDhCQUFBO0VDckVOO0VEdUVRO0lBQ0UsVUFBQTtFQ3JFVjtFRDBFVTtJQUNFLFVBQUE7RUN4RVo7QUFDRjs7QURnRkE7RUFHTTtJQUNFLFVBQUE7RUNoRk47O0VEc0ZFO0lBQ0UsNEJBQUE7RUNuRko7RURzRk07SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUNwRlI7RUR1Rk07SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNyRlI7RUR3Rk07SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDdEZSOztFRGdHTTs7SUFDRSw0QkFBQTtJQUFBLDhCQUFBO1lBQUEsOEJBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0Esa0JBQUE7RUM1RlI7RUQ4RlE7O0lBQ0UsbUJBQUE7RUMzRlY7RUQ4RlE7O0lBQ0UsVUFBQTtFQzNGVjtFRDZGVTs7SUFDRSxXQUFBO0VDMUZaO0VEa0dJO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLGtCQUFBO0VDaEdOO0VEa0dNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDaEdSO0VEbUdNO0lBQ0UsVUFBQTtFQ2pHUjtFRG1HUTtJQUNFLFdBQUE7RUNqR1Y7O0VEeUdFO0lBQ0UsNEJBQUE7RUN0R0o7RUR3R0k7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDdEdOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9odWRkbGUvaHVkZGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogaHNsKDMyMiwgMTAwJSwgNjYlKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDJyZW07XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGNvbG9yMTtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWNoaWV2bWVudHMge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogM3JlbSA5cmVtIDJyZW0gOXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgLnRvcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0yLjRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgID4gaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMy40cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub2ZmZXIge1xyXG4gIC5zZWN0aW9uVG9wLFxyXG4gIC5zZWN0aW9uQm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgID4gaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgd2lkdGg6IDgxJTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25NaWRkbGUge1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG5cclxuLmpvaW4ge1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA5cmVtO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgPiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5ib3R0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjUyZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgLmNvbnRhY3Qge1xyXG4gICAgICAgID4gcCB7XHJcbiAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5zb2NpYWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC40KSBzZXBpYSgxKSBzYXR1cmF0ZSgyMCkgaHVlLXJvdGF0ZSgyNzMuNmRlZykgYnJpZ2h0bmVzcygxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWJzY3JpYmUge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB3aWR0aDogNjMlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMC43O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDEuM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS4zcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogNnJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiA2cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4ICNhN2E3YTc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzRjYztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAub2ZmZXIge1xyXG4gICAgLnNlY3Rpb25NaWRkbGUge1xyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIC5ib3R0b20ge1xyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAuc3Vic2NyaWJlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcblxyXG4gICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxNXB4KSB7XHJcbiAgLmFjaGlldm1lbnRzIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAuYm90dG9tIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb290ZXIge1xyXG4gICAgLmJvdHRvbSB7XHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICA+IGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJzY3JpYmUge1xyXG4gICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY1cHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY2hpZXZtZW50cyB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogM3JlbSA1cmVtIDJyZW0gNXJlbTtcclxuXHJcbiAgICAgIC50b3Age1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMS40cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vZmZlciB7XHJcbiAgICAuc2VjdGlvblRvcCxcclxuICAgIC5zZWN0aW9uQm90dG9tIHtcclxuICAgICAgLm1pZGRsZSB7XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogNzElO1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbk1pZGRsZSB7XHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDcxJTtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuam9pbiB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMXJlbSA1cmVtIDFyZW0gNXJlbTtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMXJlbSAycmVtIDFyZW0gMnJlbTtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLmhlYWRlciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlciAuY29udGFpbmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmNTJiZjtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjUyYmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uaGVhZGVyIC5jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTJiZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWNoaWV2bWVudHMgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDNyZW0gOXJlbSAycmVtIDlyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYWNoaWV2bWVudHMgLmNvbnRhaW5lciAudG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xufVxuLmFjaGlldm1lbnRzIC5jb250YWluZXIgLnRvcCBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0yLjRweDtcbn1cbi5hY2hpZXZtZW50cyAuY29udGFpbmVyIC50b3AgcCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uYWNoaWV2bWVudHMgLmNvbnRhaW5lciA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xufVxuLmFjaGlldm1lbnRzIC5jb250YWluZXIgLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYWNoaWV2bWVudHMgLmNvbnRhaW5lciAuYm90dG9tIGgyIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAzLjRweDtcbn1cbi5hY2hpZXZtZW50cyAuY29udGFpbmVyIC5ib3R0b20gcCB7XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcbn1cblxuLm9mZmVyIC5zZWN0aW9uVG9wLFxuLm9mZmVyIC5zZWN0aW9uQm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5vZmZlciAuc2VjdGlvblRvcCA+IGltZyxcbi5vZmZlciAuc2VjdGlvbkJvdHRvbSA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9mZmVyIC5zZWN0aW9uVG9wIC5taWRkbGUsXG4ub2ZmZXIgLnNlY3Rpb25Cb3R0b20gLm1pZGRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XG59XG4ub2ZmZXIgLnNlY3Rpb25Ub3AgLm1pZGRsZSAuY29udGFpbmVyLFxuLm9mZmVyIC5zZWN0aW9uQm90dG9tIC5taWRkbGUgLmNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub2ZmZXIgLnNlY3Rpb25Ub3AgLm1pZGRsZSAuY29udGFpbmVyIGltZyxcbi5vZmZlciAuc2VjdGlvbkJvdHRvbSAubWlkZGxlIC5jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5vZmZlciAuc2VjdGlvblRvcCAubWlkZGxlIC5jb250YWluZXIgcCxcbi5vZmZlciAuc2VjdGlvbkJvdHRvbSAubWlkZGxlIC5jb250YWluZXIgcCB7XG4gIHdpZHRoOiA4MSU7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuLm9mZmVyIC5zZWN0aW9uTWlkZGxlIHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuLm9mZmVyIC5zZWN0aW9uTWlkZGxlIC5jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm9mZmVyIC5zZWN0aW9uTWlkZGxlIC5jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA2cmVtO1xufVxuLm9mZmVyIC5zZWN0aW9uTWlkZGxlIC5jb250YWluZXIgPiBkaXYgaDEge1xuICBtYXJnaW46IDA7XG59XG4ub2ZmZXIgLnNlY3Rpb25NaWRkbGUgLmNvbnRhaW5lciA+IGRpdiBwIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4ub2ZmZXIgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5qb2luIHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiA5cmVtO1xufVxuLmpvaW4gLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5qb2luIC5jb250YWluZXIgaDEge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9vdGVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5mb290ZXIgLmJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI1MmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG5mb290ZXIgLmJvdHRvbSAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmZvb3RlciAuYm90dG9tIC5jb250YWluZXIgLmNvbnRhY3QgPiBwIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbmZvb3RlciAuYm90dG9tIC5jb250YWluZXIgLmNvbnRhY3QgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuZm9vdGVyIC5ib3R0b20gLmNvbnRhaW5lciAuY29udGFjdCA+IGRpdiBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5mb290ZXIgLmJvdHRvbSAuY29udGFpbmVyIC5jb250YWN0ID4gZGl2IHAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuZm9vdGVyIC5ib3R0b20gLmNvbnRhaW5lciAuY29udGFjdCA+IGRpdi5zb2NpYWwge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuZm9vdGVyIC5ib3R0b20gLmNvbnRhaW5lciAuY29udGFjdCA+IGRpdi5zb2NpYWwgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZm9vdGVyIC5ib3R0b20gLmNvbnRhaW5lciAuY29udGFjdCA+IGRpdi5zb2NpYWwgaW1nOmhvdmVyIHtcbiAgZmlsdGVyOiBpbnZlcnQoMC40KSBzZXBpYSgxKSBzYXR1cmF0ZSgyMCkgaHVlLXJvdGF0ZSgyNzMuNmRlZykgYnJpZ2h0bmVzcygxKTtcbn1cbmZvb3RlciAuYm90dG9tIC5jb250YWluZXIgLnN1YnNjcmliZSBoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5mb290ZXIgLmJvdHRvbSAuY29udGFpbmVyIC5zdWJzY3JpYmUgcCB7XG4gIHdpZHRoOiA2MyU7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5mb290ZXIgLmJvdHRvbSAuY29udGFpbmVyIC5zdWJzY3JpYmUgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuZm9vdGVyIC5ib3R0b20gLmNvbnRhaW5lciAuc3Vic2NyaWJlID4gZGl2IGlucHV0IHtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4LWdyb3c6IDAuNztcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5mb290ZXIgLmJvdHRvbSAuY29udGFpbmVyIC5zdWJzY3JpYmUgPiBkaXYgYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTJiZjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxLjNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjNyZW07XG4gIHBhZGRpbmctbGVmdDogNnJlbTtcbiAgcGFkZGluZy1yaWdodDogNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCAjYTdhN2E3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NGNjO1xufVxuYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTJiZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xuICAub2ZmZXIgLnNlY3Rpb25NaWRkbGUgLmNvbnRhaW5lciBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgfVxuXG4gIGZvb3RlciAuYm90dG9tIC5jb250YWluZXIgLnN1YnNjcmliZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgfVxuICBmb290ZXIgLmJvdHRvbSAuY29udGFpbmVyIC5zdWJzY3JpYmUgPiBkaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgZm9vdGVyIC5ib3R0b20gLmNvbnRhaW5lciAuc3Vic2NyaWJlID4gZGl2IGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICBmb290ZXIgLmJvdHRvbSAuY29udGFpbmVyIC5zdWJzY3JpYmUgPiBkaXYgYnV0dG9uIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTVweCkge1xuICAuYWNoaWV2bWVudHMgLmNvbnRhaW5lciAuYm90dG9tIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmFjaGlldm1lbnRzIC5jb250YWluZXIgLmJvdHRvbSA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxuXG4gIGZvb3RlciAuYm90dG9tIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuICBmb290ZXIgLmJvdHRvbSAuY29udGFpbmVyIC5jb250YWN0ID4gaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIGZvb3RlciAuYm90dG9tIC5jb250YWluZXIgLnN1YnNjcmliZSA+IGRpdiBidXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY1cHgpIHtcbiAgLmhlYWRlciAuY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuXG4gIC5hY2hpZXZtZW50cyAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzcmVtIDVyZW0gMnJlbSA1cmVtO1xuICB9XG4gIC5hY2hpZXZtZW50cyAuY29udGFpbmVyIC50b3AgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTEuNHB4O1xuICB9XG4gIC5hY2hpZXZtZW50cyAuY29udGFpbmVyIC50b3AgcCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG4gIC5hY2hpZXZtZW50cyAuY29udGFpbmVyIC50b3AgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5vZmZlciAuc2VjdGlvblRvcCAubWlkZGxlIC5jb250YWluZXIsXG4ub2ZmZXIgLnNlY3Rpb25Cb3R0b20gLm1pZGRsZSAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm9mZmVyIC5zZWN0aW9uVG9wIC5taWRkbGUgLmNvbnRhaW5lciBpbWcsXG4ub2ZmZXIgLnNlY3Rpb25Cb3R0b20gLm1pZGRsZSAuY29udGFpbmVyIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICAub2ZmZXIgLnNlY3Rpb25Ub3AgLm1pZGRsZSAuY29udGFpbmVyID4gZGl2LFxuLm9mZmVyIC5zZWN0aW9uQm90dG9tIC5taWRkbGUgLmNvbnRhaW5lciA+IGRpdiB7XG4gICAgd2lkdGg6IDcxJTtcbiAgfVxuICAub2ZmZXIgLnNlY3Rpb25Ub3AgLm1pZGRsZSAuY29udGFpbmVyID4gZGl2IHAsXG4ub2ZmZXIgLnNlY3Rpb25Cb3R0b20gLm1pZGRsZSAuY29udGFpbmVyID4gZGl2IHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5vZmZlciAuc2VjdGlvbk1pZGRsZSAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5vZmZlciAuc2VjdGlvbk1pZGRsZSAuY29udGFpbmVyIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLm9mZmVyIC5zZWN0aW9uTWlkZGxlIC5jb250YWluZXIgPiBkaXYge1xuICAgIHdpZHRoOiA3MSU7XG4gIH1cbiAgLm9mZmVyIC5zZWN0aW9uTWlkZGxlIC5jb250YWluZXIgPiBkaXYgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuam9pbiAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDVyZW0gMXJlbSA1cmVtO1xuICB9XG4gIC5qb2luIC5jb250YWluZXIgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/huddle/huddle.component.ts":
  /*!********************************************!*\
    !*** ./src/app/huddle/huddle.component.ts ***!
    \********************************************/

  /*! exports provided: HuddleComponent */

  /***/
  function srcAppHuddleHuddleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HuddleComponent", function () {
      return HuddleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HuddleComponent =
    /*#__PURE__*/
    function () {
      function HuddleComponent() {
        _classCallCheck(this, HuddleComponent);
      }

      _createClass(HuddleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HuddleComponent;
    }();

    HuddleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-huddle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./huddle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/huddle/huddle.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./huddle.component.scss */
      "./src/app/huddle/huddle.component.scss"))["default"]]
    })], HuddleComponent);
    /***/
  },

  /***/
  "./src/app/manage-landing/manage-landing.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/manage-landing/manage-landing.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageLandingManageLandingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  min-height: 100vh;\n  overflow: hidden;\n  font-family: \"Rubik\", sans-serif;\n  background-position: calc(100% - -4rem) calc(0% - 13rem), calc(0% - 33rem) calc(50% - -18rem);\n  background-repeat: no-repeat, no-repeat;\n}\n\n.container {\n  padding: 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\nnav {\n  margin-bottom: 2rem;\n}\n\nnav .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nnav .desktop {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nnav .desktop ul {\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n}\n\nnav .desktop ul li {\n  cursor: pointer;\n  margin-right: 1rem;\n  letter-spacing: 1px;\n}\n\nnav .desktop ul li:hover {\n  color: #b9b8b8;\n}\n\nnav .desktop hr {\n  display: none;\n}\n\n.intro .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.intro .container .text {\n  width: 30%;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n\n.features .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.features .container .text {\n  width: 33%;\n}\n\n.features .container .feature {\n  width: 40%;\n}\n\n.features .container .feature > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.features .container .feature h4 {\n  margin-top: 0.6rem;\n}\n\n.features .container .feature h4 span {\n  display: none;\n}\n\n.features .container .feature span {\n  font-size: 1rem;\n  border-radius: 2rem;\n  border: 2px solid transparent;\n  background-color: #f94b1d;\n  padding: 0.5rem 1.5rem;\n  color: #ffffff;\n  font-weight: normal;\n  margin-right: 1rem;\n}\n\n.feedback {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.feedback h2 {\n  margin-bottom: 5rem;\n}\n\n.feedback .feedbacks {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  height: 15rem;\n}\n\n.feedback .feedbacks .column {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-transition: -webkit-transform 1s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;\n  transition: -webkit-transform 1s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;\n  transition: transform 1s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;\n  transition: transform 1s cubic-bezier(0.22, 0.61, 0.36, 1) 0s, -webkit-transform 1s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;\n}\n\n.feedback .feedbacks .column .review {\n  position: relative;\n  padding: 1rem;\n  background-color: #f7f7f7;\n  margin-right: 30px;\n  min-width: 30rem;\n  padding-top: 2rem;\n  padding-bottom: 3rem;\n}\n\n.feedback .feedbacks .column .review img {\n  position: absolute;\n  width: 4rem;\n  height: 4rem;\n  top: calc(0% - 2rem);\n  left: calc(50% - 2rem);\n}\n\n.contact {\n  background-color: #f94b1d;\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.contact .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  color: #ffffff;\n}\n\n.contact .container h1 {\n  width: 30%;\n}\n\n.contact .container button {\n  background: #ffffff;\n  color: #f94b1d;\n  box-shadow: none;\n}\n\n.contact .container button:hover {\n  color: #f59880;\n}\n\n.footer {\n  background-color: #181c2d;\n  color: #ffffff;\n}\n\n.footer .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.footer .container .logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.footer .container .logo .social {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.footer .container .logo .social img:hover {\n  cursor: pointer;\n  -webkit-filter: invert(0.4) sepia(1) saturate(55) hue-rotate(351deg) brightness(0.87);\n          filter: invert(0.4) sepia(1) saturate(55) hue-rotate(351deg) brightness(0.87);\n}\n\n.footer .container .navigation {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.footer .container .navigation ul {\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n}\n\n.footer .container .navigation ul li {\n  margin-bottom: 1rem;\n}\n\n.footer .container .navigation ul li:last-child {\n  margin-bottom: 0;\n}\n\n.footer .container .navigation ul li:hover {\n  cursor: pointer;\n  color: #f94b1d;\n}\n\n.footer .container .subscribe {\n  display: -webkit-box;\n  display: flex;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n\n.footer .container .subscribe input {\n  border: 2px solid transparent;\n  border-radius: 2rem;\n  padding: 0.8rem;\n  margin-right: 0.5rem;\n}\n\n.footer .container .subscribe button {\n  border-radius: 2rem;\n  padding: 0rem 1.5rem;\n  box-shadow: none;\n}\n\nbutton {\n  cursor: pointer;\n  border: 2px solid transparent;\n  background-color: #f94b1d;\n  padding: 0.6rem 1.5rem;\n  font-weight: 600;\n  border-radius: 20px;\n  color: #ffffff;\n  box-shadow: 0px 2px 6px 1px #f59880;\n}\n\nbutton:hover {\n  background-color: #f59880;\n}\n\n@media only screen and (max-width: 820px) {\n  .wrapper {\n    background-position: calc(100% - -8rem) calc(0% - 4rem), calc(0% - 26rem) calc(67% - -18rem);\n    background-size: 100%;\n  }\n\n  nav {\n    padding: 2rem;\n    position: relative;\n  }\n  nav .container {\n    padding: 0;\n  }\n  nav .container .logo {\n    z-index: 3;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative;\n    width: 100%;\n  }\n  nav .container .logo .menu {\n    display: initial;\n    position: absolute;\n    right: 0;\n  }\n  nav .container .logo .menu div {\n    background-color: #181c2d;\n    width: 28px;\n    height: 4px;\n    margin-bottom: 6px;\n  }\n  nav .container .desktop {\n    -webkit-animation: burgerMenu 0.5s forwards;\n            animation: burgerMenu 0.5s forwards;\n    display: none;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative;\n    padding: 1rem;\n    align-self: baseline;\n    z-index: 2;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #ffffff;\n    width: -webkit-fill-available;\n    background-color: #181c2d5c;\n    height: 100vh;\n    padding-top: 5rem;\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n  @-webkit-keyframes burgerMenu {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes burgerMenu {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  nav .container .desktop ul {\n    padding: 0;\n    padding-bottom: 2rem;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    text-align: center;\n    margin-bottom: 2rem;\n    width: -webkit-fill-available;\n    background: #ffffff;\n  }\n  nav .container .desktop ul li {\n    margin-right: 0;\n    line-height: 2.5rem;\n    padding: 1rem;\n  }\n  nav .container .desktop ul li:hover {\n    color: #b9b8b8;\n  }\n  nav .container .desktop hr {\n    display: initial;\n    width: 100%;\n    background-color: #747784;\n    border: none;\n    height: 1px;\n  }\n  nav .container .desktop > div {\n    width: 100%;\n  }\n  nav .container .desktop button {\n    background-color: transparent;\n    border-color: #747784;\n    width: 100%;\n    color: white;\n  }\n  nav .container .desktop button:hover {\n    background-color: white;\n    color: #181c2d;\n  }\n\n  .intro .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n  }\n  .intro .container .text {\n    width: 50%;\n    text-align: center;\n  }\n  .intro .container .illustration img {\n    width: 100%;\n  }\n\n  .features .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .features .container .text {\n    width: 40%;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n  .features .container .feature {\n    width: 70%;\n  }\n  .features .container .feature span {\n    display: none;\n  }\n  .features .container .feature h4 {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    background-color: #fff0ec;\n    padding-right: 1.5rem;\n  }\n  .features .container .feature h4 span {\n    display: initial;\n  }\n\n  .footer .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n  }\n  .footer .container .logo {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n  }\n  .footer .container .logo .social {\n    margin-bottom: 2rem;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n  }\n  .footer .container .logo img {\n    align-self: center;\n  }\n  .footer .container .navigation {\n    margin-bottom: 2rem;\n  }\n  .footer .container .navigation ul {\n    padding: 0;\n  }\n  .footer .container .subscribe {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin-bottom: 2rem;\n    align-self: center;\n  }\n  .footer .container .subscribe input {\n    margin-right: 0;\n    margin-bottom: 1rem;\n    padding: 0.8rem 4rem;\n  }\n  .footer .container .subscribe button {\n    padding: 0.7rem 0.5rem;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .wrapper {\n    background-position: calc(100% - -4rem) calc(0% - 2rem), calc(0% - 16rem) calc(57% - -18rem);\n    background-size: 90%;\n  }\n\n  nav .container .desktop {\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  .intro .container .text {\n    width: 65%;\n    text-align: center;\n  }\n\n  .features .container .text {\n    width: 65%;\n  }\n\n  .feedback .feedbacks {\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    margin-bottom: 2rem;\n  }\n  .feedback .feedbacks .column {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    position: initial;\n    -webkit-transition: none;\n    transition: none;\n    padding: 0rem 2rem;\n  }\n  .feedback .feedbacks .column .review {\n    min-width: initial;\n    margin-right: 0;\n    -webkit-animation: scroll 2s forwards;\n            animation: scroll 2s forwards;\n  }\n  @-webkit-keyframes scroll {\n    0% {\n      opacity: 0;\n      -webkit-transform: translateX(-5%);\n              transform: translateX(-5%);\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes scroll {\n    0% {\n      opacity: 0;\n      -webkit-transform: translateX(-5%);\n              transform: translateX(-5%);\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  .feedback .select {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-bottom: 2rem;\n  }\n  .feedback .select div {\n    margin-right: 0.5rem;\n    background: transparent;\n    width: 1rem;\n    height: 1rem;\n    border: 1px solid #f94b1d;\n    border-radius: 50%;\n  }\n  .feedback .select div:last-child {\n    margin-right: 0;\n  }\n\n  .contact {\n    background-position: 100% 0%;\n  }\n  .contact .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    text-align: center;\n  }\n  .contact .container h1 {\n    width: 90%;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  nav .container .desktop {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .features .container .feature {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  .wrapper {\n    background-position: calc(100% - -3rem) calc(0% - 2rem), calc(0% - 10rem) calc(57% - -10rem);\n  }\n\n  nav .container .desktop {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .intro .container .text {\n    width: 85%;\n    text-align: center;\n  }\n\n  .features .container .text {\n    width: 85%;\n  }\n  .features .container .feature h4 {\n    width: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWxhbmRpbmcvQzpcXFVzZXJzXFx0amFuYVxcRGVza3RvcFxcYW5ndWxhci1wcmFjdGljZS9zcmNcXGFwcFxcbWFuYWdlLWxhbmRpbmdcXG1hbmFnZS1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5hZ2UtbGFuZGluZy9tYW5hZ2UtbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZGQUFBO0VBQ0EsdUNBQUE7QUNSRjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUkY7O0FEV0E7RUFDRSxtQkFBQTtBQ1JGOztBRFVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNSSjs7QURXRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNUSjs7QURXSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsU0FBQTtBQ1ROOztBRFdNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNUUjs7QURXUTtFQUNFLGNBM0NEO0FDa0NUOztBRGNJO0VBQ0UsYUFBQTtBQ1pOOztBRGtCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDZko7O0FEaUJJO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ2ZOOztBRHFCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNsQko7O0FEb0JJO0VBQ0UsVUFBQTtBQ2xCTjs7QURxQkk7RUFDRSxVQUFBO0FDbkJOOztBRHFCTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNuQlI7O0FEc0JNO0VBQ0Usa0JBQUE7QUNwQlI7O0FEcUJRO0VBQ0UsYUFBQTtBQ25CVjs7QURzQk07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQWxHQztFQW1HRCxzQkFBQTtFQUNBLGNBbEdDO0VBbUdELG1CQUFBO0VBQ0Esa0JBQUE7QUNwQlI7O0FEMEJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ3ZCRjs7QUR5QkU7RUFDRSxtQkFBQTtBQ3ZCSjs7QUQwQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUN4Qko7O0FEMEJJO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2RUFBQTtFQUFBLHFFQUFBO0VBQUEsNkRBQUE7RUFBQSx3SEFBQTtBQ3hCTjs7QUQwQk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFoSUM7RUFpSUQsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUN4QlI7O0FEMEJRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUN4QlY7O0FEK0JBO0VBQ0UseUJBcEpPO0VBcUpQLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDNUJGOztBRDhCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsY0E1Sks7QUNnSVQ7O0FEOEJJO0VBQ0UsVUFBQTtBQzVCTjs7QUQrQkk7RUFDRSxtQkFuS0c7RUFvS0gsY0F0S0c7RUF1S0gsZ0JBQUE7QUM3Qk47O0FEK0JNO0VBQ0UsY0FyS0M7QUN3SVQ7O0FEbUNBO0VBQ0UseUJBOUtPO0VBK0tQLGNBaExPO0FDZ0pUOztBRGtDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNoQ0o7O0FEa0NJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ2hDTjs7QURrQ007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDaENSOztBRG1DVTtFQUNFLGVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FDakNaOztBRHVDSTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDckNOOztBRHVDTTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDckNSOztBRHVDUTtFQUNFLG1CQUFBO0FDckNWOztBRHVDVTtFQUNFLGdCQUFBO0FDckNaOztBRHdDVTtFQUNFLGVBQUE7RUFDQSxjQTdOSDtBQ3VMVDs7QUQ0Q0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUMxQ047O0FENENNO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQzFDUjs7QUQ2Q007RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUMzQ1I7O0FEaURBO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBMVBPO0VBMlBQLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBNVBPO0VBNlBQLG1DQUFBO0FDOUNGOztBRGdERTtFQUNFLHlCQTdQSztBQytNVDs7QURrREE7RUFDRTtJQUNFLDRGQUFBO0lBRUEscUJBQUE7RUNoREY7O0VEbURBO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VDaERGO0VEa0RFO0lBQ0UsVUFBQTtFQ2hESjtFRGtESTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDaEROO0VEa0RNO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUNoRFI7RURrRFE7SUFDRSx5QkE5Ukg7SUErUkcsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ2hEVjtFRHFESTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7SUFDQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSx5QkFuVEM7SUFvVEQsNkJBQUE7SUFDQSwyQkFqVEM7SUFrVEQsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQ25ETjtFRHFETTtJQUNFO01BQ0UsVUFBQTtJQ25EUjtJRHNETTtNQUNFLFVBQUE7SUNwRFI7RUFDRjtFRDZDTTtJQUNFO01BQ0UsVUFBQTtJQ25EUjtJRHNETTtNQUNFLFVBQUE7SUNwRFI7RUFDRjtFRHVETTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtJQUNBLG1CQTVVRDtFQ3VSUDtFRHVEUTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7RUNyRFY7RUR1RFU7SUFDRSxjQWxWTDtFQzZSUDtFRDBETTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUN4RFI7RUQyRE07SUFDRSxXQUFBO0VDekRSO0VENERNO0lBQ0UsNkJBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDMURSO0VENERRO0lBQ0UsdUJBQUE7SUFDQSxjQTVXSDtFQ2tUUDs7RURrRUU7SUFDRSw0QkFBQTtJQUFBLDhCQUFBO1lBQUEsOEJBQUE7RUMvREo7RURpRUk7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUMvRE47RURtRU07SUFDRSxXQUFBO0VDakVSOztFRHdFRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUNyRUo7RUR1RUk7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ3JFTjtFRHdFSTtJQUNFLFVBQUE7RUN0RU47RUR3RU07SUFDRSxhQUFBO0VDdEVSO0VEd0VNO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLHlCQXJaRDtJQXNaQyxxQkFBQTtFQ3RFUjtFRHdFUTtJQUNFLGdCQUFBO0VDdEVWOztFRDhFRTtJQUNFLDRCQUFBO0lBQUEsOEJBQUE7WUFBQSw4QkFBQTtFQzNFSjtFRDZFSTtJQUNFLDRCQUFBO0lBQUEsOEJBQUE7WUFBQSw4QkFBQTtFQzNFTjtFRDZFTTtJQUNFLG1CQUFBO0lBQ0EsOEJBQUE7WUFBQSw2QkFBQTtFQzNFUjtFRDhFTTtJQUNFLGtCQUFBO0VDNUVSO0VEK0VJO0lBQ0UsbUJBQUE7RUM3RU47RUQ4RU07SUFDRSxVQUFBO0VDNUVSO0VEK0VJO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQzdFTjtFRCtFTTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDN0VSO0VEZ0ZNO0lBQ0Usc0JBQUE7RUM5RVI7QUFDRjs7QURvRkE7RUFDRTtJQUNFLDRGQUFBO0lBRUEsb0JBQUE7RUNuRkY7O0VEd0ZJO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ3JGTjs7RUQ0Rkk7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUN6Rk47O0VEZ0dJO0lBQ0UsVUFBQTtFQzdGTjs7RURtR0U7SUFDRSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLG1CQUFBO0VDaEdKO0VEa0dJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLGlCQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtJQUNBLGtCQUFBO0VDaEdOO0VEa0dNO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFQ2hHUjtFRG1HTTtJQUNFO01BQ0UsVUFBQTtNQUNBLGtDQUFBO2NBQUEsMEJBQUE7SUNqR1I7SURvR007TUFDRSxnQ0FBQTtjQUFBLHdCQUFBO01BQ0EsVUFBQTtJQ2xHUjtFQUNGO0VEeUZNO0lBQ0U7TUFDRSxVQUFBO01BQ0Esa0NBQUE7Y0FBQSwwQkFBQTtJQ2pHUjtJRG9HTTtNQUNFLGdDQUFBO2NBQUEsd0JBQUE7TUFDQSxVQUFBO0lDbEdSO0VBQ0Y7RUR1R0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsbUJBQUE7RUNyR0o7RUR1R0k7SUFDRSxvQkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0VDckdOO0VEdUdNO0lBQ0UsZUFBQTtFQ3JHUjs7RUQyR0E7SUFDRSw0QkFBQTtFQ3hHRjtFRDBHRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLGtCQUFBO0VDeEdKO0VEMEdJO0lBQ0UsVUFBQTtFQ3hHTjtBQUNGOztBRDZHQTtFQUdNO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQzdHTjs7RURvSEk7SUFDRSxXQUFBO0VDakhOO0FBQ0Y7O0FEc0hBO0VBQ0U7SUFDRSw0RkFBQTtFQ3BIRjs7RUR5SEk7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDdEhOOztFRDZISTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFQzFITjs7RURpSUk7SUFDRSxVQUFBO0VDOUhOO0VEa0lNO0lBQ0UsY0FBQTtFQ2hJUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLWxhbmRpbmcvbWFuYWdlLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3IxOiAjZjk0YjFkO1xyXG4kY29sb3IyOiAjZjdmN2Y3O1xyXG4kY29sb3IzOiAjZmZmZmZmO1xyXG4kY29sb3I0OiAjMTgxYzJkO1xyXG4kY29sb3I1OiAjYjliOGI4O1xyXG4kY29sb3I2OiAjZjU5ODgwO1xyXG4kY29sb3I3OiAjMTgxYzJkNWM7XHJcbiRjb2xvcjg6ICNmZmYwZWM7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIC00cmVtKSBjYWxjKDAlIC0gMTNyZW0pLCBjYWxjKDAlIC0gMzNyZW0pIGNhbGMoNTAlIC0gLTE4cmVtKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxubmF2IHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRlc2t0b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3I1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmVhdHVyZXMge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZlYXR1cmUge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG5cclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjZyZW07XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mZWVkYmFjayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgfVxyXG5cclxuICAuZmVlZGJhY2tzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG5cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSkgMHM7XHJcblxyXG4gICAgICAucmV2aWV3IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDMwcmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICB0b3A6IGNhbGMoMCUgLSAycmVtKTtcclxuICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMnJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbG9yOiAkY29sb3IzO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3IzO1xyXG4gICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3I2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I0O1xyXG4gIGNvbG9yOiAkY29sb3IzO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAuc29jaWFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDAuNCkgc2VwaWEoMSkgc2F0dXJhdGUoNTUpIGh1ZS1yb3RhdGUoMzUxZGVnKSBicmlnaHRuZXNzKDAuODcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3Vic2NyaWJlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgcGFkZGluZzogMC42cmVtIDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICRjb2xvcjM7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggMXB4ICRjb2xvcjY7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAtOHJlbSkgY2FsYygwJSAtIDRyZW0pLCBjYWxjKDAlIC0gMjZyZW0pIGNhbGMoNjclIC0gLTE4cmVtKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I0O1xyXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXNrdG9wIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1cmdlck1lbnUgMC41cyBmb3J3YXJkcztcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGJ1cmdlck1lbnUge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjM7XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc0Nzc4NDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM3NDc3ODQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3I0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmludHJvIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblxyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbGx1c3RyYXRpb24ge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mZWF0dXJlcyB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmVhdHVyZSB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zdWJzY3JpYmUge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjhyZW0gNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIC00cmVtKSBjYWxjKDAlIC0gMnJlbSksIGNhbGMoMCUgLSAxNnJlbSkgY2FsYyg1NyUgLSAtMThyZW0pO1xyXG5cclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTAlO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAuZGVza3RvcCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnRybyB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZXMge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmVlZGJhY2sge1xyXG4gICAgLmZlZWRiYWNrcyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcblxyXG4gICAgICAgIC5yZXZpZXcge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMnMgZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDAlO1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBoMXtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDo1MDBweCkge1xyXG4gIG5hdiB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgLmRlc2t0b3Age1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNHJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZXMge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIC5mZWF0dXJlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6NDAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAtM3JlbSkgY2FsYygwJSAtIDJyZW0pLCBjYWxjKDAlIC0gMTByZW0pIGNhbGMoNTclIC0gLTEwcmVtKTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgLmRlc2t0b3Age1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW50cm8ge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVzIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZlYXR1cmUge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAtNHJlbSkgY2FsYygwJSAtIDEzcmVtKSwgY2FsYygwJSAtIDMzcmVtKSBjYWxjKDUwJSAtIC0xOHJlbSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIG5vLXJlcGVhdDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5uYXYge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxubmF2IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5uYXYgLmRlc2t0b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubmF2IC5kZXNrdG9wIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwO1xufVxubmF2IC5kZXNrdG9wIHVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5uYXYgLmRlc2t0b3AgdWwgbGk6aG92ZXIge1xuICBjb2xvcjogI2I5YjhiODtcbn1cbm5hdiAuZGVza3RvcCBociB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnRybyAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmludHJvIC5jb250YWluZXIgLnRleHQge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uZmVhdHVyZXMgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mZWF0dXJlcyAuY29udGFpbmVyIC50ZXh0IHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5mZWF0dXJlcyAuY29udGFpbmVyIC5mZWF0dXJlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5mZWF0dXJlcyAuY29udGFpbmVyIC5mZWF0dXJlID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZmVhdHVyZXMgLmNvbnRhaW5lciAuZmVhdHVyZSBoNCB7XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbn1cbi5mZWF0dXJlcyAuY29udGFpbmVyIC5mZWF0dXJlIGg0IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZlYXR1cmVzIC5jb250YWluZXIgLmZlYXR1cmUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTRiMWQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5mZWVkYmFjayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbn1cbi5mZWVkYmFjayBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4uZmVlZGJhY2sgLmZlZWRiYWNrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNXJlbTtcbn1cbi5mZWVkYmFjayAuZmVlZGJhY2tzIC5jb2x1bW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSkgMHM7XG59XG4uZmVlZGJhY2sgLmZlZWRiYWNrcyAuY29sdW1uIC5yZXZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuLmZlZWRiYWNrIC5mZWVkYmFja3MgLmNvbHVtbiAucmV2aWV3IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgdG9wOiBjYWxjKDAlIC0gMnJlbSk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMnJlbSk7XG59XG5cbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NGIxZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4uY29udGFjdCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jb250YWN0IC5jb250YWluZXIgaDEge1xuICB3aWR0aDogMzAlO1xufVxuLmNvbnRhY3QgLmNvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2Y5NGIxZDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWN0IC5jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmNTk4ODA7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYzJkO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5mb290ZXIgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mb290ZXIgLmNvbnRhaW5lciAubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mb290ZXIgLmNvbnRhaW5lciAubG9nbyAuc29jaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZvb3RlciAuY29udGFpbmVyIC5sb2dvIC5zb2NpYWwgaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWx0ZXI6IGludmVydCgwLjQpIHNlcGlhKDEpIHNhdHVyYXRlKDU1KSBodWUtcm90YXRlKDM1MWRlZykgYnJpZ2h0bmVzcygwLjg3KTtcbn1cbi5mb290ZXIgLmNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZm9vdGVyIC5jb250YWluZXIgLm5hdmlnYXRpb24gdWwge1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5mb290ZXIgLmNvbnRhaW5lciAubmF2aWdhdGlvbiB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZm9vdGVyIC5jb250YWluZXIgLm5hdmlnYXRpb24gdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZm9vdGVyIC5jb250YWluZXIgLm5hdmlnYXRpb24gdWwgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZjk0YjFkO1xufVxuLmZvb3RlciAuY29udGFpbmVyIC5zdWJzY3JpYmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuLmZvb3RlciAuY29udGFpbmVyIC5zdWJzY3JpYmUgaW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcGFkZGluZzogMC44cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5mb290ZXIgLmNvbnRhaW5lciAuc3Vic2NyaWJlIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk0YjFkO1xuICBwYWRkaW5nOiAwLjZyZW0gMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggMXB4ICNmNTk4ODA7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5ODgwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAtOHJlbSkgY2FsYygwJSAtIDRyZW0pLCBjYWxjKDAlIC0gMjZyZW0pIGNhbGMoNjclIC0gLTE4cmVtKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cblxuICBuYXYge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5sb2dvIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbmF2IC5jb250YWluZXIgLmxvZ28gLm1lbnUge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5sb2dvIC5tZW51IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWMyZDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbiAgbmF2IC5jb250YWluZXIgLmRlc2t0b3Age1xuICAgIGFuaW1hdGlvbjogYnVyZ2VyTWVudSAwLjVzIGZvcndhcmRzO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWMyZDVjO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgfVxuICBAa2V5ZnJhbWVzIGJ1cmdlck1lbnUge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgbmF2IC5jb250YWluZXIgLmRlc2t0b3AgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5kZXNrdG9wIHVsIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5kZXNrdG9wIHVsIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogI2I5YjhiODtcbiAgfVxuICBuYXYgLmNvbnRhaW5lciAuZGVza3RvcCBociB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ3Nzg0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgfVxuICBuYXYgLmNvbnRhaW5lciAuZGVza3RvcCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbmF2IC5jb250YWluZXIgLmRlc2t0b3AgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICM3NDc3ODQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIG5hdiAuY29udGFpbmVyIC5kZXNrdG9wIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMxODFjMmQ7XG4gIH1cblxuICAuaW50cm8gLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIC5pbnRybyAuY29udGFpbmVyIC50ZXh0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW50cm8gLmNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZmVhdHVyZXMgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5mZWF0dXJlcyAuY29udGFpbmVyIC50ZXh0IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG4gIC5mZWF0dXJlcyAuY29udGFpbmVyIC5mZWF0dXJlIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIC5mZWF0dXJlcyAuY29udGFpbmVyIC5mZWF0dXJlIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZlYXR1cmVzIC5jb250YWluZXIgLmZlYXR1cmUgaDQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBlYztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIH1cbiAgLmZlYXR1cmVzIC5jb250YWluZXIgLmZlYXR1cmUgaDQgc3BhbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxuXG4gIC5mb290ZXIgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIC5mb290ZXIgLmNvbnRhaW5lciAubG9nbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIC5mb290ZXIgLmNvbnRhaW5lciAubG9nbyAuc29jaWFsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG4gIC5mb290ZXIgLmNvbnRhaW5lciAubG9nbyBpbWcge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuZm9vdGVyIC5jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmZvb3RlciAuY29udGFpbmVyIC5uYXZpZ2F0aW9uIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5mb290ZXIgLmNvbnRhaW5lciAuc3Vic2NyaWJlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5mb290ZXIgLmNvbnRhaW5lciAuc3Vic2NyaWJlIGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjhyZW0gNHJlbTtcbiAgfVxuICAuZm9vdGVyIC5jb250YWluZXIgLnN1YnNjcmliZSBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuN3JlbSAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIC00cmVtKSBjYWxjKDAlIC0gMnJlbSksIGNhbGMoMCUgLSAxNnJlbSkgY2FsYyg1NyUgLSAtMThyZW0pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogOTAlO1xuICB9XG5cbiAgbmF2IC5jb250YWluZXIgLmRlc2t0b3Age1xuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cmVtO1xuICB9XG5cbiAgLmludHJvIC5jb250YWluZXIgLnRleHQge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZlYXR1cmVzIC5jb250YWluZXIgLnRleHQge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cblxuICAuZmVlZGJhY2sgLmZlZWRiYWNrcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmZlZWRiYWNrIC5mZWVkYmFja3MgLmNvbHVtbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMHJlbSAycmVtO1xuICB9XG4gIC5mZWVkYmFjayAuZmVlZGJhY2tzIC5jb2x1bW4gLnJldmlldyB7XG4gICAgbWluLXdpZHRoOiBpbml0aWFsO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBhbmltYXRpb246IHNjcm9sbCAycyBmb3J3YXJkcztcbiAgfVxuICBAa2V5ZnJhbWVzIHNjcm9sbCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIC5mZWVkYmFjayAuc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmZlZWRiYWNrIC5zZWxlY3QgZGl2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5NGIxZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmZlZWRiYWNrIC5zZWxlY3QgZGl2Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDAlO1xuICB9XG4gIC5jb250YWN0IC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWN0IC5jb250YWluZXIgaDEge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgbmF2IC5jb250YWluZXIgLmRlc2t0b3Age1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xuICB9XG5cbiAgLmZlYXR1cmVzIC5jb250YWluZXIgLmZlYXR1cmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAtM3JlbSkgY2FsYygwJSAtIDJyZW0pLCBjYWxjKDAlIC0gMTByZW0pIGNhbGMoNTclIC0gLTEwcmVtKTtcbiAgfVxuXG4gIG5hdiAuY29udGFpbmVyIC5kZXNrdG9wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgfVxuXG4gIC5pbnRybyAuY29udGFpbmVyIC50ZXh0IHtcbiAgICB3aWR0aDogODUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mZWF0dXJlcyAuY29udGFpbmVyIC50ZXh0IHtcbiAgICB3aWR0aDogODUlO1xuICB9XG4gIC5mZWF0dXJlcyAuY29udGFpbmVyIC5mZWF0dXJlIGg0IHtcbiAgICB3aWR0aDogaW5pdGlhbDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/manage-landing/manage-landing.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/manage-landing/manage-landing.component.ts ***!
    \************************************************************/

  /*! exports provided: ManageLandingComponent */

  /***/
  function srcAppManageLandingManageLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageLandingComponent", function () {
      return ManageLandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/observable/timer */
    "./node_modules/rxjs/internal/observable/timer.js");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ManageLandingComponent =
    /*#__PURE__*/
    function () {
      function ManageLandingComponent() {
        _classCallCheck(this, ManageLandingComponent);

        this.showDesktop = false;
        this.selectedReview = 1;
        this.selectMode = false;
        this.width = 512;
        this.margin = 30;
        this.scrollArea = -4 * this.width;
        this.firstColumn = 0;
        this.secondColumn = 4 * (this.width + this.margin);
        this.thirdColumn = 8 * (this.width + this.margin);
        this.displayElement = ['flex', 'flex', 'flex'];
        this.scrollX = [this.firstColumn, this.secondColumn, this.thirdColumn];
        this.position = [this.firstColumn, this.secondColumn, this.thirdColumn];
        this.backgroundStyle = 'url(\'assets/manage-landing/bg-tablet-pattern.svg\')' + ',' + 'url(\'assets/manage-landing/bg-tablet-pattern.svg\')';
        this.reset = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.source = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(500, 40);
      }

      _createClass(ManageLandingComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;
          this.checkWidth();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          this.startTimer();
          this.checkWidth();
        }
      }, {
        key: "setEvent",
        value: function setEvent() {
          var _this12 = this;

          var mouseDown = false;
          this.subscriptionDesktop.unsubscribe();

          if (this.innerWidth > 600) {
            this.review.nativeElement.addEventListener('mousedown', function (e) {
              _this12.startX = e.pageX;
              mouseDown = true;
            });
            this.review.nativeElement.addEventListener('touchstart', function (e) {
              _this12.startX = e.touches[0].clientX;
              mouseDown = true;
            });
            this.review.nativeElement.addEventListener('mouseup', function (e) {
              mouseDown = false;

              for (var i = 0; i < _this12.position.length; i++) {
                _this12.position[i] = _this12.scrollX[i];
                _this12.displayElement[i] = 'flex';
              }
            });
            this.review.nativeElement.addEventListener('touchcancel', function (e) {
              mouseDown = false;

              for (var i = 0; i < _this12.position.length; i++) {
                _this12.position[i] = _this12.scrollX[i];
                _this12.displayElement[i] = 'flex';
              }
            });
            this.review.nativeElement.addEventListener('mouseleave', function (e) {
              mouseDown = false;

              for (var i = 0; i < _this12.position.length; i++) {
                _this12.position[i] = _this12.scrollX[i];
                _this12.displayElement[i] = 'flex';
              }
            });
            this.review.nativeElement.addEventListener('touchend', function (e) {
              mouseDown = false;

              for (var i = 0; i < _this12.position.length; i++) {
                _this12.position[i] = _this12.scrollX[i];
                _this12.displayElement[i] = 'flex';
              }
            });
            this.review.nativeElement.addEventListener('mousemove', function (e) {
              _this12.updatedX = e.pageX;

              if (mouseDown) {
                _this12.moveElements();
              }
            });
            this.review.nativeElement.addEventListener('touchmove', function (e) {
              _this12.updatedX = e.touches[0].clientX;

              if (mouseDown) {
                _this12.moveElements();
              }
            });
          }
        }
      }, {
        key: "moveElements",
        value: function moveElements() {
          this.scrollX[0] = this.position[0] + this.updatedX - this.startX;
          this.scrollX[1] = this.position[1] + this.updatedX - this.startX;
          this.scrollX[2] = this.position[2] + this.updatedX - this.startX;

          for (var i = 0; i < this.scrollX.length; i++) {
            if (this.scrollX[i] < this.scrollArea) {
              this.scrollX[i] = this.checkMaxX(this.scrollX) + this.secondColumn;
              this.displayElement[i] = 'none';
            }

            if (this.scrollX[i] > 3 * -this.scrollArea) {
              this.scrollX[i] = this.checkMinX(this.scrollX) - this.secondColumn;
              this.displayElement[i] = 'none';
            }
          }
        }
      }, {
        key: "checkMaxX",
        value: function checkMaxX(position) {
          var tempArr = _toConsumableArray(position);

          return Math.max.apply(Math, _toConsumableArray(tempArr));
        }
      }, {
        key: "checkMinX",
        value: function checkMinX(position) {
          var tempArr = _toConsumableArray(position);

          return Math.min.apply(Math, _toConsumableArray(tempArr));
        }
      }, {
        key: "menuClicked",
        value: function menuClicked() {
          this.showDesktop = !this.showDesktop;

          if (this.showDesktop) {
            this.displayStyle = this.showDesktop && 'flex';
          } else {
            this.displayStyle = 'none';
          }
        }
      }, {
        key: "checkWidth",
        value: function checkWidth() {
          if (this.innerWidth > 820) {
            this.displayStyle = 'flex';
          } else {
            this.showDesktop = false;
            this.displayStyle = 'none';
          }

          if (this.innerWidth < 600) {
            this.displayElement[0] = 'none';
            this.displayElement[2] = 'none';
            this.scrollArea = 0;
            this.scrollX[1] = 0;
            this.selectMode = true;

            if (this.subscriptionDesktop) {
              this.subscriptionDesktop.unsubscribe();
            }

            this.startScrolling();
          } else {
            this.selectMode = false;
            this.scrollArea = -4 * this.width;
            this.scrollX = [this.firstColumn, this.secondColumn, this.thirdColumn];
            this.position = [this.firstColumn, this.secondColumn, this.thirdColumn];

            if (this.subscriptionMobile) {
              this.subscriptionMobile.unsubscribe();
            }

            this.startTimer();
          }
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this13 = this;

          if (this.subscriptionDesktop) {
            this.subscriptionDesktop.unsubscribe();
          }

          this.source = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(500, 40);
          this.subscriptionDesktop = this.source.subscribe(function () {
            if (_this13.innerWidth > 600) {
              _this13.scrollX[0] -= 0.5;
              _this13.scrollX[1] -= 0.5;
              _this13.scrollX[2] -= 0.5;
              _this13.displayElement[0] = 'flex';
              _this13.displayElement[1] = 'flex';
              _this13.displayElement[2] = 'flex';

              for (var i = 0; i < _this13.scrollX.length; i++) {
                if (_this13.scrollX[i] < _this13.scrollArea) {
                  _this13.scrollX[i] = _this13.checkMaxX(_this13.scrollX) + _this13.secondColumn;
                  _this13.displayElement[i] = 'none';
                }

                if (_this13.scrollX[i] > 3 * -_this13.scrollArea) {
                  _this13.scrollX[i] = _this13.checkMinX(_this13.scrollX) - _this13.secondColumn;
                  _this13.displayElement[i] = 'none';
                }
              }
            }
          });
        }
      }, {
        key: "startScrolling",
        value: function startScrolling() {
          var _this14 = this;

          if (this.subscriptionMobile) {
            this.subscriptionMobile.unsubscribe();
          }

          this.subscriptionMobile = this.reset.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000, 5000);
          })).subscribe(function () {
            _this14.selectedReview++;

            if (_this14.selectedReview == 5) {
              _this14.selectedReview = 1;
            }
          });
        }
      }, {
        key: "selectReview",
        value: function selectReview(number) {
          this.selectedReview = number;
          this.reset.next();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscriptionDesktop) {
            this.subscriptionDesktop.unsubscribe();
          }

          if (this.subscriptionMobile) {
            this.subscriptionMobile.unsubscribe();
          }
        }
      }]);

      return ManageLandingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('feedbacks', {
      "static": false
    })], ManageLandingComponent.prototype, "review", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], ManageLandingComponent.prototype, "onResize", null);
    ManageLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-landing/manage-landing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-landing.component.scss */
      "./src/app/manage-landing/manage-landing.component.scss"))["default"]]
    })], ManageLandingComponent);
    /***/
  },

  /***/
  "./src/app/pricing/pricing.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pricing/pricing.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPricingPricingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-wrapper {\n  color: #494c5f;\n  min-height: 100%;\n  background-color: #f6f6fe;\n  background-position: right top, left bottom;\n  background-repeat: no-repeat, no-repeat;\n}\n\n.main-content {\n  max-width: 1200px;\n  margin: auto;\n  padding: 1.2rem;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nheader {\n  margin: auto;\n  text-align: center;\n  margin-bottom: 50px;\n}\n\nheader .toggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-weight: 700;\n  color: #b3b5c6;\n}\n\nheader .toggle .switch {\n  display: inline-block;\n  position: relative;\n  margin: 0 1.5rem;\n  width: 60px;\n  height: 34px;\n  /* Hide default HTML checkbox */\n  /* The slider */\n  /* Rounded sliders */\n}\n\nheader .toggle .switch .switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\nheader .toggle .switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: -webkit-gradient(linear, left top, right top, from(#a3a8f0), to(#696fdd));\n  background: linear-gradient(to right, #a3a8f0, #696fdd);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\nheader .toggle .switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\nheader .toggle .switch input:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\nheader .toggle .switch .slider.round {\n  border-radius: 34px;\n}\n\nheader .toggle .switch .slider.round:before {\n  border-radius: 50%;\n}\n\n.cards {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 15rem;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.cards .card {\n  width: 320px;\n  padding: 1rem 1.5rem 2rem;\n  margin-right: 0.2rem;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 9px;\n  background-color: white;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\n.cards .card h1 {\n  font-size: 4rem;\n}\n\n.cards .card h1 > span {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n\n.cards .card button {\n  border-radius: 6px;\n  width: 100%;\n  border: 0;\n  line-height: 3rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05rem;\n  background-image: -webkit-gradient(linear, left top, right top, from(#a3a8f0), to(#696fdd));\n  background-image: linear-gradient(to right, #a3a8f0 0%, #696fdd 100%);\n  color: white;\n  cursor: pointer;\n}\n\n.cards .card:hover {\n  background: -webkit-gradient(linear, left top, left bottom, from(#a3a8f0), to(#696fdd));\n  background: linear-gradient(#a3a8f0, #696fdd);\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  color: white;\n}\n\n.cards .card:hover button {\n  background: white;\n  color: #696fdd;\n}\n\n.cards .card:hover button:hover {\n  background: -webkit-gradient(linear, left top, left bottom, from(#a3a8f0), to(#696fdd));\n  background: linear-gradient(#a3a8f0, #696fdd);\n  color: white;\n}\n\n.cards .card hr {\n  background-color: #f6f6fe;\n}\n\n.cards .card hr:last-of-type {\n  margin-bottom: 2rem;\n}\n\n.cards .card:last-child {\n  margin-right: 0;\n}\n\nfooter .attribution {\n  font-size: 11px;\n  text-align: center;\n  color: #494c5f;\n  font-weight: bold;\n}\n\nfooter .attribution a {\n  color: #3e52a3;\n}\n\n@media (max-width: 1000px) {\n  .cards {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .cards .card {\n    margin-bottom: 2rem;\n    margin-right: 0;\n  }\n}\n\n@media (max-width: 375px) {\n  .main-wrapper {\n    background-position-x: 185px;\n    background-position-y: -28px;\n    background-repeat: no-repeat;\n  }\n\n  .cards .card {\n    width: -webkit-fill-available;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2luZy9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxwcmljaW5nXFxwcmljaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxjQU5rQjtFQU9sQixnQkFBQTtFQUNBLHlCQVh3QjtFQVl4QiwyQ0FBQTtFQUNBLHVDQUFBO0FDUEY7O0FEU0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUNORjs7QURTQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTkY7O0FEUUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0EvQmlCO0FDeUJyQjs7QURRSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7RUFPQSxlQUFBO0VBK0JBLG9CQUFBO0FDM0NOOztBRE1NO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDSlI7O0FEUU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUZBQUE7RUFBQSx1REFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNOUjs7QURTTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNQUjs7QURVTTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNSUjs7QURZTTtFQUNFLG1CQUFBO0FDVlI7O0FEYU07RUFDRSxrQkFBQTtBQ1hSOztBRGlCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNkRjs7QURnQkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBdEdLO0VBdUdMLDJDQUFBO0FDZEo7O0FEZ0JJO0VBQ0UsZUFBQTtBQ2ROOztBRGdCTTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ2RSOztBRGlCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJGQUFBO0VBQUEscUVBQUE7RUFDQSxZQTFIRztFQTJISCxlQUFBO0FDZk47O0FEa0JJO0VBQ0UsdUZBQUE7RUFBQSw2Q0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQWpJRztBQ2lIVDs7QURrQk07RUFDRSxpQkFwSUM7RUFxSUQsY0FuSVU7QUNtSGxCOztBRGtCUTtFQUNFLHVGQUFBO0VBQUEsNkNBQUE7RUFDQSxZQXpJRDtBQ3lIVDs7QURxQkk7RUFDRSx5QkFuSm9CO0FDZ0kxQjs7QURvQk07RUFDRSxtQkFBQTtBQ2xCUjs7QURzQkk7RUFDRSxlQUFBO0FDcEJOOztBRDBCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBaEtnQjtFQWlLaEIsaUJBQUE7QUN2Qko7O0FEeUJFO0VBQ0UsY0FBQTtBQ3ZCSjs7QUQyQkE7RUFDRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ3hCRjtFRDBCRTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQ3hCSjtBQUNGOztBRDRCQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSw0QkFBQTtJQUNBLDRCQUFBO0VDMUJGOztFRDZCRTtJQUNFLDZCQUFBO0VDMUJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdmVyeS1saWdodC1ncmF5aXNoLWJsdWU6IGhzbCgyNDAsIDc4JSwgOTglKTtcclxuJGxpZ2h0LWdyYXlpc2gtYmx1ZTogaHNsKDIzNCwgMTQlLCA3NCUpO1xyXG4kZ3JheWlzaC1ibHVlOiBoc2woMjMzLCAxMyUsIDQ5JSk7XHJcbiRkYXJrLWdyYXlpc2gtYmx1ZTogaHNsKDIzMiwgMTMlLCAzMyUpO1xyXG4kY29sb3IxOiB3aGl0ZTtcclxuJHByaW1hcnktbGluZWFyMTogaHNsKDIzNiwgNzIlLCA3OSUpO1xyXG4kcHJpbWFyeS1saW5lYXIyOiBoc2woMjM3LCA2MyUsIDY0JSk7XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICBjb2xvcjogJGRhcmstZ3JheWlzaC1ibHVlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZlcnktbGlnaHQtZ3JheWlzaC1ibHVlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcCwgbGVmdCBib3R0b207XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgbm8tcmVwZWF0O1xyXG59XHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxLjJyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgLnRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheWlzaC1ibHVlO1xyXG5cclxuICAgIC5zd2l0Y2gge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luOiAwIDEuNXJlbTtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogMzRweDtcclxuXHJcbiAgICAgIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXHJcbiAgICAgIC5zd2l0Y2ggaW5wdXQge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBUaGUgc2xpZGVyICovXHJcbiAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHByaW1hcnktbGluZWFyMSwgJHByaW1hcnktbGluZWFyMik7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAgICAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVyZW07XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtIDJyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG5cclxuICAgICAgPiBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHByaW1hcnktbGluZWFyMSAwJSwgJHByaW1hcnktbGluZWFyMiAxMDAlKTtcclxuICAgICAgY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRwcmltYXJ5LWxpbmVhcjEsICRwcmltYXJ5LWxpbmVhcjIpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICBjb2xvcjogJGNvbG9yMTtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yMTtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktbGluZWFyMjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJHByaW1hcnktbGluZWFyMSwgJHByaW1hcnktbGluZWFyMik7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBociB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJ5LWxpZ2h0LWdyYXlpc2gtYmx1ZTtcclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIC5hdHRyaWJ1dGlvbiB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JheWlzaC1ibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5hdHRyaWJ1dGlvbiBhIHtcclxuICAgIGNvbG9yOiBoc2woMjI4LCA0NSUsIDQ0JSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmNhcmRzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAubWFpbi13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTg1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yOHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLmNhcmRzIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLXdyYXBwZXIge1xuICBjb2xvcjogIzQ5NGM1ZjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgdG9wLCBsZWZ0IGJvdHRvbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgbm8tcmVwZWF0O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMS4ycmVtO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbmhlYWRlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuaGVhZGVyIC50b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNiM2I1YzY7XG59XG5oZWFkZXIgLnRvZ2dsZSAuc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAxLjVyZW07XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4gIC8qIFRoZSBzbGlkZXIgKi9cbiAgLyogUm91bmRlZCBzbGlkZXJzICovXG59XG5oZWFkZXIgLnRvZ2dsZSAuc3dpdGNoIC5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuaGVhZGVyIC50b2dnbGUgLnN3aXRjaCAuc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTNhOGYwLCAjNjk2ZmRkKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuaGVhZGVyIC50b2dnbGUgLnN3aXRjaCAuc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbmhlYWRlciAudG9nZ2xlIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cbmhlYWRlciAudG9nZ2xlIC5zd2l0Y2ggLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5oZWFkZXIgLnRvZ2dsZSAuc3dpdGNoIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVyZW07XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jYXJkcyAuY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW0gMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNhcmRzIC5jYXJkIGgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuLmNhcmRzIC5jYXJkIGgxID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jYXJkcyAuY2FyZCBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTNhOGYwIDAlLCAjNjk2ZmRkIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkcyAuY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYTNhOGYwLCAjNjk2ZmRkKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmRzIC5jYXJkOmhvdmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzY5NmZkZDtcbn1cbi5jYXJkcyAuY2FyZDpob3ZlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2EzYThmMCwgIzY5NmZkZCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkcyAuY2FyZCBociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZmU7XG59XG4uY2FyZHMgLmNhcmQgaHI6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jYXJkcyAuY2FyZDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG5mb290ZXIgLmF0dHJpYnV0aW9uIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDk0YzVmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmZvb3RlciAuYXR0cmlidXRpb24gYSB7XG4gIGNvbG9yOiAjM2U1MmEzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jYXJkcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY2FyZHMgLmNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLm1haW4td3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxODVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yOHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cblxuICAuY2FyZHMgLmNhcmQge1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pricing/pricing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pricing/pricing.component.ts ***!
    \**********************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PricingComponent =
    /*#__PURE__*/
    function () {
      function PricingComponent() {
        _classCallCheck(this, PricingComponent);

        this.innerWidth = 1200;
        this.backgroundStyle = 'url(\'assets/pricing/bg-top.svg\')' + ',' + 'url(\'assets/pricing/bg-bottom.svg\')';
        this.checkBox = false;
        this.prices = [{
          Basic: 199.99,
          Professional: 249.99,
          Master: 399.99
        }, {
          Basic: 19.99,
          Professional: 24.99,
          Master: 39.99
        }];
        this.packages = [];
        this.selectedRange = this.prices[0];
        this.packages = [{
          'title': 'Basic',
          'price': this.selectedRange.Basic,
          'storage': "500 GB",
          'users': 2,
          'data': 3
        }, {
          'title': 'Professional',
          'price': this.selectedRange.Professional,
          'storage': "1 TB",
          'users': 5,
          'data': 10
        }, {
          'title': 'Master',
          'price': this.selectedRange.Master,
          'storage': "2 TB",
          'users': 10,
          'data': 20
        }];
      }

      _createClass(PricingComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;
          this.checkWidth();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          this.checkWidth();
        }
      }, {
        key: "changePackage",
        value: function changePackage() {
          if (!this.checkBox) {
            this.selectedRange = this.prices[1];
          } else {
            this.selectedRange = this.prices[0];
          }

          this.update();
        }
      }, {
        key: "update",
        value: function update() {
          this.packages = [{
            'title': 'Basic',
            'price': this.selectedRange.Basic,
            'storage': "500 GB",
            'users': 2,
            'data': 3
          }, {
            'title': 'Professional',
            'price': this.selectedRange.Professional,
            'storage': "1 TB",
            'users': 5,
            'data': 10
          }, {
            'title': 'Master',
            'price': this.selectedRange.Master,
            'storage': "2 TB",
            'users': 10,
            'data': 20
          }];
        }
      }, {
        key: "checkWidth",
        value: function checkWidth() {
          if (this.innerWidth > 375) {
            this.backgroundStyle = 'url(\'assets/pricing/bg-top.svg\')' + ',' + 'url(\'assets/pricing/bg-bottom.svg\')';
          } else {
            this.backgroundStyle = 'url(\'assets/pricing/bg-top.svg\')';
          }
        }
      }]);

      return PricingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], PricingComponent.prototype, "onResize", null);
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pricing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pricing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pricing.component.scss */
      "./src/app/pricing/pricing.component.scss"))["default"]]
    })], PricingComponent);
    /***/
  },

  /***/
  "./src/app/rpsgame/rpsgame.component.scss":
  /*!************************************************!*\
    !*** ./src/app/rpsgame/rpsgame.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRpsgameRpsgameComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background: radial-gradient(#1f3756, #141539);\n  height: 100vh;\n  position: relative;\n}\n\n.container {\n  padding: 2rem 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.scoreboard .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-bottom: 0;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\n.scoreboard .container > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1rem;\n  border: 1px solid gray;\n  width: 45%;\n}\n\n.scoreboard .container > div > div {\n  background-color: white;\n  padding: 1rem 3rem;\n  border-radius: 5px;\n  padding-bottom: 0;\n  text-align: center;\n}\n\n.scoreboard .container > div > div h5 {\n  margin: 0;\n  font-size: 1rem;\n  text-transform: uppercase;\n  color: #1a1a9c;\n}\n\n.scoreboard .container > div > div p {\n  margin: 0;\n  font-size: 4rem;\n  color: gray;\n}\n\n.game {\n  padding: 2rem;\n  padding-top: 3rem;\n  padding-bottom: 0rem;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\n.game .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.game .container .triangle {\n  position: relative;\n}\n\n.game .container .icon {\n  position: absolute;\n  background-color: white;\n  border-radius: 50%;\n  padding: 2rem 2.5rem;\n  cursor: pointer;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.game .container .icon::before {\n  content: \"\";\n  position: absolute;\n  z-index: -2;\n  left: -50%;\n  top: -50%;\n  width: 200%;\n  height: 200%;\n  background-color: #fbb300;\n  background-repeat: no-repeat;\n  background-size: 50% 60%, 70% 50%, 50% 100%;\n  background-position: 100% 0, 100% 100%, 0 100%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fbb300), to(#fbb300)), -webkit-gradient(linear, left top, left bottom, from(#d53e33), to(#d53e33)), -webkit-gradient(linear, left top, left bottom, from(#377af5), to(#377af5));\n  background-image: linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n.game .container .icon:hover::before {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n.game .container .icon::after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 6px;\n  top: 6px;\n  width: calc(100% - 12px);\n  height: calc(100% - 12px);\n  background: white;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn);\n  }\n}\n\n.game .container .icon.rock {\n  bottom: -2rem;\n  padding-top: 2.5rem;\n  left: 4rem;\n  border: 1.5rem solid #dc2e4e;\n  box-shadow: 0 6px #94132b, inset 0 6px #c3c3c3;\n}\n\n.game .container .icon.scissors {\n  right: -3rem;\n  top: -4rem;\n  border: 1.5rem solid #ec9e0e;\n  box-shadow: 0 6px #a26e0c, inset 0 6px #c3c3c3;\n}\n\n.game .container .icon.paper {\n  left: -3rem;\n  top: -4rem;\n  border: 1.5rem solid #4865f4;\n  box-shadow: 0 6px #2741bf, inset 0 6px #c3c3c3;\n}\n\n.versus {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\nbutton {\n  position: absolute;\n  right: 2vw;\n  bottom: 1vh;\n  border: 1px solid white;\n  background-color: transparent;\n  padding: 1rem 2rem;\n  color: white;\n  border-radius: 4px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #4e80ff99;\n}\n\n@media only screen and (max-width: 800px) {\n  .scoreboard .container > div {\n    width: 80%;\n  }\n\n  footer button {\n    right: calc(50% - 3.5rem);\n  }\n\n  .game .container .icon:before {\n    -webkit-animation-play-state: running;\n            animation-play-state: running;\n  }\n  .game .container .icon:hover:before {\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .scoreboard .container > div {\n    width: 100%;\n  }\n  .scoreboard .container > div img,\n.scoreboard .container > div div {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n\n  .game {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  .scoreboard .container > div {\n    width: 100%;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  .versus {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnBzZ2FtZS9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxycHNnYW1lXFxycHNnYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ycHNnYW1lL3Jwc2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNYRjs7QURlRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNaSjs7QURjSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ1pOOztBRGNNO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1pSOztBRGNRO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNaVjs7QURlUTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2JWOztBRG9CQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ2pCRjs7QURtQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDakJKOztBRG1CSTtFQUNFLGtCQUFBO0FDakJOOztBRG9CSTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2xCTjs7QURvQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsdVBBQUE7RUFBQSx5SEFBQTtFQUVBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDbkJSOztBRHNCTTtFQUNFLHFDQUFBO1VBQUEsNkJBQUE7QUNwQlI7O0FEdUJNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyQlI7O0FEd0JNO0VBQ0U7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDdEJSO0FBQ0Y7O0FEbUJNO0VBQ0U7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDdEJSO0FBQ0Y7O0FEeUJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7QUN2QlI7O0FEMEJNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0FDeEJSOztBRDJCTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtBQ3pCUjs7QUQrQkE7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUM1QkY7O0FEK0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQzVCRjs7QUQ4QkU7RUFDRSwyQkFBQTtBQzVCSjs7QURnQ0E7RUFHTTtJQUNFLFVBQUE7RUMvQk47O0VEcUNFO0lBQ0UseUJBQUE7RUNsQ0o7O0VEeUNNO0lBQ0UscUNBQUE7WUFBQSw2QkFBQTtFQ3RDUjtFRHlDTTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUN2Q1I7QUFDRjs7QUQ2Q0E7RUFHTTtJQUNFLFdBQUE7RUM3Q047RUQrQ007O0lBRUUsNkJBQUE7WUFBQSxxQkFBQTtFQzdDUjs7RURtREE7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0VDaERGO0FBQ0Y7O0FEbURBO0VBR007SUFDRSxXQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtFQ25ETjs7RUR3REE7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNyREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jwc2dhbWUvcnBzZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0gU2Npc3NvcnMgR3JhZGllbnQ6IGhzbCgzOSwgODklLCA0OSUpIHRvIGhzbCg0MCwgODQlLCA1MyUpXHJcbi8vIC0gUGFwZXIgR3JhZGllbnQ6IGhzbCgyMzAsIDg5JSwgNjIlKSB0byBoc2woMjMwLCA4OSUsIDY1JSlcclxuLy8gLSBSb2NrIEdyYWRpZW50OiBoc2woMzQ5LCA3MSUsIDUyJSkgdG8gaHNsKDM0OSwgNzAlLCA1NiUpXHJcbi8vIC0gTGl6YXJkIEdyYWRpZW50OiBoc2woMjYxLCA3MyUsIDYwJSkgdG8gaHNsKDI2MSwgNzIlLCA2MyUpXHJcbi8vIC0gQ3lhbjogaHNsKDE4OSwgNTklLCA1MyUpIHRvIGhzbCgxODksIDU4JSwgNTclKVxyXG5cclxuJGNvbG9yMTogaHNsKDIxNCwgNDclLCAyMyUpO1xyXG4kY29sb3IyOiBoc2woMjM3LCA0OSUsIDE1JSk7XHJcbiRjb2xvcjM6IGhzbCgyMzAsIDg5JSwgNjIlKTtcclxuJGNvbG9yNDogaHNsKDM0OSwgNzElLCA1MiUpO1xyXG4kY29sb3I1OiBoc2woMzksIDg5JSwgNDklKTtcclxuXHJcbi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMik7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNjb3JlYm9hcmQge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWExYTljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5nYW1lIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnRyaWFuZ2xlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMjtcclxuICAgICAgICBsZWZ0OiAtNTAlO1xyXG4gICAgICAgIHRvcDogLTUwJTtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYjMwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIDYwJSwgNzAlIDUwJSwgNTAlIDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZiYjMwMCwgI2ZiYjMwMCksXHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoI2Q1M2UzMywgI2Q1M2UzMyksIGxpbmVhci1ncmFkaWVudCgjMzc3YWY1LCAjMzc3YWY1KTtcclxuICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTJweCk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucm9jayB7XHJcbiAgICAgICAgYm90dG9tOiAtMnJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDRyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxLjVyZW0gc29saWQgJGNvbG9yNDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAjOTQxMzJiLCBpbnNldCAwIDZweCAjYzNjM2MzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNjaXNzb3JzIHtcclxuICAgICAgICByaWdodDogLTNyZW07XHJcbiAgICAgICAgdG9wOiAtNHJlbTtcclxuICAgICAgICBib3JkZXI6IDEuNXJlbSBzb2xpZCAkY29sb3I1O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4ICNhMjZlMGMsIGluc2V0IDAgNnB4ICNjM2MzYzM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucGFwZXIge1xyXG4gICAgICAgIGxlZnQ6IC0zcmVtO1xyXG4gICAgICAgIHRvcDogLTRyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxLjVyZW0gc29saWQgJGNvbG9yMztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAjMjc0MWJmLCBpbnNldCAwIDZweCAjYzNjM2MzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udmVyc3VzIHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMnZ3O1xyXG4gIGJvdHRvbTogMXZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTgwZmY5OTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOjgwMHB4KSB7XHJcbiAgLnNjb3JlYm9hcmQge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgcmlnaHQ6IGNhbGMoNTAlIC0gMy41cmVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5nYW1lIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6NTAwcHgpIHtcclxuICAuc2NvcmVib2FyZCB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBpbWcsXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5nYW1lIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOjQwMHB4KSB7XHJcbiAgLnNjb3JlYm9hcmQge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnZlcnN1cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMWYzNzU2LCAjMTQxNTM5KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zY29yZWJvYXJkIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuLnNjb3JlYm9hcmQgLmNvbnRhaW5lciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogNDUlO1xufVxuLnNjb3JlYm9hcmQgLmNvbnRhaW5lciA+IGRpdiA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY29yZWJvYXJkIC5jb250YWluZXIgPiBkaXYgPiBkaXYgaDUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxYTFhOWM7XG59XG4uc2NvcmVib2FyZCAuY29udGFpbmVyID4gZGl2ID4gZGl2IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5nYW1lIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG4uZ2FtZSAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lIC5jb250YWluZXIgLnRyaWFuZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdhbWUgLmNvbnRhaW5lciAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMnJlbSAyLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5nYW1lIC5jb250YWluZXIgLmljb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTI7XG4gIGxlZnQ6IC01MCU7XG4gIHRvcDogLTUwJTtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYjMwMDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgNjAlLCA3MCUgNTAlLCA1MCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmYmIzMDAsICNmYmIzMDApLCBsaW5lYXItZ3JhZGllbnQoI2Q1M2UzMywgI2Q1M2UzMyksIGxpbmVhci1ncmFkaWVudCgjMzc3YWY1LCAjMzc3YWY1KTtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuLmdhbWUgLmNvbnRhaW5lciAuaWNvbjpob3Zlcjo6YmVmb3JlIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG4uZ2FtZSAuY29udGFpbmVyIC5pY29uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiA2cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMnB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xuICB9XG59XG4uZ2FtZSAuY29udGFpbmVyIC5pY29uLnJvY2sge1xuICBib3R0b206IC0ycmVtO1xuICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICBsZWZ0OiA0cmVtO1xuICBib3JkZXI6IDEuNXJlbSBzb2xpZCAjZGMyZTRlO1xuICBib3gtc2hhZG93OiAwIDZweCAjOTQxMzJiLCBpbnNldCAwIDZweCAjYzNjM2MzO1xufVxuLmdhbWUgLmNvbnRhaW5lciAuaWNvbi5zY2lzc29ycyB7XG4gIHJpZ2h0OiAtM3JlbTtcbiAgdG9wOiAtNHJlbTtcbiAgYm9yZGVyOiAxLjVyZW0gc29saWQgI2VjOWUwZTtcbiAgYm94LXNoYWRvdzogMCA2cHggI2EyNmUwYywgaW5zZXQgMCA2cHggI2MzYzNjMztcbn1cbi5nYW1lIC5jb250YWluZXIgLmljb24ucGFwZXIge1xuICBsZWZ0OiAtM3JlbTtcbiAgdG9wOiAtNHJlbTtcbiAgYm9yZGVyOiAxLjVyZW0gc29saWQgIzQ4NjVmNDtcbiAgYm94LXNoYWRvdzogMCA2cHggIzI3NDFiZiwgaW5zZXQgMCA2cHggI2MzYzNjMztcbn1cblxuLnZlcnN1cyB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJ2dztcbiAgYm90dG9tOiAxdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlODBmZjk5O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zY29yZWJvYXJkIC5jb250YWluZXIgPiBkaXYge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICBmb290ZXIgYnV0dG9uIHtcbiAgICByaWdodDogY2FsYyg1MCUgLSAzLjVyZW0pO1xuICB9XG5cbiAgLmdhbWUgLmNvbnRhaW5lciAuaWNvbjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICB9XG4gIC5nYW1lIC5jb250YWluZXIgLmljb246aG92ZXI6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5zY29yZWJvYXJkIC5jb250YWluZXIgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zY29yZWJvYXJkIC5jb250YWluZXIgPiBkaXYgaW1nLFxuLnNjb3JlYm9hcmQgLmNvbnRhaW5lciA+IGRpdiBkaXYge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuXG4gIC5nYW1lIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnNjb3JlYm9hcmQgLmNvbnRhaW5lciA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAudmVyc3VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/rpsgame/rpsgame.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/rpsgame/rpsgame.component.ts ***!
    \**********************************************/

  /*! exports provided: RpsgameComponent */

  /***/
  function srcAppRpsgameRpsgameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RpsgameComponent", function () {
      return RpsgameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RpsgameComponent =
    /*#__PURE__*/
    function () {
      function RpsgameComponent() {
        _classCallCheck(this, RpsgameComponent);

        this.score = 0;
      }

      _createClass(RpsgameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usersChoice = null;
          this.showRules = false;
        }
      }, {
        key: "updateScore",
        value: function updateScore(result) {
          switch (result) {
            case 'Win':
              this.score++;
              break;

            case 'Lose':
              this.score--;
              break;

            case 'Draw':
              break;
          }

          this.usersChoice = null;
        }
      }]);

      return RpsgameComponent;
    }();

    RpsgameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rpsgame',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rpsgame.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/rpsgame.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rpsgame.component.scss */
      "./src/app/rpsgame/rpsgame.component.scss"))["default"]]
    })], RpsgameComponent);
    /***/
  },

  /***/
  "./src/app/rpsgame/rules/rules.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/rpsgame/rules/rules.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRpsgameRulesRulesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.52);\n  z-index: 50;\n}\n\n.box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: white;\n  padding: 2rem;\n  border-radius: 5px;\n  position: fixed;\n  top: 30vh;\n  left: calc(50% - 11.5rem);\n  z-index: 100;\n}\n\n.box > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 2.5rem;\n}\n\n.box > div h3 {\n  margin: 0;\n}\n\n.box > div img {\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 400px) {\n  .box {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnBzZ2FtZS9ydWxlcy9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxycHNnYW1lXFxydWxlc1xccnVsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jwc2dhbWUvcnVsZXMvcnVsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxTQUFBO0FDQ047O0FERUk7RUFDRSxlQUFBO0FDQU47O0FETUE7RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcnBzZ2FtZS9ydWxlcy9ydWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyKTtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMHZoO1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTEuNXJlbSk7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDo0MDBweCl7XHJcbiAgLmJveHtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgwLjcpO1xyXG4gIH1cclxufVxyXG4iLCIuYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41Mik7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzB2aDtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMS41cmVtKTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJveCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLmJveCA+IGRpdiBoMyB7XG4gIG1hcmdpbjogMDtcbn1cbi5ib3ggPiBkaXYgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5ib3gge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/rpsgame/rules/rules.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/rpsgame/rules/rules.component.ts ***!
    \**************************************************/

  /*! exports provided: RulesComponent */

  /***/
  function srcAppRpsgameRulesRulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RulesComponent", function () {
      return RulesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RulesComponent =
    /*#__PURE__*/
    function () {
      function RulesComponent() {
        _classCallCheck(this, RulesComponent);

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RulesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClose",
        value: function onClose() {
          this.closed.emit();
        }
      }]);

      return RulesComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RulesComponent.prototype, "closed", void 0);
    RulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rules',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rules.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/rules/rules.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rules.component.scss */
      "./src/app/rpsgame/rules/rules.component.scss"))["default"]]
    })], RulesComponent);
    /***/
  },

  /***/
  "./src/app/rpsgame/versus/versus.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/rpsgame/versus/versus.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRpsgameVersusVersusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".versus {\n  padding: 2rem;\n  text-align: center;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.versus > h3 {\n  margin: 0;\n  font-size: 5rem;\n  color: white;\n  -webkit-animation: countdowns 1s infinite;\n          animation: countdowns 1s infinite;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n@-webkit-keyframes countdowns {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  60% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes countdowns {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  60% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.container {\n  padding: 2rem 5rem;\n  box-sizing: border-box;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  text-transform: uppercase;\n  color: white;\n}\n.container > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container > div:first-of-type {\n  margin-right: 2rem;\n}\n.container .icon {\n  background-color: white;\n  border-radius: 50%;\n  padding: 2rem 2.5rem;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  max-height: 258px;\n  z-index: 0;\n}\n.container .icon.rock {\n  padding-top: 2.5rem;\n  border: 1.5rem solid #dc2e4e;\n  box-shadow: 0 6px #94132b, inset 0 6px #c3c3c3;\n}\n.container .icon.scissors {\n  border: 1.5rem solid #ec9e0e;\n  box-shadow: 0 6px #a26e0c, inset 0 6px #c3c3c3;\n}\n.container .icon.paper {\n  border: 1.5rem solid #4865f4;\n  box-shadow: 0 6px #2741bf, inset 0 6px #c3c3c3;\n}\n.container .icon.blank {\n  padding: 5.5rem;\n  background-color: #0c1e48;\n}\n.container .icon.winner:before, .container .icon.winner:after {\n  content: \"\";\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  border: 2rem solid #8080801c;\n  z-index: -1;\n  border-radius: 50%;\n  box-sizing: border-box;\n  -webkit-animation: winner 1.5s infinite;\n          animation: winner 1.5s infinite;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n.container .icon.winner:before {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.container .icon.winner:after {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n@-webkit-keyframes winner {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0.5;\n  }\n  60% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n    opacity: 0;\n  }\n}\n@keyframes winner {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0.5;\n  }\n  60% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n    opacity: 0;\n  }\n}\n.container h3 {\n  margin: 0;\n  margin-bottom: 5rem;\n}\n.result {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  text-transform: uppercase;\n  color: white;\n  -webkit-transform: translateY(-12rem);\n          transform: translateY(-12rem);\n}\n.result h3 {\n  font-size: 2rem;\n  margin: 0;\n  margin-bottom: 2rem;\n}\n.result button {\n  border: 0;\n  padding: 1rem;\n  border-radius: 9px;\n  text-transform: uppercase;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n.result button:hover {\n  color: #de3131;\n}\n@media only screen and (max-width: 940px) {\n  .versus {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .versus > h3 {\n    margin-bottom: 0;\n  }\n\n  .container {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n  .container .icon {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n  }\n  .container > div h3 {\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .container {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n  .container .icon {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  .container > div h3 {\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin-bottom: 2rem;\n  }\n\n  .result {\n    -webkit-transform: translateY(-2rem);\n            transform: translateY(-2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnBzZ2FtZS92ZXJzdXMvQzpcXFVzZXJzXFx0amFuYVxcRGVza3RvcFxcYW5ndWxhci1wcmFjdGljZS9zcmNcXGFwcFxccnBzZ2FtZVxcdmVyc3VzXFx2ZXJzdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jwc2dhbWUvdmVyc3VzL3ZlcnN1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0xGO0FET0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ0xKO0FEUUU7RUFDRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxVQUFBO0VDTko7RURRRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxVQUFBO0VDTko7RURTRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNQSjtFRFNFO0lBQ0UsVUFBQTtFQ1BKO0FBQ0Y7QURSRTtFQUNFO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLFVBQUE7RUNOSjtFRFFFO0lBQ0UsNkJBQUE7WUFBQSxxQkFBQTtJQUNBLFVBQUE7RUNOSjtFRFNFO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtFQ1BKO0VEU0U7SUFDRSxVQUFBO0VDUEo7QUFDRjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNSRjtBRFVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1JKO0FEVUk7RUFDRSxrQkFBQTtBQ1JOO0FEWUU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDVko7QURZSTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtBQ1ZOO0FEYUk7RUFDRSw0QkFBQTtFQUNBLDhDQUFBO0FDWE47QURjSTtFQUNFLDRCQUFBO0VBQ0EsOENBQUE7QUNaTjtBRGVJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDYk47QURpQk07RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDaEJSO0FEbUJNO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ2pCUjtBRG9CTTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNsQlI7QURxQk07RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxZQUFBO0VDbkJSO0VEcUJNO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLFVBQUE7RUNuQlI7RURzQk07SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0lBQ0EsVUFBQTtFQ3BCUjtBQUNGO0FET007RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxZQUFBO0VDbkJSO0VEcUJNO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLFVBQUE7RUNuQlI7RURzQk07SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0lBQ0EsVUFBQTtFQ3BCUjtBQUNGO0FEeUJFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDdkJKO0FEMkJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUN4QkY7QUQwQkU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDeEJKO0FEMkJFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDekJKO0FEMkJJO0VBQ0UsY0FBQTtBQ3pCTjtBRDhCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDM0JGO0VENkJFO0lBQ0UsZ0JBQUE7RUMzQko7O0VEK0JBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7RUM1QkY7RUQ4QkU7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0VDNUJKO0VEZ0NJO0lBQ0UsMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0VDOUJOO0FBQ0Y7QURtQ0E7RUFFRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSw2QkFBQTtZQUFBLHFCQUFBO0VDbENGO0VEb0NFO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtFQ2xDSjtFRHNDSTtJQUNFLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLG1CQUFBO0VDcENOOztFRHlDQTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUN0Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jwc2dhbWUvdmVyc3VzL3ZlcnN1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjE6IGhzbCgyMTQsIDQ3JSwgMjMlKTtcclxuJGNvbG9yMjogaHNsKDIzNywgNDklLCAxNSUpO1xyXG4kY29sb3IzOiBoc2woMjMwLCA4OSUsIDYyJSk7XHJcbiRjb2xvcjQ6IGhzbCgzNDksIDcxJSwgNTIlKTtcclxuJGNvbG9yNTogaHNsKDM5LCA4OSUsIDQ5JSk7XHJcblxyXG4udmVyc3VzIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuXHJcbiAgPiBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbmltYXRpb246IGNvdW50ZG93bnMgMXMgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgY291bnRkb3ducyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgbWF4LWhlaWdodDogMjU4cHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG5cclxuICAgICYucm9jayB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbiAgICAgIGJvcmRlcjogMS41cmVtIHNvbGlkICRjb2xvcjQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4ICM5NDEzMmIsIGluc2V0IDAgNnB4ICNjM2MzYzM7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zY2lzc29ycyB7XHJcbiAgICAgIGJvcmRlcjogMS41cmVtIHNvbGlkICRjb2xvcjU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4ICNhMjZlMGMsIGluc2V0IDAgNnB4ICNjM2MzYzM7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wYXBlciB7XHJcbiAgICAgIGJvcmRlcjogMS41cmVtIHNvbGlkICRjb2xvcjM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4ICMyNzQxYmYsIGluc2V0IDAgNnB4ICNjM2MzYzM7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ibGFuayB7XHJcbiAgICAgIHBhZGRpbmc6IDUuNXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMWU0ODtcclxuICAgIH1cclxuXHJcbiAgICAmLndpbm5lciB7XHJcbiAgICAgICY6YmVmb3JlLFxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICAgICAgdG9wOiAtNTAlO1xyXG4gICAgICAgIGxlZnQ6IC01MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycmVtIHNvbGlkICM4MDgwODAxYztcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBhbmltYXRpb246IHdpbm5lciAxLjVzIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgICAgfVxyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHdpbm5lciB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICA2MCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnJlbSk7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZGUzMTMxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDk0MHB4KSB7XHJcbiAgLnZlcnN1cyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cclxuICAgID4gaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgaDMge1xyXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVzdWx0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XHJcbiAgfVxyXG59XHJcbiIsIi52ZXJzdXMge1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi52ZXJzdXMgPiBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGFuaW1hdGlvbjogY291bnRkb3ducyAxcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGNvdW50ZG93bnMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW0gNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLmNvbnRhaW5lciAuaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIG1heC1oZWlnaHQ6IDI1OHB4O1xuICB6LWluZGV4OiAwO1xufVxuLmNvbnRhaW5lciAuaWNvbi5yb2NrIHtcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgYm9yZGVyOiAxLjVyZW0gc29saWQgI2RjMmU0ZTtcbiAgYm94LXNoYWRvdzogMCA2cHggIzk0MTMyYiwgaW5zZXQgMCA2cHggI2MzYzNjMztcbn1cbi5jb250YWluZXIgLmljb24uc2Npc3NvcnMge1xuICBib3JkZXI6IDEuNXJlbSBzb2xpZCAjZWM5ZTBlO1xuICBib3gtc2hhZG93OiAwIDZweCAjYTI2ZTBjLCBpbnNldCAwIDZweCAjYzNjM2MzO1xufVxuLmNvbnRhaW5lciAuaWNvbi5wYXBlciB7XG4gIGJvcmRlcjogMS41cmVtIHNvbGlkICM0ODY1ZjQ7XG4gIGJveC1zaGFkb3c6IDAgNnB4ICMyNzQxYmYsIGluc2V0IDAgNnB4ICNjM2MzYzM7XG59XG4uY29udGFpbmVyIC5pY29uLmJsYW5rIHtcbiAgcGFkZGluZzogNS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxZTQ4O1xufVxuLmNvbnRhaW5lciAuaWNvbi53aW5uZXI6YmVmb3JlLCAuY29udGFpbmVyIC5pY29uLndpbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgdG9wOiAtNTAlO1xuICBsZWZ0OiAtNTAlO1xuICBib3JkZXI6IDJyZW0gc29saWQgIzgwODA4MDFjO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IHdpbm5lciAxLjVzIGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbi5jb250YWluZXIgLmljb24ud2lubmVyOmJlZm9yZSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG4uY29udGFpbmVyIC5pY29uLndpbm5lcjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cbkBrZXlmcmFtZXMgd2lubmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5jb250YWluZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbi5yZXN1bHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJyZW0pO1xufVxuLnJlc3VsdCBoMyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLnJlc3VsdCBidXR0b24ge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlc3VsdCBidXR0b246aG92ZXIge1xuICBjb2xvcjogI2RlMzEzMTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xuICAudmVyc3VzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICAudmVyc3VzID4gaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cbiAgLmNvbnRhaW5lciAuaWNvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB9XG4gIC5jb250YWluZXIgPiBkaXYgaDMge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cbiAgLmNvbnRhaW5lciAuaWNvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAuY29udGFpbmVyID4gZGl2IGgzIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5yZXN1bHQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/rpsgame/versus/versus.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/rpsgame/versus/versus.component.ts ***!
    \****************************************************/

  /*! exports provided: VersusComponent */

  /***/
  function srcAppRpsgameVersusVersusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VersusComponent", function () {
      return VersusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var VersusComponent =
    /*#__PURE__*/
    function () {
      function VersusComponent() {
        _classCallCheck(this, VersusComponent);

        this.restart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.time = 3;
      }

      _createClass(VersusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 1000);
          this.subscription = source.subscribe(function () {
            _this15.time--;

            if (_this15.time == 0) {
              _this15.subscription.unsubscribe();

              _this15.timerColorStyle = 'transparent';
              _this15.timerAnimationStyle = 'paused';

              _this15.setHousePicked();

              _this15.getResult();
            }
          });
        }
      }, {
        key: "setHousePicked",
        value: function setHousePicked() {
          var pick = Math.floor(Math.random() * 3);

          switch (pick) {
            case 0:
              this.housePicked = 'rock';
              break;

            case 1:
              this.housePicked = 'paper';
              break;

            case 2:
              this.housePicked = 'scissors';
              break;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "getResult",
        value: function getResult() {
          if (this.userPicked === this.housePicked) {
            this.result = 'Draw';
            this.winner = null;
            return;
          }

          if (this.userPicked === 'rock') {
            if (this.housePicked === 'scissors') {
              this.result = 'Win';
              this.winner = 'player';
            } else {
              this.result = 'Lose';
              this.winner = 'house';
            }
          }

          if (this.userPicked === 'paper') {
            if (this.housePicked === 'rock') {
              this.result = 'Win';
              this.winner = 'player';
            } else {
              this.result = 'Lose';
              this.winner = 'house';
            }
          }

          if (this.userPicked === 'scissors') {
            if (this.housePicked === 'paper') {
              this.result = 'Win';
              this.winner = 'player';
            } else {
              this.result = 'Lose';
              this.winner = 'house';
            }
          }
        }
      }, {
        key: "restartGame",
        value: function restartGame() {
          this.restart.emit(this.result);
        }
      }]);

      return VersusComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VersusComponent.prototype, "userPicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], VersusComponent.prototype, "restart", void 0);
    VersusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-versus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./versus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/rpsgame/versus/versus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./versus.component.scss */
      "./src/app/rpsgame/versus/versus.component.scss"))["default"]]
    })], VersusComponent);
    /***/
  },

  /***/
  "./src/app/shared/truncate.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/truncate.pipe.ts ***!
    \*****************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppSharedTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TruncatePipe =
    /*#__PURE__*/
    function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(value) {
          if (value.length > 60) {
            return value.slice(0, 60) + '...';
          }

          return value;
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'truncate'
    })], TruncatePipe);
    /***/
  },

  /***/
  "./src/app/sign/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/sign/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSignAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_user_authenticate_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/user-authenticate.model */
    "./src/app/sign/shared/user-authenticate.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.APIKey = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase.apiKey;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
      }

      _createClass(AuthService, [{
        key: "signup",
        value: function signup(email, password) {
          var _this16 = this;

          return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(this.APIKey), {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this16.handeAuthentication(user.email, user.localId, user.idToken, +user.expiresIn);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "signin",
        value: function signin(email, password) {
          var _this17 = this;

          return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(this.APIKey), {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this17.handeAuthentication(user.email, user.localId, user.idToken, +user.expiresIn);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getSensitiveData",
        value: function getSensitiveData(token) {
          return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=".concat(this.APIKey), {
            idToken: token
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (payload) {
            return payload['users'][0];
          }));
        }
      }, {
        key: "emailVerification",
        value: function emailVerification(token) {
          return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=".concat(this.APIKey), {
            requestType: "VERIFY_EMAIL",
            idToken: token
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "changeEmail",
        value: function changeEmail(token, email) {
          return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:update?key=".concat(this.APIKey), {
            idToken: token,
            email: email,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(response) {
          var errorMessage = 'An unknown error occured!';

          if (!response.error || !response.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
          }

          switch (response.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email already exists';
              break;

            case 'EMAIL_NOT_FOUND':
              errorMessage = 'This email does not exist';
              break;

            case 'INVALID_PASSWORD':
              errorMessage = 'Invalid password entered';
              break;

            case 'MISSING_PASSWORD':
              errorMessage = 'Missing password';
              break;

            case 'INVALID_EMAIL':
              errorMessage = 'The email address is badly formatted';
              break;

            case 'INVALID_ID_TOKEN':
              errorMessage = "The user's credential is no longer valid. The user must sign in again.";
              break;

            case 'USER_NOT_FOUND':
              errorMessage = "There is no user record corresponding to this identifier. The user may have been deleted.";
              break;

            case 'TOKEN_EXPIRED':
              errorMessage = "The user's credential is no longer valid. The user must sign in again.";
              break;

            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              errorMessage = "Too many attempts, try later.";
              break;

            case 'USER_DISABLED':
              errorMessage = 'The user account has been disabled by an administrator.';
              break;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }, {
        key: "handeAuthentication",
        value: function handeAuthentication(email, userId, token, expiresIn) {
          var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
          var user = new _shared_user_authenticate_model__WEBPACK_IMPORTED_MODULE_5__["UserAuthenticate"](email, userId, token, expirationDate);
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
          this.autoLogOut(expiresIn * 1000);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.user.next(null);
          this.router.navigate(['/sign']);
          localStorage.removeItem('userData');

          if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
          }

          this.tokenExpirationTimer = null;
        }
      }, {
        key: "autoLogOut",
        value: function autoLogOut(expirationDuration) {
          var _this18 = this;

          this.tokenExpirationTimer = setTimeout(function () {
            _this18.logout();
          }, expirationDuration);
        }
      }, {
        key: "autoLogIn",
        value: function autoLogIn() {
          var userData = JSON.parse(localStorage.getItem('userData'));

          if (!userData) {
            return;
          }

          var loadedUser = new _shared_user_authenticate_model__WEBPACK_IMPORTED_MODULE_5__["UserAuthenticate"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

          if (loadedUser.token) {
            this.user.next(loadedUser);
          }

          var expirationDate = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
          this.autoLogOut(expirationDate);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/sign/confirm-equal-validator.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/sign/confirm-equal-validator.directive.ts ***!
    \***********************************************************/

  /*! exports provided: ConfrimEqualValidatorDirective */

  /***/
  function srcAppSignConfirmEqualValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfrimEqualValidatorDirective", function () {
      return ConfrimEqualValidatorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfrimEqualValidatorDirective_1;

    var ConfrimEqualValidatorDirective = ConfrimEqualValidatorDirective_1 =
    /*#__PURE__*/
    function () {
      function ConfrimEqualValidatorDirective() {
        _classCallCheck(this, ConfrimEqualValidatorDirective);
      }

      _createClass(ConfrimEqualValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          var emailInput = control.get('emailInput');
          var confirmEmailInput = control.get('confirmEmailInput');
          var passwordInput = control.get('passwordInput');
          var confirmPasswordInput = control.get('confirmPasswordInput');

          if (emailInput && confirmEmailInput && emailInput.value !== confirmEmailInput.value) {
            return {
              'EqualValidation': true
            };
          } else if (passwordInput && confirmPasswordInput && passwordInput.value !== confirmPasswordInput.value) {
            return {
              'EqualValidation': true
            };
          }

          return null;
        }
      }]);

      return ConfrimEqualValidatorDirective;
    }();

    ConfrimEqualValidatorDirective = ConfrimEqualValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
      selector: '[appConfrimEqualValidator]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: ConfrimEqualValidatorDirective_1,
        multi: true
      }]
    })], ConfrimEqualValidatorDirective);
    /***/
  },

  /***/
  "./src/app/sign/data.storage.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign/data.storage.service.ts ***!
    \**********************************************/

  /*! exports provided: DataStorageService */

  /***/
  function srcAppSignDataStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStorageService", function () {
      return DataStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DataStorageService =
    /*#__PURE__*/
    function () {
      function DataStorageService(http) {
        _classCallCheck(this, DataStorageService);

        this.http = http;
      }

      _createClass(DataStorageService, [{
        key: "storeUser",
        value: function storeUser(userData, id, token) {
          this.http.post("https://first-project-efdd7.firebaseio.com/users.json?auth=".concat(token), _defineProperty({}, id, userData)).subscribe();
        }
      }, {
        key: "fetchUser",
        value: function fetchUser(user) {
          return this.http.get("https://first-project-efdd7.firebaseio.com/users.json?auth=".concat(user.token)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
            var key = Object.keys(users).filter(function (key) {
              return !!users[key][user.id];
            });
            return _defineProperty({}, key[0], users[key[0]]);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(userData, dbId, id, token) {
          this.http.put("https://first-project-efdd7.firebaseio.com/users/".concat(dbId, ".json?auth=").concat(token), _defineProperty({}, id, userData)).subscribe(function () {
            window.location.reload();
          });
        }
      }]);

      return DataStorageService;
    }();

    DataStorageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataStorageService);
    /***/
  },

  /***/
  "./src/app/sign/date-generate.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/sign/date-generate.component.ts ***!
    \*************************************************/

  /*! exports provided: DateGenerateComponent */

  /***/
  function srcAppSignDateGenerateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateGenerateComponent", function () {
      return DateGenerateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DateGenerateComponent = function DateGenerateComponent() {
      _classCallCheck(this, DateGenerateComponent);

      this.days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
      this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
      this.years = [];
      var currentYear = new Date().getFullYear();
      var startYear = currentYear - 120;

      for (var i = currentYear; i >= startYear; i--) {
        this.years.push(i);
      }
    };
    /***/

  },

  /***/
  "./src/app/sign/filter.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/sign/filter.pipe.ts ***!
    \*************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppSignFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FilterPipe =
    /*#__PURE__*/
    function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, searchText) {
          if (!items) {
            return [];
          }

          if (!searchText) {
            return items;
          }

          searchText = (searchText + '').toLowerCase();
          return items.filter(function (it) {
            return (it + '').toLowerCase().includes(searchText);
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./src/app/sign/header.component.scss":
  /*!********************************************!*\
    !*** ./src/app/sign/header.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  min-height: 100vh;\n  background-color: #ff7a7a;\n  overflow: hidden;\n  font-family: \"Rubik\", sans-serif;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container {\n  padding: 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n}\n\n.container.authenticated {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n}\n\n.container .text {\n  margin-right: 1rem;\n}\n\n.container .text p {\n  width: 80%;\n}\n\n.form {\n  padding: 3rem;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  background: white;\n  color: black;\n}\n\n.form.login {\n  padding: 2rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.form.login .form-group {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.form .error {\n  background: #f5c6cb;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  color: #721c24;\n  margin-bottom: 1rem;\n}\n\n.form .success {\n  background: #d4edda;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  color: #155724;\n  margin-bottom: 1rem;\n}\n\n.form .form-group {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 2rem;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  position: relative;\n}\n\n.form .form-group label {\n  -webkit-box-flex: 0.35;\n          flex-grow: 0.35;\n  max-width: 10rem;\n  min-width: 10rem;\n}\n\n.form .form-group label.invalid {\n  color: #ff7a7a;\n}\n\n.form .form-group label.valid {\n  color: #38cc8c;\n}\n\n.form .form-group.password {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\n\n.form .form-group .verification {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 1rem;\n}\n\n.form .form-group .verification button {\n  width: initial;\n}\n\n.form .form-group.buttons {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.form .form-group.buttons.authenticated {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.form .form-group.buttons.authenticated button:first-child {\n  margin-right: 1rem;\n}\n\n.form .form-group.buttons button {\n  width: initial;\n}\n\n.form .form-group > div {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-basis: 0%;\n  text-align: start;\n}\n\n.form .form-group > div textarea {\n  border: 1px solid #81caaa;\n}\n\n.form .form-group > div input,\n.form .form-group > div textarea {\n  width: -webkit-fill-available;\n}\n\n.form .form-group > div input.day,\n.form .form-group > div textarea.day {\n  width: 3rem;\n}\n\n.form .form-group > div input.month,\n.form .form-group > div textarea.month {\n  width: 6rem;\n}\n\n.form .form-group > div input.year,\n.form .form-group > div textarea.year {\n  width: 6rem;\n}\n\n.form .form-group i {\n  position: absolute;\n  right: 2%;\n  pointer-events: none;\n}\n\n.form .form-group .birthday {\n  display: -webkit-box;\n  display: flex;\n  flex-basis: 0%;\n  -webkit-box-flex: calc(1);\n          flex-grow: calc(1);\n}\n\n.form .form-group .birthday > div {\n  margin-right: 2rem;\n}\n\n.form .form-group .birthday > div:last-child {\n  margin-right: 0;\n}\n\n.form .form-group .birthday .invalid,\n.form .form-group label .invalid {\n  color: #ff7a7a;\n}\n\n.form .form-group .birthday .invalid .form-control,\n.form .form-group label .invalid .form-control {\n  border-color: #ff7a7a;\n  color: #ff7a7a;\n}\n\n.form .form-group .birthday .invalid input:-webkit-autofill,\n.form .form-group label .invalid input:-webkit-autofill {\n  -webkit-text-fill-color: #ff7a7a !important;\n}\n\n.form .form-group .birthday .valid,\n.form .form-group label .valid {\n  color: #38cc8c;\n}\n\n.form .form-group .birthday .valid .form-control,\n.form .form-group label .valid .form-control {\n  border-color: #38cc8c;\n  color: #38cc8c;\n}\n\n.form .form-group .birthday .valid input:-webkit-autofill,\n.form .form-group label .valid input:-webkit-autofill {\n  background-color: transparent !important;\n  -webkit-text-fill-color: #38cc8c !important;\n}\n\n.form .form-group .filter {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.form .form-group .filter div,\n.form .form-group .filter ul {\n  background: white;\n  border-radius: 5px;\n}\n\n.form .form-group .filter i {\n  position: absolute;\n  right: 10%;\n  align-self: center;\n}\n\n.form .form-group .filter .country i {\n  right: 3%;\n}\n\n.form .form-group .filter div {\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n}\n\n.form .form-group .filter input {\n  display: inline-block;\n  margin: 0;\n  cursor: pointer;\n}\n\n.form .form-group .filter ul {\n  text-align: center;\n  position: absolute;\n  max-height: 6.5rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 5;\n  padding: 0;\n  width: -webkit-fill-available;\n  list-style: none;\n  display: block;\n  -webkit-animation: dropdown 0.8s forwards;\n          animation: dropdown 0.8s forwards;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n\n.form .form-group .filter ul.country {\n  max-height: 11rem;\n}\n\n.form .form-group .filter ul li {\n  margin-bottom: 0.1rem;\n  cursor: pointer;\n}\n\n.form .form-group .filter ul li:hover, .form .form-group .filter ul li.active {\n  background-color: #38cc8c;\n}\n\n.form .form-group .filter ul ::-webkit-scrollbar {\n  width: 10px;\n}\n\n.form .form-group .filter ul ::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.form .form-group .filter ul ::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n.form .form-group .filter ul ::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n@-webkit-keyframes dropdown {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes dropdown {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.form .form-group .filter .validation {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.form .form-group .form-control {\n  padding: 0.5rem;\n  border-radius: 7.5px;\n  border: 1px solid gray;\n}\n\n.form .form-group.invalid {\n  color: #ff7a7a;\n}\n\n.form .form-group.invalid .form-control {\n  border-color: #ff7a7a;\n  color: #ff7a7a;\n}\n\n.form .form-group.invalid input:-webkit-autofill {\n  -webkit-text-fill-color: #ff7a7a !important;\n}\n\n.form .form-group.valid {\n  color: #38cc8c;\n}\n\n.form .form-group.valid .form-control {\n  border-color: #38cc8c;\n  color: #38cc8c;\n}\n\n.form .form-group.valid input:-webkit-autofill {\n  background-color: transparent !important;\n  -webkit-text-fill-color: #38cc8c !important;\n}\n\n.form button {\n  width: 100%;\n  border: 1px solid transparent;\n  cursor: pointer;\n  background: #38cc8c;\n  color: white;\n  padding: 1rem;\n  border-radius: 12px;\n}\n\n.form button:disabled {\n  background: #81caaa;\n}\n\n.form-wrapper {\n  width: 100%;\n}\n\n.steps {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.steps div {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-basis: 0;\n  text-align: center;\n  padding: 1.5rem 0rem;\n  background-color: #81caaa;\n}\n\n.steps div:first-child {\n  border-top-left-radius: 1rem;\n}\n\n.steps div:last-child {\n  border-top-right-radius: 1rem;\n}\n\n.steps div.active {\n  background-color: #38cc8c;\n}\n\n.steps div.authenticated {\n  cursor: pointer;\n}\n\napp-header {\n  align-self: flex-end;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n  top: 50%;\n  left: calc(50% - 10em / 2);\n  position: fixed;\n}\n\n.loader {\n  font-size: 10px;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-right: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-bottom: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-left: 1.1em solid #38cc8c;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@media only screen and (max-width: 1300px) {\n  .container .text {\n    flex-shrink: 2;\n  }\n\n  .form .form-group .filter {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .form .form-group .birthday {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-flex: 0;\n            flex-grow: 0;\n  }\n  .form .form-group .birthday > div {\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  .form .form-group .birthday > div:last-child {\n    margin-bottom: 0;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin: 0;\n  }\n  .container .text {\n    text-align: center;\n    margin-right: 0;\n    margin-bottom: 2rem;\n  }\n  .container .text p {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 490px) {\n  .container.authenticated {\n    text-align: initial;\n  }\n\n  .form .form-group {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: initial;\n            align-items: initial;\n  }\n  .form .form-group label {\n    margin-bottom: 1rem;\n  }\n  .form .form-group.buttons.authenticated button:first-child {\n    margin-right: 0;\n  }\n  .form button:first-child {\n    margin-bottom: 1rem;\n  }\n}\n\n.user {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100px;\n  position: relative;\n}\n\n.user img {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\n.user .menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.user .menu div {\n  background-color: #38cc8c;\n  width: 28px;\n  height: 4px;\n  margin-bottom: 6px;\n}\n\n.user button {\n  position: absolute;\n  bottom: -35%;\n  -webkit-animation: burgerMenu 0.5s forwards;\n          animation: burgerMenu 0.5s forwards;\n  width: 100%;\n  border: 1px solid transparent;\n  cursor: pointer;\n  background: #38cc8c;\n  color: white;\n  padding: 1rem;\n  border-radius: 12px;\n}\n\n.user button:disabled {\n  background: #81caaa;\n}\n\n@-webkit-keyframes burgerMenu {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes burgerMenu {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxzaWduXFxzaWduLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbi9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxzaWduXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxpQkFBQTtFQUNBLHlCQVBPO0VBUVAsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURNRTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0U7RUFDRSxrQkFBQTtBQ0xKOztBRE9JO0VBQ0UsVUFBQTtBQ0xOOztBRFVBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURTRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDUEo7O0FEU0k7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNQTjs7QURXRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVEo7O0FEWUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1ZKOztBRGFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURhSTtFQUNFLHNCQUFBO1VBQUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYTjs7QURhTTtFQUNFLGNBbkZDO0FDd0VUOztBRGNNO0VBQ0UsY0F0RkM7QUMwRVQ7O0FEZ0JJO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDZE47O0FEaUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtBQ2ZOOztBRGlCTTtFQUNFLGNBQUE7QUNmUjs7QURtQkk7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0FDakJOOztBRG1CTTtFQUNFLHFCQUFBO1VBQUEseUJBQUE7QUNqQlI7O0FEb0JVO0VBQ0Usa0JBQUE7QUNsQlo7O0FEdUJNO0VBQ0UsY0FBQTtBQ3JCUjs7QUR5Qkk7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUN2Qk47O0FEeUJNO0VBQ0UseUJBQUE7QUN2QlI7O0FEMEJNOztFQUVFLDZCQUFBO0FDeEJSOztBRDBCUTs7RUFDRSxXQUFBO0FDdkJWOztBRDBCUTs7RUFDRSxXQUFBO0FDdkJWOztBRDBCUTs7RUFDRSxXQUFBO0FDdkJWOztBRDRCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FDMUJOOztBRDZCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLGtCQUFBO0FDM0JOOztBRDZCTTtFQUNFLGtCQUFBO0FDM0JSOztBRDZCUTtFQUNFLGVBQUE7QUMzQlY7O0FEa0NNOztFQUNFLGNBOUtDO0FDK0lUOztBRGlDUTs7RUFDRSxxQkFqTEQ7RUFrTEMsY0FsTEQ7QUNvSlQ7O0FEaUNROztFQUNFLDJDQUFBO0FDOUJWOztBRGtDTTs7RUFDRSxjQTFMQztBQzJKVDs7QURpQ1E7O0VBQ0UscUJBN0xEO0VBOExDLGNBOUxEO0FDZ0tUOztBRGlDUTs7RUFDRSx3Q0FBQTtFQUNBLDJDQUFBO0FDOUJWOztBRG1DSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDakNOOztBRG1DTTs7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0FDakNSOztBRG9DTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDbENSOztBRHNDUTtFQUNFLFNBQUE7QUNwQ1Y7O0FEd0NNO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ3RDUjs7QUR5Q007RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDdkNSOztBRDBDTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQW1CQSxVQUFBO0VBS0EsV0FBQTtFQUtBLG9CQUFBO0FDbEVSOztBRHVDUTtFQUNFLGlCQUFBO0FDckNWOztBRHdDUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ3RDVjs7QUR1Q1U7RUFFRSx5QkEvUEg7QUN5TlQ7O0FEMENRO0VBQ0UsV0FBQTtBQ3hDVjs7QUQ0Q1E7RUFDRSxtQkFBQTtBQzFDVjs7QUQ4Q1E7RUFDRSxnQkFBQTtBQzVDVjs7QURnRFE7RUFDRSxnQkFBQTtBQzlDVjs7QURrRE07RUFDRTtJQUNFLFVBQUE7RUNoRFI7RURtRE07SUFDRSxVQUFBO0VDakRSO0FBQ0Y7O0FEMENNO0VBQ0U7SUFDRSxVQUFBO0VDaERSO0VEbURNO0lBQ0UsVUFBQTtFQ2pEUjtBQUNGOztBRG9ETTtFQUNFLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ2xEUjs7QURzREk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ3BETjs7QUR1REk7RUFDRSxjQTlTRztBQ3lQVDs7QURvRU07RUFDRSxxQkE5VEM7RUErVEQsY0EvVEM7QUM2UFQ7O0FEcUVNO0VBQ0UsMkNBQUE7QUNuRVI7O0FEdUVJO0VBQ0UsY0F2VUc7QUNrUVQ7O0FEdUVNO0VBQ0UscUJBMVVDO0VBMlVELGNBM1VDO0FDc1FUOztBRHdFTTtFQUNFLHdDQUFBO0VBQ0EsMkNBQUE7QUN0RVI7O0FEMkVFO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQXpWSztFQTBWTCxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDekVKOztBRDJFSTtFQUNFLG1CQTlWRztBQ3FSVDs7QUQ2RUU7RUFDRSxXQUFBO0FDM0VKOztBRCtFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUM1RUY7O0FEOEVFO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFoWEs7QUNvU1Q7O0FEOEVJO0VBQ0UsNEJBQUE7QUM1RU47O0FEOEVJO0VBQ0UsNkJBQUE7QUM1RU47O0FEK0VJO0VBQ0UseUJBM1hHO0FDOFNUOztBRGdGSTtFQUNFLGVBQUE7QUM5RU47O0FEbUZBO0VBQ0Usb0JBQUE7QUNoRkY7O0FEbUZBOzs7O0VBSUUscURBQUE7QUNoRkY7O0FEbUZBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDaEZGOztBRGtGQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx3QkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7QUMvRUY7O0FEaUZBO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLHVCQUFBO0VDOUVGO0VEZ0ZBO0lBQ0UsaUNBQUE7SUFDQSx5QkFBQTtFQzlFRjtBQUNGOztBRGdGQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSx1QkFBQTtFQzlFRjtFRGdGQTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUM5RUY7QUFDRjs7QURpRkE7RUFFSTtJQUNFLGNBQUE7RUNoRko7O0VEcUZJO0lBQ0UsMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0VDbEZOO0VEcUZJO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsbUJBQUE7WUFBQSxZQUFBO0VDbkZOO0VEcUZNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDbkZSO0VEcUZRO0lBQ0UsZ0JBQUE7RUNuRlY7QUFDRjs7QUQwRkE7RUFDRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFNBQUE7RUN4RkY7RUQwRkU7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQ3hGSjtFRDBGSTtJQUNFLFdBQUE7RUN4Rk47QUFDRjs7QUQ2RkE7RUFFSTtJQUNFLG1CQUFBO0VDNUZKOztFRGdHRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLDBCQUFBO1lBQUEsb0JBQUE7RUM3Rko7RUQrRkk7SUFDRSxtQkFBQTtFQzdGTjtFRG1HVTtJQUNFLGVBQUE7RUNqR1o7RUR5R0k7SUFDRSxtQkFBQTtFQ3ZHTjtBQUNGOztBQzdaQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRCtaRjs7QUM3WkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUQrWko7O0FDNVpFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRDhaSjs7QUM1Wkk7RUFDRSx5QkZsQkc7RUVtQkgsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDhaTjs7QUN6WkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRmpDSztFRWtDTCxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEMlpKOztBQ3paSTtFQUNFLG1CRnRDRztBQ2ljVDs7QUN4WkU7RUFDRTtJQUNFLFVBQUE7RUQwWko7RUN2WkU7SUFDRSxVQUFBO0VEeVpKO0FBQ0Y7O0FDaGFFO0VBQ0U7SUFDRSxVQUFBO0VEMFpKO0VDdlpFO0lBQ0UsVUFBQTtFRHlaSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2lnbi9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3IxOiAjZmY3YTdhO1xyXG4kY29sb3IyOiAjMzhjYzhjO1xyXG4kY29sb3IzOiAjODFjYWFhO1xyXG4kY29sb3I0OiAjY2EzNjM2O1xyXG5cclxuLndyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYuYXV0aGVudGljYXRlZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxuICAgIHAge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICYubG9naW4ge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2Y1YzZjYjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAuc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmbGV4LWdyb3c6IDAuMzU7XHJcbiAgICAgIG1heC13aWR0aDogMTByZW07XHJcbiAgICAgIG1pbi13aWR0aDogMTByZW07XHJcblxyXG4gICAgICAmLmludmFsaWQge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnZhbGlkIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucGFzc3dvcmQge1xyXG4gICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcmlmaWNhdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5idXR0b25zIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgJi5hdXRoZW50aWNhdGVkIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZmxleC1iYXNpczogMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblxyXG4gICAgICAgICYuZGF5IHtcclxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5tb250aCB7XHJcbiAgICAgICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYueWVhciB7XHJcbiAgICAgICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMiU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5iaXJ0aGRheSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDAlO1xyXG4gICAgICBmbGV4LWdyb3c6IGNhbGMoMSk7XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iaXJ0aGRheSxcclxuICAgIGxhYmVsIHtcclxuICAgICAgLmludmFsaWQge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG5cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJGNvbG9yMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnZhbGlkIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMjtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkY29sb3IyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgZGl2LFxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb3VudHJ5IHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNi41cmVtO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZHJvcGRvd24gMC44cyBmb3J3YXJkcztcclxuXHJcbiAgICAgICAgJi5jb3VudHJ5IHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDExcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBUcmFjayAqL1xyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEhhbmRsZSAqL1xyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgZHJvcGRvd24ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmFsaWRhdGlvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgfVxyXG5cclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG5cclxuICAgICAgLy8gJjpiZWZvcmUge1xyXG4gICAgICAvLyAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zaWduL2ljb24tZXJyb3Iuc3ZnXCIpO1xyXG4gICAgICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAvLyAgIHdpZHRoOiAxLjNyZW07XHJcbiAgICAgIC8vICAgaGVpZ2h0OiAxLjNyZW07XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvLyAgIHJpZ2h0OiAyJTtcclxuICAgICAgLy8gICB0b3A6IDExJTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJGNvbG9yMSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi52YWxpZCB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3IyO1xyXG5cclxuICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkY29sb3IyICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3IzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnN0ZXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgZGl2IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjM7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XHJcbiAgICB9XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hdXRoZW50aWNhdGVkIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXBwLWhlYWRlciB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggd2hpdGUgaW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlcixcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMGVtO1xyXG4gIGhlaWdodDogMTBlbTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwZW0gLyAyKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMjM5LCAxNzEsIDE3MSwgMC4yKTtcclxuICBib3JkZXItcmlnaHQ6IDEuMWVtIHNvbGlkIHJnYmEoMjM5LCAxNzEsIDE3MSwgMC4yKTtcclxuICBib3JkZXItYm90dG9tOiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XHJcbiAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICRjb2xvcjI7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkOCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLnRleHQge1xyXG4gICAgICBmbGV4LXNocmluazogMjtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0ge1xyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAuZmlsdGVyIHtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iaXJ0aGRheSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWdyb3c6IDA7XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgICYuYXV0aGVudGljYXRlZHtcclxuICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0ge1xyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ1dHRvbnMge1xyXG4gICAgICAgICYuYXV0aGVudGljYXRlZCB7XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdhN2E7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIuYXV0aGVudGljYXRlZCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnRleHQge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4uY29udGFpbmVyIC50ZXh0IHAge1xuICB3aWR0aDogODAlO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmZvcm0ubG9naW4ge1xuICBwYWRkaW5nOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcm0ubG9naW4gLmZvcm0tZ3JvdXAge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZvcm0gLmVycm9yIHtcbiAgYmFja2dyb3VuZDogI2Y1YzZjYjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBjb2xvcjogIzcyMWMyNDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5mb3JtIC5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBjb2xvcjogIzE1NTcyNDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZmxleC1ncm93OiAwLjM1O1xuICBtYXgtd2lkdGg6IDEwcmVtO1xuICBtaW4td2lkdGg6IDEwcmVtO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwuaW52YWxpZCB7XG4gIGNvbG9yOiAjZmY3YTdhO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwudmFsaWQge1xuICBjb2xvcjogIzM4Y2M4Yztcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLnBhc3N3b3JkIHtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLnZlcmlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uZm9ybSAuZm9ybS1ncm91cCAudmVyaWZpY2F0aW9uIGJ1dHRvbiB7XG4gIHdpZHRoOiBpbml0aWFsO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuYnV0dG9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLmJ1dHRvbnMuYXV0aGVudGljYXRlZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZm9ybSAuZm9ybS1ncm91cC5idXR0b25zLmF1dGhlbnRpY2F0ZWQgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuYnV0dG9ucyBidXR0b24ge1xuICB3aWR0aDogaW5pdGlhbDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwID4gZGl2IHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWJhc2lzOiAwJTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MWNhYWE7XG59XG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiBpbnB1dCxcbi5mb3JtIC5mb3JtLWdyb3VwID4gZGl2IHRleHRhcmVhIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiBpbnB1dC5kYXksXG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiB0ZXh0YXJlYS5kYXkge1xuICB3aWR0aDogM3JlbTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwID4gZGl2IGlucHV0Lm1vbnRoLFxuLmZvcm0gLmZvcm0tZ3JvdXAgPiBkaXYgdGV4dGFyZWEubW9udGgge1xuICB3aWR0aDogNnJlbTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwID4gZGl2IGlucHV0LnllYXIsXG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiB0ZXh0YXJlYS55ZWFyIHtcbiAgd2lkdGg6IDZyZW07XG59XG4uZm9ybSAuZm9ybS1ncm91cCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMiU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmJpcnRoZGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogMCU7XG4gIGZsZXgtZ3JvdzogY2FsYygxKTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSA+IGRpdiB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmJpcnRoZGF5IC5pbnZhbGlkLFxuLmZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwgLmludmFsaWQge1xuICBjb2xvcjogI2ZmN2E3YTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSAuaW52YWxpZCAuZm9ybS1jb250cm9sLFxuLmZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwgLmludmFsaWQgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmN2E3YTtcbiAgY29sb3I6ICNmZjdhN2E7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuYmlydGhkYXkgLmludmFsaWQgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIC5pbnZhbGlkIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2ZmN2E3YSAhaW1wb3J0YW50O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmJpcnRoZGF5IC52YWxpZCxcbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIC52YWxpZCB7XG4gIGNvbG9yOiAjMzhjYzhjO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmJpcnRoZGF5IC52YWxpZCAuZm9ybS1jb250cm9sLFxuLmZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwgLnZhbGlkIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6ICMzOGNjOGM7XG4gIGNvbG9yOiAjMzhjYzhjO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmJpcnRoZGF5IC52YWxpZCBpbnB1dDotd2Via2l0LWF1dG9maWxsLFxuLmZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwgLnZhbGlkIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzM4Y2M4YyAhaW1wb3J0YW50O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciBkaXYsXG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciAuY291bnRyeSBpIHtcbiAgcmlnaHQ6IDMlO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciBkaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIGlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LWhlaWdodDogNi41cmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHotaW5kZXg6IDU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYW5pbWF0aW9uOiBkcm9wZG93biAwLjhzIGZvcndhcmRzO1xuICAvKiBUcmFjayAqL1xuICAvKiBIYW5kbGUgKi9cbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsLmNvdW50cnkge1xuICBtYXgtaGVpZ2h0OiAxMXJlbTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgdWwgbGk6aG92ZXIsIC5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgdWwgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4Y2M4Yztcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgdWwgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciB1bCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgdWwgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuQGtleWZyYW1lcyBkcm9wZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgLnZhbGlkYXRpb24ge1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNy41cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG4uZm9ybSAuZm9ybS1ncm91cC5pbnZhbGlkIHtcbiAgY29sb3I6ICNmZjdhN2E7XG59XG4uZm9ybSAuZm9ybS1ncm91cC5pbnZhbGlkIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6ICNmZjdhN2E7XG4gIGNvbG9yOiAjZmY3YTdhO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuaW52YWxpZCBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZjdhN2EgIWltcG9ydGFudDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLnZhbGlkIHtcbiAgY29sb3I6ICMzOGNjOGM7XG59XG4uZm9ybSAuZm9ybS1ncm91cC52YWxpZCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzhjYzhjO1xuICBjb2xvcjogIzM4Y2M4Yztcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLnZhbGlkIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzM4Y2M4YyAhaW1wb3J0YW50O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzOGNjOGM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5mb3JtIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM4MWNhYWE7XG59XG4uZm9ybS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zdGVwcyBkaXYge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS41cmVtIDByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWNhYWE7XG59XG4uc3RlcHMgZGl2OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcbn1cbi5zdGVwcyBkaXY6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xufVxuLnN0ZXBzIGRpdi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhjYzhjO1xufVxuLnN0ZXBzIGRpdi5hdXRoZW50aWNhdGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hcHAtaGVhZGVyIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkZXIsXG4ubG9hZGVyOmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMGVtIC8gMik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmxvYWRlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMjM5LCAxNzEsIDE3MSwgMC4yKTtcbiAgYm9yZGVyLXJpZ2h0OiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XG4gIGJvcmRlci1ib3R0b206IDEuMWVtIHNvbGlkIHJnYmEoMjM5LCAxNzEsIDE3MSwgMC4yKTtcbiAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICMzOGNjOGM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDgge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNvbnRhaW5lciAudGV4dCB7XG4gICAgZmxleC1zaHJpbms6IDI7XG4gIH1cblxuICAuZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cbiAgLmZvcm0gLmZvcm0tZ3JvdXAgLmJpcnRoZGF5IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgfVxuICAuZm9ybSAuZm9ybS1ncm91cCAuYmlydGhkYXkgPiBkaXYge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5jb250YWluZXIgLnRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICAuY29udGFpbmVyIC50ZXh0IHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gIC5jb250YWluZXIuYXV0aGVudGljYXRlZCB7XG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgfVxuXG4gIC5mb3JtIC5mb3JtLWdyb3VwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBpbml0aWFsO1xuICB9XG4gIC5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5mb3JtIC5mb3JtLWdyb3VwLmJ1dHRvbnMuYXV0aGVudGljYXRlZCBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuZm9ybSBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbn1cbi51c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXNlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi51c2VyIC5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyIC5tZW51IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGNjOGM7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLnVzZXIgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zNSU7XG4gIGFuaW1hdGlvbjogYnVyZ2VyTWVudSAwLjVzIGZvcndhcmRzO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzM4Y2M4YztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnVzZXIgYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzgxY2FhYTtcbn1cbkBrZXlmcmFtZXMgYnVyZ2VyTWVudSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCJAaW1wb3J0IFwic2lnbi5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLnVzZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGRpdiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzUlO1xyXG4gICAgYW5pbWF0aW9uOiBidXJnZXJNZW51IDAuNXMgZm9yd2FyZHM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIFxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYnVyZ2VyTWVudSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/sign/header.component.ts":
  /*!******************************************!*\
    !*** ./src/app/sign/header.component.ts ***!
    \******************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSignHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/sign/auth.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.isAuthenticated = false;
        this.gender = 'male';
        this.menuClicked = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.gender === 'male') {
            this.avatarSrc = "assets/sign/avatar-male.png";
          } else {
            this.avatarSrc = "assets/sign/avatar-female.png";
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "isAuthenticated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "gender", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/sign/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/sign/is-in-list-validator.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/sign/is-in-list-validator.directive.ts ***!
    \********************************************************/

  /*! exports provided: IsInListValidatorDirective */

  /***/
  function srcAppSignIsInListValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsInListValidatorDirective", function () {
      return IsInListValidatorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IsInListValidatorDirective_1;

    var IsInListValidatorDirective = IsInListValidatorDirective_1 =
    /*#__PURE__*/
    function () {
      function IsInListValidatorDirective() {
        _classCallCheck(this, IsInListValidatorDirective);
      }

      _createClass(IsInListValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          var input = control.value;
          var temp;
          var result;

          if (input) {
            switch (this.validateList) {
              case 'country':
                temp = _toConsumableArray(this.IsInListCountryValidator);
                break;

              case 'year':
                temp = _toConsumableArray(this.IsInListYearValidator);
                break;

              case 'month':
                temp = _toConsumableArray(this.IsInListMonthValidator);
                break;

              case 'day':
                temp = _toConsumableArray(this.IsInListDayValidator);
                break;
            }

            result = !!temp.find(function (element) {
              return (element + '').toLowerCase() === (input + '').toLowerCase();
            });
          }

          if (!result) {
            return {
              'isInList': true
            };
          }

          return null;
        }
      }]);

      return IsInListValidatorDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], IsInListValidatorDirective.prototype, "validateList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], IsInListValidatorDirective.prototype, "IsInListCountryValidator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], IsInListValidatorDirective.prototype, "IsInListMonthValidator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], IsInListValidatorDirective.prototype, "IsInListDayValidator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], IsInListValidatorDirective.prototype, "IsInListYearValidator", void 0);
    IsInListValidatorDirective = IsInListValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
      selector: '[IsInListValidator]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: IsInListValidatorDirective_1,
        multi: true
      }]
    })], IsInListValidatorDirective);
    /***/
  },

  /***/
  "./src/app/sign/shared/user-authenticate.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/sign/shared/user-authenticate.model.ts ***!
    \********************************************************/

  /*! exports provided: UserAuthenticate */

  /***/
  function srcAppSignSharedUserAuthenticateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAuthenticate", function () {
      return UserAuthenticate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserAuthenticate =
    /*#__PURE__*/
    function () {
      function UserAuthenticate(email, id, _token, _tokenExpirationDate) {
        _classCallCheck(this, UserAuthenticate);

        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
      }

      _createClass(UserAuthenticate, [{
        key: "token",
        get: function get() {
          if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
          }

          return this._token;
        }
      }]);

      return UserAuthenticate;
    }();
    /***/

  },

  /***/
  "./src/app/sign/sign.component.scss":
  /*!******************************************!*\
    !*** ./src/app/sign/sign.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignSignComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  min-height: 100vh;\n  background-color: #ff7a7a;\n  overflow: hidden;\n  font-family: \"Rubik\", sans-serif;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container {\n  padding: 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n}\n\n.container.authenticated {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n}\n\n.container .text {\n  margin-right: 1rem;\n}\n\n.container .text p {\n  width: 80%;\n}\n\n.form {\n  padding: 3rem;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  background: white;\n  color: black;\n}\n\n.form.login {\n  padding: 2rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.form.login .form-group {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.form .error {\n  background: #f5c6cb;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  color: #721c24;\n  margin-bottom: 1rem;\n}\n\n.form .success {\n  background: #d4edda;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  color: #155724;\n  margin-bottom: 1rem;\n}\n\n.form .form-group {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 2rem;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  position: relative;\n}\n\n.form .form-group label {\n  -webkit-box-flex: 0.35;\n          flex-grow: 0.35;\n  max-width: 10rem;\n  min-width: 10rem;\n}\n\n.form .form-group label.invalid {\n  color: #ff7a7a;\n}\n\n.form .form-group label.valid {\n  color: #38cc8c;\n}\n\n.form .form-group.password {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\n\n.form .form-group .verification {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 1rem;\n}\n\n.form .form-group .verification button {\n  width: initial;\n}\n\n.form .form-group.buttons {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.form .form-group.buttons.authenticated {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.form .form-group.buttons.authenticated button:first-child {\n  margin-right: 1rem;\n}\n\n.form .form-group.buttons button {\n  width: initial;\n}\n\n.form .form-group > div {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-basis: 0%;\n  text-align: start;\n}\n\n.form .form-group > div textarea {\n  border: 1px solid #81caaa;\n}\n\n.form .form-group > div input,\n.form .form-group > div textarea {\n  width: -webkit-fill-available;\n}\n\n.form .form-group > div input.day,\n.form .form-group > div textarea.day {\n  width: 3rem;\n}\n\n.form .form-group > div input.month,\n.form .form-group > div textarea.month {\n  width: 6rem;\n}\n\n.form .form-group > div input.year,\n.form .form-group > div textarea.year {\n  width: 6rem;\n}\n\n.form .form-group i {\n  position: absolute;\n  right: 2%;\n  pointer-events: none;\n}\n\n.form .form-group .birthday {\n  display: -webkit-box;\n  display: flex;\n  flex-basis: 0%;\n  -webkit-box-flex: calc(1);\n          flex-grow: calc(1);\n}\n\n.form .form-group .birthday > div {\n  margin-right: 2rem;\n}\n\n.form .form-group .birthday > div:last-child {\n  margin-right: 0;\n}\n\n.form .form-group .birthday .invalid,\n.form .form-group label .invalid {\n  color: #ff7a7a;\n}\n\n.form .form-group .birthday .invalid .form-control,\n.form .form-group label .invalid .form-control {\n  border-color: #ff7a7a;\n  color: #ff7a7a;\n}\n\n.form .form-group .birthday .invalid input:-webkit-autofill,\n.form .form-group label .invalid input:-webkit-autofill {\n  -webkit-text-fill-color: #ff7a7a !important;\n}\n\n.form .form-group .birthday .valid,\n.form .form-group label .valid {\n  color: #38cc8c;\n}\n\n.form .form-group .birthday .valid .form-control,\n.form .form-group label .valid .form-control {\n  border-color: #38cc8c;\n  color: #38cc8c;\n}\n\n.form .form-group .birthday .valid input:-webkit-autofill,\n.form .form-group label .valid input:-webkit-autofill {\n  background-color: transparent !important;\n  -webkit-text-fill-color: #38cc8c !important;\n}\n\n.form .form-group .filter {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.form .form-group .filter div,\n.form .form-group .filter ul {\n  background: white;\n  border-radius: 5px;\n}\n\n.form .form-group .filter i {\n  position: absolute;\n  right: 10%;\n  align-self: center;\n}\n\n.form .form-group .filter .country i {\n  right: 3%;\n}\n\n.form .form-group .filter div {\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n}\n\n.form .form-group .filter input {\n  display: inline-block;\n  margin: 0;\n  cursor: pointer;\n}\n\n.form .form-group .filter ul {\n  text-align: center;\n  position: absolute;\n  max-height: 6.5rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 5;\n  padding: 0;\n  width: -webkit-fill-available;\n  list-style: none;\n  display: block;\n  -webkit-animation: dropdown 0.8s forwards;\n          animation: dropdown 0.8s forwards;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n\n.form .form-group .filter ul.country {\n  max-height: 11rem;\n}\n\n.form .form-group .filter ul li {\n  margin-bottom: 0.1rem;\n  cursor: pointer;\n}\n\n.form .form-group .filter ul li:hover, .form .form-group .filter ul li.active {\n  background-color: #38cc8c;\n}\n\n.form .form-group .filter ul ::-webkit-scrollbar {\n  width: 10px;\n}\n\n.form .form-group .filter ul ::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.form .form-group .filter ul ::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n.form .form-group .filter ul ::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n@-webkit-keyframes dropdown {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes dropdown {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.form .form-group .filter .validation {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.form .form-group .form-control {\n  padding: 0.5rem;\n  border-radius: 7.5px;\n  border: 1px solid gray;\n}\n\n.form .form-group.invalid {\n  color: #ff7a7a;\n}\n\n.form .form-group.invalid .form-control {\n  border-color: #ff7a7a;\n  color: #ff7a7a;\n}\n\n.form .form-group.invalid input:-webkit-autofill {\n  -webkit-text-fill-color: #ff7a7a !important;\n}\n\n.form .form-group.valid {\n  color: #38cc8c;\n}\n\n.form .form-group.valid .form-control {\n  border-color: #38cc8c;\n  color: #38cc8c;\n}\n\n.form .form-group.valid input:-webkit-autofill {\n  background-color: transparent !important;\n  -webkit-text-fill-color: #38cc8c !important;\n}\n\n.form button {\n  width: 100%;\n  border: 1px solid transparent;\n  cursor: pointer;\n  background: #38cc8c;\n  color: white;\n  padding: 1rem;\n  border-radius: 12px;\n}\n\n.form button:disabled {\n  background: #81caaa;\n}\n\n.form-wrapper {\n  width: 100%;\n}\n\n.steps {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.steps div {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-basis: 0;\n  text-align: center;\n  padding: 1.5rem 0rem;\n  background-color: #81caaa;\n}\n\n.steps div:first-child {\n  border-top-left-radius: 1rem;\n}\n\n.steps div:last-child {\n  border-top-right-radius: 1rem;\n}\n\n.steps div.active {\n  background-color: #38cc8c;\n}\n\n.steps div.authenticated {\n  cursor: pointer;\n}\n\napp-header {\n  align-self: flex-end;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n  top: 50%;\n  left: calc(50% - 10em / 2);\n  position: fixed;\n}\n\n.loader {\n  font-size: 10px;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-right: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-bottom: 1.1em solid rgba(239, 171, 171, 0.2);\n  border-left: 1.1em solid #38cc8c;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@media only screen and (max-width: 1300px) {\n  .container .text {\n    flex-shrink: 2;\n  }\n\n  .form .form-group .filter {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .form .form-group .birthday {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-flex: 0;\n            flex-grow: 0;\n  }\n  .form .form-group .birthday > div {\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  .form .form-group .birthday > div:last-child {\n    margin-bottom: 0;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin: 0;\n  }\n  .container .text {\n    text-align: center;\n    margin-right: 0;\n    margin-bottom: 2rem;\n  }\n  .container .text p {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 490px) {\n  .container.authenticated {\n    text-align: initial;\n  }\n\n  .form .form-group {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: initial;\n            align-items: initial;\n  }\n  .form .form-group label {\n    margin-bottom: 1rem;\n  }\n  .form .form-group.buttons.authenticated button:first-child {\n    margin-right: 0;\n  }\n  .form button:first-child {\n    margin-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXBwXFxzaWduXFxzaWduLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduL3NpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxpQkFBQTtFQUNBLHlCQVBPO0VBUVAsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURNRTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0U7RUFDRSxrQkFBQTtBQ0xKOztBRE9JO0VBQ0UsVUFBQTtBQ0xOOztBRFVBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURTRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDUEo7O0FEU0k7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNQTjs7QURXRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVEo7O0FEWUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1ZKOztBRGFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURhSTtFQUNFLHNCQUFBO1VBQUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYTjs7QURhTTtFQUNFLGNBbkZDO0FDd0VUOztBRGNNO0VBQ0UsY0F0RkM7QUMwRVQ7O0FEZ0JJO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDZE47O0FEaUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtBQ2ZOOztBRGlCTTtFQUNFLGNBQUE7QUNmUjs7QURtQkk7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0FDakJOOztBRG1CTTtFQUNFLHFCQUFBO1VBQUEseUJBQUE7QUNqQlI7O0FEb0JVO0VBQ0Usa0JBQUE7QUNsQlo7O0FEdUJNO0VBQ0UsY0FBQTtBQ3JCUjs7QUR5Qkk7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUN2Qk47O0FEeUJNO0VBQ0UseUJBQUE7QUN2QlI7O0FEMEJNOztFQUVFLDZCQUFBO0FDeEJSOztBRDBCUTs7RUFDRSxXQUFBO0FDdkJWOztBRDBCUTs7RUFDRSxXQUFBO0FDdkJWOztBRDBCUTs7RUFDRSxXQUFBO0FDdkJWOztBRDRCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FDMUJOOztBRDZCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLGtCQUFBO0FDM0JOOztBRDZCTTtFQUNFLGtCQUFBO0FDM0JSOztBRDZCUTtFQUNFLGVBQUE7QUMzQlY7O0FEa0NNOztFQUNFLGNBOUtDO0FDK0lUOztBRGlDUTs7RUFDRSxxQkFqTEQ7RUFrTEMsY0FsTEQ7QUNvSlQ7O0FEaUNROztFQUNFLDJDQUFBO0FDOUJWOztBRGtDTTs7RUFDRSxjQTFMQztBQzJKVDs7QURpQ1E7O0VBQ0UscUJBN0xEO0VBOExDLGNBOUxEO0FDZ0tUOztBRGlDUTs7RUFDRSx3Q0FBQTtFQUNBLDJDQUFBO0FDOUJWOztBRG1DSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDakNOOztBRG1DTTs7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0FDakNSOztBRG9DTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDbENSOztBRHNDUTtFQUNFLFNBQUE7QUNwQ1Y7O0FEd0NNO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ3RDUjs7QUR5Q007RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDdkNSOztBRDBDTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQW1CQSxVQUFBO0VBS0EsV0FBQTtFQUtBLG9CQUFBO0FDbEVSOztBRHVDUTtFQUNFLGlCQUFBO0FDckNWOztBRHdDUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ3RDVjs7QUR1Q1U7RUFFRSx5QkEvUEg7QUN5TlQ7O0FEMENRO0VBQ0UsV0FBQTtBQ3hDVjs7QUQ0Q1E7RUFDRSxtQkFBQTtBQzFDVjs7QUQ4Q1E7RUFDRSxnQkFBQTtBQzVDVjs7QURnRFE7RUFDRSxnQkFBQTtBQzlDVjs7QURrRE07RUFDRTtJQUNFLFVBQUE7RUNoRFI7RURtRE07SUFDRSxVQUFBO0VDakRSO0FBQ0Y7O0FEMENNO0VBQ0U7SUFDRSxVQUFBO0VDaERSO0VEbURNO0lBQ0UsVUFBQTtFQ2pEUjtBQUNGOztBRG9ETTtFQUNFLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ2xEUjs7QURzREk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ3BETjs7QUR1REk7RUFDRSxjQTlTRztBQ3lQVDs7QURvRU07RUFDRSxxQkE5VEM7RUErVEQsY0EvVEM7QUM2UFQ7O0FEcUVNO0VBQ0UsMkNBQUE7QUNuRVI7O0FEdUVJO0VBQ0UsY0F2VUc7QUNrUVQ7O0FEdUVNO0VBQ0UscUJBMVVDO0VBMlVELGNBM1VDO0FDc1FUOztBRHdFTTtFQUNFLHdDQUFBO0VBQ0EsMkNBQUE7QUN0RVI7O0FEMkVFO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQXpWSztFQTBWTCxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDekVKOztBRDJFSTtFQUNFLG1CQTlWRztBQ3FSVDs7QUQ2RUU7RUFDRSxXQUFBO0FDM0VKOztBRCtFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUM1RUY7O0FEOEVFO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFoWEs7QUNvU1Q7O0FEOEVJO0VBQ0UsNEJBQUE7QUM1RU47O0FEOEVJO0VBQ0UsNkJBQUE7QUM1RU47O0FEK0VJO0VBQ0UseUJBM1hHO0FDOFNUOztBRGdGSTtFQUNFLGVBQUE7QUM5RU47O0FEbUZBO0VBQ0Usb0JBQUE7QUNoRkY7O0FEbUZBOzs7O0VBSUUscURBQUE7QUNoRkY7O0FEbUZBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDaEZGOztBRGtGQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx3QkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7QUMvRUY7O0FEaUZBO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLHVCQUFBO0VDOUVGO0VEZ0ZBO0lBQ0UsaUNBQUE7SUFDQSx5QkFBQTtFQzlFRjtBQUNGOztBRGdGQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSx1QkFBQTtFQzlFRjtFRGdGQTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUM5RUY7QUFDRjs7QURpRkE7RUFFSTtJQUNFLGNBQUE7RUNoRko7O0VEcUZJO0lBQ0UsMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0VDbEZOO0VEcUZJO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsbUJBQUE7WUFBQSxZQUFBO0VDbkZOO0VEcUZNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDbkZSO0VEcUZRO0lBQ0UsZ0JBQUE7RUNuRlY7QUFDRjs7QUQwRkE7RUFDRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFNBQUE7RUN4RkY7RUQwRkU7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQ3hGSjtFRDBGSTtJQUNFLFdBQUE7RUN4Rk47QUFDRjs7QUQ2RkE7RUFFSTtJQUNFLG1CQUFBO0VDNUZKOztFRGdHRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLDBCQUFBO1lBQUEsb0JBQUE7RUM3Rko7RUQrRkk7SUFDRSxtQkFBQTtFQzdGTjtFRG1HVTtJQUNFLGVBQUE7RUNqR1o7RUR5R0k7SUFDRSxtQkFBQTtFQ3ZHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2lnbi9zaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogI2ZmN2E3YTtcclxuJGNvbG9yMjogIzM4Y2M4YztcclxuJGNvbG9yMzogIzgxY2FhYTtcclxuJGNvbG9yNDogI2NhMzYzNjtcclxuXHJcbi53cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmLmF1dGhlbnRpY2F0ZWQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAmLmxvZ2luIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVycm9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWM2Y2I7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgZmxleC1ncm93OiAwLjM1O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gICAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG5cclxuICAgICAgJi5pbnZhbGlkIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi52YWxpZCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnBhc3N3b3JkIHtcclxuICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJpZmljYXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogaW5pdGlhbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuYnV0dG9ucyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICYuYXV0aGVudGljYXRlZCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3IzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cclxuICAgICAgICAmLmRheSB7XHJcbiAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubW9udGgge1xyXG4gICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnllYXIge1xyXG4gICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYmlydGhkYXkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWJhc2lzOiAwJTtcclxuICAgICAgZmxleC1ncm93OiBjYWxjKDEpO1xyXG5cclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmlydGhkYXksXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIC5pbnZhbGlkIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICRjb2xvcjEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52YWxpZCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjI7XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJGNvbG9yMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAgIGRpdixcclxuICAgICAgdWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICByaWdodDogMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDYuNXJlbTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBhbmltYXRpb246IGRyb3Bkb3duIDAuOHMgZm9yd2FyZHM7XHJcblxyXG4gICAgICAgICYuY291bnRyeSB7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogVHJhY2sgKi9cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBIYW5kbGUgKi9cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIGRyb3Bkb3duIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnZhbGlkYXRpb24ge1xyXG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA3LjVweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBjb2xvcjogJGNvbG9yMTtcclxuXHJcbiAgICAgIC8vICY6YmVmb3JlIHtcclxuICAgICAgLy8gICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc2lnbi9pY29uLWVycm9yLnN2Z1wiKTtcclxuICAgICAgLy8gICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLy8gICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAvLyAgIGhlaWdodDogMS4zcmVtO1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gICByaWdodDogMiU7XHJcbiAgICAgIC8vICAgdG9wOiAxMSU7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICRjb2xvcjEgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYudmFsaWQge1xyXG4gICAgICBjb2xvcjogJGNvbG9yMjtcclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yMjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJGNvbG9yMiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yMztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGVwcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGRpdiB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS41cmVtIDByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgfVxyXG5cclxuICAgICYuYXV0aGVudGljYXRlZCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFwcC1oZWFkZXIge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTBlbTtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAxMGVtIC8gMik7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB0ZXh0LWluZGVudDogLTk5OTllbTtcclxuICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgyMzksIDE3MSwgMTcxLCAwLjIpO1xyXG4gIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCAkY29sb3IyO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZDgge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC50ZXh0IHtcclxuICAgICAgZmxleC1zaHJpbms6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtIHtcclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgLmZpbHRlciB7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmlydGhkYXkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTBweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICAmLmF1dGhlbnRpY2F0ZWR7XHJcbiAgICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtIHtcclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGluaXRpYWw7XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idXR0b25zIHtcclxuICAgICAgICAmLmF1dGhlbnRpY2F0ZWQge1xyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTdhO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyLmF1dGhlbnRpY2F0ZWQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC50ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLmNvbnRhaW5lciAudGV4dCBwIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAzcmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5mb3JtLmxvZ2luIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtLmxvZ2luIC5mb3JtLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtIC5lcnJvciB7XG4gIGJhY2tncm91bmQ6ICNmNWM2Y2I7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZm9ybSAuc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICNkNGVkZGE7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgY29sb3I6ICMxNTU3MjQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZm9ybSAuZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZsZXgtZ3JvdzogMC4zNTtcbiAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgbWluLXdpZHRoOiAxMHJlbTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsLmludmFsaWQge1xuICBjb2xvcjogI2ZmN2E3YTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsLnZhbGlkIHtcbiAgY29sb3I6ICMzOGNjOGM7XG59XG4uZm9ybSAuZm9ybS1ncm91cC5wYXNzd29yZCB7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC52ZXJpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLnZlcmlmaWNhdGlvbiBidXR0b24ge1xuICB3aWR0aDogaW5pdGlhbDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLmJ1dHRvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZm9ybSAuZm9ybS1ncm91cC5idXR0b25zLmF1dGhlbnRpY2F0ZWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuYnV0dG9ucy5hdXRoZW50aWNhdGVkIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLmJ1dHRvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IGluaXRpYWw7XG59XG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogMCU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgPiBkaXYgdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODFjYWFhO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgPiBkaXYgaW5wdXQsXG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgPiBkaXYgaW5wdXQuZGF5LFxuLmZvcm0gLmZvcm0tZ3JvdXAgPiBkaXYgdGV4dGFyZWEuZGF5IHtcbiAgd2lkdGg6IDNyZW07XG59XG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiBpbnB1dC5tb250aCxcbi5mb3JtIC5mb3JtLWdyb3VwID4gZGl2IHRleHRhcmVhLm1vbnRoIHtcbiAgd2lkdGg6IDZyZW07XG59XG4uZm9ybSAuZm9ybS1ncm91cCA+IGRpdiBpbnB1dC55ZWFyLFxuLmZvcm0gLmZvcm0tZ3JvdXAgPiBkaXYgdGV4dGFyZWEueWVhciB7XG4gIHdpZHRoOiA2cmVtO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDAlO1xuICBmbGV4LWdyb3c6IGNhbGMoMSk7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuYmlydGhkYXkgPiBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuYmlydGhkYXkgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSAuaW52YWxpZCxcbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIC5pbnZhbGlkIHtcbiAgY29sb3I6ICNmZjdhN2E7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuYmlydGhkYXkgLmludmFsaWQgLmZvcm0tY29udHJvbCxcbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIC5pbnZhbGlkIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6ICNmZjdhN2E7XG4gIGNvbG9yOiAjZmY3YTdhO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmJpcnRoZGF5IC5pbnZhbGlkIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG4uZm9ybSAuZm9ybS1ncm91cCBsYWJlbCAuaW52YWxpZCBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZjdhN2EgIWltcG9ydGFudDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSAudmFsaWQsXG4uZm9ybSAuZm9ybS1ncm91cCBsYWJlbCAudmFsaWQge1xuICBjb2xvcjogIzM4Y2M4Yztcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSAudmFsaWQgLmZvcm0tY29udHJvbCxcbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIC52YWxpZCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzhjYzhjO1xuICBjb2xvcjogIzM4Y2M4Yztcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSAudmFsaWQgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbi5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIC52YWxpZCBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMzOGNjOGMgIWltcG9ydGFudDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgZGl2LFxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciB1bCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgLmNvdW50cnkgaSB7XG4gIHJpZ2h0OiAzJTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciBpbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC1oZWlnaHQ6IDYuNXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB6LWluZGV4OiA1O1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogZHJvcGRvd24gMC44cyBmb3J3YXJkcztcbiAgLyogVHJhY2sgKi9cbiAgLyogSGFuZGxlICovXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciB1bC5jb3VudHJ5IHtcbiAgbWF4LWhlaWdodDogMTFyZW07XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsIGxpOmhvdmVyLCAuZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGNjOGM7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5maWx0ZXIgdWwgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIHVsIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciB1bCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbkBrZXlmcmFtZXMgZHJvcGRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZmlsdGVyIC52YWxpZGF0aW9uIHtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuaW52YWxpZCB7XG4gIGNvbG9yOiAjZmY3YTdhO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuaW52YWxpZCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY3YTdhO1xuICBjb2xvcjogI2ZmN2E3YTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLmludmFsaWQgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmY3YTdhICFpbXBvcnRhbnQ7XG59XG4uZm9ybSAuZm9ybS1ncm91cC52YWxpZCB7XG4gIGNvbG9yOiAjMzhjYzhjO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAudmFsaWQgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1jb2xvcjogIzM4Y2M4YztcbiAgY29sb3I6ICMzOGNjOGM7XG59XG4uZm9ybSAuZm9ybS1ncm91cC52YWxpZCBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMzOGNjOGMgIWltcG9ydGFudDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzhjYzhjO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4uZm9ybSBidXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjODFjYWFhO1xufVxuLmZvcm0td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RlcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc3RlcHMgZGl2IHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWJhc2lzOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFjYWFhO1xufVxuLnN0ZXBzIGRpdjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XG59XG4uc3RlcHMgZGl2Omxhc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcbn1cbi5zdGVwcyBkaXYuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4Y2M4Yztcbn1cbi5zdGVwcyBkaXYuYXV0aGVudGljYXRlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYXBwLWhlYWRlciB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGVyLFxuLmxvYWRlcjphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwZW07XG4gIGhlaWdodDogMTBlbTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTBlbSAvIDIpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5sb2FkZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XG4gIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgyMzksIDE3MSwgMTcxLCAwLjIpO1xuICBib3JkZXItYm90dG9tOiAxLjFlbSBzb2xpZCByZ2JhKDIzOSwgMTcxLCAxNzEsIDAuMik7XG4gIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCAjMzhjYzhjO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5jb250YWluZXIgLnRleHQge1xuICAgIGZsZXgtc2hyaW5rOiAyO1xuICB9XG5cbiAgLmZvcm0gLmZvcm0tZ3JvdXAgLmZpbHRlciB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB9XG4gIC5mb3JtIC5mb3JtLWdyb3VwIC5iaXJ0aGRheSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDA7XG4gIH1cbiAgLmZvcm0gLmZvcm0tZ3JvdXAgLmJpcnRoZGF5ID4gZGl2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICAuZm9ybSAuZm9ybS1ncm91cCAuYmlydGhkYXkgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuY29udGFpbmVyIC50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmNvbnRhaW5lciAudGV4dCBwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTBweCkge1xuICAuY29udGFpbmVyLmF1dGhlbnRpY2F0ZWQge1xuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIH1cblxuICAuZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgfVxuICAuZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICAuZm9ybSAuZm9ybS1ncm91cC5idXR0b25zLmF1dGhlbnRpY2F0ZWQgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmZvcm0gYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sign/sign.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sign/sign.component.ts ***!
    \****************************************/

  /*! exports provided: SignComponent */

  /***/
  function srcAppSignSignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignComponent", function () {
      return SignComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _countries_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../countries/countries.service */
    "./src/app/countries/countries.service.ts");
    /* harmony import */


    var _date_generate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./date-generate.component */
    "./src/app/sign/date-generate.component.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/sign/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./data.storage.service */
    "./src/app/sign/data.storage.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SignComponent =
    /*#__PURE__*/
    function () {
      function SignComponent(countriesService, renderer, authService, router, dataService) {
        _classCallCheck(this, SignComponent);

        this.countriesService = countriesService;
        this.renderer = renderer;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.step = 0;
        this.countries = [];
        this.updateForm = true;
        this.showMonth = 'none';
        this.showDay = 'none';
        this.showYear = 'none';
        this.showCountry = 'none';
        this.fetchedInput = {};
        this.arrowkeyLocation = 0;
        this.loginMode = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](true);
        this.isLoginMode = true;
        this.isAuthenticated = false;
        this.isLoading = true;
        this.emailVerified = false;
        this.forgotPassword = false;
        this.editMode = false;
      }

      _createClass(SignComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.authService.autoLogIn();
          this.authSubscription = this.authService.user.subscribe(function (user) {
            _this19.isAuthenticated = !!user;

            if (_this19.isAuthenticated) {
              _this19.router.navigate(['user']);

              _this19.loginMode.next(false);

              _this19.token = user.token;
              _this19.id = user.id;
              _this19.isLoading = true;

              _this19.dataService.fetchUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (fetchedData) {
                _this19.dbId = Object.keys(fetchedData)[0];
                var data = fetchedData[_this19.dbId][_this19.id];
                var date = new Date(data.birthday);
                _this19.userInput = {
                  firstName: data.firstName,
                  lastName: data.lastName,
                  gender: data.gender,
                  country: data.country,
                  birthdayDay: date.getDate(),
                  birthdayMonth: _this19.date.months[date.getMonth()],
                  birthdayYear: date.getFullYear(),
                  displayName: data.displayName,
                  email: data.email,
                  password: null,
                  aboutMe: data.aboutMe
                };
                _this19.isLoading = false;

                if (!_this19.isLoading) {
                  _this19.authService.getSensitiveData(_this19.token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (payload) {
                    _this19.userInput.password = payload.passwordHash;
                    _this19.emailVerified = payload.emailVerified;
                    Object.assign(_this19.fetchedInput, _this19.userInput);
                  });
                }
              });
            } else {
              _this19.router.navigate(['sign']);

              _this19.resetInputs();

              _this19.isLoading = false;
            }
          });
          var dateGenerate = new _date_generate_component__WEBPACK_IMPORTED_MODULE_3__["DateGenerateComponent"]();
          this.date = {
            days: dateGenerate.days,
            months: dateGenerate.months,
            years: dateGenerate.years
          };
          this.countriesService.getAllCountries().subscribe(function (countries) {
            countries.forEach(function (country) {
              _this19.countries.push(country['name']);
            });
          });
          this.loginMode.subscribe(function (mode) {
            if (mode === true) {
              _this19.isLoginMode = true;
            } else {
              _this19.isLoginMode = false;
            }

            _this19.rendererListener = _this19.renderer.listen('window', 'click', function (e) {
              if (!_this19.monthInput || !_this19.dayInput || !_this19.yearInput || !_this19.countryInput) {
                _this19.rendererListener();
              } else {
                _this19.clickListener(e);
              }
            });
          });
        }
      }, {
        key: "clickListener",
        value: function clickListener(e) {
          if (!this.monthInput.nativeElement.contains(e.target)) {
            this.showMonth = 'none';
          }

          if (!this.dayInput.nativeElement.contains(e.target)) {
            this.showDay = 'none';
          }

          if (!this.yearInput.nativeElement.contains(e.target)) {
            this.showYear = 'none';
          }

          if (!this.countryInput.nativeElement.contains(e.target)) {
            this.showCountry = 'none';
          }
        }
      }, {
        key: "previousStep",
        value: function previousStep() {
          this.step--;

          if (this.step == 0) {
            this.loginMode.next(false);
          }
        }
      }, {
        key: "nextStep",
        value: function nextStep(form) {
          if (this.step == 0) {
            this.loginMode.next(false);
          }

          this.step++;

          if (this.step === 3) {
            this.signup();
            form.reset();
            this.loginMode.next(true);
          }
        }
      }, {
        key: "onKey",
        value: function onKey(event) {
          var name = event.target.name;
          var element;

          switch (name) {
            case 'year':
              element = this.yearList.nativeElement;
              break;

            case 'month':
              element = this.monthList.nativeElement;
              break;

            case 'day':
              element = this.dayList.nativeElement;
              break;

            case 'country':
              element = this.countryList.nativeElement;
              break;
          }

          var elPos = element.getElementsByClassName('active')[0];

          if (event.key == 'ArrowDown') {
            element.scrollTop = elPos ? elPos.offsetTop : 0;
            this.arrowkeyLocation++;
          } else if (event.key == 'ArrowUp') {
            element.scrollTop = elPos ? elPos.offsetTop - elPos.offsetHeight : 0;
            this.arrowkeyLocation--;
          } else if (event.key == 'Enter' || event.key == 'Tab') {
            var el = element.getElementsByClassName('active')[0];

            switch (name) {
              case 'year':
                this.userInput.birthdayYear = el ? el.innerHTML.trim() : null;
                break;

              case 'month':
                this.userInput.birthdayMonth = el ? el.innerHTML.trim() : null;
                break;

              case 'day':
                this.userInput.birthdayDay = el ? el.innerHTML.trim() : null;
                break;

              case 'country':
                this.userInput.country = el ? el.innerHTML.trim() : null;
                break;
            }

            this.arrowkeyLocation = 0;
            element.scrollTop = 0;
          } else if (event.key == 'Backspace') {
            element.scrollTop = 0;
            this.arrowkeyLocation = 0;
          } else {
            this.arrowkeyLocation = 0;
            element.scrollTop = 0;
          }

          if (this.arrowkeyLocation < 0) {
            this.arrowkeyLocation = 0;
          }

          if (this.arrowkeyLocation > element.children.length - 1) {
            this.arrowkeyLocation = element.children.length - 1;
          }
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this20 = this;

          this.authService.signup(this.userInput.email, this.userInput.password).subscribe(function () {
            _this20.router.navigate(['user']);

            var monthIndex = _this20.date.months.findIndex(function (month) {
              return month === _this20.userInput.birthdayMonth;
            });

            var date = new Date(_this20.userInput.birthdayYear, monthIndex, _this20.userInput.birthdayDay);
            var storeUser = {
              firstName: _this20.userInput.firstName,
              lastName: _this20.userInput.lastName,
              gender: _this20.userInput.gender,
              displayName: _this20.userInput.displayName,
              email: _this20.userInput.email,
              birthday: date,
              country: _this20.userInput.country,
              aboutMe: _this20.userInput.aboutMe
            };

            _this20.dataService.storeUser(storeUser, _this20.id, _this20.token);

            _this20.errorMessage = null;

            _this20.resetInputs();
          }, function (error) {
            _this20.errorMessage = error;
          });
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this21 = this;

          this.authService.signin(email, password).subscribe(function () {
            _this21.router.navigate(['user']);

            _this21.errorMessage = null;
          }, function (error) {
            _this21.errorMessage = error;
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this22 = this;

          var monthIndex = this.date.months.findIndex(function (month) {
            return month === _this22.userInput.birthdayMonth;
          });
          var date = new Date(this.userInput.birthdayYear, monthIndex, this.userInput.birthdayDay);
          var storeUser = {
            firstName: this.userInput.firstName,
            lastName: this.userInput.lastName,
            gender: this.userInput.gender,
            displayName: this.userInput.displayName,
            email: this.userInput.email,
            birthday: date,
            country: this.userInput.country,
            aboutMe: this.userInput.aboutMe
          };
          this.dataService.updateUser(storeUser, this.dbId, this.id, this.token);
          this.resetInputs();
          this.registrationForm.reset();
        }
      }, {
        key: "resetInputs",
        value: function resetInputs() {
          var _this23 = this;

          var temp = this.userInput;
          this.userInput = {
            firstName: null,
            lastName: null,
            gender: null,
            country: null,
            birthdayDay: null,
            birthdayMonth: null,
            birthdayYear: null,
            displayName: null,
            email: null,
            password: null,
            aboutMe: null
          };

          if (!!temp) {
            setTimeout(function () {
              _this23.userInput = temp;
            }, 1000);
          }
        }
      }, {
        key: "verifyEmail",
        value: function verifyEmail() {
          var _this24 = this;

          this.authService.emailVerification(this.token).subscribe(function () {
            _this24.emailErrorMessage = 'Email verification was sent';
            setTimeout(function () {
              _this24.emailErrorMessage = null;
            }, 2000);
          }, function (response) {
            _this24.emailErrorMessage = response;
          });
        }
      }, {
        key: "changeEmail",
        value: function changeEmail() {
          var _this25 = this;

          if (!this.editMode) {
            if (this.userInput.email !== this.fetchedInput['email']) {
              this.authService.changeEmail(this.token, this.userInput.email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(function () {
                _this25.updateUser();

                _this25.authService.logout();
              }, function (response) {
                _this25.emailErrorMessage = response;
              });
            }
          }
        }
      }, {
        key: "onChanges",
        value: function onChanges() {
          var _this26 = this;

          var keys = Object.keys(this.userInput);
          this.updateForm = true;
          keys.forEach(function (key) {
            if (_this26.userInput[key] !== _this26.fetchedInput[key]) {
              _this26.updateForm = false;
              return;
            }
          });
        }
      }, {
        key: "resetFields",
        value: function resetFields() {
          Object.assign(this.userInput, this.fetchedInput);
          this.onChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.authSubscription) {
            this.authSubscription.unsubscribe();
          }
        }
      }]);

      return SignComponent;
    }();

    SignComponent.ctorParameters = function () {
      return [{
        type: _countries_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registrationForm', {
      "static": false
    })], SignComponent.prototype, "registrationForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('yearInput', {
      "static": false
    })], SignComponent.prototype, "yearInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthInput', {
      "static": false
    })], SignComponent.prototype, "monthInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dayInput', {
      "static": false
    })], SignComponent.prototype, "dayInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('countryInput', {
      "static": false
    })], SignComponent.prototype, "countryInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('yearList', {
      "static": false
    })], SignComponent.prototype, "yearList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dayList', {
      "static": false
    })], SignComponent.prototype, "dayList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthList', {
      "static": false
    })], SignComponent.prototype, "monthList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('countryList', {
      "static": false
    })], SignComponent.prototype, "countryList", void 0);
    SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign.component.scss */
      "./src/app/sign/sign.component.scss"))["default"]]
    })], SignComponent);
    /***/
  },

  /***/
  "./src/app/url-shortening/url-shortening.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/url-shortening/url-shortening.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUrlShorteningUrlShorteningComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: top;\n  position: relative;\n}\n\n.container {\n  padding: 0;\n  position: relative;\n  padding-top: 1.2rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  max-width: 1200px;\n  font-family: \"Poppins\", sans-serif;\n  margin: auto;\n}\n\n.container nav {\n  display: -webkit-box;\n  display: flex;\n  color: #9e9aa7;\n  margin-bottom: 2rem;\n}\n\n.container nav .desktop {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.container nav .desktop ul {\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.container nav .desktop ul li {\n  cursor: pointer;\n  margin-right: 1rem;\n}\n\n.container nav .desktop ul li:hover {\n  color: #232127;\n}\n\n.container nav .desktop ul li:last-child {\n  margin-right: auto;\n}\n\n.container nav .desktop hr {\n  display: none;\n}\n\n.container nav button {\n  margin-right: 1rem;\n  color: #9e9aa7;\n}\n\n.container nav button.primary {\n  margin-right: 0;\n  color: #ffffff;\n}\n\n.container .intro {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  margin-bottom: 5rem;\n}\n\n.container .intro .working {\n  width: 60%;\n}\n\n.container .intro h2 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\n.container .intro p {\n  color: #9e9aa7;\n  margin-bottom: 2rem;\n}\n\n.container .intro button {\n  padding: 0rem 2rem 0rem 2rem;\n  border-radius: 1.2rem;\n  font-weight: 900;\n  line-height: 2.4rem;\n}\n\n.offers {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  background-color: rgba(191, 191, 191, 0.35);\n}\n\n.offers .feature {\n  max-width: 1200px;\n  z-index: 1;\n  position: absolute;\n  box-sizing: border-box;\n  top: -4rem;\n  width: calc(100% - 2rem);\n  background-color: #3b3054;\n  padding: 2.7rem;\n  border-radius: 0.5rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.offers .feature > div {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 1rem;\n}\n\n.offers .feature input {\n  padding: 1rem;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  border-radius: 0.3rem;\n  border-width: 0;\n  margin-right: 1rem;\n}\n\n.offers .feature ::-webkit-input-placeholder {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.offers .feature ::-moz-placeholder {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.offers .feature :-ms-input-placeholder {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.offers .feature ::-ms-input-placeholder {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.offers .feature ::placeholder {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.offers .feature button {\n  border-radius: 0.2rem;\n}\n\n.offers .container {\n  padding-top: 10rem;\n  padding-bottom: 12rem;\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.offers .container .links .row {\n  margin-bottom: 1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: #ffffff;\n  padding: 0.7rem 2rem 0.3rem 2rem;\n}\n\n.offers .container .links .row span {\n  text-align: initial;\n}\n\n.offers .container .links .row span:first-child {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.offers .container .links .row span:nth-child(2) {\n  margin-right: 2rem;\n  color: #2acfcf;\n}\n\n.offers .container .links .row button {\n  border-radius: 2px;\n}\n\n.offers .container .links .row button.coppied {\n  background-color: #3b3054;\n}\n\n.offers .container > p {\n  margin-bottom: 5rem;\n}\n\n.offers .container .images {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  text-align: initial;\n}\n\n.offers .container .images .line {\n  background-color: #2acfcf;\n  position: absolute;\n  width: 100%;\n  margin: 0;\n  top: 50%;\n  height: 0.4rem;\n  border: 0;\n}\n\n.offers .container .images .image > div {\n  position: absolute;\n  top: -2rem;\n  display: -webkit-box;\n  display: flex;\n  background-color: #3b3054;\n  width: 5rem;\n  height: 5rem;\n  border-radius: 50%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.offers .container .images .image-records {\n  -webkit-transform: translateY(2rem);\n          transform: translateY(2rem);\n}\n\n.offers .container .images .image-customizable {\n  -webkit-transform: translateY(4rem);\n          transform: translateY(4rem);\n}\n\n.offers .container .images > div {\n  background-color: #ffffff;\n  position: relative;\n  word-spacing: 3.5px;\n  padding-right: 2rem;\n  padding-left: 2rem;\n  padding-top: 3rem;\n  padding-bottom: 1rem;\n  margin-right: 2rem;\n  border-radius: 7px;\n}\n\n.offers .container .images > div h4 {\n  margin-bottom: 0.5rem;\n}\n\n.offers .container .images > div:last-child {\n  margin-right: 0;\n}\n\n.boost {\n  text-align: center;\n  background-color: #3b3054;\n  padding-top: 3rem;\n  padding-bottom: 6rem;\n  background-size: cover;\n}\n\n.boost h1 {\n  color: #ffffff;\n  margin-top: 0;\n}\n\n.boost button {\n  letter-spacing: 1px;\n  word-spacing: 2px;\n}\n\nfooter {\n  padding-top: 3rem;\n  background-color: #232127;\n}\n\nfooter .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-top: 0;\n}\n\nfooter .container .logo {\n  -webkit-box-flex: 0.3;\n          flex-grow: 0.3;\n}\n\nfooter .container .info {\n  display: -webkit-box;\n  display: flex;\n}\n\nfooter .container .info > div {\n  margin-right: 3rem;\n}\n\nfooter .container .info > div:last-child {\n  margin-right: 0;\n}\n\nfooter .container .info p {\n  margin-top: 0;\n  color: #ffffff;\n}\n\nfooter .container .info ul {\n  color: #bfbfbf;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nfooter .container .info ul li {\n  cursor: pointer;\n  margin-bottom: 1rem;\n}\n\nfooter .container .info ul li:hover {\n  color: #2acfcf;\n}\n\nfooter .container .info ul li:last-child {\n  margin-bottom: 0;\n}\n\nfooter .social img {\n  cursor: pointer;\n  margin-right: 1rem;\n}\n\nfooter .social img:hover {\n  -webkit-filter: invert(0) sepia(1) saturate(20) hue-rotate(108deg) brightness(1.2);\n          filter: invert(0) sepia(1) saturate(20) hue-rotate(108deg) brightness(1.2);\n}\n\nfooter .social img:last-child {\n  margin-right: 0;\n}\n\n.invalid {\n  color: #f46262;\n  font-style: italic;\n}\n\n.invalid input {\n  border: 2px solid #f46262 !important;\n}\n\n.invalid input::-webkit-input-placeholder {\n  color: #f46262;\n}\n\n.invalid input::-moz-placeholder {\n  color: #f46262;\n}\n\n.invalid input:-ms-input-placeholder {\n  color: #f46262;\n}\n\n.invalid input::-ms-input-placeholder {\n  color: #f46262;\n}\n\n.invalid input::placeholder {\n  color: #f46262;\n}\n\nbutton {\n  border: none;\n  background: transparent;\n  line-height: 2rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nbutton.primary {\n  background-color: #2acfcf;\n  color: #ffffff;\n  padding: 0 1rem;\n  border-radius: 1rem;\n}\n\nbutton.primary:hover {\n  background-color: #9be2e2;\n}\n\nbutton.primary:focus {\n  background-color: #2acfcf;\n}\n\nbutton:disabled {\n  background-color: #9be2e2;\n}\n\n.menu {\n  display: none;\n}\n\n.menu div {\n  background-color: #bfbfbf;\n  width: 28px;\n  height: 4px;\n  margin-bottom: 6px;\n}\n\n@media only screen and (max-width: 980px) {\n  .container {\n    overflow-x: hidden;\n  }\n  .container nav {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    position: relative;\n  }\n  .container nav .logo {\n    width: 100%;\n    position: relative;\n  }\n  .container nav .logo .menu {\n    display: initial;\n    position: absolute;\n    right: 0;\n  }\n  .container nav .desktop {\n    -webkit-animation: burgerMenu 0.5s forwards;\n            animation: burgerMenu 0.5s forwards;\n    display: none;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative;\n    background-color: #3b3054;\n    width: 41%;\n    border-radius: 16px;\n    padding: 1rem;\n    align-self: baseline;\n    z-index: 2;\n    position: absolute;\n    width: -webkit-fill-available;\n    top: 3rem;\n    color: #ffffff;\n  }\n  @-webkit-keyframes burgerMenu {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes burgerMenu {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .container nav .desktop ul {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0;\n    padding-top: 1rem;\n    text-align: center;\n  }\n  .container nav .desktop ul li {\n    margin-bottom: 0.5rem;\n    margin-right: 0;\n  }\n  .container nav .desktop hr {\n    display: initial;\n    width: 100%;\n    background-color: rgba(191, 191, 191, 0.35);\n    border: none;\n    height: 1px;\n  }\n  .container nav .desktop > div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 100%;\n  }\n  .container nav .desktop > div button {\n    color: #ffffff;\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  .container .intro {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n    text-align: center;\n  }\n  .container .intro .working {\n    width: 100%;\n    align-self: center;\n  }\n\n  .offers .feature > div {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .offers .feature input {\n    margin-right: 0;\n    margin-bottom: 0.7rem;\n  }\n  .offers .feature button {\n    border-radius: 0.5rem;\n    line-height: 3rem;\n    font-size: 1.2rem;\n  }\n  .offers .container {\n    padding-top: 11rem;\n  }\n  .offers .container .links .row {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0.9rem 2rem 0.9rem 2rem;\n  }\n  .offers .container .links .row span {\n    overflow: hidden;\n    line-height: 2.5rem;\n  }\n  .offers .container .links .row span:first-child {\n    border-bottom: 1px solid #bfbfbf;\n  }\n  .offers .container .images {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .offers .container .images .line {\n    width: 0.4rem;\n    margin: 0;\n    top: 0;\n    right: calc(50% - 0.4rem / 2);\n    height: 100%;\n  }\n  .offers .container .images > div {\n    margin-right: 0;\n    margin-bottom: 4rem;\n    text-align: center;\n    word-spacing: 7px;\n  }\n  .offers .container .images > div > div {\n    right: calc(50% - 5rem / 2);\n  }\n\n  .boost button {\n    padding: 0rem 2rem 0rem 2rem;\n    border-radius: 1.2rem;\n    line-height: 2.4rem;\n  }\n\n  footer .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  footer .container .logo {\n    margin-bottom: 3rem;\n  }\n  footer .container .info {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  footer .container .info > div {\n    margin-right: 0;\n    text-align: center;\n  }\n  footer .container .info > div ul li:last-child {\n    margin-bottom: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXJsLXNob3J0ZW5pbmcvQzpcXFVzZXJzXFx0amFuYVxcRGVza3RvcFxcYW5ndWxhci1wcmFjdGljZS9zcmNcXGFwcFxcdXJsLXNob3J0ZW5pbmdcXHVybC1zaG9ydGVuaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cmwtc2hvcnRlbmluZy91cmwtc2hvcnRlbmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURZQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FDVEY7O0FEV0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxjQTFCSztFQTJCTCxtQkFBQTtBQ1RKOztBRFdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ1ROOztBRFdNO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDVFI7O0FEV1E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNUVjs7QURXVTtFQUNFLGNBMUNIO0FDaUNUOztBRFlVO0VBQ0Usa0JBQUE7QUNWWjs7QURlTTtFQUNFLGFBQUE7QUNiUjs7QURpQkk7RUFDRSxrQkFBQTtFQUNBLGNBNURHO0FDNkNUOztBRGlCTTtFQUNFLGVBQUE7RUFDQSxjQTdEQztBQzhDVDs7QURvQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRG9CSTtFQUNFLFVBQUE7QUNsQk47O0FEb0JJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDbEJOOztBRHFCSTtFQUNFLGNBbkZHO0VBb0ZILG1CQUFBO0FDbkJOOztBRHNCSTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDcEJOOztBRHlCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ3RCRjs7QUR3QkU7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBbEhLO0VBbUhMLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUN0Qko7O0FEdUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUNyQk47O0FEd0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDdEJOOztBRHlCSTtFQUNFLGtDQUFBO0FDdkJOOztBRHNCSTtFQUNFLGtDQUFBO0FDdkJOOztBRHNCSTtFQUNFLGtDQUFBO0FDdkJOOztBRHNCSTtFQUNFLGtDQUFBO0FDdkJOOztBRHNCSTtFQUNFLGtDQUFBO0FDdkJOOztBRDBCSTtFQUNFLHFCQUFBO0FDeEJOOztBRDRCRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDMUJKOztBRDZCTTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQWxKQztFQW1KRCxnQ0FBQTtBQzNCUjs7QUQ2QlE7RUFDRSxtQkFBQTtBQzNCVjs7QUQ2QlU7RUFDRSxtQkFBQTtVQUFBLFlBQUE7QUMzQlo7O0FEOEJVO0VBQ0Usa0JBQUE7RUFDQSxjQXJLSDtBQ3lJVDs7QURnQ1E7RUFDRSxrQkFBQTtBQzlCVjs7QURnQ1U7RUFDRSx5QkE1S0g7QUM4SVQ7O0FEb0NJO0VBQ0UsbUJBQUE7QUNsQ047O0FEcUNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ25DTjs7QURxQ007RUFDRSx5QkE3TEM7RUE4TEQsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ25DUjs7QUR1Q1E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkExTUQ7RUEyTUMsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDckNWOztBRHdDUTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUN0Q1Y7O0FEd0NRO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQ3RDVjs7QUQwQ007RUFDRSx5QkFyTkM7RUFzTkQsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3hDUjs7QUQwQ1E7RUFDRSxxQkFBQTtBQ3hDVjs7QUQyQ1E7RUFDRSxlQUFBO0FDekNWOztBRGdEQTtFQUNFLGtCQUFBO0VBQ0EseUJBblBPO0VBb1BQLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQzdDRjs7QUQrQ0U7RUFDRSxjQW5QSztFQW9QTCxhQUFBO0FDN0NKOztBRGdERTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUM5Q0o7O0FEa0RBO0VBQ0UsaUJBQUE7RUFDQSx5QkFoUU87QUNpTlQ7O0FEaURFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGNBQUE7QUMvQ0o7O0FEaURJO0VBQ0UscUJBQUE7VUFBQSxjQUFBO0FDL0NOOztBRGtESTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ2hETjs7QURpRE07RUFDRSxrQkFBQTtBQy9DUjs7QURpRFE7RUFDRSxlQUFBO0FDL0NWOztBRGtETTtFQUNFLGFBQUE7RUFDQSxjQXJSQztBQ3FPVDs7QURrRE07RUFDRSxjQTVSQztFQTZSRCxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDaERSOztBRGtEUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ2hEVjs7QURrRFU7RUFDRSxjQXpTSDtBQ3lQVDs7QURtRFU7RUFDRSxnQkFBQTtBQ2pEWjs7QUR5REk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUN2RE47O0FEeURNO0VBQ0Usa0ZBQUE7VUFBQSwwRUFBQTtBQ3ZEUjs7QUQwRE07RUFDRSxlQUFBO0FDeERSOztBRDhEQTtFQVNFLGNBM1VPO0VBNFVQLGtCQUFBO0FDbkVGOztBRDBERTtFQUNFLG9DQUFBO0FDeERKOztBRDBESTtFQUNFLGNBdlVHO0FDK1FUOztBRHVESTtFQUNFLGNBdlVHO0FDK1FUOztBRHVESTtFQUNFLGNBdlVHO0FDK1FUOztBRHVESTtFQUNFLGNBdlVHO0FDK1FUOztBRHVESTtFQUNFLGNBdlVHO0FDK1FUOztBRGdFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDN0RGOztBRCtERTtFQUNFLHlCQXpWSztFQTBWTCxjQW5WSztFQW9WTCxlQUFBO0VBQ0EsbUJBQUE7QUM3REo7O0FEK0RJO0VBQ0UseUJBdlZHO0FDMFJUOztBRGdFSTtFQUNFLHlCQW5XRztBQ3FTVDs7QURrRUU7RUFDRSx5QkFoV0s7QUNnU1Q7O0FEb0VBO0VBQ0UsYUFBQTtBQ2pFRjs7QURtRUU7RUFDRSx5QkE3V0s7RUE4V0wsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2pFSjs7QURxRUE7RUFDRTtJQUNFLGtCQUFBO0VDbEVGO0VEb0VFO0lBQ0UseUJBQUE7WUFBQSxtQkFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLGtCQUFBO0VDbEVKO0VEb0VJO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VDbEVOO0VEb0VNO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUNsRVI7RURxRUk7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0lBQ0EsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQS9ZQztJQWdaRCxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSw2QkFBQTtJQUNBLFNBQUE7SUFDQSxjQWxaQztFQytVUDtFRHFFTTtJQUNFO01BQ0UsVUFBQTtJQ25FUjtJRHNFTTtNQUNFLFVBQUE7SUNwRVI7RUFDRjtFRDZETTtJQUNFO01BQ0UsVUFBQTtJQ25FUjtJRHNFTTtNQUNFLFVBQUE7SUNwRVI7RUFDRjtFRHVFTTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDckVSO0VEc0VRO0lBQ0UscUJBQUE7SUFDQSxlQUFBO0VDcEVWO0VEd0VNO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsMkNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ3RFUjtFRHdFTTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFdBQUE7RUN0RVI7RUR3RVE7SUFDRSxjQXRiSDtJQXViRyxlQUFBO0lBQ0EsbUJBQUE7RUN0RVY7RUQ0RUU7SUFDRSw0QkFBQTtJQUFBLDhCQUFBO1lBQUEsOEJBQUE7SUFDQSxrQkFBQTtFQzFFSjtFRDRFSTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQzFFTjs7RURpRkk7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUM5RU47RURpRkk7SUFDRSxlQUFBO0lBQ0EscUJBQUE7RUMvRU47RURrRkk7SUFDRSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUNoRk47RURvRkU7SUFDRSxrQkFBQTtFQ2xGSjtFRHFGTTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLGdDQUFBO0VDbkZSO0VEcUZRO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQ25GVjtFRHFGVTtJQUNFLGdDQUFBO0VDbkZaO0VEeUZJO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDdkZOO0VEeUZNO0lBQ0UsYUFBQTtJQUNBLFNBQUE7SUFDQSxNQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VDdkZSO0VEMEZNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQ3hGUjtFRDBGUTtJQUNFLDJCQUFBO0VDeEZWOztFRGdHRTtJQUNFLDRCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQzdGSjs7RURrR0U7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDL0ZKO0VEaUdJO0lBQ0UsbUJBQUE7RUMvRk47RURpR0k7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDL0ZOO0VEaUdNO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VDL0ZSO0VEbUdZO0lBQ0UsbUJBQUE7RUNqR2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VybC1zaG9ydGVuaW5nL3VybC1zaG9ydGVuaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogaHNsKDE4MCwgNjYlLCA0OSUpO1xyXG4kY29sb3IyOiBoc2woMjU3LCAyNyUsIDI2JSk7XHJcbiRjb2xvcjM6IGhzbCgwLCA4NyUsIDY3JSk7XHJcbiRjb2xvcjQ6IGhzbCgwLCAwJSwgNzUlKTtcclxuJGNvbG9yNTogaHNsKDI1NywgNyUsIDYzJSk7XHJcbiRjb2xvcjY6IGhzbCgyNTUsIDExJSwgMjIlKTtcclxuJGNvbG9yNzogaHNsKDI2MCwgOCUsIDE0JSk7XHJcbiRjb2xvcjg6ICNmZmZmZmY7XHJcbiRjb2xvcjk6ICM5YmUyZTI7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiB0b3A7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMS4ycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICRjb2xvcjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIGNvbG9yOiAkY29sb3I1O1xyXG5cclxuICAgICAgJi5wcmltYXJ5IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnRybyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuXHJcbiAgICAud29ya2luZyB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICRjb2xvcjU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMHJlbSAycmVtIDByZW0gMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm9mZmVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I0LCAwLjM1KTtcclxuXHJcbiAgLmZlYXR1cmUge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRvcDogLTRyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgcGFkZGluZzogMi43cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmxpbmtzIHtcclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAycmVtIDAuM3JlbSAycmVtO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cclxuICAgICAgICAgICYuY29wcGllZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2VzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG5cclxuICAgICAgLmxpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDAuNHJlbTtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAtMnJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJlY29yZHMge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJyZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWN1c3RvbWl6YWJsZSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yODtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd29yZC1zcGFjaW5nOiAzLjVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJvb3N0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICBoMSB7XHJcbiAgICBjb2xvcjogJGNvbG9yODtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHdvcmQtc3BhY2luZzogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I3O1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMC4zO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yODtcclxuICAgICAgfVxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zb2NpYWwge1xyXG4gICAgaW1nIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBmaWx0ZXI6IGludmVydCgwKSBzZXBpYSgxKSBzYXR1cmF0ZSgyMCkgaHVlLXJvdGF0ZSgxMDhkZWcpIGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3IzICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogJGNvbG9yMztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbG9yOiAkY29sb3IzO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICYucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgY29sb3I6ICRjb2xvcjg7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I5O1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I0O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbiAgICBuYXYge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kZXNrdG9wIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1cmdlck1lbnUgMC41cyBmb3J3YXJkcztcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxuICAgICAgICB3aWR0aDogNDElO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICB0b3A6IDNyZW07XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjg7XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgYnVyZ2VyTWVudSB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yNCwgMC4zNSk7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yODtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnRybyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgLndvcmtpbmcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm9mZmVycyB7XHJcbiAgICAuZmVhdHVyZSB7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZy10b3A6IDExcmVtO1xyXG5cclxuICAgICAgLmxpbmtzIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMnJlbSAwLjlyZW0gMnJlbTtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3I0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW1hZ2VzIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICB3aWR0aDogMC40cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IGNhbGMoNTAlIC0gMC40cmVtIC8gMik7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd29yZC1zcGFjaW5nOiA3cHg7XHJcblxyXG4gICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICByaWdodDogY2FsYyg1MCUgLSA1cmVtIC8gMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm9vc3Qge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMHJlbSAycmVtIDByZW0gMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmluZm8ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogdG9wO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxLjJyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNvbnRhaW5lciBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogIzllOWFhNztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jb250YWluZXIgbmF2IC5kZXNrdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIG5hdiAuZGVza3RvcCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciBuYXYgLmRlc2t0b3AgdWwgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5jb250YWluZXIgbmF2IC5kZXNrdG9wIHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICMyMzIxMjc7XG59XG4uY29udGFpbmVyIG5hdiAuZGVza3RvcCB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmNvbnRhaW5lciBuYXYgLmRlc2t0b3AgaHIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciBuYXYgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogIzllOWFhNztcbn1cbi5jb250YWluZXIgbmF2IGJ1dHRvbi5wcmltYXJ5IHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jb250YWluZXIgLmludHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLmNvbnRhaW5lciAuaW50cm8gLndvcmtpbmcge1xuICB3aWR0aDogNjAlO1xufVxuLmNvbnRhaW5lciAuaW50cm8gaDIge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY29udGFpbmVyIC5pbnRybyBwIHtcbiAgY29sb3I6ICM5ZTlhYTc7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uY29udGFpbmVyIC5pbnRybyBidXR0b24ge1xuICBwYWRkaW5nOiAwcmVtIDJyZW0gMHJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG59XG5cbi5vZmZlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4zNSk7XG59XG4ub2ZmZXJzIC5mZWF0dXJlIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdG9wOiAtNHJlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzMDU0O1xuICBwYWRkaW5nOiAyLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5vZmZlcnMgLmZlYXR1cmUgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLm9mZmVycyAuZmVhdHVyZSBpbnB1dCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5vZmZlcnMgLmZlYXR1cmUgOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5vZmZlcnMgLmZlYXR1cmUgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuLm9mZmVycyAuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTJyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vZmZlcnMgLmNvbnRhaW5lciAubGlua3MgLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMC43cmVtIDJyZW0gMC4zcmVtIDJyZW07XG59XG4ub2ZmZXJzIC5jb250YWluZXIgLmxpbmtzIC5yb3cgc3BhbiB7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG4ub2ZmZXJzIC5jb250YWluZXIgLmxpbmtzIC5yb3cgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5vZmZlcnMgLmNvbnRhaW5lciAubGlua3MgLnJvdyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgY29sb3I6ICMyYWNmY2Y7XG59XG4ub2ZmZXJzIC5jb250YWluZXIgLmxpbmtzIC5yb3cgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLm9mZmVycyAuY29udGFpbmVyIC5saW5rcyAucm93IGJ1dHRvbi5jb3BwaWVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzA1NDtcbn1cbi5vZmZlcnMgLmNvbnRhaW5lciA+IHAge1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLm9mZmVycyAuY29udGFpbmVyIC5pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG4ub2ZmZXJzIC5jb250YWluZXIgLmltYWdlcyAubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWNmY2Y7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogMC40cmVtO1xuICBib3JkZXI6IDA7XG59XG4ub2ZmZXJzIC5jb250YWluZXIgLmltYWdlcyAuaW1hZ2UgPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjMwNTQ7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub2ZmZXJzIC5jb250YWluZXIgLmltYWdlcyAuaW1hZ2UtcmVjb3JkcyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycmVtKTtcbn1cbi5vZmZlcnMgLmNvbnRhaW5lciAuaW1hZ2VzIC5pbWFnZS1jdXN0b21pemFibGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHJlbSk7XG59XG4ub2ZmZXJzIC5jb250YWluZXIgLmltYWdlcyA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd29yZC1zcGFjaW5nOiAzLjVweDtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLm9mZmVycyAuY29udGFpbmVyIC5pbWFnZXMgPiBkaXYgaDQge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ub2ZmZXJzIC5jb250YWluZXIgLmltYWdlcyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uYm9vc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjMwNTQ7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5ib29zdCBoMSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmJvb3N0IGJ1dHRvbiB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHdvcmQtc3BhY2luZzogMnB4O1xufVxuXG5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjEyNztcbn1cbmZvb3RlciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5sb2dvIHtcbiAgZmxleC1ncm93OiAwLjM7XG59XG5mb290ZXIgLmNvbnRhaW5lciAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5mb290ZXIgLmNvbnRhaW5lciAuaW5mbyA+IGRpdiB7XG4gIG1hcmdpbi1yaWdodDogM3JlbTtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5pbmZvID4gZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5mb290ZXIgLmNvbnRhaW5lciAuaW5mbyBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5mb290ZXIgLmNvbnRhaW5lciAuaW5mbyB1bCB7XG4gIGNvbG9yOiAjYmZiZmJmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5mb290ZXIgLmNvbnRhaW5lciAuaW5mbyB1bCBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5pbmZvIHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICMyYWNmY2Y7XG59XG5mb290ZXIgLmNvbnRhaW5lciAuaW5mbyB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmZvb3RlciAuc29jaWFsIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuZm9vdGVyIC5zb2NpYWwgaW1nOmhvdmVyIHtcbiAgZmlsdGVyOiBpbnZlcnQoMCkgc2VwaWEoMSkgc2F0dXJhdGUoMjApIGh1ZS1yb3RhdGUoMTA4ZGVnKSBicmlnaHRuZXNzKDEuMik7XG59XG5mb290ZXIgLnNvY2lhbCBpbWc6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmludmFsaWQge1xuICBjb2xvcjogI2Y0NjI2MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmludmFsaWQgaW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjQ2MjYyICFpbXBvcnRhbnQ7XG59XG4uaW52YWxpZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2Y0NjI2Mjtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbi5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhY2ZjZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliZTJlMjtcbn1cbmJ1dHRvbi5wcmltYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhY2ZjZjtcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YmUyZTI7XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICAuY29udGFpbmVyIG5hdiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuY29udGFpbmVyIG5hdiAubG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5jb250YWluZXIgbmF2IC5sb2dvIC5tZW51IHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgfVxuICAuY29udGFpbmVyIG5hdiAuZGVza3RvcCB7XG4gICAgYW5pbWF0aW9uOiBidXJnZXJNZW51IDAuNXMgZm9yd2FyZHM7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjMwNTQ7XG4gICAgd2lkdGg6IDQxJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgdG9wOiAzcmVtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIEBrZXlmcmFtZXMgYnVyZ2VyTWVudSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAuY29udGFpbmVyIG5hdiAuZGVza3RvcCB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIG5hdiAuZGVza3RvcCB1bCBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuY29udGFpbmVyIG5hdiAuZGVza3RvcCBociB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MSwgMTkxLCAxOTEsIDAuMzUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgfVxuICAuY29udGFpbmVyIG5hdiAuZGVza3RvcCA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWluZXIgbmF2IC5kZXNrdG9wID4gZGl2IGJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmNvbnRhaW5lciAuaW50cm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW50cm8gLndvcmtpbmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuXG4gIC5vZmZlcnMgLmZlYXR1cmUgPiBkaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm9mZmVycyAuZmVhdHVyZSBpbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcbiAgfVxuICAub2ZmZXJzIC5mZWF0dXJlIGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5vZmZlcnMgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDExcmVtO1xuICB9XG4gIC5vZmZlcnMgLmNvbnRhaW5lciAubGlua3MgLnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwLjlyZW0gMnJlbSAwLjlyZW0gMnJlbTtcbiAgfVxuICAub2ZmZXJzIC5jb250YWluZXIgLmxpbmtzIC5yb3cgc3BhbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICB9XG4gIC5vZmZlcnMgLmNvbnRhaW5lciAubGlua3MgLnJvdyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjtcbiAgfVxuICAub2ZmZXJzIC5jb250YWluZXIgLmltYWdlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAub2ZmZXJzIC5jb250YWluZXIgLmltYWdlcyAubGluZSB7XG4gICAgd2lkdGg6IDAuNHJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDAuNHJlbSAvIDIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAub2ZmZXJzIC5jb250YWluZXIgLmltYWdlcyA+IGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtc3BhY2luZzogN3B4O1xuICB9XG4gIC5vZmZlcnMgLmNvbnRhaW5lciAuaW1hZ2VzID4gZGl2ID4gZGl2IHtcbiAgICByaWdodDogY2FsYyg1MCUgLSA1cmVtIC8gMik7XG4gIH1cblxuICAuYm9vc3QgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwcmVtIDJyZW0gMHJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICB9XG5cbiAgZm9vdGVyIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBmb290ZXIgLmNvbnRhaW5lciAubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuICBmb290ZXIgLmNvbnRhaW5lciAuaW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIC5pbmZvID4gZGl2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIC5pbmZvID4gZGl2IHVsIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/url-shortening/url-shortening.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/url-shortening/url-shortening.component.ts ***!
    \************************************************************/

  /*! exports provided: UrlShorteningComponent */

  /***/
  function srcAppUrlShorteningUrlShorteningComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlShorteningComponent", function () {
      return UrlShorteningComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _url_shortening_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./url-shortening.service */
    "./src/app/url-shortening/url-shortening.service.ts");
    /* harmony import */


    var _url_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./url.model */
    "./src/app/url-shortening/url.model.ts");

    var UrlShorteningComponent =
    /*#__PURE__*/
    function () {
      function UrlShorteningComponent(urlShorteningService) {
        _classCallCheck(this, UrlShorteningComponent);

        this.urlShorteningService = urlShorteningService;
        this.showDesktop = false;
        this.linkStorage = [];
      }

      _createClass(UrlShorteningComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;
          this.checkWidth();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          this.checkWidth();

          if (localStorage.getItem('linkStorage')) {
            this.linkStorage = JSON.parse(localStorage.getItem('linkStorage'));
          }
        }
      }, {
        key: "checkWidth",
        value: function checkWidth() {
          if (this.innerWidth > 980) {
            this.displayStyle = 'flex';
          } else {
            this.showDesktop = false;
            this.displayStyle = 'none';
          }
        }
      }, {
        key: "menuClicked",
        value: function menuClicked() {
          this.showDesktop = !this.showDesktop;

          if (this.showDesktop) {
            this.displayStyle = this.showDesktop && 'flex';
          } else {
            this.displayStyle = 'none';
          }
        }
      }, {
        key: "shortenLink",
        value: function shortenLink(originalLink) {
          var _this27 = this;

          this.urlShorteningService.createShortenedLink(originalLink).subscribe(function (shortenedLink) {
            _this27.hashId = shortenedLink.hashid;
            _this27.link = 'https://rel.ink/' + _this27.hashId;
            _this27.linkStorage.findIndex(function (arr) {
              return arr.originalUrl == originalLink;
            }) === -1 ? _this27.linkStorage.push(new _url_model__WEBPACK_IMPORTED_MODULE_3__["Url"](shortenedLink.url, _this27.link)) : _this27.errorMessage = 'Link has already been added';
            localStorage.setItem('linkStorage', JSON.stringify(_this27.linkStorage));

            _this27.linkInput.reset();
          }, function (error) {
            _this27.errorMessage = error;

            _this27.linkInput.reset();
          });
        }
      }, {
        key: "copyText",
        value: function copyText(text) {
          var selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.value = text;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
          this.textCoppied = text;
        }
      }]);

      return UrlShorteningComponent;
    }();

    UrlShorteningComponent.ctorParameters = function () {
      return [{
        type: _url_shortening_service__WEBPACK_IMPORTED_MODULE_2__["UrlShorteningService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('linkInput', {
      "static": true
    })], UrlShorteningComponent.prototype, "linkInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], UrlShorteningComponent.prototype, "onResize", null);
    UrlShorteningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-url-shortening',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./url-shortening.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/url-shortening/url-shortening.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./url-shortening.component.scss */
      "./src/app/url-shortening/url-shortening.component.scss"))["default"]]
    })], UrlShorteningComponent);
    /***/
  },

  /***/
  "./src/app/url-shortening/url-shortening.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/url-shortening/url-shortening.service.ts ***!
    \**********************************************************/

  /*! exports provided: UrlShorteningService */

  /***/
  function srcAppUrlShorteningUrlShorteningServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlShorteningService", function () {
      return UrlShorteningService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/observable/throwError */
    "./node_modules/rxjs/internal/observable/throwError.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__);

    var UrlShorteningService =
    /*#__PURE__*/
    function () {
      function UrlShorteningService(httpClinet) {
        _classCallCheck(this, UrlShorteningService);

        this.httpClinet = httpClinet;
        this.url = 'https://rel.ink/api/links/';
      }

      _createClass(UrlShorteningService, [{
        key: "createShortenedLink",
        value: function createShortenedLink(link) {
          return this.httpClinet.post(this.url, {
            "url": link
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(errorRes) {
          var errorMessage = 'An unknown error occured!';

          if (!errorRes.error) {
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
          }

          switch (errorRes.message) {
            case 'Http failure response for https://rel.ink/api/links/: 400 OK':
              errorMessage = 'Enter a valid URL';
              break;

            default:
              errorMessage = 'An unknown error occured!';
          }

          return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }]);

      return UrlShorteningService;
    }();

    UrlShorteningService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UrlShorteningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UrlShorteningService);
    /***/
  },

  /***/
  "./src/app/url-shortening/url.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/url-shortening/url.model.ts ***!
    \*********************************************/

  /*! exports provided: Url */

  /***/
  function srcAppUrlShorteningUrlModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Url", function () {
      return Url;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Url = function Url(originalUrl, shortendUrl) {
      _classCallCheck(this, Url);

      this.originalUrl = originalUrl;
      this.shortendUrl = shortendUrl;
    };
    /***/

  },

  /***/
  "./src/assets/conference/stylesheets/reset.scss":
  /*!******************************************************!*\
    !*** ./src/assets/conference/stylesheets/reset.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsConferenceStylesheetsResetScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY29uZmVyZW5jZS9zdHlsZXNoZWV0cy9DOlxcVXNlcnNcXHRqYW5hXFxEZXNrdG9wXFxhbmd1bGFyLXByYWN0aWNlL3NyY1xcYXNzZXRzXFxjb25mZXJlbmNlXFxzdHlsZXNoZWV0c1xccmVzZXQuc2NzcyIsInNyYy9hc3NldHMvY29uZmVyZW5jZS9zdHlsZXNoZWV0cy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENBLGdEQUFBOztBQUNBOzs7Ozs7Ozs7OztFQVdFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QUREQTs7RUFFRSxnQkFBQTtBQ0lGOztBREZBOztFQUVFLFlBQUE7QUNLRjs7QURIQTs7OztFQUlFLFdBQUE7RUFDQSxhQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2Fzc2V0cy9jb25mZXJlbmNlL3N0eWxlc2hlZXRzL3Jlc2V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5LFxyXG5kaXYsXHJcbnNwYW4sXHJcbmFwcGxldCxcclxub2JqZWN0LFxyXG5pZnJhbWUsXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbnAsXHJcbmJsb2NrcXVvdGUsXHJcbnByZSxcclxuYSxcclxuYWJicixcclxuYWNyb255bSxcclxuYWRkcmVzcyxcclxuYmlnLFxyXG5jaXRlLFxyXG5jb2RlLFxyXG5kZWwsXHJcbmRmbixcclxuZW0sXHJcbmltZyxcclxuaW5zLFxyXG5rYmQsXHJcbnEsXHJcbnMsXHJcbnNhbXAsXHJcbnNtYWxsLFxyXG5zdHJpa2UsXHJcbnN0cm9uZyxcclxuc3ViLFxyXG5zdXAsXHJcbnR0LFxyXG52YXIsXHJcbmIsXHJcbnUsXHJcbmksXHJcbmNlbnRlcixcclxuZGwsXHJcbmR0LFxyXG5kZCxcclxub2wsXHJcbnVsLFxyXG5saSxcclxuZmllbGRzZXQsXHJcbmZvcm0sXHJcbmxhYmVsLFxyXG5sZWdlbmQsXHJcbnRhYmxlLFxyXG5jYXB0aW9uLFxyXG50Ym9keSxcclxudGZvb3QsXHJcbnRoZWFkLFxyXG50cixcclxudGgsXHJcbnRkLFxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuY2FudmFzLFxyXG5kZXRhaWxzLFxyXG5lbWJlZCxcclxuZmlndXJlLFxyXG5maWdjYXB0aW9uLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbm91dHB1dCxcclxucnVieSxcclxuc2VjdGlvbixcclxuc3VtbWFyeSxcclxudGltZSxcclxubWFyayxcclxuYXVkaW8sXHJcbnZpZGVvIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5ib2R5IHtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5vbCxcclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgcXVvdGVzOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGU6YmVmb3JlLFxyXG5ibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSxcclxucTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcbiIsImh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyBTZVNKX7LVfqYT7w_lsLCXjw6ewPPsgY0'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\tjana\Desktop\angular-practice\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map