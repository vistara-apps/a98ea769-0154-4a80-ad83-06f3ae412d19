import { calculateProgress, getMoodEmoji, getMoodLabel } from '../lib/utils'

describe('Utility Functions', () => {
  describe('calculateProgress', () => {
    it('should calculate progress correctly', () => {
      expect(calculateProgress(50, 100)).toBe(50)
      expect(calculateProgress(25, 200)).toBe(12)
      expect(calculateProgress(100, 100)).toBe(100)
      expect(calculateProgress(150, 100)).toBe(100) // capped at 100
    })
  })

  describe('getMoodEmoji', () => {
    it('should return correct emoji for mood levels', () => {
      expect(getMoodEmoji(1)).toBe('😢')
      expect(getMoodEmoji(2)).toBe('😕')
      expect(getMoodEmoji(3)).toBe('😐')
      expect(getMoodEmoji(4)).toBe('🙂')
      expect(getMoodEmoji(5)).toBe('😊')
    })
  })

  describe('getMoodLabel', () => {
    it('should return correct label for mood levels', () => {
      expect(getMoodLabel(1)).toBe('Very Low')
      expect(getMoodLabel(2)).toBe('Low')
      expect(getMoodLabel(3)).toBe('Neutral')
      expect(getMoodLabel(4)).toBe('Good')
      expect(getMoodLabel(5)).toBe('Excellent')
    })
  })
})

