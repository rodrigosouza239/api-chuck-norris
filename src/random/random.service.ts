import { Injectable } from '@nestjs/common';
import { Random } from './models/random.model';
import { RESTDataSource } from '@apollo/datasource-rest';
import { RandomQuery } from './models/randomQuery.model';

@Injectable()
export class RandomService extends RESTDataSource {
  baseURL = process.env.BASE_URL;

  async findAllRandom(): Promise<Random> {
    return this.get(`random`);
  }

  async findAllRandomCategory(category: string): Promise<Random> {
    return this.get(`random?category=${category}`);
  }

  async findAllRandomCategories(): Promise<[]> {
    return this.get(`categories`);
  }

  async findAllRandomQuery(query: string): Promise<RandomQuery> {
    return this.get(`search?query=${query}`);
  }
}
