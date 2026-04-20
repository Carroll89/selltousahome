import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function YorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
