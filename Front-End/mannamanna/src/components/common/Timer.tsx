import React, {useState, useEffect} from 'react';

const TenMinuteTimer = () => {
    const [timeLeft, setTimeLeft] = useState(600); // 10분 = 10 * 60초 = 600초

    // 컴포넌트가 마운트될 때마다 1초씩 감소
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        // 컴포넌트가 언마운트될 때 타이머를 정리
        return() => clearInterval(timer);
    }, []);

    // 남은 시간을 분과 초로 변환하여 문자열로 반환하는 함수
    const formatTime = (time : number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes
            .toString()
            .padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    return (
        <div
            style={{
                // border: '1px solid green',
                width: '100%',
                height: '40%',
                fontSize: '400%',
                color: 'white'
            }}>
            <p
            style={{
                // border: '1px solid green',
                marginTop: '10%'
            }}
            >
                {formatTime(timeLeft)}</p>
        </div>
    );
};

export default TenMinuteTimer;
