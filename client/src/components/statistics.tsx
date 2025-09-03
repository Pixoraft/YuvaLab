const Statistics = () => {
  const stats = [
    { id: "patients", value: "10,000+", label: "Happy Patients" },
    { id: "tests", value: "500+", label: "Tests Available" },
    { id: "accuracy", value: "99.9%", label: "Accuracy Rate" },
    { id: "delivery", value: "4hr", label: "Report Delivery" },
  ];

  return (
    <section className="medical-gradient py-16" data-testid="statistics-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.id} className="animate-counter" data-testid={`stat-${stat.id}`}>
              <div className="text-4xl lg:text-5xl font-bold mb-2" data-testid={`stat-value-${stat.id}`}>
                {stat.value}
              </div>
              <div className="text-blue-100 text-lg" data-testid={`stat-label-${stat.id}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
