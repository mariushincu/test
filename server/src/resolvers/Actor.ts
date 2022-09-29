import { Actor } from '../entities/Actor';
import {
  Arg,
  Root,
  Mutation,
  Query,
  Resolver,
  Subscription,
  PubSub
} from 'type-graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { ActorInput } from '../types';

const actors: Actor[] = [
  {
    id: 1,
    firstName: 'Al',
    lastName: 'Pacino',
    picture: '',
    gender: 'male',
    origin: 'New York',
    age: 82
  } as Actor,
  {
    id: 2,
    firstName: 'Rober',
    lastName: 'Downey',
    picture: '',
    gender: 'male',
    origin: 'New York',
    age: 57
  } as Actor
];

@Resolver(() => Actor)
export class ActorResolver {
  @Query(() => [Actor], { nullable: true, description: 'Get all actors' })
  async actors(): Promise<Actor[] | null> {
    return actors;
  }

  @Query(() => Actor, { nullable: true, description: 'Get actor by ID' })
  async actor(@Arg('id') id: number): Promise<Actor | null | undefined> {
    const actor = actors.find((actor) => actor.id === id);
    return actor;
  }

  @Mutation(() => Actor)
  async addActor(
    @Arg('data')
    { firstName, lastName, picture, gender, origin, age }: ActorInput,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Actor> {
    const newActor = {
      id: 3,
      firstName,
      lastName,
      picture,
      gender,
      origin,
      age
    } as Actor;

    actors.push(newActor);
    await pubSub.publish('NEW_ACTOR', { newActor });
    return newActor;
  }

  @Subscription(() => Actor, {
    topics: 'NEW_ACTOR'
  })
  async newActor(@Root() root: any): Promise<Actor> {
    return root.newActor;
  }
}
