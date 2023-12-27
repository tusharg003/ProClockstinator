import { useEffect, useState } from 'react';

function Clock() {
  const roundToNearestQuarterHour = (date) => {
    let minutes = date.getMinutes();
    let hour = date.getHours();

    if (minutes >= 0 && minutes <= 14) {
      minutes = 15;
    } else if (minutes >= 16 && minutes <= 29) {
      minutes = 30;
    } else if (minutes >= 31 && minutes <= 44) {
      minutes = 45;
    } else if (minutes >= 46 && minutes <= 59) {
      minutes = 0;
      hour += 1; // Move to the next hour
    }

    return { hour, minutes };
  };

  const [currentTime, setCurrentTime] = useState(new Date());
  const [normalClock, setNormalClock] = useState(true);
  const [isRedBackground, setIsRedBackground] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Toggle background color each second
    }, 1000);
    const backgroundInterval = setInterval(() => {
      setIsRedBackground((prev) => !prev); // Toggle background color every 0.5 seconds
    }, 900); // Change background color every 0.5 seconds

    return () => {
      clearInterval(interval);
      clearInterval(backgroundInterval);
    };
  }, []);

  const normalTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const roundedTime = roundToNearestQuarterHour(currentTime);
  const { hour, minutes } = roundedTime;
  const roundedTimeString = `${hour}:${minutes
    .toString()
    .padStart(2, '0')}:00 `;

  return (
    <div
      className={` flex flex-col w-screen h-screen items-center justify-center ${
        normalClock ? 'bg-black' : isRedBackground ? ' bg-black' : 'bg-black'
      }`}>
      <span
        className='
      font-inter text-white text-[2.5rem] sm:text-[5rem] md:text-[7rem] font-extrabold '>
        {normalClock ? normalTime : roundedTimeString}
      </span>
      {!false && (
        <div className='animate-custom-pulse rounded-full bg-red-600 h-10 w-10 mb-[5rem]'></div>
      )}
      <button
        className='bg-white px-2 py-1 mt-5 rounded-lg  font-extrabold font-inter '
        onClick={() => setNormalClock(!normalClock)}>
        FLIP
      </button>
    </div>
  );
}

export default Clock;
