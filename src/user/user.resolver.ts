import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {

    constructor(private readonly userService: UserService) {

    }

    @Mutation(() => User)
    createUser(@Args('email') email: string): Promise<User> {
        return this.userService.create({ email });
    }

    @Query(() => [User])
    users() {
        return this.userService.getAll();
    }
}
