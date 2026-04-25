/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { articleSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/what-happens-after-accepting-cash-offer`;

export const metadata: Metadata = {
  title: 'What Happens After You Accept a Cash Offer?',
  description:
    'You signed. Now what? A plain-English walkthrough of every step from accepted offer to cash in hand — title search, closing day, and what to expect.',
  alternates: { canonical: pageUrl },
};

export default function WhatHappensAfterCashOfferPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('What Happens After You Accept a Cash Offer? Step-by-Step', pageUrl, '2026-04-23'),
      ]} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            Educational · April 23, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            What Happens After You Accept a Cash Offer? Step-by-Step
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Most sellers spend weeks deciding whether to accept a cash offer. Then they sign — and realize they have no idea what comes next. Here&apos;s exactly what happens, in order, from the moment you say yes to the moment you have money in your account.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          {/* TL;DR box */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
            <p className="font-semibold text-brand-dark mb-1 text-sm uppercase tracking-wide">Quick version</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              After you accept: purchase agreement gets signed → title company opens escrow → title search runs (5–10 business days) → any title issues get resolved → closing is scheduled → you sign documents at the title company → mortgage gets paid off → remaining proceeds wire to your account. The whole thing takes 7–21 days in most cash transactions. Here&apos;s what each step actually involves.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step 1: The Purchase Agreement (Day 1)</h2>
          <p className="text-gray-700 mb-4">
            When you verbally agree to a cash offer, the buyer sends you a written purchase agreement — a legally binding contract that sets out the sale price, closing date, earnest money amount, and any contingencies. Read it before you sign. The key things to look for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>As-is clause.</strong> Most cash offers include one. This means the buyer accepts the property in its current condition and won&apos;t ask you to make repairs after the fact. If the purchase agreement doesn&apos;t say "as-is," ask why not.</li>
            <li><strong>Contingencies.</strong> A legitimate cash offer should have minimal contingencies — perhaps a title contingency (the deal can close only if the title comes back clean) but no financing contingency, since there&apos;s no lender involved. If an offer labeled "cash" has a financing contingency, it&apos;s not a true cash offer.</li>
            <li><strong>Closing date.</strong> This is a target date, not always a guarantee — it can shift if the title search turns up something that needs to be resolved. But a reputable buyer will give you a realistic target and communicate early if anything changes.</li>
            <li><strong>Earnest money.</strong> Cash buyers typically put $500–$2,500 in escrow as earnest money, held by the title company. This shows they&apos;re serious. It gets credited toward the purchase price at closing or returned to you if the buyer defaults.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Once both parties sign, the purchase agreement is executed. The buyer sends a copy to the title company to open escrow.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step 2: Title Is Opened (Day 1–2)</h2>
          <p className="text-gray-700 mb-4">
            The title company (sometimes called a settlement company or escrow company, depending on your state) receives the purchase agreement and opens a file. They&apos;ll contact you to collect basic information: your legal name as it appears on the deed, contact details, and your preferred method to receive proceeds at closing.
          </p>
          <p className="text-gray-700 mb-4">
            In most states, the buyer selects the title company. In some states — notably parts of the South — real estate attorneys handle closing instead of title companies. Either way, you are not required to use a specific title company. If you have a preference, ask. Most cash buyers will accommodate it.
          </p>
          <p className="text-gray-700 mb-4">
            According to the Consumer Financial Protection Bureau (CFPB), title companies serve two critical functions in a real estate closing: they conduct a title search to confirm you have the legal right to sell the property, and they issue title insurance to protect the buyer (and optionally you) against any claims that surface after the sale. Both happen during the title period.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step 3: The Title Search (Days 2–10)</h2>
          <p className="text-gray-700 mb-4">
            The title search is the part most sellers don&apos;t fully understand — and it&apos;s where timelines can either hold or slip.
          </p>
          <p className="text-gray-700 mb-4">
            A title examiner searches public records — typically going back 40–60 years — to confirm a clean chain of ownership on the property. They&apos;re looking for anything that could affect your ability to transfer clear title to the buyer:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Mortgages and liens.</strong> Any outstanding mortgage, HELOC, mechanic&apos;s lien, tax lien, or judgment lien against the property or against you personally that has attached to the property. These don&apos;t prevent the sale — they get paid off at closing from the proceeds — but the title company needs to know what they are so they can request payoff amounts.</li>
            <li><strong>Easements and encroachments.</strong> Rights others may have to use part of the property (a utility easement, shared driveway, etc.). These typically don&apos;t block a sale but get disclosed.</li>
            <li><strong>Unpaid property taxes.</strong> Delinquent taxes show up in the title search. They get paid from proceeds at closing.</li>
            <li><strong>Estate issues.</strong> If you inherited the property, the title company confirms that the estate was properly administered and you have legal authority to sell. This is where probate matters show up.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            A straightforward title search on a property with a clean chain of ownership takes 5–7 business days. Older properties, properties that have passed through multiple estates, or properties with prior judgment liens can take longer. If something turns up, the title company&apos;s job is to help resolve it — not to kill the deal.
          </p>
          <p className="text-gray-700 mb-4">
            Most title issues that come up are resolvable. A forgotten second mortgage from 20 years ago? Gets paid off from proceeds. A mechanic&apos;s lien from a contractor dispute? Either paid off or bonded around. A gap in the chain of ownership? Title company orders a quitclaim deed or an affidavit to cure it. These slow the timeline; they rarely kill a legitimate cash sale.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step 4: The Walkthrough (Optional — Usually Days 3–7)</h2>
          <p className="text-gray-700 mb-4">
            This step varies by buyer. Some cash buyers do a quick informational walkthrough before or shortly after signing the purchase agreement — not an inspection for the purpose of negotiating repairs, but a visual confirmation that the property is what they expected from photos and their initial visit. Because the purchase is as-is, finding a leaky faucet during the walkthrough doesn&apos;t change the purchase price.
          </p>
          <p className="text-gray-700 mb-4">
            Other cash buyers skip the walkthrough entirely if they&apos;ve already toured the property. Ask what to expect upfront so you&apos;re not caught off guard.
          </p>
          <p className="text-gray-700 mb-4">
            What a cash buyer&apos;s walkthrough is <em>not</em>: it is not a licensed home inspection with a 50-page report and a list of repair demands. If a buyer describes their post-signing walkthrough as an "inspection" and then sends you a repair request based on it — and your purchase agreement says as-is — they are violating the terms of the agreement. Push back.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step 5: Clear to Close (Days 7–14)</h2>
          <p className="text-gray-700 mb-4">
            Once the title search comes back clean and the title company has confirmed payoff amounts for any mortgages or liens, they issue what&apos;s called a "clear to close" — confirmation that the transaction is ready to proceed to settlement. This triggers scheduling for closing day.
          </p>
          <p className="text-gray-700 mb-4">
            At this point, the title company prepares the closing disclosure — a document that itemizes every dollar flowing through the transaction: the sale price, payoff amounts, closing costs (which the buyer typically covers in a cash sale), proration of property taxes, and your net proceeds. According to the CFPB, sellers and buyers are entitled to review the closing disclosure before signing. Read it. Confirm the payoff amounts match what you expected. If something looks off, ask before you sit down at the closing table.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step 6: Closing Day</h2>
          <p className="text-gray-700 mb-4">
            Closing usually happens at the title company&apos;s office. You&apos;ll sit down with a closing agent (the buyer may or may not be present — cash buyers often sign separately), review the closing disclosure one more time, and sign the deed transferring ownership plus a handful of other documents.
          </p>
          <p className="text-gray-700 mb-4">
            What you&apos;ll sign:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>The deed.</strong> The core document — transfers legal ownership from you to the buyer. In most states this is a warranty deed or a special warranty deed.</li>
            <li><strong>Seller&apos;s affidavit / seller&apos;s certification.</strong> You certify that you have the right to sell, that there are no undisclosed liens or claims, and that nothing has materially changed since the purchase agreement was signed.</li>
            <li><strong>Closing disclosure / settlement statement.</strong> Your formal record of the transaction — what came in, what went out, what you received.</li>
            <li><strong>State-specific documents.</strong> Transfer tax declarations, disclosure forms, and similar. Varies by state.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The whole signing appointment typically takes 20–45 minutes. Bring a government-issued photo ID.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step 7: Getting Paid</h2>
          <p className="text-gray-700 mb-4">
            After documents are signed and recorded with the county, the title company disburses funds. The mortgage lender (if any) gets its payoff wire. Any lienholders get paid. Transfer taxes get remitted. Then the net proceeds come to you.
          </p>
          <p className="text-gray-700 mb-4">
            You have two options for receiving your proceeds:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Wire transfer.</strong> The title company wires the funds directly to your bank account. Most cash-sale proceeds arrive the same day closing documents are recorded — sometimes within hours of signing, sometimes the following morning. Wire instructions (your bank routing number and account number) are collected by the title company before closing day.</li>
            <li><strong>Check.</strong> Some title companies issue a cashier&apos;s check at the closing table. You walk out with it. Takes a business day to clear in most cases.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Wire transfer is the cleaner option for large amounts — a cashier&apos;s check over $10,000 can trigger additional bank holds on deposit. Most sellers receiving significant proceeds opt for wire.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">After Closing: What to Keep</h2>
          <p className="text-gray-700 mb-4">
            Once closing is done, hold onto:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>A copy of the final closing disclosure / HUD-1 settlement statement — you&apos;ll need this for your taxes. It shows your net proceeds, which forms the basis for calculating any capital gain.</li>
            <li>A copy of the deed as recorded (the title company will mail you one, or you can pull it from county records).</li>
            <li>The payoff confirmation letters from any lenders whose mortgages were paid off — confirms those liens were extinguished.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            On the tax side: if you&apos;ve lived in the home as your primary residence for at least 2 of the last 5 years, the IRS exclusion under Section 121 shields up to $250,000 of capital gain from federal taxes ($500,000 if married filing jointly). If the property was inherited, the step-up in basis typically eliminates most or all of the gain regardless. Either way, the closing disclosure is the document your accountant needs.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Realistic Timeline</h2>
          <p className="text-gray-700 mb-4">
            Most straightforward cash sales — clean title, no contested liens, no estate complications — close within 10–14 days of the signed purchase agreement. The outer bound for a complicated title situation is 21–30 days. If a cash buyer is telling you they need 45+ days to close, ask what&apos;s driving that timeline. It&apos;s not the norm.
          </p>
          <p className="text-gray-700 mb-4">
            Things that slow closings: title issues that require curative work (getting a missing heir to sign off, resolving a judgment lien, obtaining a release from a defunct lender), properties in active probate where the court has to approve the sale, properties with multiple owners who need to sign and are geographically scattered, or seller scheduling constraints. None of these are insurmountable — they just take longer.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers works with sellers in Pennsylvania, Illinois, Ohio, Wisconsin, New York, New England, and across our market footprint. Written offer within 24 hours of seeing the property. Typical close in 7–14 days. Call 888-274-5006 or fill out the form below — we&apos;ll walk you through exactly where you&apos;d stand.
          </p>

        </div>

        <div className="mt-10 border-t pt-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Related Resources</h2>
          <ul className="text-sm space-y-2">
            <li><Link href="/resources/how-the-process-works" className="text-brand-primary hover:underline">How the Process Works — Full Overview →</Link></li>
            <li><Link href="/resources/how-fast-can-i-sell-for-cash" className="text-brand-primary hover:underline">How Fast Can I Sell for Cash? →</Link></li>
            <li><Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">Cash Offer vs. Listing: The Real Math →</Link></li>
            <li><Link href="/resources/are-cash-home-buyers-legit" className="text-brand-primary hover:underline">Are Cash Home Buyers Legit? →</Link></li>
            <li><Link href="/blog/cash-buyer-vs-realtor-pennsylvania" className="text-brand-primary hover:underline">Cash Buyer vs. Realtor in PA →</Link></li>
            <li><Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your House in Harrisburg PA →</Link></li>
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Sell Your House in Youngstown OH →</Link></li>
            <li><Link href="/markets/springfield-il" className="text-brand-primary hover:underline">Sell Your House in Springfield IL →</Link></li>
            <li><Link href="/markets/harrisburg-pa/inherited-property" className="text-brand-primary hover:underline">Inherited Property — What Changes at Closing →</Link></li>
            <li><Link href="/markets/harrisburg-pa/foreclosure" className="text-brand-primary hover:underline">Foreclosure Situations — Timing a Cash Close →</Link></li>
            <li><Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide →</Link></li>
          </ul>
        </div>

        <div className="mt-10">
          <CashOfferForm
            variant="footer"
            headline="Ready to See What You'd Walk Away With?"
            sourcePage="/blog/what-happens-after-accepting-cash-offer"
          />
        </div>
      </article>
    </>
  );
}
