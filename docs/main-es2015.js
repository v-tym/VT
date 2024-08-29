(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/about-me.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/about-me.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<H1 *ngIf=\"ln=='RU'\">Виталий Тимошенко | {{myFullYear}} <span>лет</span></H1>-->\n<H1 *ngIf=\"ln=='UA'\">Віталій Тимошенко | {{myFullYear}} <span>років</span></H1>\n<H1 *ngIf=\"ln=='EN'\">Vitaliy Tymoshenko | {{myFullYear}} <span>years old</span></H1>\n<!--<app-sidebar></app-sidebar>-->\n<app-resume></app-resume>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn\" [style.backgroundImage]=\"'url('+ path1 +  id + path2 + clicks + path3 +')'\">\n    <button type=\"button\" class=\"slider-prev\" (click)=\"prevImg()\"> <p>&#x2B9C; Click</p></button>\n    <button type=\"button\" class=\"slider-next\" (click)=\"nextImg()\"><p>Click &#x2B9E;</p></button>\n    <div class=\"label\"><label for=\"{{x}}\" *ngFor=\"let x of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]\" [class.red]=\"x === clicks\" (click)=\"labelImg(x)\"></label></div>\n</div>\n<div class=\"opus\">    \n    <div *ngIf=\"ln=='EN'\" class=\"card\">\n        <h2>{{imgInfo[clicks-1].Name_EN}} - {{imgInfo[clicks-1].Location_EN}}</h2>\n        <h2>{{imgInfo[clicks-1].Using}}</h2>\n        <div class=\"resp\">            \n            <h3>{{imgInfo[clicks-1].Responsibility_EN}}</h3>\n        </div>        \n    </div>\n    \n    <div *ngIf=\"ln=='UA'\">\n        <h2>{{imgInfo[clicks-1].Name_UA}} - {{imgInfo[clicks-1].Location_UA}}</h2>\n        <h2>{{imgInfo[clicks-1].Using}}</h2>\n        <div class=\"resp\">            \n            <h3>{{imgInfo[clicks-1].Responsibility_UA}}</h3>\n        </div>   \n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/resume/resume.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/resume/resume.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"a6\">    \n    <h2 *ngIf=\"ln=='UA'\" class=\"a1\">НАВИЧКИ</h2>\n    <h2 *ngIf=\"ln=='EN'\" class=\"a1\">SKILLS</h2>\n  \n    <div class=\"engine\">\n      <div class=\"s1\">\n        <h3 *ngIf=\"ln=='UA'\">Інженерія</h3>\n        <h3 *ngIf=\"ln=='EN'\">Engineering</h3>\n        <ul>\n          <li *ngFor=\"let _skilsEng of skilsEng\"><h4>{{_skilsEng.tool_engineer}}</h4></li>\n        </ul>\n      </div>\n  \n     <!-- <div class=\"q1\">\n        <div>\n          <a href=\"https://www.autodesk.ru/products/autocad/overview\" target=\"_blank\">\n            <img src=\"./img/autocad.png\" alt=\"AutoCAD\"></a>\n        </div>\n        <div>\n          <a href=\"https://www.autodesk.ru/products/inventor/overview\" target=\"_blank\">\n            <img src=\"./img/Inventor.png\" alt=\"Inventor\"></a>\n        </div>\n        <div>\n          <a href=\"https://kompas.ru/\" target=\"_blank\">\n            <img src=\"./img/logo-Kompas2.png\" alt=\"Компас 3D\"></a>\n        </div>\n        <div>\n          <a href=\"https://www.solidworks.com/ru\" target=\"_blank\">\n            <img src=\"./img/solidw.png\" alt=\"SolidWorks\"></a>\n        </div>\n        <div>\n          <a href=\"https://www.autodesk.com/products/advance-steel/overview\" target=\"_blank\">\n            <img src=\"./img/Autodesk-Advance-Steel.png\" alt=\"Advance Steel\"></a>\n        </div>\n        <div>\n          <a href=\"https://www.tekla.com/ru\" target=\"_blank\">\n            <img src=\"./img/tekla.png\" alt=\"Tekla\"></a>\n        </div>\n        <div>\n          <a href=\"https://www.ansys.com/\" target=\"_blank\">\n            <img src=\"./img/logo-ansys.jpg\" alt=\"ANSYS\"></a>\n        </div>\n        <div>\n          <a href=\"https://www.hypertherm.com/ru/hypertherm/pronest/pronest-cadcam-nesting-software/\" target=\"_blank\">\n            <img src=\"./img/pronest.png\" alt=\"Pronest\"></a>\n        </div>\n      </div>\n    </div> -->\n  \n    <div class=\"program\">\n      <div class=\"s1\">\n        <h3 *ngIf=\"ln=='UA'\">Програмування</h3>\n        <h3 *ngIf=\"ln=='EN'\">Programming</h3>\n        <ul class=\"list\">\n          <li class=\"expList\" *ngFor=\"let _skilsProg of skilsProg\"><h4>{{_skilsProg.tool_programing}}</h4></li>\n        </ul>\n      </div>\n     <!-- <div class=\"q2\">\n        <div>\n          <a href=\"https://docs.microsoft.com/ru-ru/dotnet/csharp/tour-of-csharp/\" target=\"_blank\">\n            <img src=\"./img/Csharp_Logo.png\" alt=\"C Sharp\"></a>\n        </div>\n        <div>\n          <a href=\"https://www.w3.org/html/\" target=\"_blank\">\n            <img src=\"./img/HTML.png\" alt=\"HTML\"></a>\n        </div>\n        <div>\n          <a href=\"https://ru.wikipedia.org/wiki/CSS\" target=\"_blank\">\n            <img src=\"./img/css3.png\" alt=\"CSS\"></a>\n        </div>\n        <div>\n          <a href=\"https://angular.io/\" target=\"_blank\">\n            <img src=\"./img/Angular.png\" alt=\"Angular\"></a>\n        </div>\n        <div>\n          <a href=\"https://www.typescriptlang.org/\" target=\"_blank\">\n            <img src=\"./img/typeScript.png\" alt=\"TypeScript\"></a>\n        </div>\n      </div>\n    </div>-->\n  </div>\n  \n  <div class=\"expeience\" *ngIf=\"a4\">    \n    <h2 *ngIf=\"ln=='UA'\" class=\"a1\">ДОСВІД РОБОТИ</h2>\n    <h2 *ngIf=\"ln=='EN'\" class=\"a1\">CAREER SUMMARY</h2>\n  \n    <div *ngIf=\"ln=='UA'\">\n      <div class=\"block card\" *ngFor=\"let e of experience\">\n        <div class=\"column\"> </div>\n        <div class=\"float\">\n          <div class=\"dd\"><span><strong>{{e.Position_UA | uppercase}} - {{e.Name_Company_UA}}</strong></span></div>\n          <div class=\"dd\">{{e.Company_resp_UA}}</div>\n          <div class=\"dd\"><!-- <span><strong>Duration: </strong></span> -->{{e.Period_UA}}</div>\n          <!-- <div class=\"dd\"><span><strong>Company: </strong></span></div> -->\n          <div class=\"dd\" *ngIf=\"e.Site!==''\"><!-- <span><strong>Description: </strong></span> --><a href=\"{{e.Site}}\"\n              target=\"_blank\">{{e.Site}}</a></div>\n              <p></p>\n          <div class=\"dd\"><span>обов'язки:</span></div>\n          <ul>\n            <li *ngFor=\"let exs of e.Responsibility_UA\">\n              {{exs}}\n            </li>\n          </ul>\n        </div>\n        <!-- <app-experience-img [id]=\"e.id\"></app-experience-img> -->\n      </div>\n    </div>    \n    <div *ngIf=\"ln=='EN'\">\n      <div class=\"block card\" *ngFor=\"let e of experience\">\n        <div class=\"column\"> </div>\n        <div class=\"float\">\n          <div class=\"dd\"><span><strong>{{e.Position_EN | uppercase}} - {{e.Name_Company_EN}}</strong></span></div>\n          <div class=\"dd\">{{e.Company_resp_EN}}</div>\n          <div class=\"dd\"><!-- <span><strong>Duration: </strong></span> -->{{e.Period_EN}}</div>\n          <!-- <div class=\"dd\"><span><strong>Company: </strong></span></div> -->\n          <div class=\"dd\" *ngIf=\"e.Site!==''\"><!-- <span><strong>Description: </strong></span> --><a href=\"{{e.Site}}\"\n              target=\"_blank\">{{e.Site}}</a></div>\n              <p></p>\n          <div class=\"dd\"><span>responsibilities:</span></div>\n          <ul>\n            <li *ngFor=\"let exs of e.Responsibility_EN\">\n              {{exs}}\n            </li>\n          </ul>\n        </div>\n        <!-- <app-experience-img [id]=\"e.id\"></app-experience-img> -->\n      </div>\n    </div>\n  </div>\n  \n  <div *ngIf=\"a5\">    \n    <h2 *ngIf=\"ln=='UA'\" class=\"a1\">ОСВІТА</h2>\n    <h2 *ngIf=\"ln=='EN'\" class=\"a1\">EDUCATION</h2>    \n  \n    <div *ngIf=\"ln=='UA'\">\n      <div class=\"ed\">\n        <p><strong>Інститут: </strong>Чернігівський національний технологічний університет</p>\n        <p><strong>Кваліфікація: </strong>Інженер зварювального виробництва</p>\n        <p><strong>Час навчання: </strong>Вересень 2009 - Червень 2014</p>\n      </div>\n  \n      <h2 class=\"a1\">ДОДАТКОВА ОСВІТА</h2>\n      <div class=\"ed\">\n        <p>Чернігівський професійний ліцей залізничного транспорту №5</p>\n        <p>Електрогазозварник 3 розряду</p>\n      </div>\n    </div>\n  \n    <div *ngIf=\"ln=='EN'\">\n      <div class=\"ed\">\n        <p><strong>Institution: </strong>Chernihiv National University of Technology</p>\n        <p><strong>Qualification: </strong>welding production engineer</p>\n        <p><strong>Date(s): </strong> September 2009 - June 2014</p>\n      </div>\n  \n      <h2 class=\"a1\">ADDITIONAL EDUCATION</h2>\n      <div class=\"ed\">\n        <p>Chernihiv Vocational Lyceum of Railway Transport №5</p>\n        <p>Electric gas welder of 3-rd category</p>\n      </div>\n    </div>\n  </div>\n<!-- \n  <div *ngIf=\"ln=='UA'\" class=\"a1\">\n    <h2>Робочі моменти в деталях</h2>\n  </div>\n\n  <div *ngIf=\"ln=='EN'\" class=\"a1\">\n    <h2>Some works in detail</h2>\n  </div>  \n  <div>\n    <app-experience-img [id]=1></app-experience-img>\n  </div> -->\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/app-obout-me.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/app-obout-me.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main\"><app-about-me>Loading...</app-about-me></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/sidebar/sidebar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/sidebar/sidebar.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   <div *ngIf=\"ln=='UA'\">\n     <div class=\"btn-group-toggle\" [class.active]=\"a6\">\n       <label  class=\"btn btn-secondary \">\n         <input type=\"checkbox\" name=\"option1\" value=\"a6\" checked [(ngModel)]=\"a6\" (change)='Toggle()'> Навички\n       </label>\n     </div>\n     <div class=\"btn-group-toggle\"  [class.active]=\"a4\">\n       <label  class=\"btn btn-secondary \">\n         <input type=\"checkbox\" name=\"option1\" value=\"a4\" checked [(ngModel)]=\"a4\" (change)='Toggle()'> Досвід_роботи\n       </label>\n     </div>\n     <div class=\"btn-group-toggle\" [class.active]=\"a5\">\n       <label  class=\"btn btn-secondary \" >\n         <input type=\"checkbox\" name=\"option1\" value=\"a5\" checked [(ngModel)]=\"a5\" (change)='Toggle()'> Освіта\n       </label>\n     </div>\n   \n   </div>\n   \n   <div *ngIf=\"ln=='EN'\">\n     <div class=\"btn-group-toggle\" [class.active]=\"a6\">\n       <label  class=\"btn btn-secondary \" >\n         <input type=\"checkbox\" name=\"option1\" value=\"a6\" checked [(ngModel)]=\"a6\" (change)='Toggle()'> Skills\n       </label>\n     </div>\n     <div class=\"btn-group-toggle\" [class.active]=\"a4\">\n       <label  class=\"btn btn-secondary \" >\n         <input type=\"checkbox\" name=\"option1\" value=\"a4\" checked [(ngModel)]=\"a4\" (change)='Toggle()'> Experience\n       </label>\n     </div>\n     <div class=\"btn-group-toggle\" [class.active]=\"a5\">\n       <label  class=\"btn btn-secondary \" >\n         <input type=\"checkbox\" name=\"option1\" value=\"a5\" checked [(ngModel)]=\"a5\" (change)='Toggle()'> Education\n       </label>\n     </div>   \n   </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-child></app-child>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu id=\"header\"></app-menu>\n<router-outlet></router-outlet>\n<div class=\"footer\">\n   <!--\n   <div class=\"text\" *ngIf = \"_ln === 'RU'\">\n      Copyright © vit.mk.ua, 2018-2024. Все права защищены.\n   </div>\n   <div class=\"text\" *ngIf = \"_ln === 'UA'\">\n      Copyright © vit.mk.ua, 2018-2024. Всі права захищені.\n   </div>\n   <div class=\"text\" *ngIf = \"_ln === 'EN'\">\n      Copyright. All rights reserved.\n   </div> -->\n   <div id=\"social-s\">      \n      <a href=\"https://www.facebook.com/profile.php?id=100021727781775\" target=\"_blank\"><img height=\"50\" src=\"./img/iconmonstr-facebook-5-240.png\" alt=\"facebook\" title=\"facebook\"></a>\n      <a href=\"https://www.instagram.com/Vitaliy_Tymoshenko/\" target=\"_blank\"><img height=\"50\" src=\"./img/iconmonstr-instagram-15-240.png\" alt=\"instagram\" title=\"instagram\"></a>\n      <!--<a href=\"skype:wizard3230?add\" target=\"_blank\"><img height=\"50\" src=\"./img/iconmonstr-skype-5-240.png\" alt=\"skype\" title=\"skype\"></a>-->\n      <a href=\"https://github.com/v-tym\" target=\"_blank\"><img height=\"50\" src=\"./img/iconmonstr-github-1-240.png\" alt=\"github\" title=\"github\"></a>\n   </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/child/main/main.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child/main/main.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"photo\"></div>\n    <div class=\"information\" *ngIf=\"_lang=='UA'\">\n      <p>Вітаю,</p>\n      <p>Мене звати Віталій, я маю великий досвід роботи в інженерії, зокрема у виробництві металоконструкцій\n         та машинобудівній галузі. Я працював як над незалежними, так і над командними проектами та маю досвід\n          роботи на всіх етапах циклу розробки, від спілкування з Клієнтом до випуску виробничих креслень. \n          Крім того, маю досвід створення шаблонів звітів, параметричних вузлів і невеликих додатків.</p>\n      <p>На цій платформі ви можете знайти інформацію про мій досвід роботи та портфоліо моїх проектів, \n        включаючи описи та 3D-зображення. Зверніть увагу, що не всі мої роботи входять до портфоліо.</p>\n      <p>Хоча я маю широкий спектр інтересів, я зосереджений на програмуванні та інженнерії. Дякую за увагу.</p>\n      \n    </div> \n      \n    <div class=\"information\" *ngIf=\"_lang=='EN'\">\n      <p>Hello,</p>\n      <p>My name is Vitaliy, and I have extensive experience in engineering, particularly in the production of metal \n        structures and the machine-building industry. I have worked on both independent and team projects and have \n        expertise across all stages of the development cycle, from customer communication to the issuance of production \n        drawings. In addition, I have experience in creating report templates, parametric nodes, and small applications.</p>\n\n      <p>You can find information about my work experience and a portfolio of my projects, including descriptions\n         and 3D images, on this platform. Please note that not all of my works are included in the portfolio.</p>\n\n      <p>While I have a wide range of interests, my main focus lies in programming and engineering. Thank you for your attention.</p>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"form\"><app-form></app-form></div>\n<div class=\"g-map\">\n    <iframe src=\"https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=UKRAINE%2C%20KIEV+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n</div> -->\n\n\n  <div *ngIf=\"ln=='UA'\" class=\"a1\">\n    <h2>Робочі моменти в деталях</h2>\n  </div>\n\n  <div *ngIf=\"ln=='EN'\" class=\"a1\">\n    <h2>Some works in detail</h2>\n  </div>  \n<div class=\"img2d\">\n  <app-experience-img width=\"100%\" class=\"ggg\" [id]=1></app-experience-img>\n</div>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/form/form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/form/form.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form\" [style.display] = \"visibility? 'block' : 'none'\">\n\n    <p class=\"roll-text\" *ngIf=\"_ln==='RU'\">Оценка проекта и по всем вопросам!</p>\n    <p class=\"roll-text\" *ngIf=\"_ln==='UA'\">Оцінка проекту та по всім питанням!</p>\n    <p class=\"roll-text\" *ngIf=\"_ln==='EN'\">Evaluation of the project and all issues!</p>\n    <form #myForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(myForm.value)\" enctype=\"multipart/form-data\">\n        <div class=\"project-form\">\n            <div class=\"form-group f1\">                \n                <input class=\"form-control name\" name=\"name\" [(ngModel)]=\"mailForm.name\" required placeholder={{_name[0]}} />\n            </div>\n            <div class=\"form-group f1\">            \n                <input class=\"form-control email\" name=\"email\" [(ngModel)]=\"mailForm.email\"  placeholder=\"E-mail*\" \n                    required email />\n            </div>\n            <div class=\"form-group f1\">                \n                <input class=\"form-control phone\" name=\"phone\" [(ngModel)]=\"mailForm.phone\" required pattern=\"[+]{1}[0-9]{12}\"  placeholder={{_tel[0]}} type=\"text\"/>\n            </div>            \n            <div class=\"form-group\">        \n                <textarea name=\"message\" [(ngModel)]=\"mailForm.message\" placeholder={{_message[0]}}></textarea>        \n            </div>\n            <div  class=\"form-group file\">\n                <input type=\"file\" [(ngModel)]=\"mailForm.file\" accept=\"image/*, application/pdf, application/msword, application/x-rar-compressed, application/zip\" value=\"1\" size=\"40\" type=\"file\" name=\"file\" (change)=\"onFileChange($event)\" />\n                <p>pdf, jpg, png, doc, docx, rar, zip {{percentDone}}</p>\n            </div>\n            <div class=\"form-group sendb\">\n                <button *ngIf=\"_ln==='RU'\" [disabled]=\"myForm.invalid\"\n                class=\"btn btn-default\">Отправить</button>\n                <button *ngIf=\"_ln==='UA'\" [disabled]=\"myForm.invalid\"\n                class=\"btn btn-default\">Відправити</button>\n                <button *ngIf=\"_ln==='EN'\" [disabled]=\"myForm.invalid\"\n                class=\"btn btn-default\">Send mail</button>\n            </div>                   \n        </div>\n    </form>\n</div>\n\n<div class=\"form-ok\" [style.display] = \"!visibility? 'block' : 'none'\">\n   <button style=\"height: 100%; width: 100%;\" [ngStyle]=\"{'background': 'linear-gradient(to top, var(--blue) '+ percentDone +'%, grey '+ percentDone2 +'%)'}\" *ngIf=\"_ln==='RU'\">\n    <p>Загрузка данных {{percentDone}}%</p>\n    <p [style.color] = \"error? 'greenyellow' : 'black'\">{{status1}}</p>\n</button> \n   <button style=\"height: 100%; width: 100%;\" [ngStyle]=\"{'background': 'linear-gradient(to top, var(--blue) '+ percentDone +'%, grey '+ percentDone2 +'%)'}\"  *ngIf=\"_ln==='UA'\">\n    <p>Загрузка даних {{percentDone}}%</p>\n    <p [style.color] = \"error? 'greenyellow' : 'black'\">{{status2}}</p>\n</button> \n   <button style=\"height: 100%; width: 100%;\" [ngStyle]=\"{'background': 'linear-gradient(to top, var(--blue) '+ percentDone +'%, grey '+ percentDone2 +'%)'}\"  *ngIf=\"_ln==='EN'\">\n    <p>Data download {{percentDone}}%</p>\n    <p [style.color] = \"error? 'greenyellow' : 'black'\">{{status3}}</p>\n</button> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kmd/kmd.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kmd/kmd.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-form> </app-form>\n<!--         RU               -->\n<div *ngIf=\"_lang=='RU'\" class=\"main\">\n  <h1>Разработкой чертежей КМД</h1>\n  <h2 style=\"text-align: center;\">Вы можете заказать чертежи КМД (конструкции металлические деталировка)</h2>\n\n  <div class=\"card-main\">\n    <div class=\"card\">\n      <img src=\"./img/con1.png\" alt=\"\">\n      <h1>Проектирование</h1>\n      <p>выполняется с применением ВІM, что обеспечивает точную увязку на монтаже.</p>\n      <p>Раскрой металла и подбор оптимального листового проката позволит сэкономить.</p>\n      <p>Поэтапная выдача - изготовление и монтаж начнется раньше.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/con2.png\" alt=\"\">\n      <h1>Изготовление</h1>\n      <p>соответствующее мировым стандартам с применением высокотехнологичного оборудования.  </p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/con3.png\" alt=\"\">\n      <h1>Монтаж </h1>\n      <p>выполнит высококвалифицированный персонал, оснащен всей необходимой современной техникой, оборудованием, и инструментом для выполнения всех видов строительно-монтажных работ.</p>\n    </div>\n  </div>\n\n    <h1>Разработка машин и механизмов.</h1>\n    <h2 style=\"text-align: center;\">Вы можете заказать чертежи машин и механизмов, оформленных согласно ЕСКД (единая система конструкторской документации).</h2>\n  <div  class=\"card-main-two\">\n    <div class=\"card\">\n      <img src=\"./img/img1.png\" alt=\"\">\n      <h1>CAD - 3D модель и чертежи</h1>\n      <p>Выполняются в специализированных программных комплексах, с возможностью параметризации модели.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/img4.png\" alt=\"\">\n      <h1>САЕ - инженерные расчеты</h1>\n      <p>Расчеты на прочность проводятся методом конечных элементов в соответствующих программных комплексах.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/img5.png\" alt=\"\">\n      <h1>САМ - поддержка изготовления</h1>\n      <p>Подготовка управляющих программ станками с ЧПУ. Подготовка моделей (матриц) для сложных шаблонов и т.д. Раскрой листового металла.</p>\n    </div>\n  </div>\n</div>\n\n<!--         UA               -->\n<div *ngIf=\"_lang=='UA'\" class=\"main\">\n  <h1>Розробка креслень КМД</h1>\n  <h2 style=\"text-align: center;\">Ви можете замовити креслення КМД (конструкції металеві даталювання)</h2>\n\n  <div class=\"card-main\">\n    <div class=\"card\">\n      <img src=\"./img/con1.png\" alt=\"\">\n      <h1>Проектування</h1>\n      <p>виконується із застосуванням ВІM, що забезпечує точну ув'язку на монтажі.</p>\n      <p>Розкрій металу і підбір оптимального листового прокату дозволить заощадити.</p>\n      <p>Поетапна видача - виготовлення і монтаж розпочнеться раніше.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/con2.png\" alt=\"\">\n      <h1>Виготовлення</h1>\n      <p>відповідає світовим стандартам із застосуванням високотехнологічного обладнання.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/con3.png\" alt=\"\">\n      <h1>Монтаж</h1>\n      <p>виконає висококваліфікований персонал, оснащений всією необхідною сучасною технікою, обладнанням, інструментом для виконання всіх видів будівельно-монтажних робіт</p>\n    </div>\n  </div>\n\n    <h1>Розробка машин і механізмів.</h1>\n    <h2 style=\"text-align: center;\">Ви можете замовити креслення машин і механізмів, оформлення згідно ЄСКД (єдина система конструкторської документації)</h2>\n  <div  class=\"card-main-two\">\n    <div class=\"card\">\n      <img src=\"./img/img1.png\" alt=\"\">\n      <h1>CAD - 3D модель і креслення</h1>\n      <p>Виконуються в спеціалізованих програмних комплексах, з можливістю параметризації моделі.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/img4.png\" alt=\"\">\n      <h1>САЕ - інженерні розрахунки</h1>\n      <p>Розрахунки на міцність проводяться методом кінцевих елементів у відповідних програмних комплексах. </p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/img5.png\" alt=\"\">\n      <h1>САМ - підтримка виготовлення</h1>\n      <p>Підготовка керуючих програм верстатами з ЧПУ. Підготовка моделей (матриць) для складних шаблонів і т.д. Розкрій листового металу.</p>\n    </div>\n  </div>\n</div>\n\n<!--         EN               -->\n<div *ngIf=\"_lang=='EN'\" class=\"main\">\n  <h1>Drawing development of MDD</h1>\n  <h2 style=\"text-align: center;\">You can order MDD drawings (metal detailing designs)</h2>\n\n  <div class=\"card-main\">\n    <div class=\"card\">\n      <img src=\"./img/con1.png\" alt=\"\">\n      <h1>Design </h1>\n      <p>is performed by using BIM, which provides accurate linkage on installation.</p>\n      <p>Metal cutting and selecting the optimal sheet hire would save.</p>\n      <p>Gradual issuance- production and installation will begin earlier.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/con2.png\" alt=\"\">\n      <h1>Manufacturing </h1>\n      <p>complies with international standards and high-tech equipment is used.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/con3.png\" alt=\"\">\n      <h1>Installation </h1>\n      <p>will be carried out by highly qualified personnel, which is equipped with all necessary modern technique, equipment, and tools for all types of construction and installation works.</p>\n    </div>\n  </div>\n\n    <h1>Designing of machines and mechanisms.</h1>\n    <h2 style=\"text-align: center;\">You can order the drawings of machines and mechanisms, designed according to USDD (unified system of design documentation).</h2>\n  <div  class=\"card-main-two\">\n    <div class=\"card\">\n      <img src=\"./img/img1.png\" alt=\"\">\n      <h1>CAD - 3D model & drawings</h1>\n      <p>Performed in specialized software systems, with the ability to parameterize the model.</p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/img4.png\" alt=\"\">\n      <h1>САЕ - engineering calculations</h1>\n      <p>. Strength calculations are carried out by the finite element method in the corresponding software systems. </p>\n    </div>\n    <div class=\"card\">\n      <img src=\"./img/img5.png\" alt=\"\">\n      <h1>САМ - manufacturing support</h1>\n      <p>Preparation of control programs for CNC machines. Preparation of models for complex templates, etc. Cutting sheet metal.</p>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lang/lang.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lang/lang.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n    <label *ngFor=\"let l of languages\" class=\"btn\" [class.active]=\"l ==_lang\">\n      <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" (click)=\"radioClick(l)\"> <a href=\"/#/{{l}}\"></a> {{l}}\n    </label>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"menu\">\n    <div class=\"nav\" >           \n        <a  routerLink=\"{{_lang}}\" class=\"logo\">\n        <span class=\"roll-text\">\n            <span>V</span>\n            <span class=\"logo_point\">&bull;</span>\n            <span>T</span>\n        </span>\n        </a>\n    </div>\n\n    <div *ngFor=\"let item of menu\" class=\"menu\" routerLinkActive=\"selected\">          \n        <span *ngIf=\"_lang=='UA'\"><a routerLink=\"{{_lang+'/'+item?.Value_US}}\" class=\"roll-text\">{{item?.Value_UA}}</a></span>\n        <span *ngIf=\"_lang=='EN'\"><a routerLink=\"{{_lang+'/'+item?.Value_US}}\" class=\"roll-text\">{{item?.Value_US}}</a></span>\n        <span *ngIf=\"_lang=='RU'\"><a routerLink=\"{{_lang+'/'+item?.Value_US}}\" class=\"roll-text\">{{item?.Value_RU}}</a></span>      \n    </div>\n\n    <div class=\"lang\">\n       <app-lang #lang1></app-lang> \n    </div>\n</div> \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sketchfab-embed-wrapper\">\n    <iframe frameborder=\"0\" width=\"100%\" src=\"https://sketchfab.com/playlists/embed?user=ecebb3f850e542e7a7baec47c63790f4\"></iframe>\n</div>\n<!-- <div class=\"github\">\n    <h3 *ngIf = \"_lang === 'UA'\">Вихідний код, деяких моїх робіт, Ви можете подивитися на <a href=\"https://github.com/Vitaliy3230?tab=repositories\">github</a></h3>\n    <h3 *ngIf = \"_lang === 'EN'\">The source code of some of my works, you can look at <a href=\"https://github.com/Vitaliy3230?tab=repositories\">github</a></h3>\n</div> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-obout-me/about-me/about-me.component.css":
/*!**************************************************************!*\
  !*** ./src/app/app-obout-me/about-me/about-me.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    font-family: var(--text-g);\r\n}\r\n\r\n.float {\r\n    border-top: solid 1px;\r\n    color: rgba(132, 186, 233, 0.637);\r\n    background-color: aqua;\r\n}\r\n\r\nh1 {\r\n    font-family: var(--text-g);\r\n    color: var(--red);\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW9ib3V0LW1lL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLW9ib3V0LW1lL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtZyk7XHJcbn1cclxuXHJcbi5mbG9hdCB7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XHJcbiAgICBjb2xvcjogcmdiYSgxMzIsIDE4NiwgMjMzLCAwLjYzNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app-obout-me/about-me/about-me.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/app-obout-me/about-me/about-me.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lang.service */ "./src/app/services/lang.service.ts");



