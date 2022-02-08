// para rederisar o meu componente, importamos o render do testing-library
import { render, screen } from '@testing-library/react';

import Counter from ".";


describe('Counter Component', () => {
  test('deve iniciar o tituo com o valor 0', () => {
    // apartir desses metodo render, conseguimos pegar as funcoes e propriedades da funcao, ou podemos usar o screen do testing-library
    render(<Counter />)

    // pega em element que na qual o texto contem o 0
    const counterTitle = screen.getByText(0);

    // faz mesma coisa que o getByText porem nao quebra o codigo
    //// const counterQueryTitle = screen.queyByText("0");
  
    // retorna uma promise,
    //// const counterFindTitle = screen.findByText("0");

    // verifica se no documente existe essa constant
    expect(counterTitle).toBeInTheDocument();

  })
})