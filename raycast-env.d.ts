/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** m365 CLI Path - Full path to the m365 executable (leave empty to auto-detect) */
  "m365Path": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `inbox` command */
  export type Inbox = ExtensionPreferences & {}
  /** Preferences accessible in the `compose` command */
  export type Compose = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `inbox` command */
  export type Inbox = {}
  /** Arguments passed to the `compose` command */
  export type Compose = {}
}

