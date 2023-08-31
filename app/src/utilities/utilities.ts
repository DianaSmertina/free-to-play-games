export function formatDate(stringDate: string) {
    const [year, month, day] = stringDate.split("-");
    return `${day}.${month}.${year}`;
}
