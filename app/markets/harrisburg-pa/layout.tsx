import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function HarrisburgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
