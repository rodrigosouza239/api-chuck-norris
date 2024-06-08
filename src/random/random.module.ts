import { Module } from '@nestjs/common';
import { RandomResolver } from './random.resolver';
import { RandomService } from './random.service';

@Module({
  providers: [RandomResolver, RandomService],
})
export class RandomModule {
  constructor(private readonly randomResolver: RandomResolver) {}
  getResolvers() {
    return [this.randomResolver];
  }
}
