import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function StateCollegeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
