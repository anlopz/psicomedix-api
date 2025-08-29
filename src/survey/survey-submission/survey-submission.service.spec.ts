import { Test, TestingModule } from '@nestjs/testing';
import { SurveySubmissionService } from './survey-submission.service';

describe('SurveySubmissionService', () => {
  let service: SurveySubmissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveySubmissionService],
    }).compile();

    service = module.get<SurveySubmissionService>(SurveySubmissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
