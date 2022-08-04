const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')
const Category = require('../models/Category')

beforeAll(async () => {
  await Category.deleteMany({})

  const categoryOne = new Category({
    name: 'Test 1'
  })

  await categoryOne.save()
})

describe('GET /category', () => {
  test('responds with json', async () => {
    await request(app).get('/category')
      .expect('Content-Type', /json/)
      .expect(200)
  })

  test('responds with one record', async () => {
    const response = await request(app).get('/category').send()
    expect(response.body).toHaveLength(1)
  })

  test('get a category named "New Year"', async () => {
    Category.findById = jest.fn().mockReturnValueOnce({
      name: 'New Year'
    })

    const response = await request(app).get('/category/123').send()
    expect(response.body.name).toBe('New Year')
  })
})

afterAll(() => {
  mongoose.connection.close()
})
