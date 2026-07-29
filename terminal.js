'use strict';

const readline = require('readline');
const TempKit = require('./lib/tempkit-js');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const linhas = rl[Symbol.asyncIterator]();

async function ask(pergunta) {
  process.stdout.write(pergunta);
  const { value, done } = await linhas.next();
  if (done) process.exit(0);
  return value.trim();
}

async function main() {
  console.log('\n🌡️  Conversor de Temperatura — powered by TempKit\n');
  console.log('Unidades disponíveis: C (Celsius), F (Fahrenheit), K (Kelvin)\n');

  const valor = Number(await ask('Valor a converter: '));
  const de = (await ask('Unidade de origem (C/F/K): ')).toUpperCase();
  const para = (await ask('Unidade de destino (C/F/K): ')).toUpperCase();

  try {
    const resultado = TempKit.convert(valor, de, para);
    console.log(`\nResultado: ${valor}°${de} = ${resultado}°${para}\n`);
  } catch (erro) {
    console.log(`\n⚠️  ${erro.message}\n`);
  }

  process.exit(0);
}

main();