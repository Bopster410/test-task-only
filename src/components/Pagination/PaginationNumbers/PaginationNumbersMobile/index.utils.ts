export function calculateRotation(
    currentPage: number,
    minPage: number,
    maxPage: number,
    angle: number
) {
    const currentIndex = currentPage - minPage;
    const currentAngle = (currentIndex * 360) / (maxPage - minPage + 1);
    return angle - currentAngle;
}
