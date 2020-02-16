// import request from 'supertest';
// import app from '../../src/app';

 import faker from 'faker';

// describe('Upload', () => {
//   afterAll(() => setTimeout(() => process.exit(), 1000))

//   it('should be able upload', async () => {
//     const file = faker.system.commonFileName();

//     const response = await request(app)
//       .post('/')
//       .send(file);

//       expect(response.status).toBe(200);
//   });
// });


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
