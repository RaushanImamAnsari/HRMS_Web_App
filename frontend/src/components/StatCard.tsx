interface StatCardProps {
  label: string;
  value: string;
  trend: string;
}

const StatCard = ({ label, value, trend }: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          {trend}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
