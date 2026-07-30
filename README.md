# Temperatura Terminal

Mini app de terminal que converte temperaturas entre Celsius, Fahrenheit e
Kelvin, consumindo a biblioteca [TempKit](https://github.com/VitorJunior60/tempkit)
como **git submodule** (`lib/tempkit`).

## Como obter (com o submódulo)

```bash
git clone --recurse-submodules https://github.com/VitorJunior60/temperatura-terminal.git
cd temperatura-terminal
```

Se já clonou sem `--recurse-submodules`:

```bash
git submodule update --init --recursive
```

## Como executar

```bash
node terminal.js
```

## Exemplo

```
Valor a converter: 100
Unidade de origem (C/F/K): C
Unidade de destino (C/F/K): F

Resultado: 100°C = 212°F
```

## Licença

MIT