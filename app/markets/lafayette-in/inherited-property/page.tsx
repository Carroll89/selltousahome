import { LafayetteSituationPage, metadataForSituation } from '../shared';

export const revalidate = 86400;
export const metadata = metadataForSituation('inherited-property');

export default function Page() {
  return <LafayetteSituationPage slug="inherited-property" />;
}