let AboutMeComponent = class AboutMeComponent {
    constructor(ls) {
        this.ls = ls;
        this.experience = [];
        this.yearB = new Date(1991, 8, 22).getFullYear();
        this.dateNow = new Date().getFullYear();
        this.myFullYear = this.dateNow - this.yearB;
        this.ln = this.ls.getLg();
    }
    ngOnInit() {
        this.ls.langClick.subscribe(m => this.ln = m);
    }
};
AboutMeComponent.ctorParameters = () => [
    { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }
];
AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/about-me.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.css */ "./src/app/app-obout-me/about-me/about-me.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AboutMeComponent);



/***/ }),

/***/ "./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\r\n    /* margin-left: 50%; */\r\n    height: 800px;\r\n\r\n /*    height: 95%;\r\n    width: 95%; */\r\n    background-color: gray;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    cursor: pointer;\r\n    }\r\n    \r\n    .slider-next{\r\n        /* background-image: url(\"./img/iconmonstr-facebook-5-240.png\"); */\r\n        text-align: right;\r\n        background-color: black;\r\n        height: 100%;\r\n        width: 50%;\r\n        float: right;\r\n        opacity:.8;        \r\n        background-position: right;\r\n        background-size: 50%;        \r\n        background-repeat:no-repeat;\r\n        border: none;\r\n        cursor: pointer;\r\n        overflow: hidden;\r\n        outline:none;\r\n    }\r\n    \r\n    .slider-prev{       \r\n        text-align: left;                    \r\n        height: 100%;\r\n        width: 50%;\r\n        opacity:.8;\r\n        background-color: black;\r\n        background-repeat:no-repeat;\r\n        border: none;\r\n        cursor: pointer;\r\n        overflow: hidden;\r\n        outline:none;        \r\n    }\r\n    \r\n    p {        \r\n        color: red;  \r\n        font-size: 80px;         \r\n        -webkit-animation: pulsecolor 2s infinite;         \r\n                animation: pulsecolor 2s infinite;\r\n    }\r\n    \r\n    .btn:hover > .slider-next > p{ \r\n        display: none;\r\n    }\r\n    \r\n    .btn:hover > .slider-prev > p{ \r\n        display: none;\r\n    }\r\n    \r\n    .btn:hover > .slider-next{   \r\n        content: none;           \r\n        background-image: none;        \r\n        background-color: transparent;\r\n    }\r\n    \r\n    .btn:hover > .slider-prev{              \r\n        background-image: none;        \r\n        background-color: transparent;\r\n    }\r\n    \r\n    h3 {\r\n        /* font-size: 40px; */\r\n        color: var(--black);\r\n    }\r\n    \r\n    h2 {\r\n        color: var(--black);\r\n    }\r\n    \r\n    /*     .btn:hover{\r\n        transform: scale(1.03); \r\n        transition: transform ease-in-out .5s, opacity ease-in-out .5s;    \r\n    } */\r\n    \r\n    /* .btn:active{\r\n        opacity: 0.2;\r\n        transition: transform ease-in-out .01s, opacity ease-in-out .01s;   \r\n    } */\r\n    \r\n    .label {\r\n        text-align: center;\r\n    }\r\n    \r\n    label {\r\n        border: 2px solid var(--blue);\r\n        border-radius: 10px;\r\n        cursor: pointer;\r\n        display: inline-block;\r\n        height: 5px;\r\n        margin: 0 0 0 8px;\r\n        position: relative;\r\n        width: 30px;\r\n        bottom: 50px;\r\n        transition: background ease-in-out .5s;\r\n    }\r\n    \r\n    .red {\r\n        border-color: gray;\r\n        background: var(--blue);\r\n        transform: scale(1);\r\n    }\r\n    \r\n    .resp {\r\n        border-top: solid 1px;\r\n        color: rgba(132, 186, 233, 0.637);\r\n    }\r\n    \r\n    @-webkit-keyframes pulsecolor {\r\n        0%{\r\n            transform: scale(0.8);\r\n            color:var(--blue);\r\n        }\r\n        50%{\r\n            transform: scale(0.9);\r\n            color: var(--black);\r\n        }\r\n        100%{\r\n            transform: scale(0.8);\r\n            color: var(--blue);\r\n        }\r\n    }\r\n    \r\n    @keyframes pulsecolor {\r\n        0%{\r\n            transform: scale(0.8);\r\n            color:var(--blue);\r\n        }\r\n        50%{\r\n            transform: scale(0.9);\r\n            color: var(--black);\r\n        }\r\n        100%{\r\n            transform: scale(0.8);\r\n            color: var(--blue);\r\n        }\r\n    }\r\n    \r\n    @media (max-width: 992px) {  \r\n        /* .btn:hover{\r\n            transform: scale(1.02);\r\n        } */\r\n        .btn {\r\n            height: 630px;\r\n        }\r\n      }\r\n    \r\n    @media (max-width: 750px) {  \r\n         \r\n        p { \r\n            font-size: 30px;         \r\n            -webkit-animation: pulsecolor 2s infinite;         \r\n                    animation: pulsecolor 2s infinite;\r\n          }\r\n    }\r\n    \r\n    @media (max-width: 650px) {\r\n        .btn {\r\n          /* display: none; */\r\n\r\n          height: 400px;\r\n        }  \r\n\r\n        label {\r\n            border-radius: 4px;\r\n            height: 4px;\r\n            width: 4px;\r\n        }\r\n      }\r\n      \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW9ib3V0LW1lL2Fib3V0LW1lL3Jlc3VtZS9leHBlcmllbmNlLWltZy9leHBlcmllbmNlLWltZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7O0NBRWhCO2lCQUNnQjtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Y7O0lBRUE7UUFDSSwrRUFBK0U7UUFDL0UsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFDWixVQUFVO1FBQ1YsMEJBQTBCO1FBQzFCLG9CQUFvQjtRQUNwQiwyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osVUFBVTtRQUNWLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLFlBQVk7UUFDWixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLHlDQUFpQztnQkFBakMsaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFDQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDZCQUE2QjtJQUNqQzs7SUFDQTtRQUNJLHNCQUFzQjtRQUN0Qiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVKOzs7T0FHTzs7SUFFSDs7O09BR0c7O0lBRUg7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFlBQVk7UUFJWixzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBSXZCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixpQ0FBaUM7SUFDckM7O0lBQ0E7UUFDSTtZQUNJLHFCQUFxQjtZQUNyQixpQkFBaUI7UUFDckI7UUFDQTtZQUNJLHFCQUFxQjtZQUNyQixtQkFBbUI7UUFDdkI7UUFDQTtZQUNJLHFCQUFxQjtZQUNyQixrQkFBa0I7UUFDdEI7SUFDSjs7SUFiQTtRQUNJO1lBQ0kscUJBQXFCO1lBQ3JCLGlCQUFpQjtRQUNyQjtRQUNBO1lBQ0kscUJBQXFCO1lBQ3JCLG1CQUFtQjtRQUN2QjtRQUNBO1lBQ0kscUJBQXFCO1lBQ3JCLGtCQUFrQjtRQUN0QjtJQUNKOztJQUVBO1FBQ0k7O1dBRUc7UUFDSDtZQUNJLGFBQWE7UUFDakI7TUFDRjs7SUFFRjs7UUFFSTtZQUNJLGVBQWU7WUFDZix5Q0FBaUM7b0JBQWpDLGlDQUFpQztVQUNuQztJQUNOOztJQUVBO1FBQ0k7VUFDRSxtQkFBbUI7O1VBRW5CLGFBQWE7UUFDZjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsVUFBVTtRQUNkO01BQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAtb2JvdXQtbWUvYWJvdXQtbWUvcmVzdW1lL2V4cGVyaWVuY2UtaW1nL2V4cGVyaWVuY2UtaW1nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA1MCU7ICovXHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG5cclxuIC8qICAgIGhlaWdodDogOTUlO1xyXG4gICAgd2lkdGg6IDk1JTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zbGlkZXItbmV4dHtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9pbWcvaWNvbm1vbnN0ci1mYWNlYm9vay01LTI0MC5wbmdcIik7ICovXHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG9wYWNpdHk6Ljg7ICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTsgICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLnNsaWRlci1wcmV2eyAgICAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgb3BhY2l0eTouODtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHAgeyAgICAgICAgXHJcbiAgICAgICAgY29sb3I6IHJlZDsgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDsgICAgICAgICBcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlY29sb3IgMnMgaW5maW5pdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bjpob3ZlciA+IC5zbGlkZXItbmV4dCA+IHB7IFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnRuOmhvdmVyID4gLnNsaWRlci1wcmV2ID4gcHsgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuOmhvdmVyID4gLnNsaWRlci1uZXh0eyAgIFxyXG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7ICAgICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAuYnRuOmhvdmVyID4gLnNsaWRlci1wcmV2eyAgICAgICAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgaDMge1xyXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogNDBweDsgKi9cclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgfVxyXG4gICAgXHJcbi8qICAgICAuYnRuOmhvdmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7IFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAuNXMsIG9wYWNpdHkgZWFzZS1pbi1vdXQgLjVzOyAgICBcclxuICAgIH0gKi9cclxuICAgIFxyXG4gICAgLyogLmJ0bjphY3RpdmV7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAuMDFzLCBvcGFjaXR5IGVhc2UtaW4tb3V0IC4wMXM7ICAgXHJcbiAgICB9ICovXHJcbiAgICBcclxuICAgIC5sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDAgOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0IC41cztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1pbi1vdXQgLjVzO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1pbi1vdXQgLjVzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1pbi1vdXQgLjVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3Age1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxMzIsIDE4NiwgMjMzLCAwLjYzNyk7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHB1bHNlY29sb3Ige1xyXG4gICAgICAgIDAle1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgICAgICAgIGNvbG9yOnZhcigtLWJsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA1MCV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHsgIFxyXG4gICAgICAgIC8qIC5idG46aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICAgICAgfSAqL1xyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkgeyAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHAgeyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyAgICAgICAgIFxyXG4gICAgICAgICAgICBhbmltYXRpb246IHB1bHNlY29sb3IgMnMgaW5maW5pdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuXHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIH0gIFxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICJdfQ== */");

