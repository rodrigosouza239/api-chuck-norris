import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { RandomModule } from '../src/random/random.module';
import { RandomService } from '../src/random/random.service';

describe('Random', () => {
  let app: INestApplication;
  const randomService = { findAllRandomCategories: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [RandomModule],
    })
      .overrideProvider(RandomService)
      .useValue(randomService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET categories`, () => {
    return request(app.getHttpServer()).get('categories').expect(200).expect({
      data: randomService.findAllRandomCategories(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
