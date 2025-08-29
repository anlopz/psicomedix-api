// src/survey/models/survey.model.ts
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Option {
    @Field(() => ID)
    id: string;

    @Field()
    text: string;

    @Field(() => Int, { nullable: true })
    position?: number | null;
}

@ObjectType()
export class Question {
    @Field(() => ID)
    id: string;

    @Field()
    text: string;

    @Field(() => Int, { nullable: true })
    position?: number | null;

    @Field(() => [Option])
    options: Option[];
}

@ObjectType()
export class Section {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field(() => Int, { nullable: true })
    position?: number | null;

    @Field(() => [Question])
    questions: Question[];
}

@ObjectType()
export class Survey {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field(() => [Section])
    sections: Section[];
}