/***/ }),

/***/ "./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExperienceImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceImgComponent", function() { return ExperienceImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/experience.service */ "./src/app/services/experience.service.ts");




let ExperienceImgComponent = class ExperienceImgComponent {
    constructor(ls, ex) {
        this.ls = ls;
        this.ex = ex;
        this.imgInfo = [];
        this.clicks = 1;
        this.maxQttImg = 19;
        this.timeout = 10000;
        this.path1 = "./img/";
        this.path2 = "/";
        this.path3 = ".png";
    }
    ngOnInit() {
        this.imgWay = "./img/" + this.id + "/" + this.clicks + ".JPG";
        this.ln = this.ls._lang;
        this.ls.langClick.subscribe(m => this.ln = m);
        this.ex.getImgInfo().subscribe(_imgInfo => {
            this.imgInfo = _imgInfo;
            console.log(this.imgInfo);
        });
    }
    nextImg() {
        if (this.clicks <= this.maxQttImg - 1) {
            this.clicks++;
        }
        else {
            return this.clicks = 1;
        }
    }
    ;
    prevImg() {
        if (this.clicks >= 2) {
            this.clicks--;
        }
        else {
            return this.clicks = this.maxQttImg;
        }
    }
    ;
    labelImg(x) {
        this.clicks = x;
    }
};
ExperienceImgComponent.ctorParameters = () => [
    { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] },
    { type: src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__["ExperienceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExperienceImgComponent.prototype, "id", void 0);
ExperienceImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience-img',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience-img.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience-img.component.css */ "./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.css")).default]
    })
], ExperienceImgComponent);



