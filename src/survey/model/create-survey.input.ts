// src/survey/dto/create-survey.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateSurveyInput {
    @Field()
    title: string;

    @Field(() => [CreateSectionInput])
    sections: CreateSectionInput[];
}

@InputType()
export class CreateSectionInput {
    @Field()
    title: string;

    @Field(() => Int, { nullable: true })
    position?: number | null;

    @Field(() => [CreateQuestionInput])
    questions: CreateQuestionInput[];

}

@InputType()
export class CreateQuestionInput {
    @Field()
    text: string;

    @Field(() => Int, { nullable: true })
    position?: number | null

    @Field(() => [CreateOptionInput])
    options: CreateOptionInput[];
}

@InputType()
export class CreateOptionInput {
    @Field()
    text: string;

    @Field(() => Int, { nullable: true })
    position?: number | null;
}