"use strict";
(() => {
var exports = {};
exports.id = 5890;
exports.ids = [5890];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 1531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ seed)
});

// EXTERNAL MODULE: ./utils/db.tsx
var db = __webpack_require__(7891);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: ./utils/data.tsx

const data = {
    users: [
        {
            name: 'John',
            email: 'admin@example.com',
            password: external_bcryptjs_default().hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Jane',
            email: 'user@example.com',
            password: external_bcryptjs_default().hashSync('123456'),
            isAdmin: false
        }, 
    ],
    products: [
        {
            name: 'Aduino Uno',
            slug: 'arduino-uno',
            category: 'microcontroller',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Funo-removebg-preview.png?alt=media&token=cc52ae38-4b9c-4375-abb3-5ab0474615fd',
            isFeatured: true,
            price: 3500,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Arduino Uno microcontroller board'
        },
        {
            name: 'Aduino Mega',
            slug: 'arduino-mega',
            category: 'microcontroller',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Fmega-removebg-preview.png?alt=media&token=60d63c6e-ec7e-4c75-a99d-97f6e8626150',
            price: 3500,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Arduino Mega microcontroller board'
        },
        {
            name: 'ESP32',
            slug: 'esp32',
            category: 'microcontroller',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Fesp32-removebg-preview.png?alt=media&token=b7f51ec0-0105-4789-8ec9-c2df4ffdac5a',
            isFeatured: true,
            price: 4000,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'ESP32 microcontroller board'
        },
        {
            name: 'ESPCAM',
            slug: 'espcam',
            category: 'microcontroller',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Fespcam-removebg-preview.png?alt=media&token=2884a984-bdb1-4c85-bb2c-2e17ffe5052f',
            price: 5000,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'ESPCAM microcontroller board'
        },
        {
            name: '2004 LCD',
            slug: '2004lcd',
            category: 'screen',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2F2004lcd-removebg-preview.png?alt=media&token=2a70b7af-aabe-4953-b399-a47616def277',
            price: 2500,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: '20 by 4 liquid crystal display'
        },
        {
            name: 'DHT11',
            slug: 'dht11',
            category: 'sensor',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Fdht11-removebg-preview.png?alt=media&token=5d5ba275-8aba-406e-af85-97346994b663',
            price: 1000,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Temperature and humidity sensor'
        },
        {
            name: 'DS18B20',
            slug: 'ds18b20',
            category: 'sensor',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Fds18b20-removebg-preview.png?alt=media&token=3ba8c766-5882-4c5c-8c56-96524b08fd30',
            isFeatured: true,
            price: 7000,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'DS18B20 waterpoof Temperature sensor'
        },
        {
            name: 'Flame Sensor',
            slug: 'flame-sensor',
            category: 'sensor',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Fflame-removebg-preview.png?alt=media&token=8e7a544a-3946-4bae-8900-91f9de21e6d0',
            isFeatured: true,
            price: 1000,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Flame Sensor'
        },
        {
            name: 'ESP8266 WiFi Module',
            slug: 'esp8266-wifi-module',
            category: 'microcontroller',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Fwifi-removebg-preview.png?alt=media&token=ba7ff1a0-076e-4269-afdc-f018037a71aa',
            price: 3500,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'ESP8266 WiFi module'
        },
        {
            name: 'Raspberry Pi',
            slug: 'raspberry-pi',
            category: 'microcomputer',
            image_url: 'https://firebasestorage.googleapis.com/v0/b/d2mat-36fa3.appspot.com/o/pictures%2Fraspberry-removebg-preview.png?alt=media&token=7e45f660-7497-4714-abd1-6d2cfd2fe7d5',
            isFeatured: true,
            price: 95000,
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Raspberry Pi 4 8gb microcomputer board'
        }, 
    ]
};
/* harmony default export */ const utils_data = (data);

// EXTERNAL MODULE: ./models/Product.tsx
var Product = __webpack_require__(7581);
// EXTERNAL MODULE: ./models/User.tsx
var User = __webpack_require__(8401);
;// CONCATENATED MODULE: ./pages/api/seed.tsx




const handler = async (req, res)=>{
    await (0,db/* default */.Z)();
    await User/* default.deleteMany */.Z.deleteMany();
    await User/* default.insertMany */.Z.insertMany(utils_data.users);
    await Product/* default.deleteMany */.Z.deleteMany();
    await Product/* default.insertMany */.Z.insertMany(utils_data.products);
    res.json('Seeded successfully');
};
/* harmony default export */ const seed = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5900], () => (__webpack_exec__(1531)));
module.exports = __webpack_exports__;

})();