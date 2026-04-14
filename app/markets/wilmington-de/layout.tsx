import { MobileCallBar } from '@/components/MobileCallBar';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function WilmingtonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MobileCallBar />
      <ExitIntentPopup />
    </>
  );
}
