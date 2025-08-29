// src/survey/survey.resolver.ts
import { Resolver, Mutation, Args, Query, Int, ID } from '@nestjs/graphql';
import { CreateSurveyInput } from '../model/create-survey.input';
import { Survey } from '../model/survey.model';
import { SurveyService } from './survey.service';

@Resolver(() => Survey)
export class SurveyResolver {
    constructor(private readonly surveyService: SurveyService) { }

    @Query(() => [Survey])
    surveys() {
        return this.surveyService.listAll();
    }

    @Query(() => Survey, { nullable: true })
    survey(@Args('id', { type: () => ID }) id: string) {
        return this.surveyService.getById(id);
    }

    @Mutation(() => Survey)
    async createSurvey(
        @Args('data') data: CreateSurveyInput,
    ): Promise<Survey> {
        return this.surveyService.createSurvey(data);
    }
}
