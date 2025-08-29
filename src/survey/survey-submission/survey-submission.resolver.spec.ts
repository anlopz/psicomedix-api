import { Test, TestingModule } from '@nestjs/testing';
import { SurveySubmissionResolver } from './survey-submission.resolver';

describe('SurveySubmissionResolver', () => {
  let resolver: SurveySubmissionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveySubmissionResolver],
    }).compile();

    resolver = module.get<SurveySubmissionResolver>(SurveySubmissionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