/***/ }),

/***/ "./src/app/app-obout-me/about-me/resume/resume.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/app-obout-me/about-me/resume/resume.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".column {\r\n align-self: center;  \r\n\r\n}\r\n\r\n.column::before { \r\n  content: url('work3.svg');\r\n}\r\n\r\n.float {\r\n  padding-left: 20px;\r\n/*   border-bottom: solid 1px;\r\n  border-color: rgba(132, 186, 233, 0.637); */\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  margin-bottom: 20px;\r\n  border: 2px solid transparent;\r\n  -o-border-image: linear-gradient(to right top, #a9d4ff5b 0%, #4d4d4d3e 100%) 1;\r\n     border-image: linear-gradient(to right top, #a9d4ff5b 0%, #4d4d4d3e 100%) 1;\r\n\r\n}\r\n\r\n::marker {\r\n  content: url('done.svg') ' '; \r\n}\r\n\r\n/* .engine h3 {\r\n  color: red;\r\n} */\r\n\r\n.a1 {\r\n  color: var(--blue);\r\n}\r\n\r\n/* div.expeience {\r\n  font-family: var(--text-g);\r\n}\r\n\r\nli {\r\n  font-family: var(--text-g);\r\n  list-style-type: none; \r\n}\r\n\r\n\r\nol, ul {\r\n  padding-inline-start: 0px;\r\n}\r\n\r\ndiv {\r\n    font-family: var(--text-g);\r\n  }\r\n\r\n.a1 {\r\n  font-family: var(--text-g);\r\n  color: var(--red);\r\n  text-align: center;\r\n}\r\n\r\n.float {\r\n  float: left;\r\n  width: 50%;  \r\n}\r\n\r\n.floatr{\r\n  margin-left: 50%;\r\n}\r\n\r\n.block {\r\n  text-align: left;\r\n  color: rgb(117, 117, 117);\r\n  border: 3px solid transparent;\r\n  border-image: \r\n    linear-gradient(\r\n      to right top,\r\n        rgba(0, 0, 0, 0),\r\n      rgba(0, 0, 0, 0),\r\n      var(--blue),   \r\n        rgba(0, 0, 0, 0),\r\n      rgba(0, 0, 0, 0)\r\n    )500 10%;\r\n  background-color: none;\r\n  transition-property: background-color, color, text-align ;\r\n  transition-duration: .6s;\r\n  height: 400px;\r\n}\r\n\r\n.block a {\r\n  color: var(--blue);\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n.block a:hover {\r\n  background: var(--white);\r\n}\r\n\r\n.block:hover {\r\n  color: var(--black); \r\n}\r\n\r\n.p1 {\r\n  font-family: var(--text-g);\r\n  text-align: center\r\n}\r\n\r\n.p2 {\r\n  font-family: var(--text-g);\r\n  background: var(--grey);\r\n}\r\n\r\n.dd {\r\n  font-size: 16px;\r\n  padding: 3px;\r\n  border: 2px solid;\r\n  border-image:\r\n  linear-gradient(\r\n  to right,\r\n  rgba(0, 0, 0, 0),\r\n  rgba(75, 75, 75, 0.330),   \r\n  rgba(0, 0, 0, 0)\r\n)1 1%\r\n}\r\n\r\ndiv.q1 {\r\n  margin-left: 160px;\r\n}\r\n\r\ndiv.q2 {\r\n  margin-left: 160px;\r\n}\r\n\r\ndiv.q2>div {\r\n  display: inline;\r\n}\r\n\r\ndiv.q1>div {\r\n  display: inline;\r\n}\r\n\r\nh3 {\r\n  font-family: var(--text-g);\r\n  text-align: center;\r\n  color: var(--red);\r\n}\r\n\r\n.q1 img{\r\n  height: 5em;\r\n  width: 20%;\r\n  margin-left: 2.5%;\r\n  margin-right: 2.5%;\r\n  margin-top: 2.8em;\r\n  transition-property: all;\r\n  transition-duration: 1.0s;\r\n}\r\n\r\n.q2 img {\r\n  height: 6em;\r\n  width: 10%;\r\n  margin-left: 4.5%;\r\n  margin-right: 4.5%;\r\n  margin-top: 3.5em;\r\n  transition-property: all;\r\n  transition-duration: 1.0s;\r\n}\r\n\r\n.q1 img:hover,\r\n.q2 img:hover {\r\n  transform: scale(1.5); \r\n  }\r\n\r\n.s1 {\r\n  width: 160px;\r\n  float: left;\r\n  counter-reset: li; \r\n  list-style: none; \r\n  font: 14px \"Trebuchet MS\", \"Lucida Sans\";\r\n  padding: 0;\r\n  text-shadow: 0 1px 0 rgba(255,255,255,.5);\r\n}\r\n\r\n.s1 a {\r\n  position: relative;\r\n  display: block;\r\n  padding: .4em .4em .4em 1em;\r\n  margin: .5em 0;\r\n  background: #D9D9D9;\r\n  color: #444;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  transition: .3s ease-out;\r\n  }\r\n  \r\n.engine { \r\n  min-height: 300px;\r\n  border: 3px solid transparent;\r\n  border-image: \r\n  linear-gradient(\r\n    to right top,\r\n      rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0, 0),\r\n    var(--blue),  \r\n      rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0, 0)\r\n  )500 10%;\r\n  background-color: none;\r\n  transition-property: background-color;\r\n  transition-duration: .6s;\r\n}\r\n\r\n.program { \r\n  min-height: 200px;\r\n  border: 3px solid transparent;\r\n  border-image: \r\n  linear-gradient(\r\n    to right top,\r\n      rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0, 0),\r\n      var(--blue),   \r\n      rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0, 0)\r\n  )500 10%;\r\n  background-color: none;\r\n  transition-property: background-color;\r\n  transition-duration: .6s;\r\n}\r\n\r\n.ed {\r\n  font-family: var(--text-g);\r\n  font-size: 16px;\r\n  text-align: center;\r\n  border: 3px solid transparent;\r\n  border-image: \r\n  linear-gradient(\r\n    to right top,\r\n      rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0, 0),\r\n    var(--blue),   \r\n      rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0, 0)\r\n  )500 10%;\r\n  background-color: none;\r\n  transition-property: background-color;\r\n  transition-duration: .6s;\r\n}\r\n\r\n.ed:hover,\r\n.program:hover,\r\n.engine:hover,\r\n.block:hover,\r\n.s1 a:hover {\r\n  background-color: #fff;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .block { height: 320px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .q1 img,\r\n  .q2 img {\r\n    display: none;\r\n  }\r\n\r\n  .s1 {\r\n    width: 100%;\r\n    float: none;\r\n    text-align: center;\r\n  }\r\n\r\n  .s1 a:before {\r\n    display: none;\r\n  }\r\n\r\n  li {\r\n    list-style-type: none;\r\n    }\r\n  \r\n  ol,\r\n  ul {\r\n    padding-inline-start: 0px;\r\n  }\r\n\r\n  .block { height: 360px;}\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .float {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n  .block { height: auto;}\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW9ib3V0LW1lL2Fib3V0LW1lL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjs7QUFFbkI7O0FBRUE7RUFDRSx5QkFBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7NkNBQzZDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsOEVBQTJFO0tBQTNFLDJFQUEyRTs7QUFFN0U7O0FBRUE7RUFDRSw0QkFBb0M7QUFDdEM7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdRRyIsImZpbGUiOiJzcmMvYXBwL2FwcC1vYm91dC1tZS9hYm91dC1tZS9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uIHtcclxuIGFsaWduLXNlbGY6IGNlbnRlcjsgIFxyXG5cclxufVxyXG5cclxuLmNvbHVtbjo6YmVmb3JlIHsgXHJcbiAgY29udGVudDogdXJsKFwic3JjXFxpbWdcXHdvcmszLnN2Z1wiKTtcclxufVxyXG5cclxuLmZsb2F0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbi8qICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMzIsIDE4NiwgMjMzLCAwLjYzNyk7ICovXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjYTlkNGZmNWIgMCUsICM0ZDRkNGQzZSAxMDAlKSAxO1xyXG5cclxufVxyXG5cclxuOjptYXJrZXIge1xyXG4gIGNvbnRlbnQ6IHVybChcInNyY1xcaW1nXFxkb25lLnN2Z1wiKSAnICc7IFxyXG59XHJcblxyXG4vKiAuZW5naW5lIGgzIHtcclxuICBjb2xvcjogcmVkO1xyXG59ICovXHJcblxyXG4uYTEge1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG4vKiBkaXYuZXhwZWllbmNlIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxufVxyXG5cclxubGkge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWcpO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgXHJcbn1cclxuXHJcblxyXG5vbCwgdWwge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICB9XHJcblxyXG4uYTEge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWcpO1xyXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZsb2F0IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlOyAgXHJcbn1cclxuXHJcbi5mbG9hdHJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWltYWdlOiBcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gcmlnaHQgdG9wLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgICAgIHZhcigtLWJsdWUpLCAgIFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICAgICk1MDAgMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIHRleHQtYWxpZ24gO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC42cztcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uYmxvY2sgYSB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmJsb2NrIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuLmJsb2NrOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spOyBcclxufVxyXG5cclxuLnAxIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLnAyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5KTtcclxufVxyXG5cclxuLmRkIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIGJvcmRlci1pbWFnZTpcclxuICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgdG8gcmlnaHQsXHJcbiAgcmdiYSgwLCAwLCAwLCAwKSxcclxuICByZ2JhKDc1LCA3NSwgNzUsIDAuMzMwKSwgICBcclxuICByZ2JhKDAsIDAsIDAsIDApXHJcbikxIDElXHJcbn1cclxuXHJcbmRpdi5xMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2MHB4O1xyXG59XHJcblxyXG5kaXYucTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNjBweDtcclxufVxyXG5cclxuZGl2LnEyPmRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG5kaXYucTE+ZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLXJlZCk7XHJcbn1cclxuXHJcbi5xMSBpbWd7XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW4tbGVmdDogMi41JTtcclxuICBtYXJnaW4tcmlnaHQ6IDIuNSU7XHJcbiAgbWFyZ2luLXRvcDogMi44ZW07XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuMHM7XHJcbn1cclxuXHJcbi5xMiBpbWcge1xyXG4gIGhlaWdodDogNmVtO1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQuNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0LjUlO1xyXG4gIG1hcmdpbi10b3A6IDMuNWVtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjBzO1xyXG59XHJcblxyXG4ucTEgaW1nOmhvdmVyLFxyXG4ucTIgaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IFxyXG4gIH1cclxuXHJcbi5zMSB7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvdW50ZXItcmVzZXQ6IGxpOyBcclxuICBsaXN0LXN0eWxlOiBub25lOyBcclxuICBmb250OiAxNHB4IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnNcIjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG59XHJcblxyXG4uczEgYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IC40ZW0gLjRlbSAuNGVtIDFlbTtcclxuICBtYXJnaW46IC41ZW0gMDtcclxuICBiYWNrZ3JvdW5kOiAjRDlEOUQ5O1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAuM2VtO1xyXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICB9XHJcbiAgXHJcbi5lbmdpbmUgeyBcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItaW1hZ2U6IFxyXG4gIGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IHRvcCxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwKSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgICB2YXIoLS1ibHVlKSwgIFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDApLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKVxyXG4gICk1MDAgMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNnM7XHJcbn1cclxuXHJcbi5wcm9ncmFtIHsgXHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWltYWdlOiBcclxuICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCB0b3AsXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApLFxyXG4gICAgICB2YXIoLS1ibHVlKSwgICBcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwKSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICApNTAwIDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjZzO1xyXG59XHJcblxyXG4uZWQge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWcpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWltYWdlOiBcclxuICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCB0b3AsXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApLFxyXG4gICAgdmFyKC0tYmx1ZSksICAgXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApXHJcbiAgKTUwMCAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC42cztcclxufVxyXG5cclxuLmVkOmhvdmVyLFxyXG4ucHJvZ3JhbTpob3ZlcixcclxuLmVuZ2luZTpob3ZlcixcclxuLmJsb2NrOmhvdmVyLFxyXG4uczEgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5ibG9jayB7IGhlaWdodDogMzIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5xMSBpbWcsXHJcbiAgLnEyIGltZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnMxIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuczEgYTpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICBvbCxcclxuICB1bCB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJsb2NrIHsgaGVpZ2h0OiAzNjBweDt9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5mbG9hdCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYmxvY2sgeyBoZWlnaHQ6IGF1dG87fVxyXG59ICovIl19 */");

/***/ }),

