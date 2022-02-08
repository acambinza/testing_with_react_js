// para rederisar o meu componente, importamos o render do testing-library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from ".";


describe('Counter Component', () => {
  test('deve iniciar o titulo com o valor 0', () => {
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

  });

  test('deve conter a classe counter__title no titulo', () => {
    render(<Counter/>)

    const counterTitle = screen.getByText(0);
    // verifica se existe a class counter__title no titulo
    expect(counterTitle).toHaveClass('counter__title')

  });

  test('não deve iniciar o titulo com as classes [counter__title--increment, counter_title--decrement', () => {
    render(<Counter/>)

    const counterTitle = screen.getByText(0);

    // verifica se existe a class counter__title no titulo
    expect(counterTitle).not.toHaveClass('counter__title--increment')
    expect(counterTitle).not.toHaveClass('counter__title--descrement')

  });

  /** Testes de Eventos */
  test('deve incrementar +1 ao clicar no botão incrementar', () => {
    render(<Counter/>)

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i}) ;
    
    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(buttonIncrement)
    expect(screen.getByText("1")).toBeInTheDocument();

  });

   test('deve descrementar -1 ao clicar no botão incrementar', () => {
    render(<Counter/>)

    const buttonIncrement = screen.getByRole('button', {name: /decrementar/i}) ;
    
    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonIncrement)
    expect(screen.getByText("-1")).toBeInTheDocument();

  });

})