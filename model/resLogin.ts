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


/**
 * Login response with tokens and roles
 */
export interface ResLogin { 
    /**
     * The JWT access token
     */
    idToken: string;
    /**
     * The JWT refresh token
     */
    refreshToken: string;
    /**
     * The user roles. Currently concatenated with comma
     */
    roles: string;
    nickname?: string;
}

