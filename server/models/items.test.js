const { STRING } = require('sequelize');
const { sequelize} = require('../db');
const { Item} = require('./Item');

// Test case for creating an item
describe('Item model', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Drops and recreates the table before running the tests
  });

  afterAll(async () => {
    await sequelize.close(); // Closes the database connection after running the tests
  });
  it('should create a new item', async () => {
    const newItem = {
      title: 'Test Item',
      price: '10.00',
      image: 'Img.com',
      category: 'Sample Cat',
      description: 'Sample Desc',
    };

    const test = await Item.create(newItem);

    expect(test.title).toBe(newItem.title)
    expect(test.price).toBe(newItem.price)
    expect(test.image).toBe(newItem.image)
    expect(test.category).toBe(newItem.category)
    expect(test.description).toBe(newItem.description)
    
  })

  it('Checks the Datatypes are correct', async () => {
    const newItem = {
      title: 'Test Item',
      price: '10.00',
      image: 'Img.com',
      category: 'Sample Cat',
      description: 'Sample Desc',
    };
    const test = await Item.create(newItem);
    
    expect(typeof(test.title)).toBe('string')
});
})
