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
import { UnitLeaf } from './unitLeaf';


/**
 * The unit group, which contains units
 */
export interface UnitGroup { 
    /**
     * The name of the unit group
     */
    name: string;
    /**
     * The order of the unit group
     */
    order: number;
    /**
     * The unit leafs of the group
     */
    units?: Array<UnitLeaf>;
}

