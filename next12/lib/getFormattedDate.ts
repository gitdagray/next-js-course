export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
}