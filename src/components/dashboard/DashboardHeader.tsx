
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";


const DashboardHeader = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  
  const handleLogout = async () => {
    await signOut();  
    navigate("/");    
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your learning journey</p>
      </div>
      <div className="mt-4 md:mt-0 space-x-2">
          <Button className="bg-eduwealth-primary hover:bg-eduwealth-primary/90" onClick={handleLogout}>
              Logout
          </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
