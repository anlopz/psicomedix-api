import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSurveyInput } from '../model/create-survey.input';

@Injectable()
export class SurveyService {

    constructor(private prisma: PrismaService) { }

    async listAll() {
        return this.prisma.survey.findMany({
            orderBy: { id: 'desc' },
            include: {
                sections: {
                    orderBy: [{ position: 'asc' }, { id: 'asc' }],
                    include: {
                        questions: {
                            orderBy: [{ position: 'asc' }, { id: 'asc' }],
                            include: {
                                options: { orderBy: [{ position: 'asc' }, { id: 'asc' }] },
                            },
                        },
                    },
                },
            },
        });
    }

    async getById(id: string) {
        return this.prisma.survey.findUnique({
            where: { id },
            include: {
                sections: {
                    orderBy: [{ position: 'asc' }, { id: 'asc' }],
                    include: {
                        questions: {
                            orderBy: [{ position: 'asc' }, { id: 'asc' }],
                            include: {
                                options: { orderBy: [{ position: 'asc' }, { id: 'asc' }] },
                            },
                        },
                    },
                },
            },
        });
    }



    async createSurvey(data: CreateSurveyInput) {
        return this.prisma.survey.create({
            data: {
                title: data.title,
                sections: {
                    create: data.sections.map((section) => ({
                        title: section.title,
                        position: section.position,
                        questions: {
                            create: section.questions.map((question) => ({
                                text: question.text,
                                position: question.position,
                                options: {
                                    connectOrCreate: question.options.map((option) => ({
                                        where: { text: option.text },
                                        create: { text: option.text, position: option.position },
                                    })),
                                },
                            })),
                        },
                    })),
                },
            },
            include: {
                sections: {
                    include: {
                        questions: {
                            include: {
                                options: true,
                            },
                        },
                    },
                },
            },
        });
    }
}

