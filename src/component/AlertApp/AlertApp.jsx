import './alertApp.css'; // استيراد ملف CSS الخاص بالتنسيقات
import React from 'react';
import Title from '../Title'; // استيراد مكون Title
import Alert from './Alert'; // استيراد مكون Alert

export default function AlertApp() {
  return (
    <div className='container text-center'> {/* تحديد تنسيق العنصر */}
      <Title text={"Alert App"} className={"mt-5 mb-5"} /> {/* عرض العنوان */}
      <Alert type={"primary"} message={'A simple primary alert—check it out!'} delay={true} delayTime={2000} /> {/* تنبيه بلون primary */}
      <Alert type={"secondary"} message={'A simple secondary alert—check it out!'} delay={true} delayTime={5000} /> {/* تنبيه بلون secondary */}
      <Alert type={"success"} message={'A simple success alert—check it out!'} delay={true} delayTime={6000} /> {/* تنبيه بلون success */}
    </div>
  )
}
