"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_1 = require("./Bird");
const Climate_1 = require("./Climate");
const climates_1 = __importStar(require("./climates"));
const birds = [
    (0, Bird_1.createBasicBird)("vink", "Veel voorkomende vogel in waaronder Nederland", (0, Climate_1.SearchClimate)("hills", climates_1.climates), ['berry', 'insect']),
    (0, Bird_1.createBasicBird)("sneeuwuil", "Uil met een dikke vacht die in veel voorkomt in de sneeuw", (0, Climate_1.SearchClimate)("tundra", climates_1.climates), ['meat', 'fish']),
    (0, Bird_1.createBasicBird)("pinguin", "Vogels die veel van vis houden en die niet kunnen vliegen, maar wel goed in de kou kunnen leven", (0, Climate_1.SearchClimate)("arctic", climates_1.climates), ['fish']),
    (0, Bird_1.createBasicBird)("aasgier", "Gevaarlijke vogels die lang kunnen vliegen en veel asen op dode vogels", (0, Climate_1.SearchClimate)("desert", climates_1.climates), ['meat']),
    (0, Bird_1.createBasicBird)("renkoekoek", "Snelle vogel die goed kan overleven in warme gebieden, kan ook goed coyotes ontwijken.", (0, Climate_1.SearchClimate)("desert", climates_1.climates), ['meat', 'insect', 'berry']),
    (0, Bird_1.createBasicBird)("dodo", "Uitgestorven vogel op een eiland in Afrika, deze vogel kan niet vliegen maar ziet er wel leuk uit.", (0, Climate_1.SearchClimate)("desert", climates_1.climates), ['berry']),
    (0, Bird_1.createBasicBird)("specht", "Van tak tot tak hakken ze in de bomen om hun eten te zoeken of om zelfs hun huisje te maken.", (0, Climate_1.SearchClimate)("hills", climates_1.climates), ['insect', 'berry']),
    (0, Bird_1.createBasicBird)("haan", "De baas van alle kippen, dit is een mannetjes vogel die niet kan vliegen en ook geen eieren legt.", (0, Climate_1.SearchClimate)("hills", climates_1.climates), ['insect', 'berry', 'seed']),
    (0, Bird_1.createBasicBird)("havik", "Krachtige roofvogel die niet bang is om andere vogels aan te vallen.", (0, Climate_1.SearchClimate)("hills", climates_1.climates), ['meat', 'insect']),
    (0, Bird_1.createBasicBird)("vampiervogel", "Als er geen ander voedsel meer is gaat deze vogel opzoek naar andere vogels om hun bloed te zuigen.", (0, Climate_1.SearchClimate)("desert", climates_1.climates), []),
];
(0, climates_1.default)();
//# sourceMappingURL=main.js.map