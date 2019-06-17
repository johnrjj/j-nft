## John's ERC-721 NFC Token

Howdy, this is my repository for my very own ERC-721 non-fungible token.

#### What is ERC-721?
ERC-721 is a free, open standard that describes how to build non-fungible or unique tokens on the Ethereum blockchain. While most tokens are fungible (every token is the same as every other token), ERC-721 tokens are all unique.

Think of them like rare, one-of-a-kind collectables.

Non-Fungible tokens allow developers to tokenize ownership of any arbitrary data, drastically increasing the design space of what can be represented as a token on the Ethereum blockchain.


## Install
```
yarn

// then create a .env file that looks like this:

TRUFFLE_MNEMONIC=candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
GANACHE_MNEMONIC=grid voyage cream cry fence load stove sort grief fuel room save
TESTNET_MNEMONIC=a twelve word mnemonic phrase that works with some test network buddy
INFURA_API_KEY=yOUrInfURaKEy

```

## Run
```
yarn lint:watch
```

## Test
```
truffle develop
yarn test
```

## Deploy
```
truffle develop
yarn deploy --network develop

// this just runs truffle migrate --reset --compile-all
```

## Prior Art

Project boilerplate based off of [truffle-shavings](https://github.com/okwme/truffle-shavings/). 