const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });

    test('Deve inverter uma string corretamente', () => {
        expect(utilitarios.inverterString('SATC')).toBe('CTAS');
    });

    test('Deve somar dois números corretamente', () => {
        expect(utilitarios.somar(5, 10)).toBe(15);
    });

    test('Deve verificar se um número é par', () => {
        expect(utilitarios.ehPar(2)).toBe(true);
        expect(utilitarios.ehPar(3)).toBe(false);
    });
});