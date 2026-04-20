import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function KingOfPrussiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
