import { Args, ID, Int, Mutation, Resolver } from '@nestjs/graphql';
import { AssignSurveyInput, AssignSurveyResult, SaveAnswerInput, SaveAnswerResult, SaveAnswersInput } from '../model/survey-submission.model';
import { SurveySubmissionService } from './survey-submission.service';

@Resolver()
export class SurveySubmissionResolver {

    constructor(private readonly surveySubmissionService: SurveySubmissionService) { }

    @Mutation(() => AssignSurveyResult)
    async assignSurveyToUser(@Args('assignSurveyInput') { userId, surveyId }: AssignSurveyInput
    ): Promise<AssignSurveyResult> {
        return this.surveySubmissionService.assignSurvey(userId, surveyId);
    }

    // @Mutation(() => SaveAnswerResult)
    // async saveAnswers(
    //     @Args('saveAnswersInput') { submissionId, answers }: SaveAnswersInput,
    // ): Promise<SaveAnswerResult | void> {
    //     return this.surveySubmissionService.saveAnswers(submissionId, answers);
    // }

    @Mutation(() => SaveAnswerResult)
    async saveAnswer(
        @Args('saveAnswerInput') { submissionId, questionId, optionId }: SaveAnswerInput,
    ): Promise<SaveAnswerResult> {
        return this.surveySubmissionService.saveAnswer(submissionId, questionId, optionId);
    }

}
