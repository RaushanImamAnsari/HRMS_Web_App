import SectionCard from '../components/SectionCard';

const PayrollPage = () => {
  return (
    <div className="space-y-6">
      <SectionCard title="Payroll Dashboard" subtitle="Monthly payroll processing overview">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase text-slate-400">Next Run</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">June 30, 2024</p>
            <p className="mt-1 text-sm text-slate-500">4,892 employees</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase text-slate-400">Approvals</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">94% complete</p>
            <p className="mt-1 text-sm text-slate-500">24 items remaining</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase text-slate-400">Bonuses</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">$410K</p>
            <p className="mt-1 text-sm text-slate-500">Quarterly incentives</p>
          </div>
        </div>
      </SectionCard>
      <SectionCard title="Payroll History" subtitle="Recent processing cycles">
        <div className="space-y-3 text-sm text-slate-600">
          {[
            { month: 'May 2024', status: 'Completed', amount: '$12.1M' },
            { month: 'April 2024', status: 'Completed', amount: '$12.0M' },
            { month: 'March 2024', status: 'Completed', amount: '$11.9M' }
          ].map((item) => (
            <div key={item.month} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
              <div>
                <p className="font-semibold text-slate-900">{item.month}</p>
                <p className="text-xs text-slate-400">{item.status}</p>
              </div>
              <p className="text-sm font-semibold text-slate-900">{item.amount}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default PayrollPage;
