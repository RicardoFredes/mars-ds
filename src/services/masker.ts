import VMasker from "vanilla-masker";

export const masker = (value: string, pattern: string | string[]) => {
  const maskValue = (p: string) => VMasker.toPattern(value, { pattern: p })

  if (typeof pattern === 'string') return maskValue(pattern)
  if (!Array.isArray(pattern)) return value
  if (pattern.length === 1) return maskValue(pattern[0] as string)

  const patterns = pattern.sort((a, b) => a.length > b.length ? 1 : -1)
  const [firstPattern] = patterns

  for (let i = patterns.length - 1; i >= 0; i--) {
    const p = patterns[i] as string
    if (value.length >= p.length) return maskValue(p)
  }

  return VMasker.toPattern(value, { pattern: firstPattern })
}
