
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsOverview from "@/components/dashboard/StatsOverview";
import LearningPathsSection from "@/components/dashboard/LearningPathsSection";
import UpcomingMentorships from "@/components/dashboard/UpcomingMentorships";
import RecommendedMentors from "@/components/dashboard/RecommendedMentors";

const Dashboard = () => {
  // Mock data definitions
  const upcomingMentorships = [
    {
      id: "1",
      title: "JavaScript Fundamentals",
      mentorName: "Alex Johnson",
      date: "Today",
      time: "3:00 PM",
      duration: "45 min",
    },
    {
      id: "2",
      title: "React Advanced Concepts",
      mentorName: "Sarah Smith",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "60 min",
    },
  ];

  const recommendedMentors = [
    {
      id: "1",
      name: "Dr. Emily Chen",
      title: "Data Science Expert | PhD Stanford",
      rating: 4.9,
      reviews: 124,
      skills: ["Machine Learning", "Python", "Data Analysis", "Statistics"],
      hourlyRate: 75,
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      title: "Senior Software Engineer | Google",
      rating: 4.8,
      reviews: 87,
      skills: ["JavaScript", "React", "Node.js", "System Design"],
      hourlyRate: 65,
    },
  ];

  const learningPaths = [
    {
      id: "1",
      title: "Learn Advanced Personal Finance",
      progress: 15,
      completedModules: 0,
      totalModules: 4,
    },
    {
      id: "2",
      title: "Political Sciences & Leadership",
      progress: 0,
      completedModules: 0,
      totalModules: 3,
    },
    {
      id: "3",
      title: "Filmmaking & Videoediting",
      progress: 4,
      completedModules: 0,
      totalModules: 3,
    },
    {
      id: "4",
      title: "Programming & Coding",
      progress: 7,
      completedModules: 0,
      totalModules: 3,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="px-6 py-8">
          <DashboardHeader />
          <StatsOverview />
          <LearningPathsSection learningPaths={learningPaths} />
          <UpcomingMentorships sessions={upcomingMentorships} />
          <RecommendedMentors mentors={recommendedMentors} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
