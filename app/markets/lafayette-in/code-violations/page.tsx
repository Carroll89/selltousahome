import { LafayetteSituationPage, metadataForSituation } from '../shared';

export const revalidate = 86400;
export const metadata = metadataForSituation('code-violations');

export default function Page() {
  return <LafayetteSituationPage slug="code-violations" />;
}

