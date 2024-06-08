import { Resolver, Query, Args } from '@nestjs/graphql';
import { RandomService } from './random.service';
import { Random } from './models/random.model';
import { NotFoundException } from '@nestjs/common';
import { RandomQuery } from './models/randomQuery.model';

@Resolver((of) => Random)
export class RandomResolver {
  constructor(private readonly randomService: RandomService) {}

  @Query((returns) => Random)
  async featuredRandom(): Promise<Random> {
    const result = await this.randomService.findAllRandom();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Query((returns) => Random)
  async featuredCategoryRandom(
    @Args('category') category: string,
  ): Promise<Random> {
    const result = await this.randomService.findAllRandomCategory(category);
    if (!result) {
      throw new NotFoundException(category);
    }
    return result;
  }

  @Query((returns) => [String])
  async featuredCategoriesRandom(): Promise<[]> {
    const result = await this.randomService.findAllRandomCategories();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Query((returns) => RandomQuery)
  async featuredQueryRandom(
    @Args('query') query: string,
  ): Promise<RandomQuery> {
    const result = await this.randomService.findAllRandomQuery(query);
    if (!result) {
      throw new NotFoundException(query);
    }
    return result;
  }
}
