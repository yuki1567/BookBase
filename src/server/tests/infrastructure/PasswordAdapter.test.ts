import { PasswordAdapter } from '@/infrastructure/adapters/PasswordAdapter'
import { faker } from '@faker-js/faker/.'

describe('PasswordAdapter', () => {
  const length = faker.number.int({ min: 8, max: 16 })
  const testPassword = faker.string.alphanumeric(length)

  describe('hash method', () => {
    it('パスワードが正しくハッシュ化されること', async () => {
      const hashedPassword = await PasswordAdapter.hash(testPassword)

      expect(hashedPassword).toHaveLength(60)
      expect(hashedPassword).not.toBe(testPassword)
    })
  })

  describe('compare', () => {
    it('パスワードとハッシュが一致すること', async () => {
      const hashedPassword = await PasswordAdapter.hash(testPassword)
      const isMatchedPassword = await PasswordAdapter.compare(
        testPassword,
        hashedPassword,
      )

      expect(isMatchedPassword).toBeTruthy()
    })

    it('間違ったパスワードの場合は一致しないこと', async () => {
      const hashedPassword = await PasswordAdapter.hash(testPassword)
      const isMatchedPassword = await PasswordAdapter.compare(
        '12345678',
        hashedPassword,
      )

      expect(isMatchedPassword).toBeFalsy()
    })
  })
})
