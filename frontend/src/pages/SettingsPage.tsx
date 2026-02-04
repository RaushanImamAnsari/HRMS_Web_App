import SectionCard from '../components/SectionCard';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <SectionCard title="Organization Settings" subtitle="Configure departments, branches, and roles">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-900">Departments</p>
            <p className="mt-2 text-sm text-slate-600">26 departments · 11 regions</p>
            <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              Manage Departments
            </button>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-900">Access Control</p>
            <p className="mt-2 text-sm text-slate-600">4 system roles · 128 permissions</p>
            <button className="mt-4 rounded-lg border border-slate-200 px-4 py-2 text-xs text-slate-600">
              Review Roles
            </button>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default SettingsPage;
