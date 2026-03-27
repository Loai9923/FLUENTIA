import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sortArray',
})
export class SortArrayPipe implements PipeTransform {
    transform(array: { [key: string]: { [key: string]: unknown } }[], property: string, order: 'asc' | 'desc' = 'asc'): { [key: string]: unknown }[] {
        if (!array) return [];

        return array.sort((a, b) => {
            if (order === 'asc') {
                return a[property] < b[property] ? -1 : 1;
            } else {
                return b[property] < a[property] ? -1 : 1;
            }
        });
    }
}