import SectionCard from '../components/SectionCard';

const PerformancePage = () => {
  return (
    <div className="space-y-6">
      <SectionCard title="Performance Reviews" subtitle="Quarterly appraisals and KPIs">
        <div className="space-y-4">
          {[
            { name: 'Zoe Adams', status: 'Manager Review', score: '4.6/5' },
            { name: 'Kofi Mensah', status: 'Self Assessment', score: 'Pending' },
            { name: 'Isabella Rossi', status: 'HR Approval', score: '4.9/5' }
          ].map((review) => (
            <div key={review.name} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
              <div>
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="text-xs text-slate-500">{review.status}</p>
              </div>
              <div className="text-sm font-semibold text-slate-900">{review.score}</div>
            </div>
          ))}
        </div>
      </SectionCard>
      <SectionCard title="Succession Planning" subtitle="High potential talent">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase text-slate-400">Leadership Bench</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">38 candidates</p>
            <p className="mt-1 text-sm text-slate-500">Across 8 departments</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase text-slate-400">Promotion Ready</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">14 employees</p>
            <p className="mt-1 text-sm text-slate-500">Pending final review</p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default PerformancePage;
