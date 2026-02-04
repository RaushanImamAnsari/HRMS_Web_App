import SectionCard from '../components/SectionCard';

const AttendancePage = () => {
  return (
    <div className="space-y-6">
      <SectionCard title="Attendance Calendar" subtitle="Track daily check-ins and leave usage">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase text-slate-400">Today</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">94% present</p>
            <p className="mt-1 text-sm text-slate-500">24 employees remote · 12 on leave</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase text-slate-400">Leave Requests</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">18 pending</p>
            <div className="mt-4 flex gap-2">
              <button className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                Review Requests
              </button>
              <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs text-slate-600">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </SectionCard>
      <SectionCard title="Monthly Attendance" subtitle="Highlights and anomalies">
        <div className="space-y-4 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Highest attendance branch</span>
            <span className="font-semibold text-slate-900">Toronto (98%)</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Overtime alerts</span>
            <span className="font-semibold text-slate-900">6 employees</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Leave balance risk</span>
            <span className="font-semibold text-amber-600">12 employees</span>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default AttendancePage;
