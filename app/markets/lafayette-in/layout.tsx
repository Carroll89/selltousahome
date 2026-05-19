import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function LafayetteMarketLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}

