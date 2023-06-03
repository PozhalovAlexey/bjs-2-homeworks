class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!callback || !time) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(a => a.time !== time)
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString('ru-Ru', {
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        const checkAlarms = () => {
            this.alarmCollection.forEach(a => {
                if (a.time === this.getCurrentFormattedTime() && a.canCall) {
                    a.canCall = false;
                    a.callback();
                } else if (a.time !== this.getCurrentFormattedTime()) {
                    a.canCall = true;
                }
            })
        }
        checkAlarms();
        this.intervalId = setInterval(checkAlarms, 1000)

    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(a => a.canCall = true)
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
