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
];

RenderClimates();