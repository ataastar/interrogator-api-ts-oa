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
 * Translations for a phrase (\'to\' and \'from\')
 */
export interface TranslationForPhrase { 
    /**
     * The id of the unit content
     */
    id: number;
    /**
     * The \'from\' part translations
     */
    from: Array<TranslationPart>;
    /**
     * The \'to\' part translations
     */
    to: Array<TranslationPart>;
    /**
     * An example sentence for the phrase
     */
    example?: string;
    /**
     * The translation of the example sentence
     */
    translatedExample?: string;
    /**
     * The time when the translation will be interrogated
     */
    nextInterrogationTime?: string;
    /**
     * The last time when the translation was answered
     */
    lastAnswerTime?: string;
}

