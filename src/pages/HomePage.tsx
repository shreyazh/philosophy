import { Header } from "../components/Header";
import { Timeline } from "../components/Timeline";
import { usePhilosophyFilter } from "../hooks/usePhilosophyFilter";
import { philosophyData } from "../data/philosophyData";

export function HomePage() {
  const { selectedTimelinePeriod, setSelectedTimelinePeriod } =
    usePhilosophyFilter(philosophyData);

  const handleTimelinePeriodSelect = (periodId: string) => {
    if (selectedTimelinePeriod === periodId) {
      setSelectedTimelinePeriod(null);
    } else {
      setSelectedTimelinePeriod(periodId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <Timeline
          periods={philosophyData}
          selectedPeriod={selectedTimelinePeriod}
          onPeriodSelect={handleTimelinePeriodSelect}
        />
      </main>
    </div>
  );
}
