import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SurveySubmissionService {

    constructor(private prisma: PrismaService) { }

    async assignSurvey(userId: string, surveyId: string) {
        return this.prisma.surveySubmission.create({
            data: { userId, surveyId },
            include: { answers: true }
        });
    }

    async saveAnswer(submissionId: string, questionId: string, optionId: string | null) {
        return this.prisma.answer.upsert({
            where: {
                submission_question: { submissionId, questionId }
            },
            update: {
                optionId: optionId || null
            },
            create: { submissionId, questionId, optionId: optionId ?? null }
        })
    }

    // async saveAnswers(submissionId: string, answers: Array<{ questionId: string, optionId: string | null }>) {

    // }

}


