import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function ErieLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
