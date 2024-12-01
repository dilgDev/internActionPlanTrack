import { useState } from "react";
//router
import { Outlet } from "react-router";
import "./App.css";

import { Button } from "./components/ui/button";

//hooks
import { useTheme } from "./hooks/useTheme";

//layout
import Header from "./layout/Header";
import { Toaster } from "./components/ui/toaster";
function App() {
  const [count, setCount] = useState(0);
  // const { theme, setTheme } = useTheme();
  return (
    <div className=" w-full h-screen bg-red-400">
      <div className="w-full h-[10%]">
        <Header />
      </div>

      <div className="w-full h-[90%] bg-green-300">
        <Outlet />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
