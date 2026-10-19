import { describe, expect, it } from 'vitest'

import { cn } from '@/lib/utils'

describe('environnement de test', () => {
  it('exécute Vitest', () => {
    expect(1 + 1).toBe(2)
  })

  it('résout l\'alias @ et fusionne les classes Tailwind', () => {
    expect(cn('px-2', 'px-4', false && 'hidden')).toBe('px-4')
  })
})
