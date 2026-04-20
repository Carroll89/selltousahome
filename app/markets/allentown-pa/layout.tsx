import { ExitIntentPopup } from '@/components/ExitIntentPopup';

export default function AllentownLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
