import SectionCard from '../components/SectionCard';

const stages = [
  {
    title: 'Applied',
    items: ['Elaine Porter', 'Carlos Ramirez', 'Fatima Zaman']
  },
  {
    title: 'Screening',
    items: ['Haruto Sato', 'Grace Miller']
  },
  {
    title: 'Interview',
    items: ['Ravi Patel', 'Lucia Gomez']
  },
  {
    title: 'Offer',
    items: ['Noah Johnson']
  }
];

const RecruitmentPage = () => {
  return (
    <div className="space-y-6">
      <SectionCard title="Recruitment Pipeline" subtitle="ATS overview and candidate flow">
        <div className="grid gap-4 lg:grid-cols-4">
          {stages.map((stage) => (
            <div key={stage.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">{stage.title}</p>
              <div className="mt-3 space-y-2">
                {stage.items.map((item) => (
                  <div key={item} className="rounded-lg bg-white px-3 py-2 text-sm text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default RecruitmentPage;
