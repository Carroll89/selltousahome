import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function ReadingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
