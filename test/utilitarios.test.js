const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });

    test('Deve inverter uma string corretamente', () => {
        expect(utilitarios.inverterString('hello')).toBe('olleh');
    });

    test('Deve contar os caracteres de uma string corretamente', () => {
        expect(utilitarios.contarCaracteres('hello')).toBe(5);
    });

    test('Deve converter uma string para maiúsculas', () => {
        expect(utilitarios.paraMaiusculas('hello')).toBe('HELLO');
    });

    test('Deve converter uma string para minúsculas', () => {
        expect(utilitarios.paraMinusculas('HELLO')).toBe('hello');
    });

    test('Deve colocar a primeira letra de uma string em maiúscula', () => {
        expect(utilitarios.primeiraLetraMaiuscula('hello')).toBe('Hello');
    });

    test('Deve somar dois números corretamente', () => {
        expect(utilitarios.somar(2, 3)).toBe(5);
    });

    test('Deve subtrair dois números corretamente', () => {
        expect(utilitarios.subtrair(5, 2)).toBe(3);
    });

    test('Deve multiplicar dois números corretamente', () => {
        expect(utilitarios.multiplicar(2, 3)).toBe(6);
    });

    test('Deve dividir dois números corretamente', () => {
        expect(utilitarios.dividir(6, 2)).toBe(3);
    });

    test('Deve lançar um erro ao tentar dividir por zero', () => {
        expect(() => utilitarios.dividir(6, 0)).toThrow('Divisão por zero');
    });

    test('Deve verificar se um número é par', () => {
        expect(utilitarios.ehPar(2)).toBe(true);
        expect(utilitarios.ehPar(3)).toBe(false);
    });

    test('Deve retornar o primeiro elemento de um array', () => {
        expect(utilitarios.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test('Deve retornar o último elemento de um array', () => {
        expect(utilitarios.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test('Deve retornar o tamanho de um array', () => {
        expect(utilitarios.tamanhoArray([1, 2, 3])).toBe(3);
    });

    test('Deve ordenar um array', () => {
        expect(utilitarios.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    });

    test('Deve inverter um array', () => {
        expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('Deve gerar um número aleatório', () => {
        const random = utilitarios.gerarNumeroAleatorio(10);
        expect(random).toBeGreaterThanOrEqual(0);
        expect(random).toBeLessThan(10);
    });

    test('Deve verificar se um valor é um número', () => {
        expect(utilitarios.ehNumero(123)).toBe(true);
        expect(utilitarios.ehNumero('abc')).toBe(false);
    });

    test('Deve remover espaços de uma string', () => {
        expect(utilitarios.removerEspacos('  hello  ')).toBe('hello');
    });

    test('Deve repetir um texto um determinado número de vezes', () => {
        expect(utilitarios.repetirTexto('a', 3)).toBe('aaa');
    });

    test('Deve juntar um array com um separador', () => {
        expect(utilitarios.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });

    test('Deve contar as palavras em uma string', () => {
        expect(utilitarios.contarPalavras('hello world')).toBe(2);
    });

    test('Deve calcular a média de um array', () => {
        expect(utilitarios.mediaArray([1, 2, 3])).toBe(2);
    });

    test('Deve remover duplicados de um array', () => {
        expect(utilitarios.removerDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    test('Deve verificar se uma string é um palíndromo', () => {
        expect(utilitarios.ehPalindromo('arara')).toBe(true);
        expect(utilitarios.ehPalindromo('hello')).toBe(false);
    });

    test('Deve mesclar dois objetos', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2 });
    });
});