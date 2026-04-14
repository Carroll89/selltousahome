import { MobileCallBar } from '@/components/MobileCallBar';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function LancasterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MobileCallBar />
      <ExitIntentPopup />
    </>
  );
}
