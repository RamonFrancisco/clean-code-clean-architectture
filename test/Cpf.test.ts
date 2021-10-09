import Cpf from "../src/Cpf"

test("Deve validar um Cpf", () => {
  const cpf = new Cpf("112.040.860-10")
  expect(cpf.value).toBe("112.040.860-10")
})