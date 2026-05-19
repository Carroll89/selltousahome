import { LafayetteSituationPage, metadataForSituation } from '../shared';

export const revalidate = 86400;
export const metadata = metadataForSituation('tenant-occupied');

export default function Page() {
  return <LafayetteSituationPage slug="tenant-occupied" />;
}