/***/ "./src/app/app-obout-me/about-me/resume/resume.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-obout-me/about-me/resume/resume.component.ts ***!
  \******************************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/experience.service */ "./src/app/services/experience.service.ts");
/* harmony import */ var src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var src_app_services_skils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/skils.service */ "./src/app/services/skils.service.ts");






let ResumeComponent = class ResumeComponent {
    constructor(ex, ls, sb, sk) {
        this.ex = ex;
        this.ls = ls;
        this.sb = sb;
        this.sk = sk;
        this.experience = [];
        this.a1 = true;
        this.a2 = true;
        this.a3 = true;
        this.a4 = true;
        this.a5 = true;
        this.a6 = true;
        this.skilsEng = [];
        this.skilsProg = [];
        this.yearB = new Date(1991, 8, 22).getFullYear();
        this.dateNow = new Date().getFullYear();
        this.myFullYear = this.dateNow - this.yearB;
    }
    ngOnInit() {
        this.ex.getExperince().subscribe(_experience => {
            this.experience = _experience;
        });
        console.log(this.experience);
        this.ln = this.ls._lang;
        this.ls.langClick.subscribe(m => this.ln = m);
        this.sb.change_a1.subscribe(x1 => this.a1 = x1);
        this.sb.change_a2.subscribe(x2 => this.a2 = x2);
        this.sb.change_a3.subscribe(x3 => this.a3 = x3);
        this.sb.change_a4.subscribe(x4 => this.a4 = x4);
        this.sb.change_a5.subscribe(x5 => this.a5 = x5);
        this.sb.change_a6.subscribe(x6 => this.a6 = x6);
        this.sk.getSkils().subscribe(s => { this.skilsEng = s; });
        this.sk.getSkilsProg().subscribe(s => { this.skilsProg = s; });
    }
};
ResumeComponent.ctorParameters = () => [
    { type: src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__["ExperienceService"] },
    { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] },
    { type: src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"] },
    { type: src_app_services_skils_service__WEBPACK_IMPORTED_MODULE_5__["SkilsService"] }
];
ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/about-me/resume/resume.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.css */ "./src/app/app-obout-me/about-me/resume/resume.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ResumeComponent);



/***/ }),

/***/ "./src/app/app-obout-me/app-obout-me.component.ts":
/*!********************************************************!*\
  !*** ./src/app/app-obout-me/app-obout-me.component.ts ***!
  \********************************************************/
/*! exports provided: AppOboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppOboutMeComponent", function() { return AppOboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/lang.service */ "./src/app/services/lang.service.ts");




let AppOboutMeComponent = class AppOboutMeComponent {
    constructor(langService, meta, title) {
        this.langService = langService;
        this.meta = meta;
        this.title = title;
    }
    ngOnInit() {
        this._lang = this.langService._lang;
        this.langService.langClick.subscribe(ln => { this._lang = ln; });
        if (this._lang == "RU") {
            this.title.setTitle('Виталий Тимошенко - инженерные услуги.');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'Инженерные услуги'
                },
                {
                    name: 'description', content: 'Разработка чертежей КМД и проектирование металлоконструкций. Разработка чертежей машин и механизмов(машиностроение). Раскрой листового проката и другие инженерные услуги.'
                },
            ]);
        }
        else if (this._lang == "UA") {
            this.title.setTitle('Віталій Тимошенко - інженерні послуги.');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'Інженерні послуги'
                },
                {
                    name: 'description', content: 'Розробка креслень КМД і проектування металоконструкцій. Розробка креслень машин і механізмів (машинобудування). Розкрій листового прокату і інші інженерні послуги.'
                },
            ]);
        }
        else {
            this.title.setTitle('Vitaliy Tymoshenko - remote engineering services. ');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'Engineering services'
                },
                {
                    name: 'description', content: 'Development and design of metal structures. Development of drawings of machines and mechanisms (mechanical engineering). Sheet metal cutting and other engineering services'
                },
            ]);
        }
    }
};
AppOboutMeComponent.ctorParameters = () => [
    { type: _services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
AppOboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-obout-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-obout-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/app-obout-me.component.html")).default
    })
], AppOboutMeComponent);



/***/ }),

/***/ "./src/app/app-obout-me/sidebar/sidebar.component.css":
/*!************************************************************!*\
  !*** ./src/app/app-obout-me/sidebar/sidebar.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\r\n    font-family: var(--text-g);\r\n    font-size: 18px;\r\n}\r\n\r\ndiv.btn-group-toggle {\r\n    font-family: var(--text-g);\r\n    display: inline-block;\r\n    margin: 5px;\r\n}\r\n\r\n.btn {\r\n    background-color: var(--grey);\r\n    padding: 5px;\r\n    border-radius: 8px;\r\n    transition-property: all;\r\n    transition-duration: 1.5s;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: var(--grey2);\r\n}\r\n\r\n.active {\r\n    background-color: var(--grey2);\r\n    padding: 2px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    border-radius: 12px;\r\n}\r\n\r\ndiv {\r\n    text-align: center;\r\n}\r\n\r\ninput {\r\n    display: none; \r\n}\r\n\r\nspan {\r\n    color: #a31c1c;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW9ib3V0LW1lL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLW9ib3V0LW1lL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuZGl2LmJ0bi1ncm91cC10b2dnbGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtZyk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleTIpO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkyKTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6ICNhMzFjMWM7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app-obout-me/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/app-obout-me/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/lang.service */ "./src/app/services/lang.service.ts");




