import WelcomePage from '@/Pages/WelcomePage.vue'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'

test('Welcome Page renders', () => {
  const { getByText } = render(WelcomePage)

  expect(getByText('test app')).toBeInTheDocument()
  expect(getByText('Form link')).toBeInTheDocument()
})
