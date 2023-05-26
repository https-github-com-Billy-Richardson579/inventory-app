const { execSync } = require('child_process');
execSync('npm install');

const request = require("supertest");
const { sequelize } = require('../db');
const { Item } = require('../models/index');
const app = require('../app');
const seed = require("../seed.js");

describe('./items endpoint', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sync the database and clear existing data
    await seed(); // Seed the database with data
  });

  test("Testing itenm endpoint", async () => {
    const response = await request(app).get('/api/items');
    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("title");
  });

  test("Test ID GET request", async () => {
    const id = 1;
    const response = await request(app).get(`/api/items/${id}`);
    
    expect(response.body.id).toBe(id);
    expect(response.statusCode).toBe(200);
  });
  // test("Test POST Request",async()=>{
  //   const response = await request(app).post('api/items')
  //   console.log(response)
  //   expect(response.statusCode).toBe(200);

  // })
  });
  describe('POST / test', () => {
    it('should create a new item and respond with JSON', async () => {
      const itemData = {
        title: 'Test Item',
        price: 10.00,
        description: 'test item',
        category: 'Test',
        image: 'image.jpg',
      };
      const response = await request(app)
      .post('/api/items')
      .send(itemData);


    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
    });
  });
  describe('PUT /id test', () => {
    it('should create a updated item and respond with JSON', async () => {
      const itemData = {
        title: 'Test Item',
        price: 10.00,
        description: 'test item',
        category: 'Test',
        image: 'image.jpg',
      };
      const id = 1
      const response = await request(app)
      .put(`/api/items/${id}`)
      .send(itemData);


    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title');
    });
    describe('DELETE /id test', () => {
      it('should Delete an item', async () => {
        const itemData = {
          title: 'Test Item',
          price: 10.00,
          description: 'test item',
          category: 'Test',
          image: 'image.jpg',
        };
        const id = 1
        const response = await request(app)
        .delete(`/api/items/${id}`)
        .send(itemData);
  
        console.log(response.body)
      expect(response.body[0].id).toBe(2);

      });
    });
  });


 
