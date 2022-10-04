import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Actor Schema" })
export class Actor {
  @Field({ nullable: false })
  id: number;
  @Field({ nullable: false })
  firstName: string;
  @Field({ nullable: false })
  lastName: string;
  @Field({ nullable: false })
  picture: string;
  @Field({ nullable: false })
  gender: string;
  @Field({ nullable: false })
  origin: string;
  @Field({ nullable: false })
  age: number;
}
