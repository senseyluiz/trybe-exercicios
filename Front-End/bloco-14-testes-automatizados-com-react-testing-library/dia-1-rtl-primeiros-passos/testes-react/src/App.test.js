
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App';

describe("Testando inserção de Email", () => {
  test("Verifica se o imput de email foi renderizado", () => {
    render(<App />)

    const imputEmail = screen.getByLabelText("Email");

    expect(imputEmail).toBeInTheDocument();
    expect(imputEmail.type).toBe('email');
  })

  test("Verifica se o botão de Enviar e Voltar foi renderizado", () => {
    render(<App />)

    const botoes = screen.getAllByRole('button');

    expect(botoes).toHaveLength(2);
  })

  test("Verifica se o botão de Enviar foi renderizado", () => {
    render(<App />)

    const btnEnviar = screen.getByTestId('id-send');

    expect(btnEnviar).toBeInTheDocument();
    expect(btnEnviar).toHaveValue('Enviar');
  })

  test('Verifica se ao clicar no botão ""Eviar", o email é renderizado', () => {
    render(<App />)

    const inputEmail = screen.getByLabelText('Email')
    const btnEnviar = screen.getByTestId('id-send');
    const emailrender = screen.getByTestId('id-email-user');

    userEvent.type(inputEmail, 'teste@teste.com')    
    userEvent.click(btnEnviar) 
       
    expect(emailrender).toHaveTextContent('Email: teste@teste.com')
  })



})



// Acessar os elementos na tela

// Interagir com os elementos (se necessário)

// Fazer os testes
