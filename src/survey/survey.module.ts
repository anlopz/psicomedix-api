import { Module } from '@nestjs/common';
import { SurveyResolver } from './survey/survey.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SurveyService } from './survey/survey.service';
import { SurveySubmissionResolver } from './survey-submission/survey-submission.resolver';
import { SurveySubmissionService } from './survey-submission/survey-submission.service';

@Module({
    imports: [PrismaModule],
    providers: [SurveyService, SurveyResolver, SurveySubmissionResolver, SurveySubmissionService]
})
export class SurveyModule { }