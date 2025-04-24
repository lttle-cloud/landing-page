const cls = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
};

const isOverflowing = (element: HTMLElement | null) => {
    if (!element) return false;
    return element.scrollWidth > element.clientWidth;
};

export { cls, isOverflowing };
