import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Adoption Router', () => {
  describe('GET /api/adoptions', () => {
    it('Tiene que devolver un array con las adopciones (status 200)', async () => {
      const res = await request(app).get('/api/adoptions');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('payload').that.is.an('array');
    });
  });

  describe('GET /api/adoptions/:id', () => {
    it('Tiene que devolver una adopcion por su id (status 200)', async () => {
      const allRes = await request(app).get('/api/adoptions');
      expect(allRes.status).to.equal(200);
      expect(allRes.body).to.have.property('payload').that.is.an('array');
      expect(allRes.body.payload.length).to.be.greaterThan(0);

      const adoptionId = allRes.body.payload[0]._id;

      const res = await request(app).get(`/api/adoptions/${adoptionId}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('payload').that.is.an('object');
      expect(res.body.payload).to.have.property('_id', adoptionId);
    });

    it('Tiene que devolver 404 para un id invalido o no existente', async () => {
      const invalidId = '64a1f5b3e2a9c12b3c4d9999';
      const res = await request(app).get(`/api/adoptions/${invalidId}`);
      expect(res.status).to.equal(404);
    });
  });

  describe('POST /api/adoptions', () => {
    it('Tiene que crear una nueva adopcion (status 201)', async () => {
      const newAdoption = {
        userId: '64a1f5b3e2a9c12b3c4d5678',
        petId: '64a1f5b3e2a9c12b3c4d5679',
      };

      const res = await request(app).post(`/api/adoptions/${userId}/${petId}`);
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('payload');
      expect(res.body.payload).to.have.property('_id');
    });

    it('Tiene que fallar si tiene datos incompletos (status 400)', async () => {
      const res = await request(app).post('/api/adoptions').send({});
      expect(res.status).to.equal(400);
    });
  });
});