let SidebarComponent = class SidebarComponent {
    constructor(sidebar, ls) {
        this.sidebar = sidebar;
        this.ls = ls;
        this.a1 = true;
        this.a2 = true;
        this.a3 = true;
        this.a4 = true;
        this.a5 = true;
        this.a6 = true;
    }
    ngOnInit() {
        this.ln = this.ls._lang;
        this.ls.langClick.subscribe(m => this.ln = m);
    }
    Toggle() {
        this.sidebar._a1 = this.a1;
        this.sidebar._a2 = this.a2;
        this.sidebar._a3 = this.a3;
        this.sidebar._a4 = this.a4;
        this.sidebar._a5 = this.a5;
        this.sidebar._a6 = this.a6;
        this.sidebar.sidebar();
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] },
    { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-obout-me/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/app-obout-me/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _child_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child/main/main.component */ "./src/app/child/main/main.component.ts");
/* harmony import */ var _app_obout_me_app_obout_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-obout-me/app-obout-me.component */ "./src/app/app-obout-me/app-obout-me.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _kmd_kmd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kmd/kmd.component */ "./src/app/kmd/kmd.component.ts");








const routes = [
    { path: ':language', component: _child_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: ':language/Resume', component: _app_obout_me_app_obout_me_component__WEBPACK_IMPORTED_MODULE_4__["AppOboutMeComponent"] },
    { path: ':language/3D_Portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] },
    { path: ':language/2D_Portfolio', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"] },
    { path: ':language/Steel_Detailing', component: _kmd_kmd_component__WEBPACK_IMPORTED_MODULE_7__["KmdComponent"] },
    { path: '**', redirectTo: '/UA' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {   \r\n    border: 1px dashed #333;      \r\n}\r\n\r\n#sidebar{\r\n    background-color: #ddd;\r\n    float: left;\r\n    width: 250px;\r\n}\r\n\r\n#main{\r\n    background-color: #eee;\r\n    margin-left: 270px;\r\n}\r\n\r\n#footer{ \r\n    background-color: #ccc;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgeyAgIFxyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICMzMzM7ICAgICAgXHJcbn1cclxuXHJcbiNzaWRlYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4jbWFpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjcwcHg7XHJcbn1cclxuXHJcbiNmb290ZXJ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'VT';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_obout_me_app_obout_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-obout-me/app-obout-me.component */ "./src/app/app-obout-me/app-obout-me.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child/child.component */ "./src/app/child/child.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _kmd_kmd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kmd/kmd.component */ "./src/app/kmd/kmd.component.ts");
/* harmony import */ var _lang_lang_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lang/lang.component */ "./src/app/lang/lang.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _app_obout_me_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-obout-me/sidebar/sidebar.component */ "./src/app/app-obout-me/sidebar/sidebar.component.ts");
/* harmony import */ var _app_obout_me_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-obout-me/about-me/about-me.component */ "./src/app/app-obout-me/about-me/about-me.component.ts");
/* harmony import */ var _app_obout_me_about_me_resume_resume_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-obout-me/about-me/resume/resume.component */ "./src/app/app-obout-me/about-me/resume/resume.component.ts");
/* harmony import */ var _app_obout_me_about_me_resume_experience_img_experience_img_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-obout-me/about-me/resume/experience-img/experience-img.component */ "./src/app/app-obout-me/about-me/resume/experience-img/experience-img.component.ts");
/* harmony import */ var _child_main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./child/main/main.component */ "./src/app/child/main/main.component.ts");
/* harmony import */ var _contacts_form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contacts/form/form.component */ "./src/app/contacts/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/experience.service */ "./src/app/services/experience.service.ts");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var _services_from_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/from.service */ "./src/app/services/from.service.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_obout_me_app_obout_me_component__WEBPACK_IMPORTED_MODULE_5__["AppOboutMeComponent"],
            _child_child_component__WEBPACK_IMPORTED_MODULE_6__["ChildComponent"],
            _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"],
            _kmd_kmd_component__WEBPACK_IMPORTED_MODULE_8__["KmdComponent"],
            _lang_lang_component__WEBPACK_IMPORTED_MODULE_9__["LangComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
            _app_obout_me_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
            _app_obout_me_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_13__["AboutMeComponent"],
            _app_obout_me_about_me_resume_resume_component__WEBPACK_IMPORTED_MODULE_14__["ResumeComponent"],
            _app_obout_me_about_me_resume_experience_img_experience_img_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceImgComponent"],
            _child_main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"],
            _contacts_form_form_component__WEBPACK_IMPORTED_MODULE_17__["FormComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [_services_experience_service__WEBPACK_IMPORTED_MODULE_20__["ExperienceService"], _services_lang_service__WEBPACK_IMPORTED_MODULE_21__["LangService"], _services_menu_service__WEBPACK_IMPORTED_MODULE_22__["MenuService"], _services_sidebar_service__WEBPACK_IMPORTED_MODULE_23__["SidebarService"], _services_from_service__WEBPACK_IMPORTED_MODULE_24__["FromService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/child/child.component.css":
/*!*******************************************!*\
  !*** ./src/app/child/child.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n    font-family: var(--text-g);\r\n    padding-top: 5px;\r\n    padding-bottom: 10px;\r\n    text-align: center;\r\n    border-top:solid 1px;\r\n}\r\n\r\n#social-s img{\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n#social-s img:hover {\r\n    opacity: .5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGQvY2hpbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY2hpbGQvY2hpbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtZyk7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOnNvbGlkIDFweDtcclxufVxyXG5cclxuI3NvY2lhbC1zIGltZ3tcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4jc29jaWFsLXMgaW1nOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/child/child.component.ts":
/*!******************************************!*\
  !*** ./src/app/child/child.component.ts ***!
  \******************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lang.service */ "./src/app/services/lang.service.ts");



let ChildComponent = class ChildComponent {
    constructor(ln) {
        this.ln = ln;
        this.title = 'VT';
    }
    ngOnInit() {
        this._ln = this.ln._lang;
        this.ln.langClick.subscribe(ln => { this._ln = ln; });
    }
};
ChildComponent.ctorParameters = () => [
    { type: _services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }
];
ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-child',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./child.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./child.component.css */ "./src/app/child/child.component.css")).default]
    })
], ChildComponent);



/***/ }),

/***/ "./src/app/child/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/child/main/main.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.photo {\r\n    font-family: var(--text-g);\r\n    width: 50%;\r\n    \r\n \r\n    background-image: url(./img/i7i.png);  \r\n    transform: rotate(17deg);\r\n   \r\n    background-repeat: no-repeat;\r\n    float: right;\r\n    max-width: 360px;\r\n    height: 450px;\r\n    background-size: 90%;   \r\n}\r\n\r\n.photo img{\r\n    font-family: var(--text-g);\r\n    width: 100%;\r\n}\r\n\r\n.information{\r\n    width: 50%;\r\n    font-family: var(--text-g);\r\n    margin-left: 0;\r\n    min-height: 420px;\r\n}\r\n\r\n/*Ноутбуки*/\r\n\r\n@media (max-width: 1400px) {\r\n\r\n    .photo {\r\n        background-image: url(./img/i7i.png);\r\n        float: right;\r\n        max-width: 360px;\r\n        height: 420px;\r\n        background-size: 90%;\r\n    }\r\n\r\n    .information{\r\n        margin-left: 0;\r\n        min-height: 420px;\r\n    }\r\n}\r\n\r\n/*Планшеты*/\r\n\r\n@media (max-width: 768px) {\r\n    .photo{\r\n        display: none;\r\n    }\r\n    .information{\r\n        width: 100%;\r\n        height: auto;        \r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGQvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixVQUFVOzs7SUFHVix5Q0FBeUM7SUFDekMsd0JBQXdCOztJQUV4Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXOztBQUNYOztJQUVJO1FBQ0kseUNBQXlDO1FBQ3pDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQSxXQUFXOztBQUNYO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hpbGQvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5waG90byB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBcclxuIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9pbWcvaTdpLnBuZyk7ICBcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE3ZGVnKTtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwJTsgICBcclxufVxyXG5cclxuLnBob3RvIGltZ3tcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWcpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWluLWhlaWdodDogNDIwcHg7XHJcbn1cclxuXHJcbi8q0J3QvtGD0YLQsdGD0LrQuCovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuXHJcbiAgICAucGhvdG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vaW1nL2k3aS5wbmcpO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKtCf0LvQsNC90YjQtdGC0YsqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5waG90b3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bzsgICAgICAgIFxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/child/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/child/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let MainComponent = class MainComponent {
    constructor(langService, meta, title) {
        this.langService = langService;
        this.meta = meta;
        this.title = title;
    }
    ngOnInit() {
        this._lang = this.langService._lang;
        this.langService.langClick.subscribe(ln => { this._lang = ln; });
        if (this._lang == "UA") {
            this.title.setTitle('Віталій Тимошенко - інженерні послуги.');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'Інженерні послуги'
                },
                {
                    name: 'description', content: 'Розробка креслень КМД. Розробка креслень машин і механізмів (машинобудування). Розкрій листового прокату і інші інженерні послуги.'
                },
            ]);
        }
        else {
            this.title.setTitle('Vitaliy Tymoshenko');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'steel detailer'
                },
                {
                    name: 'description', content: 'Model and drawing of metal structures. Development drawings of machines and mechanisms (mechanical engineering). Sheet metal cutting and other engineering services'
                },
            ]);
        }
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/child/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/child/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n    color: var(--red);\r\n}\r\n\r\n/* .img2d {\r\n \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: auto;\r\n    position: relative;\r\n    align-self: center;\r\n}\r\n.ggg{\r\n    height: 40em;\r\n    width: 60em;\r\n} */\r\n\r\n.img2d {\r\n    padding: 10px 0px 10px 0px;\r\n}\r\n\r\n.form {\r\n    float: left;\r\n    height: 520px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.g-map {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 350px;\r\n    height: 522px;\r\n}\r\n\r\n.g-map iframe {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/*Планшеты*/\r\n\r\n@media (max-width: 768px) {\r\n    .form {\r\n        float: none;\r\n        margin-left: 0%;\r\n    }\r\n    .g-map {margin-left: 0;\r\n    }\r\n    .img2d {\r\n        padding: 10px 5px 10px 5px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBRUg7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBLFdBQVc7O0FBQ1g7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0EsUUFBUSxjQUFjO0lBQ3RCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxufVxyXG5cclxuLyogLmltZzJkIHtcclxuIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5nZ2d7XHJcbiAgICBoZWlnaHQ6IDQwZW07XHJcbiAgICB3aWR0aDogNjBlbTtcclxufSAqL1xyXG5cclxuLmltZzJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZy1tYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDUyMnB4O1xyXG59XHJcblxyXG4uZy1tYXAgaWZyYW1lIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKtCf0LvQsNC90YjQtdGC0YsqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgICAuZy1tYXAge21hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmltZzJkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDVweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/lang.service */ "./src/app/services/lang.service.ts");




let ContactsComponent = class ContactsComponent {
    constructor(langService, meta, title) {
        this.langService = langService;
        this.meta = meta;
        this.title = title;
        this.color = "red";
        meta.addTags([
            {
                name: 'autor', content: 'vit.mk.ua'
            }
        ]);
    }
    ngOnInit() {
        this.langService.langClick.subscribe(ln => { this._lang = ln; });
        this._lang = this.langService.getLg();
        if (this._lang == "RU") {
            this.title.setTitle('Контакты');
            this.meta.addTags([
                {
                    name: 'description', content: 'Оставить запрос на разработку КМД. КМД рус. КМД укр. КМД стальных конструкицй. Оставить запрос на разработку машин и механизмов(ЕСКД)'
                },
            ]);
        }
        else if (this._lang == "UA") {
            this.title.setTitle('Контакти');
            this.meta.addTags([
                {
                    name: 'description', content: 'Залишити запит на розробку КМД. КМД рус. КМД укр. КМД сталевих конструкіцй. Залишити запит на розробку машин і механізмів (ЄСКД).'
                },
            ]);
        }
        else {
            this.title.setTitle('Contacts');
            this.meta.addTags([,
                {
                    name: 'description', content: 'Leave a request for the development of drawings of steel structures. Leave a request for the development of machines and mechanisms.'
                },
            ]);
        }
    }
};
ContactsComponent.ctorParameters = () => [
    { type: _services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")).default]
    })
], ContactsComponent);



/***/ }),

