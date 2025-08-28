export function* genNumbersRange(start: number, end: number, step = 1) {
    for (let current = start; current <= end; current += step) yield current;
}
