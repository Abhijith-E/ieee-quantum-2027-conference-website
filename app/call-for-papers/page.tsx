import CfpHero from '@/components/cfp/CfpHero';
import CfpScopeAndSticky from '@/components/cfp/CfpScopeAndSticky';
import TopicsAccordion from '@/components/cfp/TopicsAccordion';
import SubmissionGuidelines from '@/components/cfp/SubmissionGuidelines';
import ReviewProcessStepper from '@/components/cfp/ReviewProcessStepper';

export const revalidate = 3600;

export default function CallForPapersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CfpHero />
      <CfpScopeAndSticky />
      <TopicsAccordion />
      <SubmissionGuidelines />
      <ReviewProcessStepper />
    </main>
  );
}
