import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'random' })
export class Random {
  @Field((type) => ID)
  id: string;

  @Field((type) => [String])
  categories: string[];

  @Field({ nullable: true })
  created_at?: string;

  @Field({ nullable: true })
  icon_url?: string;

  @Field({ nullable: true })
  updated_at?: string;

  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  value?: string;
}
