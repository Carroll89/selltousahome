interface ComparisonRow {
  label: string;
  cashBuyer: string;
  traditional: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  cashBuyerHeader?: string;
  traditionalHeader?: string;
}

const DEFAULT_ROWS: ComparisonRow[] = [
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-90 days' },
  { label: 'Repairs required', cashBuyer: 'None — buy as-is', traditional: 'Usually required' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$12,000 avg)' },
  { label: 'Closing costs', cashBuyer: 'We pay everything', traditional: 'Seller pays ~2-3%' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed', traditional: '15-20% fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV (after costs)' },
];

export function ComparisonTable({
  rows = DEFAULT_ROWS,
  cashBuyerHeader = 'USA Home Buyers (Cash)',
  traditionalHeader = 'Traditional Agent',
}: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      {/* Desktop table */}
      <table className="hidden md:table w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-3 px-4 text-left text-gray-600 font-semibold w-1/3"></th>
            <th className="py-3 px-4 text-center text-white font-semibold bg-brand-primary">
              {cashBuyerHeader}
            </th>
            <th className="py-3 px-4 text-center text-gray-600 font-semibold">
              {traditionalHeader}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="py-3 px-4 font-medium text-brand-dark">{row.label}</td>
              <td className="py-3 px-4 text-center text-brand-primary font-semibold bg-blue-50">
                {row.cashBuyer}
              </td>
              <td className="py-3 px-4 text-center text-gray-600">{row.traditional}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile stacked */}
      <div className="md:hidden">
        {rows.map((row, i) => (
          <div key={i} className={`p-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}>
            <p className="font-semibold text-brand-dark mb-2">{row.label}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-blue-50 rounded p-2 text-center">
                <p className="text-xs text-blue-600 font-medium mb-1">{cashBuyerHeader}</p>
                <p className="text-brand-primary font-semibold">{row.cashBuyer}</p>
              </div>
              <div className="bg-gray-100 rounded p-2 text-center">
                <p className="text-xs text-gray-500 font-medium mb-1">{traditionalHeader}</p>
                <p className="text-gray-600">{row.traditional}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
