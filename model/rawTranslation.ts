/**
 * Interrogator API 1.0
 * This is the Interrogator API for the web client Source: - [GitHub](https://github.com/ataastar/interrogator-api)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: ata.astar@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TranslationPart } from './translationPart';


/**
 * The translation of a phrase and the example sentence
 */
export interface RawTranslation { 
    /**
     * The id of the translation link
     */
    translationLinkId: number;
    /**
     * The translation parts (phrases) for the language id
     */
    phrasesByLanguageId: { [key: string]: Array<TranslationPart>; };
    /**
     * An example sentence for the phrase
     */
    example?: string;
    /**
     * The translation of the example sentence
     */
    translatedExample?: string;
}