/***/ "./src/app/contacts/form/form.component.css":
/*!**************************************************!*\
  !*** ./src/app/contacts/form/form.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-touched.ng-invalid {border:solid var(--red) 2px;}\r\ninput.ng-touched.ng-valid {border:solid var(--green) 2px;}\r\ndiv{\r\n    font-family: var(--text-g);\r\n}\r\np{\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: var(--grey2);\r\n    margin: 0;\r\n}\r\n.roll-text{\r\n    font-size: 20px;\r\n    color: var(--red);\r\n    padding-bottom: 20px;\r\n}\r\n.form {   \r\n    width: 272px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    padding: 20px 0 0;\r\n    margin: 0 0 50px;\r\n    transition-property: all;\r\n    transition-duration: .6s;\r\n}\r\n.form-ok {\r\n    min-height: 500px;\r\n    width: 272px;\r\n    text-align: center;\r\n    height: 100%;\r\n    padding-top: 0;\r\n}\r\n.form-ok button{\r\n    min-height: 500px;\r\n    height: 100%;\r\n    cursor: default;\r\n    border: none;\r\n}\r\n.form-ok p {\r\n    font-size: large;\r\n    color: var(--black);\r\n    text-shadow: var(--grey) 2px 3px 4px;\r\n}\r\n.form:hover {\r\n    background-color: var(--white)\r\n}\r\n.form-group>button {\r\n    text-align: center;\r\n    line-height: 32px;\r\n    font-size: 14px;  \r\n    padding: 0 40px;\r\n    margin-top: 12px;\r\n    margin-left: 63px;\r\n    margin-bottom: 12px; \r\n    cursor: pointer;   \r\n}\r\n.file {\r\n    border: 1px solid var(--grey);\r\n    border-left: none;\r\n    border-right: none;\r\n    display: block;\r\n    padding: 0 20px 0;\r\n    padding-top: 0px;  \r\n      \r\n}\r\n.file input {\r\n    cursor: pointer;\r\n}\r\ninput.name {\r\n    background: url('ico1.png') 12px 6px  no-repeat;\r\n}\r\ninput.email {\r\n    background: url('ico4.png') 12px 6px  no-repeat;   \r\n}\r\ninput.phone {\r\n    background: url('ico3.png') 12px 6px  no-repeat;   \r\n}\r\n.f1>input {\r\n    padding: 0 10px 0 40px;\r\n    width: 218px;\r\n    height: 34px;\r\n    font-size: 13px;\r\n}\r\ntextarea {\r\n    background: url('ico5.png') no-repeat 9px 10px;\r\n    padding: 10px 10px 0 40px;\r\n    width: 220px;\r\n    height: 205px;\r\n    font-size: 13px;\r\n    resize: none;\r\n}\r\n@media (max-width: 768px) {\r\n    .form {\r\n        width: 100%;\r\n    }\r\n\r\n    .form-group {\r\n        text-align: center;\r\n    }\r\n\r\n    .f1 input{\r\n        width: 70%;\r\n    }\r\n\r\n    textarea {\r\n        width: 70%;\r\n    }\r\n\r\n    .sendb {\r\n        text-align: center;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCLDJCQUEyQixDQUFDO0FBQ3pELDJCQUEyQiw2QkFBNkIsQ0FBQztBQUV6RDtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QztBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksK0NBQTBEO0FBQzlEO0FBRUE7SUFDSSwrQ0FBMEQ7QUFDOUQ7QUFFQTtJQUNJLCtDQUEwRDtBQUM5RDtBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBQ0ksOENBQTBEO0lBQzFELHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBR0E7SUFDSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtib3JkZXI6c29saWQgdmFyKC0tcmVkKSAycHg7fVxyXG5pbnB1dC5uZy10b3VjaGVkLm5nLXZhbGlkIHtib3JkZXI6c29saWQgdmFyKC0tZ3JlZW4pIDJweDt9XHJcblxyXG5kaXZ7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxufVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5Mik7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnJvbGwtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtIHsgICBcclxuICAgIHdpZHRoOiAyNzJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgNTBweDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC42cztcclxufVxyXG5cclxuLmZvcm0tb2sge1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMjcycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLmZvcm0tb2sgYnV0dG9ue1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLW9rIHAge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICB0ZXh0LXNoYWRvdzogdmFyKC0tZ3JleSkgMnB4IDNweCA0cHg7XHJcbn1cclxuXHJcbi5mb3JtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKVxyXG59XHJcblxyXG4uZm9ybS1ncm91cD5idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7ICBcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxyXG59XHJcblxyXG4uZmlsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7ICBcclxuICAgICAgXHJcbn1cclxuXHJcbi5maWxlIGlucHV0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQubmFtZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vaW1nL2ljbzEucG5nKSAxMnB4IDZweCAgbm8tcmVwZWF0O1xyXG59XHJcblxyXG5pbnB1dC5lbWFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vaW1nL2ljbzQucG5nKSAxMnB4IDZweCAgbm8tcmVwZWF0OyAgIFxyXG59XHJcblxyXG5pbnB1dC5waG9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vaW1nL2ljbzMucG5nKSAxMnB4IDZweCAgbm8tcmVwZWF0OyAgIFxyXG59XHJcblxyXG5cclxuLmYxPmlucHV0IHtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDQwcHg7XHJcbiAgICB3aWR0aDogMjE4cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9pbWcvaWNvNS5wbmcpIG5vLXJlcGVhdCA5cHggMTBweCA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCA0MHB4O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmYxIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbmRiIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/contacts/form/form.component.ts":
/*!*************************************************!*\
  !*** ./src/app/contacts/form/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_from_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/from.service */ "./src/app/services/from.service.ts");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _mailForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mailForm */ "./src/app/contacts/form/mailForm.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let FormComponent = class FormComponent {
    constructor(fS, ln, http) {
        this.fS = fS;
        this.ln = ln;
        this.http = http;
        this._name = ["Your name*", "Ваше имя*", "Ваше ім'я"];
        this._tel = ["Telephone*(+380630000000)", "Телефон*(+380630000000)"];
        this._message = ["Message", "Сообщение", "Повідомлення"];
        this.bt = ['Send', 'Отправить', 'Відправити'];
        this.mailForm = new _mailForm__WEBPACK_IMPORTED_MODULE_4__["mailForm"];
        this.formData = new FormData();
        this.done = false;
        this.visibility = true;
        this.percentDone = 0;
        this.percentDone2 = 5;
        this.status1 = "Ваше письмо готовиться к отправке... Ожидайте.";
        this.status2 = "Ваш лист в готується до відправлення... Зачекайте.";
        this.status3 = "Your letter is getting ready to be sent... Please wait.";
        this.error = false;
        this.x = 'to top, black' + this.percentDone + '%, transparent';
    }
    onFileChange(event) {
        let _target = event.target || event.srcElement;
        this.files = _target.files;
    }
    onSubmit(form) {
        this.form = form;
        if (this.files) {
            let _files = this.files;
            for (let i = 0; i < _files.length; i++) {
                this.formData.append('file', _files[i], _files[i].name);
            }
            this.formData.set('name', this.form.name);
            this.formData.set('email', this.form.email);
            this.formData.set('phone', this.form.phone);
            this.formData.set('message', this.form.message);
        }
        else {
            this.formData.set('name', this.form.name);
            this.formData.set('email', this.form.email);
            this.formData.set('phone', this.form.phone);
            this.formData.set('message', this.form.message);
        }
        this.postMail(this.formData);
        this.visibility = false;
    }
    ngOnInit() {
        this._ln = this.ln._lang;
        this.ln.langClick.subscribe(ln => { this._ln = ln; });
    }
    postMail(form) {
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpRequest"]('POST', 'mail.php', form, {
            reportProgress: true,
        });
        this.http.request(req).subscribe(event => {
            // Via this API, you get access to the raw event stream.
            // Look for upload progress events.
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                this.percentDone = Math.round(100 * event.loaded / event.total);
                this.percentDone2 = Math.round(100 * event.loaded / event.total) + 5;
            }
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                this.error = true;
                this.status1 = "Ваше письмо отправленно!";
                this.status2 = "Ваш лист відправлений!";
                this.status3 = "Your letter has been sent!";
            }
            /*  if (event instanceof HttpErrorResponse) {
                if (event.error === "404") {
                  this.error = true;
                  this.status1 = "Ошибка. Ваше письмо не отправленно!";
                  this.status2 = "Помилка. Ваш лист не відправлено!";
                  this.status3 = "Error. Your letter hasn't been sent!";
                }
               }  */
        });
    }
};
FormComponent.ctorParameters = () => [
    { type: src_app_services_from_service__WEBPACK_IMPORTED_MODULE_2__["FromService"] },
    { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.css */ "./src/app/contacts/form/form.component.css")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/contacts/form/mailForm.ts":
/*!*******************************************!*\
  !*** ./src/app/contacts/form/mailForm.ts ***!
  \*******************************************/
/*! exports provided: mailForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mailForm", function() { return mailForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class mailForm {
}


/***/ }),

/***/ "./src/app/kmd/kmd.component.css":
/*!***************************************!*\
  !*** ./src/app/kmd/kmd.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\r\n    font-family: var(--text-g);\r\n    margin-left: 300px;\r\n    min-height: 580px;\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    font-family: var(--text-g);\r\n    text-align: center;\r\n    margin: 0;\r\n    color: var(--red);\r\n    font-size: 22px;\r\n}\r\n\r\nh2 {\r\n    font-family: var(--text-g);\r\n    color: var(--blue);\r\n    font-size: 20px;\r\n}\r\n\r\n.card {\r\n    font-family: var(--text-g);\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    width: 32.5%;\r\n    min-width: 310px;\r\n    height: 320px;\r\n    margin: 4px;\r\n    text-align: center;\r\n    float: left;\r\n}\r\n\r\n.card-main,\r\n.card-main-two {\r\n    height: 340px;\r\n}\r\n\r\n.card>img {\r\n    height: 120px;\r\n    margin: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\np {\r\n    font-family: var(--text-g);\r\n    margin-bottom: 6px;\r\n    margin-top: 0;\r\n}\r\n\r\napp-form {    \r\n    margin-top: 20px;\r\n    float: left;\r\n}\r\n\r\n@media (max-width: 1580px) {\r\n    app-form {\r\n        display: none;\r\n    }\r\n    .main {\r\n        margin-left: 0px;\r\n        display: inline-block;\r\n        min-height: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 1280px) {\r\n    .card {\r\n        width: 100%;\r\n        height: auto;\r\n        min-width: 0;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva21kL2ttZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9rbWQva21kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDU4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtZyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWcpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgd2lkdGg6IDMyLjUlO1xyXG4gICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZC1tYWluLFxyXG4uY2FyZC1tYWluLXR3byB7XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG59XHJcblxyXG4uY2FyZD5pbWcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtZyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5hcHAtZm9ybSB7ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTU4MHB4KSB7XHJcbiAgICBhcHAtZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tYWluIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/kmd/kmd.component.ts":
/*!**************************************!*\
  !*** ./src/app/kmd/kmd.component.ts ***!
  \**************************************/
