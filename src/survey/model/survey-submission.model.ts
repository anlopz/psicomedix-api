import { ObjectType, Field, ID, Int, InputType } from '@nestjs/graphql';

@ObjectType()
export class AssignSurveyResult {
    @Field(() => ID)
    id!: string;

    @Field(() => ID)
    userId!: string;

    @Field(() => ID)
    surveyId!: string;

    @Field()
    createdAt!: Date;
}

@ObjectType()
export class SaveAnswerResult {
    @Field(() => ID)

    @Field(() => ID)
    submissionId!: string;

    @Field(() => ID)
    questionId!: string;

    @Field(() => ID, { nullable: true })
    optionId!: string | null; // pass null to clear
}

@InputType()
export class AssignSurveyInput {
    @Field(() => ID)
    userId!: string;

    @Field(() => ID)
    surveyId!: string;
}

@InputType()
export class AnswerInput {
    @Field(() => ID)
    questionId!: string;

    @Field(() => ID, { nullable: true })
    optionId!: string | null; // pass null to clear
}

@InputType()
export class SaveAnswersInput {
    @Field(() => ID)
    submissionId!: string;

    @Field(() => [AnswerInput])
    answers: AnswerInput[];
}


@InputType()
export class SaveAnswerInput {
    @Field(() => ID)
    submissionId!: string;

    @Field(() => ID)
    questionId!: string;

    @Field(() => ID, { nullable: true })
    optionId!: string | null; // pass null to clear
}


