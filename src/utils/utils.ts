import { useParam } from "@blitzjs/next"

export const useStringParam = (value: string) => useParam(value, "string")
