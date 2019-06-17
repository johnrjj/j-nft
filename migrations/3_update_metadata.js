var Metadata = artifacts.require('./Metadata.sol')
var Token = artifacts.require('./Token.sol')

let _ = '        '

module.exports = (deployer, helper, accounts) => {

  deployer.then(async () => {
    try {
      // Deploy Metadata.sol (update though)
      await deployer.deploy(Metadata, {replace: true})
      let metadata = await Metadata.deployed()
      console.log(_ + 'Metadata deployed at: ' + metadata.address)

      // Deployed Token.sol
      // await deployer.deploy(Token, 'Token Name', 'Token Symbol', metadata.address)
      let token = await Token.deployed()
      console.log(_ + 'Token deployed at: ' + token.address)

      await token.updateMetadata(metadata.address)
      console.log(_ + 'Token metadata updated to ' + metadata.address)

    } catch (error) {
      console.log(error)
    }
  })
}