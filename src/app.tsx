import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  console.log("🎯 App.tsx - Rendering App");
  
  // 检查是否在iframe中
  if (window.self !== window.top) {
    return null; // 如果在iframe中，返回null
  }

  console.log("📱 App.tsx - Rendering RouterProvider");
  return <RouterProvider router={router} />;
}

export default App;
