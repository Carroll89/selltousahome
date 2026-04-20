import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function YoungstownLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
