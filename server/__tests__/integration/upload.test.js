import faker from 'faker';
import request from 'supertest';
import app from '../../src/app';

describe('Professional', () => {
  it('should be able upload', async () => {
    const file = faker.system.commonFileName();

    const response = await request(app)
      .post('/')
      .send(file);

      expect(response.status).toBe(200);
  });
});
