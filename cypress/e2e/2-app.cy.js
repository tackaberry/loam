const mapboxgl = require('mapbox-gl')

describe('App', () => {

  let users

  before(function () {
    })

  beforeEach(function () {
    cy.visit('/')   
  })

  it('opening tifs works', { timeout: 5000, }, () => {
    cy.get('input[type=file]').selectFile('test/assets/tiny.tif')
    cy.get('#gdalinfo').contains('Size: 15, 16')
    cy.get('#gdalinfo').contains('Band count: 1')

    cy.get('input[type=file]').selectFile('test/assets/tiny_dem.tif')
    cy.get('#gdalinfo').contains('Size: 16, 16')
    cy.get('#gdalinfo').contains('Band count: 1')    
  })

  it('map works', { timeout: 5000, }, () => {

    cy.get('input[type=file]').selectFile('test/assets/tiny.tif')
    cy.get('#mapinfo').contains('{"lng":-75.28030494462357,"lat":40.13881222863272}')

  })

  afterEach( ()=>{

  })
})