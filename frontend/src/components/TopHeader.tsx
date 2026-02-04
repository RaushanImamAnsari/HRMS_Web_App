const TopHeader = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <p className="text-sm text-slate-500">Welcome back,</p>
        <h1 className="text-xl font-semibold text-slate-900">Enterprise HR Command Center</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden items-center rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 lg:flex">
          Last sync: 3 minutes ago
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-slate-300">
          Create Report
        </button>
        <div className="flex items-center gap-3 rounded-full bg-slate-900 px-4 py-2 text-white">
          <div className="h-8 w-8 rounded-full bg-white/20"></div>
          <div className="text-sm">
            <p className="font-semibold">Avery Brown</p>
            <p className="text-xs text-white/70">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
