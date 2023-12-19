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
exports.birds = void 0;
const Bird_1 = require("./Bird");
const Climate_1 = require("./Climate");
const climates_1 = __importStar(require("./climates"));
exports.birds = [
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
    (0, Bird_1.createBasicBird)("umbrellabird", "Vogels die een beetje bang zijn voor water, deze vogels leven ook daarom in het diepe jungle", (0, Climate_1.SearchClimate)("jungle", climates_1.climates), ['berry', 'insect', 'meat']),
    (0, Bird_1.createBasicBird)("paradijsvogel", "Prachtige vogels met de mooiste kleuren van het hele paradijs", (0, Climate_1.SearchClimate)("jungle", climates_1.climates), ['berry', 'insect']),
    // lol die naam
    (0, Bird_1.createBasicBird)("vuurkeelglansstaartkolibrie", "Een magische fladderaar met een glinsterende rode keel en een prachtige staart, net als een kleurrijke elfenvogel", (0, Climate_1.SearchClimate)("jungle", climates_1.climates), ['berry', 'insect']),
    (0, Bird_1.createBasicBird)("harpij", "Een stoere koning van het regenwoud, met supersterke klauwen en een stoere uitstraling, net als een machtige bosbeschermer", (0, Climate_1.SearchClimate)("jungle", climates_1.climates), ['meat', 'insect']),
    (0, Bird_1.createBasicBird)("sneeuwgors", "Met zijn winterse witte verenkleed en subtiele strepen, lijkt als een levend sneeuwkristal te dansen over de bevroren vlaktes van de tundra.", (0, Climate_1.SearchClimate)("tundra", climates_1.climates), ['berry', 'seed']),
    (0, Bird_1.createBasicBird)("ruigpootbuizerd", "Met zijn donkere veren en pluizige poten, zweeft majestueus boven de uitgestrekte toendra, speurend naar prooi in de ijzige lucht van het noordelijke klimaat.", (0, Climate_1.SearchClimate)("tundra", climates_1.climates), ['meat', 'fish']),
    (0, Bird_1.createBasicBird)("taigagaai", "Als een kleine, winterse vriend met zijn witte veren en strepen, die dartelt en danst als een vrolijke sneeuwvogel op de ijzige tundra.", (0, Climate_1.SearchClimate)("tundra", climates_1.climates), ['berry', 'insect', 'seed']),
    (0, Bird_1.createBasicBird)("zuidpoolkip", "Als een grappige, pluizige vriend met een dikke vacht die lijkt op een zachte sneeuwbal, en hij waggelt vrolijk rond op de ijzige vlaktes van de Zuidpool, alsof hij een winterse dansfeestje viert!", (0, Climate_1.SearchClimate)("arctic", climates_1.climates), ['fish', 'insect']),
    (0, Bird_1.createBasicBird)("albatros", "Een supersterke vogel met enorme vleugels die lijken op regenbogen, en hij zweeft hoog in de lucht alsof hij meedoet aan een magische vliegwedstrijd boven de oceaan!", (0, Climate_1.SearchClimate)("arctic", climates_1.climates), ['fish']),
    (0, Bird_1.createBasicBird)("skua", "Een stoere zuidpoolvogel met bruine veren die als een slimme piraat door de lucht scheert, op zoek naar lekkere visjes om te eten en avonturen te beleven in de koude zeebries!", (0, Climate_1.SearchClimate)("arctic", climates_1.climates), ['fish']),
];
(0, climates_1.default)();
//# sourceMappingURL=main.js.map