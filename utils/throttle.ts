function throttle(fn: Function, delay: number = 300) {
    let flag = false;

    return () => {
        if (flag === true) return;

        fn();
        flag = true;
        setTimeout(() => (flag = false), delay);
    };
};

export default throttle;
