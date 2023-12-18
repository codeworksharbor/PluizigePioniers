import {createBasicBird} from './Bird';
import { SearchClimate } from './Climate';
import RenderClimates, {climates} from './climates';

const birds = [
	createBasicBird("vink", "Veel voorkomende vogel in waaronder Nederland",
					SearchClimate("hills", climates), ['berry', 'insect']),
	createBasicBird("sneeuwuil", "Uil met een dikke vacht die in veel voorkomt in de sneeuw",
					SearchClimate("tundra", climates), ['meat', 'fish']),
	createBasicBird("pinguin", "Vogels die veel van vis houden en die niet kunnen vliegen, maar wel goed in de kou kunnen leven",
					SearchClimate("arctic", climates), ['fish']),
	createBasicBird("aasgier", "Gevaarlijke vogels die lang kunnen vliegen en veel asen op dode vogels",
					SearchClimate("desert", climates), ['meat']),
	createBasicBird("renkoekoek", "Snelle vogel die goed kan overleven in warme gebieden, kan ook goed coyotes ontwijken.",
					SearchClimate("desert", climates), ['meat', 'insect', 'berry']),
	createBasicBird("dodo", "Uitgestorven vogel op een eiland in Afrika, deze vogel kan niet vliegen maar ziet er wel leuk uit.",
					SearchClimate("desert", climates), ['berry']),
	createBasicBird("specht", "Van tak tot tak hakken ze in de bomen om hun eten te zoeken of om zelfs hun huisje te maken.",
					SearchClimate("hills", climates), ['insect', 'berry']),
	createBasicBird("haan", "De baas van alle kippen, dit is een mannetjes vogel die niet kan vliegen en ook geen eieren legt.",
					SearchClimate("hills", climates), ['insect', 'berry', 'seed']),
	createBasicBird("havik", "Krachtige roofvogel die niet bang is om andere vogels aan te vallen.",
					SearchClimate("hills", climates), ['meat', 'insect']),
	createBasicBird("vampiervogel", "Als er geen ander voedsel meer is gaat deze vogel opzoek naar andere vogels om hun bloed te zuigen.",
					SearchClimate("desert", climates), []),
	createBasicBird("umbrellabird", "Vogels die een beetje bang zijn voor water, deze vogels leven ook daarom in het diepe jungle",
					SearchClimate("jungle", climates), ['berry', 'insect', 'meat']),
	createBasicBird("paradijsvogel", "Prachtige vogels met de mooiste kleuren van het hele paradijs",
					SearchClimate("jungle", climates), ['berry', 'insect']),
	// lol die naam
	createBasicBird("vuurkeelglansstaartkolibrie", "Een magische fladderaar met een glinsterende rode keel en een prachtige staart, net als een kleurrijke elfenvogel",
					SearchClimate("jungle", climates), ['berry', 'insect']),
	createBasicBird("harpij", "Een stoere koning van het regenwoud, met supersterke klauwen en een stoere uitstraling, net als een machtige bosbeschermer",
					SearchClimate("jungle", climates), ['meat', 'insect']),
	createBasicBird("sneeuwgors", "Met zijn winterse witte verenkleed en subtiele strepen, lijkt als een levend sneeuwkristal te dansen over de bevroren vlaktes van de tundra.",
					SearchClimate("tundra", climates), ['berry', 'seed']),
	createBasicBird("ruigpootbuizerd", "Met zijn donkere veren en pluizige poten, zweeft majestueus boven de uitgestrekte toendra, speurend naar prooi in de ijzige lucht van het noordelijke klimaat.",
					SearchClimate("tundra", climates), ['meat', 'fish']),
	createBasicBird("taigagaai", "Als een kleine, winterse vriend met zijn witte veren en strepen, die dartelt en danst als een vrolijke sneeuwvogel op de ijzige tundra.",
					SearchClimate("tundra", climates), ['berry', 'insect', 'seed']),
	createBasicBird("zuidpoolkip", "Als een grappige, pluizige vriend met een dikke vacht die lijkt op een zachte sneeuwbal, en hij waggelt vrolijk rond op de ijzige vlaktes van de Zuidpool, alsof hij een winterse dansfeestje viert!",
					SearchClimate("arctic", climates), ['fish', 'insect']),
	createBasicBird("albatros", "Een supersterke vogel met enorme vleugels die lijken op regenbogen, en hij zweeft hoog in de lucht alsof hij meedoet aan een magische vliegwedstrijd boven de oceaan!",
					SearchClimate("arctic", climates), ['fish']),
	createBasicBird("skua", "Een stoere zuidpoolvogel met bruine veren die als een slimme piraat door de lucht scheert, op zoek naar lekkere visjes om te eten en avonturen te beleven in de koude zeebries!",
					SearchClimate("arctic", climates), ['fish']),
];

RenderClimates();