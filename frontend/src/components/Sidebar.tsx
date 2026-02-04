import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Employees', path: '/employees' },
  { label: 'Attendance', path: '/attendance' },
  { label: 'Payroll', path: '/payroll' },
  { label: 'Recruitment', path: '/recruitment' },
  { label: 'Performance', path: '/performance' },
  { label: 'Settings', path: '/settings' }
];

const Sidebar = () => {
  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="flex h-20 items-center px-6 text-lg font-semibold text-slate-900">
        HRMS Enterprise
      </div>
      <nav className="flex-1 space-y-2 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-slate-200 px-6 py-6 text-xs text-slate-500">
        © 2024 HRMS Platform
      </div>
    </aside>
  );
};

export default Sidebar;
