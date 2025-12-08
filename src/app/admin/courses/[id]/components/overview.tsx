export function CourseOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Basic Info */}
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-500 uppercase">Course ID</p>
              <p className="text-sm font-medium text-slate-900 mt-1">COURSE-001</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Category</p>
              <p className="text-sm font-medium text-slate-900 mt-1">Development</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Level</p>
              <p className="text-sm font-medium text-slate-900 mt-1">Advanced</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Price</p>
              <p className="text-sm font-medium text-slate-900 mt-1">$99.99</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Course Statistics</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-500 uppercase">Total Students</p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">234</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Total Lessons</p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">12</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Completion Rate</p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">78%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Course Description</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Master React hooks, state management, and performance optimization. This comprehensive course covers everything you need to become a professional React developer. Learn best practices, design patterns, and real-world applications.
        </p>
      </div>
    </div>
  );
}
