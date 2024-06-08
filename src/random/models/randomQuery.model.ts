import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Random } from './random.model';

@ObjectType({ description: 'randomQuery' })
export class RandomQuery {
  @Field((type) => Int)
  id: string;

  @Field({ nullable: true })
  total?: number;

  @Field((type) => [Random])
  result: Random[];
}
