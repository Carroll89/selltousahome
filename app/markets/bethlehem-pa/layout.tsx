import { MobileCallBar } from '@/components/MobileCallBar';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function BethlehemLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MobileCallBar />
      <ExitIntentPopup />
    </>
  );
}
