import { LafayetteSituationPage, metadataForSituation } from '../shared';

export const revalidate = 86400;
export const metadata = metadataForSituation('divorce-sale');

export default function Page() {
  return <LafayetteSituationPage slug="divorce-sale" />;
}