/*! exports provided: KmdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmdComponent", function() { return KmdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let KmdComponent = class KmdComponent {
    constructor(langService, meta, title) {
        this.langService = langService;
        this.meta = meta;
        this.title = title;
        meta.addTags([
            {
                name: 'autor', content: ''
            }
        ]);
    }
    ngOnInit() {
        this._lang = this.langService._lang;
        this.langService.langClick.subscribe(ln => { this._lang = ln; });
        if (this._lang == "UA") {
            this.title.setTitle('Віталій Тимошенко');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'КМД, ЕСКД, металоконструкції, креслення'
                },
                {
                    name: 'description', content: 'Розробка КМД, машин і механізмів (машинобудування). Інженерні послуги.'
                },
            ]);
        }
        else {
            this.title.setTitle('Vitaliy Tymoshenko');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'steel detailer, modeling, drawings'
                },
                {
                    name: 'description', content: 'Models and drawings of steel structures, machines and mechanisms (mechanical engineering). Engineering services.'
                },
            ]);
        }
    }
};
KmdComponent.ctorParameters = () => [
    { type: _services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
KmdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kmd',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kmd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kmd/kmd.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kmd.component.css */ "./src/app/kmd/kmd.component.css")).default]
    })
], KmdComponent);



/***/ }),

/***/ "./src/app/lang/lang.component.css":
/*!*****************************************!*\
  !*** ./src/app/lang/lang.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    font-family: var(--text-g);\r\n    font-size: 15px;\r\n    margin-top: 17px;   \r\n    color: var(--red);\r\n}\r\n\r\n.btn {\r\n    font-family: var(--text-g);\r\n    cursor: pointer;\r\n}\r\n\r\n.active { \r\n    background-color: var(--grey);\r\n    border-radius: 8px;\r\n    padding: 6px;\r\n    color: var(--blue);\r\n    transition-property: all;\r\n    transition-duration: 1.5s; \r\n}\r\n\r\ninput {\r\n    display: none; \r\n}\r\n\r\nlabel {\r\n    padding: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZy9sYW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sYW5nL2xhbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWcpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDsgICBcclxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7IFxyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/lang/lang.component.ts":
/*!****************************************!*\
  !*** ./src/app/lang/lang.component.ts ***!
  \****************************************/
/*! exports provided: LangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangComponent", function() { return LangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LangComponent = class LangComponent {
    constructor(langService, router) {
        this.langService = langService;
        this.router = router;
        this.languages = [
            "UA",
            //"RU",
            "EN"
        ];
        this._lang = langService.getLg();
    }
    ngOnInit() {
        this.langService.langClick.subscribe(ln => { this._lang = ln; });
    }
    radioClick(lang) {
        this.langService.radio(lang);
        this._lang = lang;
        this.curentUrl = this.router.url;
        var x2 = this.curentUrl.split("/");
        if (x2[2] != undefined) {
            var changeUrl = "/" + lang + "/" + x2[2];
        }
        else {
            var changeUrl = "/" + lang;
        }
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([changeUrl]));
    }
};
LangComponent.ctorParameters = () => [
    { type: _services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lang',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lang.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lang/lang.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lang.component.css */ "./src/app/lang/lang.component.css")).default]
    })
], LangComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#menu {\r\n    font-family: var(--text-g);\r\n    font-size: 22px;\r\n    padding-top: 50px;\r\n    padding-bottom: 30px;\r\n    border-bottom:solid 1px;\r\n}\r\n\r\ndiv.nav {\r\n    float: left;\r\n    padding: 5px;\r\n    border-radius: 8px;\r\n}\r\n\r\ndiv.menu {   \r\n    position: relative;\r\n    bottom: -10px;\r\n    display: inline;   \r\n    text-align: center;\r\n}\r\n\r\ndiv.menu>span>a {\r\n    margin: 6px;\r\n    padding: 6px 5px 8px 6px;\r\n    border-radius: 8px;\r\n    top: 0;\r\n    transition-property: all;\r\n    transition-duration: 1.2s;   \r\n}\r\n\r\ndiv.lang {\r\n    float: right;\r\n    margin-right: 10px;\r\n}\r\n\r\na.logo {\r\n    color: var(--blue);\r\n    font-size: 40px;\r\n}\r\n\r\n.logo_point {\r\n    position: relative;\r\n    bottom: 14px;\r\n    font-size: 30px;\r\n    transition-property: bottom;\r\n    transition-duration: .6s;\r\n    color: var(--red);\r\n}\r\n\r\n.logo_point:hover {\r\n    bottom: -10px;\r\n}\r\n\r\ndiv.selected>span>a {\r\n    background-color: var(--grey);\r\n    position: relative;\r\n    top: 10px;\r\n    color: var(--blue);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: var(--red);\r\n}\r\n\r\n@media (max-width: 800px) {    \r\n    div.lang {      \r\n        float: none;\r\n        margin-left: 10px;     \r\n    }\r\n    div.menu {\r\n        display: inline-block;  \r\n        padding-bottom: 1em;  \r\n    }\r\n\r\n    #menu {\r\n        padding-top: 30px;\r\n    }    \r\n}\r\n\r\n@media (max-width: 594px) {\r\n    #menu {\r\n        padding-top: 10px;\r\n    }    \r\n}\r\n\r\n/*Смартфоны*/\r\n\r\n@media (max-width: 360px) {\r\n    div.nav {\r\n        float: none;\r\n        text-align: center;\r\n        border-bottom: solid 1px;\r\n        border-radius: 0px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sd0JBQXdCO0lBQ3hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBR0EsWUFBWTs7QUFDWjtJQUNJO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZW51IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWcpO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206c29saWQgMXB4O1xyXG59XHJcblxyXG5kaXYubmF2IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5kaXYubWVudSB7ICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lOyAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYubWVudT5zcGFuPmEge1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggNXB4IDhweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzOyAgIFxyXG59XHJcblxyXG5kaXYubGFuZyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmEubG9nbyB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLmxvZ29fcG9pbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjZzO1xyXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XHJcbn1cclxuLmxvZ29fcG9pbnQ6aG92ZXIge1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxufVxyXG5cclxuZGl2LnNlbGVjdGVkPnNwYW4+YSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7ICAgIFxyXG4gICAgZGl2LmxhbmcgeyAgICAgIFxyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyAgICAgXHJcbiAgICB9XHJcbiAgICBkaXYubWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTsgIFxyXG4gICAgfVxyXG5cclxuICAgICNtZW51IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIH0gICAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU5NHB4KSB7XHJcbiAgICAjbWVudSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuLyrQodC80LDRgNGC0YTQvtC90YsqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgIGRpdi5uYXYge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lang.service */ "./src/app/services/lang.service.ts");



let MenuComponent = class MenuComponent {
    constructor(langService) {
        this.langService = langService;
        this.menu = [
            {
                "id": "1",
                "Value_UA": "Резюме",
                "Value_US": "Resume"
            },
            /*   {
                "id": "4",
                "Value_UA": "КМД",
                "Value_US": "Steel_Detailing"
              }, */
            {
                "id": "5",
                "Value_UA": "2D_Портфоліо",
                "Value_US": "2D_Portfolio"
            },
            {
                "id": "3",
                "Value_UA": "3D_Портфоліо",
                "Value_US": "3D_Portfolio"
            },
        ];
    }
    ngOnInit() {
        this.langService.langClick.subscribe(ln => { this._lang = ln; });
        this._lang = this.langService.getLg();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MenuComponent);



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".github { \r\n    font-family: var(--text-g);   \r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.sketchfab-embed-wrapper {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\nh3 {\r\n    color: var(--red);\r\n}\r\n\r\na {\r\n    color: var(--blue);\r\n}\r\n\r\n@media screen { \r\n    iframe {\r\n        height: 90vh;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2l0aHViIHsgXHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1nKTsgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5za2V0Y2hmYWItZW1iZWQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5oMyB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4geyBcclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let PortfolioComponent = class PortfolioComponent {
    constructor(langService, meta, title) {
        this.langService = langService;
        this.meta = meta;
        this.title = title;
        title.setTitle('tyt title2');
        meta.addTags([
            {
                name: 'autor', content: ''
            }
        ]);
    }
    ngOnInit() {
        this.langService.langClick.subscribe(ln => { this._lang = ln; });
        this._lang = this.langService.getLg();
        if (this._lang == "UA") {
            this.title.setTitle('Віталій Тимошенко');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'Віталій Тимошенко - Інженер-конструктор'
                },
                {
                    name: 'description', content: 'Проектування і розробка КМД, машин і механізмів(машинобудування). Інженерні послуги.'
                },
            ]);
        }
        else {
            this.title.setTitle('Vitaliy Tymoshenko');
            this.meta.addTags([
                {
                    name: 'keywords', content: 'Vitaliy Tymoshenko - Steel deteailer'
                },
                {
                    name: 'description', content: 'Model and drawings of steel structures, machines and mechanisms (mechanical engineering). Engineering services.'
                },
            ]);
        }
    }
};
PortfolioComponent.ctorParameters = () => [
    { type: _services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")).default]
    })
], PortfolioComponent);



/***/ }),

/***/ "./src/app/services/experience.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/experience.service.ts ***!
  \************************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ExperienceService = class ExperienceService {
    constructor(http) {
        this.http = http;
    }
    getExperince() {
        return this.http.get('assets/getAboutMe.JSON');
    }
    getImgInfo() {
        return this.http.get('assets/imgInfo.JSON');
    }
};
ExperienceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ExperienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExperienceService);



/***/ }),

/***/ "./src/app/services/from.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/from.service.ts ***!
  \******************************************/
/*! exports provided: FromService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromService", function() { return FromService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FromService = class FromService {
    constructor(http) {
        this.http = http;
    }
    postMail(form) {
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', 'mail.php', form, {
            reportProgress: true,
        });
        this.http.request(req).subscribe(event => {
            // Via this API, you get access to the raw event stream.
            // Look for upload progress events.
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('File is completely uploaded!');
            }
        });
    }
};
FromService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FromService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FromService);



/***/ }),

/***/ "./src/app/services/lang.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/lang.service.ts ***!
  \******************************************/
/*! exports provided: LangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangService", function() { return LangService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let LangService = class LangService {
    constructor(location) {
        this.location = location;
        this.langClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.location.path().split('/')[1] != null) {
            this._lang = this.location.path().split('/')[1];
        }
        else {
            this._lang = "UA";
        }
    }
    radio(lang) {
        this.langClick.emit(lang);
        this._lang = lang;
    }
    getLg() {
        return this._lang;
    }
};
LangService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
LangService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LangService);



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MenuService = class MenuService {
    constructor(http) {
        this.http = http;
        this.data = ["Resume", "2D_Portfolio", "3D_Portfolio"];
    }
    getData() {
        return this.data;
    }
    getMenu() {
        return this.http.get('assets/getMenu.JSON');
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuService);



/***/ }),

/***/ "./src/app/services/sidebar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarService = class SidebarService {
    constructor() {
        this.change_a1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change_a2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change_a3 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change_a4 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change_a5 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change_a6 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    sidebar() {
        this.change_a1.emit(this._a1);
        this.change_a2.emit(this._a2);
        this.change_a3.emit(this._a3);
        this.change_a4.emit(this._a4);
        this.change_a5.emit(this._a5);
        this.change_a6.emit(this._a6);
    }
};
SidebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SidebarService);



/***/ }),

/***/ "./src/app/services/skils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/skils.service.ts ***!
  \*******************************************/
/*! exports provided: SkilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkilsService", function() { return SkilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SkilsService = class SkilsService {
    constructor(http) {
        this.http = http;
        this._engine = [];
    }
    getSkils() {
        return this.http.get('assets/getSkils.JSON');
    }
    getSkilsProg() {
        return this.http.get('assets/getSkilsProg.JSON');
    }
};
SkilsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SkilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SkilsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Programing\vit\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map