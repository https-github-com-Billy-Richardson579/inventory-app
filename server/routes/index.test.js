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
    const response = await request(app).get('/api/items'); // Ensure the correct endpoint path
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
});
