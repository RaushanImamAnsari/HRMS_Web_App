import SectionCard from '../components/SectionCard';

const employees = [
  {
    name: 'Jordan Lee',
    role: 'Senior Product Manager',
    department: 'Product',
    location: 'New York',
    status: 'Active'
  },
  {
    name: 'Priya Nair',
    role: 'People Operations Lead',
    department: 'HR',
    location: 'London',
    status: 'Active'
  },
  {
    name: 'Marcus Chen',
    role: 'Staff Software Engineer',
    department: 'Engineering',
    location: 'Singapore',
    status: 'On Leave'
  },
  {
    name: 'Amina Yusuf',
    role: 'Finance Controller',
    department: 'Finance',
    location: 'Dubai',
    status: 'Active'
  }
];

const EmployeesPage = () => {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Employee Directory"
        subtitle="Search, filter, and manage employee profiles"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <input
            className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:outline-none lg:w-72"
            placeholder="Search employees, roles, departments"
          />
          <div className="flex gap-2">
            <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600">
              Bulk Import
            </button>
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              Add Employee
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Employee</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.name} className="border-t border-slate-200">
                  <td className="px-4 py-4 font-medium text-slate-900">{employee.name}</td>
                  <td className="px-4 py-4 text-slate-600">{employee.role}</td>
                  <td className="px-4 py-4 text-slate-600">{employee.department}</td>
                  <td className="px-4 py-4 text-slate-600">{employee.location}</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
};

export default EmployeesPage;
