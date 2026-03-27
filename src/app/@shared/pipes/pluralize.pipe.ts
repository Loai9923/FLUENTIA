import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'pluralize',
})
export class PluralizePipe implements PipeTransform {
    transform(word: string, count: number): string {
        if (!word) return '';

        if (count === 1) {
            return word;
        } else {
            // Simple rule for adding "s" to make it plural
            return word + 's';
        }
    }
}