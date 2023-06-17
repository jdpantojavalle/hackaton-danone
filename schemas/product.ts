// schemas/product.js
export default {
    name: 'product',
    type: 'document',
    title: 'product',
    fields: [
      {
        name: 'ean',
        type: 'string',
        title: 'EAN'
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'ingredients',
        type: 'string',
        title: 'Ingredients'
      },
      {
        name: 'details',
        type: 'string',
        title: 'Details'
      },
      {
        name: 'fats',
        type: 'string',
        title: 'Fats'
      },
      {
        name: 'hc',
        type: 'string',
        title: 'HC'
      },
      {
        name: 'footprint_ecological',
        type: 'number',
        title: 'Ecological Footprint'
      },
      {
        name: 'footprint_co2',
        type: 'number',
        title: 'CO2 Emissios'
      },
      {
        name: 'footprint_carbon',
        type: 'number',
        title: 'Ecological Footprint'
      }
    ]
  }