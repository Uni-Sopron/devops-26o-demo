import { expect, test } from '@playwright/test'

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display counter with 0', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'count is 0' })).toBeVisible()
  })

  test('should display counter with incremented value after click', async ({
    page,
  }) => {
    await page.getByRole('button', { name: /0/ }).click()

    await expect(
      page.getByRole('button', { name: /count is 1/i })
    ).toBeVisible()
  })
})
