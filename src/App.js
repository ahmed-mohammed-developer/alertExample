import './App.css'; // استيراد ملفات CSS للتنسيق
import AlertApp from './component/AlertApp/AlertApp'; // استيراد مكون AlertApp
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap

function App() {
  return (
    <div className="App">
      <AlertApp /> {/* عرض مكون AlertApp في الصفحة */}
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
