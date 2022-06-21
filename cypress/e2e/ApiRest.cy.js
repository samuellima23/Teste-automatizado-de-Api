
import ApiRest from "../support/pageobjects/Get"

describe('Método Get', () => {
  const Get = new ApiRest
  it('Request Get', () => {
    Get.MethodGet()
  })
})