import FormPage from '@/Pages/FormPage.vue'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'

test('Form Page renders', () => {
  const { getByLabelText } = render(FormPage)

  expect(getByLabelText('Field')).toBeInTheDocument()
})
