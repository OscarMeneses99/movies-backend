//import movies from '../movies.json' assert/with { type: "json" } <-- Experimental
import { createRequire } from "node:module"
const require = createRequire(import.meta.url)

export function readJSON(path) {
    return require(path)
}