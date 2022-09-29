import { Field, InputType } from 'type-graphql';

@InputType()
export class ActorInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  picture?: string;
  @Field()
  gender: string;
  @Field()
  origin?: string;
  @Field()
  age?: number;
}
