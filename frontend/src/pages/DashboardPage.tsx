import SectionCard from '../components/SectionCard';
import StatCard from '../components/StatCard';

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Employees" value="4,892" trend="+4.3%" />
        <StatCard label="Open Positions" value="38" trend="+12%" />
        <StatCard label="Monthly Payroll" value="$12.4M" trend="On track" />
        <StatCard label="Attendance Rate" value="96.8%" trend="+0.8%" />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <SectionCard
          title="Recruitment Pipeline"
          subtitle="Active candidates across hiring stages"
        >
          <div className="space-y-4">
            {[
              { stage: 'Applied', count: 182 },
              { stage: 'Screening', count: 74 },
              { stage: 'Interview', count: 39 },
              { stage: 'Offer', count: 12 }
            ].map((item) => (
              <div key={item.stage} className="flex items-center justify-between">
                <p className="text-sm text-slate-600">{item.stage}</p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard
          title="Department Distribution"
          subtitle="Top headcount departments"
        >
          <div className="space-y-4">
            {[
              { dept: 'Engineering', count: 1480 },
              { dept: 'Operations', count: 1032 },
              { dept: 'Sales', count: 860 },
              { dept: 'Customer Success', count: 512 }
            ].map((item) => (
              <div key={item.dept} className="flex items-center justify-between">
                <p className="text-sm text-slate-600">{item.dept}</p>
                <span className="text-sm font-semibold text-slate-900">{item.count}</span>
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard title="Action Center" subtitle="Priority workflows">
          <div className="space-y-4">
            {[
              'Approve 6 leave requests',
              'Review payroll anomalies',
              'Schedule interviews for 3 roles',
              'Publish quarterly HR newsletter'
            ].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <p className="text-sm text-slate-600">{item}</p>
                <button className="text-xs font-semibold text-accent">Open</button>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Attendance Trends" subtitle="Month-to-date summary">
          <div className="flex flex-col gap-4 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>On-time check-ins</span>
              <span className="font-semibold text-slate-900">92%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Remote work ratio</span>
              <span className="font-semibold text-slate-900">28%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Overtime hours</span>
              <span className="font-semibold text-slate-900">1,240 hrs</span>
            </div>
            <div className="mt-4 h-32 rounded-xl bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 opacity-90"></div>
          </div>
        </SectionCard>
        <SectionCard title="Payroll Snapshot" subtitle="Next cycle readiness">
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Payroll approvals</span>
              <span className="font-semibold text-emerald-600">94% complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Pending bonuses</span>
              <span className="font-semibold text-slate-900">$410K</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax compliance</span>
              <span className="font-semibold text-emerald-600">On track</span>
            </div>
            <div className="rounded-xl border border-dashed border-slate-200 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Next Payroll Run</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">June 30, 2024</p>
            </div>
          </div>
        </SectionCard>
      </section>
    </div>
  );
};

export default DashboardPage;
