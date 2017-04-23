const expect = require('chai').expect
const convertKg = require('..').convertKg
const convertLb = require('..').convertLb

describe('#conversor', function() {

  it('Convert kilograms to pounds', function() {
    const kilograms = convertKg(1)
    expect(kilograms[0]).to.equal('2.20462')
  })

  it('Convert pounds to kilograms', function() {
    const pounds = convertLb(1)
    expect(pounds[0]).to.equal('0.45359')
  })

  it('Convert some kilograms to pounds', function() {
    const kilograms = convertKg(1, 2.5, 5)
    const expected = ['2.20462', '5.51156', '11.02311']
    kilograms.forEach((kilogram, index) => expect(kilogram).to.equal(expected[index]))
  })

  it('Convert some pounds to kilograms', function() {
    const pounds = convertLb(1, 2.5, 5)
    const expected = ["0.45359", "1.13398", "2.26796"]
    pounds.forEach((pound, index) => expect(pound).to.equal(expected[index]))
  })

})
