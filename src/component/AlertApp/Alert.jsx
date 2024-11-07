import React, { useEffect, useState } from 'react';
import Button from '../Button';

export default function Alert({ type, message, delay = false, delayTime = 3000 }) {
  const [showAlert, setShowAlert] = useState(true);

  function handleCloseAlert(e) {
    e.target.parentElement.parentElement.classList.add("fadeAlert"); // إضافة كلاس "fadeAlert" للتنبيه
    setTimeout(() => {
      setShowAlert(false); // إخفاء التنبيه بعد مرور الوقت
    }, 300);    
  }

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        setShowAlert(false); // إخفاء التنبيه بعد مرور الوقت المحدد
      }, delayTime);
    }
  }, [delay, delayTime]);

  return (
    <div>
      {showAlert && (
        <div className={`alert alert-${type}`}>
          <div className="alert-close">
            <span className='me-2'>{message}</span>
            <Button btnClass={"close-icon"} text={"X"} onClick={handleCloseAlert} />
          </div>
        </div>
      )}
    </div>
  );
}
