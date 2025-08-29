import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
    @Field(() => ID)
    questionId!: string;

    @Field(() => ID, { nullable: true })
    optionId?: string;
}
